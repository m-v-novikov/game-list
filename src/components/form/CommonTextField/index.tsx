import type {ChangeEvent, ReactElement} from 'react';

import React, {useState} from 'react';
import {withStyles} from '@material-ui/core/styles';
import {TextField} from "@material-ui/core";
import './style.scss';

type ObjectAny = {
  [x:string]: any;
}

type Props = {
  id: string;
  label: string;
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputProps?: ObjectAny;
  inputLabelProps?: ObjectAny;
  [x:string]: any;
}

const height = 44;
const labelOffset = -6;

const CssTextField = withStyles({
  root: {
    '& label': {
      color: 'white',
    },
    '& input' : {
      color: 'white',
    },
    '& .MuiInputBase-root' : {
      color: 'white'
    },
    '& label.Mui-focused': {
      color: 'white',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    }
  },
})(TextField);

const CommonTextField = ({
  id,
  label,
  value,
  onChange,
  inputProps,
  inputLabelProps,
  ...rest
}: Props): ReactElement => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <CssTextField
      id={id}
      label={label}
      value={value}
      onChange={onChange}
      style={{ height }}
      InputLabelProps={{
        style: {
          height,
          ...(!isFocused && !inputLabelProps?.shrink ? {top: `${labelOffset}px`} : {})
        },
        ...(inputLabelProps || {})
      }}
      inputProps={{
        style: {
          height,
          padding: '0 14px',
        },
        onFocus: () => setIsFocused(true),
        onBlur: () => setIsFocused(false),
        ...(inputProps || {})
      }}
      {...rest}
    />
  );
};

export default CommonTextField;
