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
  label, containerName, value, onChange, multiline, rows,
}) => {
  const classes = useStyles();

  return (
    <div className={containerName}>
      <TextField
        placeholder={label}
        fullWidth
        InputLabelProps={{ className: classes.root }}
        inputProps={{ className: classes.root }}
        value={value}
        onChange={onChange}
        multiline={multiline}
        rows={rows}
        required
      />
    </div>
  );
};

CustomInput.propTypes = {
  label: PropTypes.string,
  containerName: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
};

export default CustomInput;
