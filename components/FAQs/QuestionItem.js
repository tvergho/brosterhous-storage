import React, { useState } from 'react';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { ChevronDown, ChevronUp } from './assets';
import styles from './styles.module.scss';

const ANIMATION_DURATION = 300;

const QuestionItem = ({ question, children }) => {
  const [answerShown, setAnswerShown] = useState(false);

  const toggle = () => { setAnswerShown((prev) => !prev); };

  return (
    <div className={styles['question-item']}>
      <button className={styles['question-header']} type="button" onClick={toggle}>
        {answerShown ? <ChevronDown /> : <ChevronUp />}
        <h2 className={styles.title}>{question}</h2>
      </button>

      <motion.div
        className={styles.answer}
        animate={{ height: answerShown ? '100%' : '0px', marginBottom: answerShown ? '-10px' : '0px' }}
        initial={{ height: '0px' }}
        transition={{ duration: ANIMATION_DURATION / 1000, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

QuestionItem.propTypes = {
  question: PropTypes.string,
  children: PropTypes.node,
};

export default QuestionItem;
