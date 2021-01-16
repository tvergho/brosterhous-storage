import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { stripPhone, formatPhone } from './phoneUtils';

const useForm = (config) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (config) {
      const initialState = {};
      const initialErrors = {};
      for (const [key, value] of Object.entries(config)) {
        initialState[key] = value.defaultValue || '';
        initialErrors[key] = false;
      }
      setValues(initialState);
      setErrors(initialErrors);
    }
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    const newValues = { ...values };
    const newErrors = { ...errors };

    if (config[name].validate === 'phone') newValues[name] = formatPhone(value, values.phone);
    else newValues[name] = value;

    newErrors[name] = false;

    setValues(newValues);
    setErrors(newErrors);
  };

  const validateValue = (key, value) => {
    const itemConfig = config[key];
    if (itemConfig?.required && !value) return false;

    switch (itemConfig?.validate) {
    case 'email': {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(value.toLowerCase());
    }
    case 'phone':
      return stripPhone(value).length === 12;
    default:
      return true;
    }
  };

  const setError = (key, message) => {
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors };
      newErrors[key] = message || true;
      return newErrors;
    });
  };

  const validate = () => {
    let validated = true;
    for (const [key, value] of Object.entries(values)) {
      if (!validateValue(key, value)) {
        validated = false;
        setError(key);
      }
    }
    return true;
  };

  return {
    values, onChange, validate, errors,
  };
};

useForm.propTypes = {
  config: PropTypes.objectOf(PropTypes.shape({
    required: PropTypes.bool,
    validate: PropTypes.string,
    defaultValue: PropTypes.any,
  })),
};

export default useForm;
