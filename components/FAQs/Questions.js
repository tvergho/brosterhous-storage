import React from 'react';
import QuestionItem from './QuestionItem';
import styles from './styles.module.scss';

const Questions = () => {
  return (
    <div className={styles.questions}>
      <QuestionItem question="How do I pay my bill?">
        <p><strong>Pay by mail:</strong> 61149 S HWY 97 PMB 611 Bend, OR 97701</p>
        <p><strong>Pay by auto billing</strong> or set up bill pay with your bank. Most of our customers use our Free Premier Club Membership:&nbsp;
          <a href="https://www.uhaul.com/Orders/" target="_blank" rel="noreferrer">Emove</a> (our online payment service).
        </p>
        <p><strong>Pay in person:</strong> Use our drop slot in the office door for non-cash payments.</p>
        <p><strong>Pay by telephone:</strong> Call the office number and we can process your credit/debit card payment by phone.</p>
      </QuestionItem>
      <QuestionItem question="Do you require a deposit or any other upfront fees?">
        <p>No.</p>
      </QuestionItem>
      <QuestionItem question="Do you sell moving supplies?">
        <p>Currently we do not sell moving supplies.</p>
      </QuestionItem>
      <QuestionItem question="Does Brosterhous Storage provide locks?">
        <p>Unlike many facilities, we allow you to use your own lock. We also have locks available to purchase directly from us.</p>
      </QuestionItem>
      <QuestionItem question="Does Brosterhous Storage have access to my unit?">
        <p>No. You are the only one with access to your unit.</p>
      </QuestionItem>
      <QuestionItem question="Do you have climate-controlled units?">
        <p>No.</p>
      </QuestionItem>
      <QuestionItem question="Do you offer RV / boat / car / motorcycle parking?">
        <p>Our storage units are certainly capable of storing automobiles and boats. We do offer outdoor parking space for larger boats and RV’s.</p>
      </QuestionItem>
      <QuestionItem question="What about moving out? Do you need advance notice?">
        <p>A 14 day vacate notice is required. Please let us know on your move out day in order to release your unit. When you vacate your unit be sure the unit is left unlocked and clean.</p>
      </QuestionItem>
      <QuestionItem question="When can I access my storage unit?">
        <p>Daily, from 5:30am to 10pm.</p>
      </QuestionItem>
      <QuestionItem question="What are Brosterhous Storage office hours?">
        <p>We are available by appointment only. Contact us to make an appointment.</p>
      </QuestionItem>
      <QuestionItem question="If I forget my access code or lose my key, what do I do?">
        <p>Call for assistance during regular business hours. If you lose your key, we can remove your lock free of charge and you can purchase a replacement one from Brosterhous Storage.</p>
      </QuestionItem>
      <QuestionItem question="Do I need to insure my things?">
        <p>
          We no longer offer Safestor insurance but would be happy to direct you to an insurance provider of your choice.&nbsp;
          We suggest looking at your home owner&apos;s policy or purchase very reasonable insurance from&nbsp;
          <a href="http://tenantone.com/rates" target="_blank" rel="noreferrer">
            http://tenantone.com/rates
          </a>.
        </p>
      </QuestionItem>
      <QuestionItem question="What documents do you require?">
        <p>You will need to provide a valid, government-issued form of identification (e.g. driver’s license, state ID or passport).</p>
      </QuestionItem>
      <QuestionItem question="Do you have handcarts or dollies I can use at your facilities?">
        <p>Yes, we have a small flatbed dolly available for patron use.</p>
      </QuestionItem>
      <QuestionItem question="Can I rent in person, or on the telephone?">
        <p>You may reserve an unit by telephone, then come into the office to sign your rental contract, etc.</p>
      </QuestionItem>
      <QuestionItem question="Do you offer a moving truck?">
        <p>No.</p>
      </QuestionItem>
    </div>
  );
};

export default Questions;
