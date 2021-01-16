import React from 'react';
import { Button, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useForm from 'utils/useForm';
import Input from './Input';
import styles from './styles.module.scss';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const FormSection = () => {
  const classes = useStyles();

  const {
    values, onChange, validate, errors,
  } = useForm({
    name: { required: true },
    email: { required: true, validate: 'email' },
    phone: { required: true, validate: 'phone' },
    description: { required: true },
  });

  const onSubmit = () => {
    console.log(validate());
  };

  return (
    <div className={styles['contact-section']}>
      <FormControl classes={classes}>
        <Input
          label="Your Name"
          containerName={styles['contact-input']}
          name="name"
          error={!!errors.name}
          onChange={onChange}
          value={values.name}
        />
        <Input
          label="Email"
          onChange={onChange}
          containerName={styles['contact-input']}
          name="email"
          value={values.email}
          error={!!errors.email}
        />
        <Input
          label="Phone Number"
          onChange={onChange}
          containerName={styles['contact-input']}
          name="phone"
          value={values.phone}
          error={!!errors.phone}
        />
        <Input
          label="Description"
          onChange={onChange}
          containerName={styles['contact-input']}
          multiline
          rows={6}
          name="description"
          value={values.description}
          error={!!errors.description}
        />
        <Button color="primary" variant="contained" onClick={onSubmit}>Submit</Button>
      </FormControl>
    </div>
  );
};

export default FormSection;
