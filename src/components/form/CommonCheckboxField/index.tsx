import type {ReactElement} from 'react';

import React from 'react';
import {withStyles} from "@material-ui/core/styles";
import {Checkbox, FormControlLabel} from "@material-ui/core";
import './style.scss';

type Props = {
  checked: boolean;
  onChange: () => void;
  value: string;
  label: string;
}


const CssCheckboxField = withStyles({
  root: {
    '& .MuiFormControlLabel-root' : {
      color: 'white'
    },
    '& label.MuiFormControlLabel-label': {
      color: 'white',
    },
    '& .MuiSvgIcon-root': {
      color: 'white',
    },
  },
})(FormControlLabel);

const CommonCheckboxField = ({checked, onChange, value, label}: Props): ReactElement => (
  <CssCheckboxField
    value={value}
    control={
      <Checkbox
        checked={checked}
        onChange={onChange}
      />
    }
    label={label}
    labelPlacement="end"
  />
);

export default CommonCheckboxField;
