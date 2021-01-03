import type {ConnectedProps} from "react-redux";
import type {RootState} from "../../redux/reducers/typings";

import React from 'react';
import {connect} from "react-redux";
import ReactPaginate from 'react-paginate';
import {selectGamesFilters} from "../../redux/selectors/games";
import './style.scss'
import {requestGamesList} from "../../redux/actions/games";


type PropsFromRedux = ConnectedProps<typeof connector>;
const GameListPaginate = ({filters, requestGamesList}: PropsFromRedux) => {
  if (!Object.keys(filters).length) {
    return null;
  }

  return (
    <ReactPaginate
      previousClassName="hidden"
      nextClassName="hidden"
      breakLabel={'...'}
      breakClassName={'break'}
      pageCount={filters.pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      forcePage={(filters.page || 1) - 1}
      onPageChange={(item) => {
        const {pageCount, ...restFilters} = filters;
        requestGamesList({...restFilters, page: item.selected + 1})
      }}
      containerClassName="games-list-pagination pagination"
      activeClassName="active"
    />
  );
};

const mapStateToProps = (state: RootState) => ({
  filters: selectGamesFilters(state)
})

const connector = connect(mapStateToProps, {requestGamesList})
export default connector(GameListPaginate);