import React from 'react';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    fontSize: '0.85rem',
  },
});

const CustomInput = ({
  label, containerName, multiline, rows, name, error, value, onChange,
}) => {
  const classes = useStyles();

  return (
    <div className={containerName}>
      <TextField
        placeholder={label}
        fullWidth
        InputLabelProps={{ className: classes.root }}
        inputProps={{ className: classes.root }}
        multiline={multiline}
        rows={rows}
        name={name}
        error={error}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

CustomInput.propTypes = {
  label: PropTypes.string,
  containerName: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  name: PropTypes.string,
  error: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default CustomInput;
