import type {ChangeEvent, ReactElement} from 'react';
import type {ConnectedProps} from "react-redux";
import type {RootState} from "../../redux/reducers/typings";

import React, {useEffect, useState} from 'react';
import {Button} from "@material-ui/core";
import {connect} from "react-redux";
import {requestGamesList} from "../../redux/actions/games";
import {selectGamesFilters} from "../../redux/selectors/games";
import CommonTextField from "../form/CommonTextField";
import CommonCheckboxField from "../form/CommonCheckboxField";
import './style.scss';

type PropsFromRedux = ConnectedProps<typeof connector>;
const GameListFilterForm = ({filters, requestGamesList}: PropsFromRedux): ReactElement => {
  const [search, setSearch] = useState('');
  const [searchPrecise, setSearchPrecise] = useState(false);
  const [releaseDateFrom, setReleaseDateFrom] = useState(filters.dates ? filters.dates.split(',')[0] : '');
  const [releaseDateTo, setReleaseDateTo] = useState(filters.dates ? filters.dates.split(',')[1] : '');

  useEffect(() => {
    if (filters.dates) {
      setReleaseDateFrom(filters.dates.split(',')[0]);
      setReleaseDateTo(filters.dates.split(',')[1])
    }
  }, [filters.dates])

  function sendFilterRequest(): void {
    requestGamesList({
      ...filters,
      search,
      search_precise: searchPrecise,
      dates: `${releaseDateFrom},${releaseDateTo}`,
      page: 1
    })
  }

  return (
    <div className="filters-wrapper">
      <CommonTextField
        id="search"
        label="Search:"
        value={search}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
      />

      <CommonCheckboxField
        value="searchPrecise"
        label="Search precise"
        checked={searchPrecise}
        onChange={() => setSearchPrecise(!searchPrecise)}
      />

      <CommonTextField
        id="dateFrom"
        label="Release date from:"
        type="date"
        value={releaseDateFrom}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setReleaseDateFrom(e.target.value)}
        inputLabelProps={{
          shrink: true,
        }}
      />

      <CommonTextField
        id="dateTo"
        label="Release date to:"
        type="date"
        value={releaseDateTo}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setReleaseDateTo(e.target.value)}
        inputLabelProps={{
          shrink: true,
        }}
      />

      <Button
        variant="contained"
        size="large"
        color="primary"
        onClick={sendFilterRequest}>
        Filter
      </Button>
    </div>
  )
}

// dates - string - Filter by a release date, for example: 2010-01-01,2018-12-31.1960-01-01,1969-12-31.
// page - integer -A page number within the paginated result set.
// page_size - integer - Number of results to return per page.
// search	- string - Search query.
// search_precise	- boolean - Disable fuzziness for the search query.
// search_exact	- boolean - Mark the search query as exact.
// platforms -  string - Filter by platforms, for example: 4,5.
// ordering - string - Available fields: name, released, added, created, updated, rating, metacritic.
// You can reverse the sort order adding a hyphen, for example: -released.


const mapStateToProps = (state: RootState) => ({
  filters: selectGamesFilters(state)
})
const connector = connect(mapStateToProps, {requestGamesList});
export default connector(GameListFilterForm);
