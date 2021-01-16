import React, { useState } from 'react';
import { Button, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import useForm from 'utils/useForm';
import Lottie from 'react-lottie';
import { motion } from 'framer-motion';
import Input from './Input';
import * as animationData from './confirm.json';
import styles from './styles.module.scss';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

const lottieOptions = {
  loop: false,
  autoplay: true,
  animationData: animationData.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const FormSection = () => {
  const classes = useStyles();
  const [submitted, setSubmitted] = useState(false);

  const {
    values, onChange, validate, errors,
  } = useForm({
    name: { required: true },
    email: { required: true, validate: 'email' },
    phone: { required: true, validate: 'phone' },
    description: { required: true },
  });

  const onSubmit = () => {
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <div className={styles['contact-section']}>

      <motion.div animate={{ opacity: submitted ? 0 : 1 }}>
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
      </motion.div>

      {submitted && (
        <motion.div className={styles.confirm} animate={{ opacity: submitted ? 1 : 0 }}>
          <Lottie options={lottieOptions}
            height="20%"
            width="20%"
          />
          <h3>Your message has been submitted.</h3>
        </motion.div>
      )}
    </div>
  );
};

export default FormSection;
