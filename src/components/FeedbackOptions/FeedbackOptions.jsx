import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FeedbackList, FeedbackBtn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <FeedbackList>
      {options.map(option => (
        <FeedbackBtn key={nanoid()} name={option} onClick={onLeaveFeedback}>
          {option}
        </FeedbackBtn>
      ))}
    </FeedbackList>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
