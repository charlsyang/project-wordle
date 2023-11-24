import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner';
import LostBanner from '../LostBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [gameStatus, setGameStatus] = React.useState('running'); // 'running' | 'won' | 'lost'
  const [guessList, setGuessList] = React.useState([]);

  function updateGuessList(guess) {
    const nextGuessList = [...guessList, guess];
    setGuessList(nextGuessList);

    if (guess.toUpperCase() === answer) {
      setGameStatus('won');
    } else if (nextGuessList.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameStatus('lost');
    }
  }

  return (
    <>
      <GuessResults guessList={guessList} answer={answer} />
      <GuessInput
        updateGuessList={updateGuessList}
        gameStatus={gameStatus}
      />
      {gameStatus === 'won' && (
        <WonBanner numOfGuesses={guessList.length} />
      )}
      {gameStatus === 'lost' && <LostBanner answer={answer} />}
    </>
  );
}

export default Game;
