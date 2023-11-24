import React from 'react';
import Guess from '../Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResults({ guessList, answer }) {
  return (
    <div>
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <Guess key={num} answer={answer} value={guessList[num]} />
      ))}
    </div>
  );
}

export default GuessResults;
