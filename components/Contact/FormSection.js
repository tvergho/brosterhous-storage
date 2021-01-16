import React, { useState } from 'react';
import { Button, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Input from './Input';
import styles from './styles.module.scss';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const FormSection = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [description, setDescription] = useState();
  const classes = useStyles();

  return (
    <div className={styles['contact-section']}>
      <FormControl classes={classes}>
        <Input
          label="Your Name"
          value={name}
          onChange={(e) => { setName(e.target.value); }}
          containerName={styles['contact-input']}
        />
        <Input
          label="Email"
          value={email}
          onChange={(e) => { setEmail(e.target.value); }}
          containerName={styles['contact-input']}
        />
        <Input
          label="Phone Number"
          value={phone}
          onChange={(e) => { setPhone(e.target.value); }}
          containerName={styles['contact-input']}
        />
        <Input
          label="Description"
          value={description}
          onChange={(e) => { setDescription(e.target.value); }}
          containerName={styles['contact-input']}
          multiline
          rows={6}
        />
        <Button color="primary" variant="contained">Submit</Button>
      </FormControl>
    </div>
  );
};

export default FormSection;
