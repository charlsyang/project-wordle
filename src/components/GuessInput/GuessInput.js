import React from 'react';

function GuessInput({ updateGuessList, gameStatus }) {
  const [guess, setGuess] = React.useState('');

  return (
    <form
      className='guess-input-wrapper'
      onSubmit={(event) => {
        event.preventDefault();
        updateGuessList(guess);
        setGuess('');
      }}
    >
      <label htmlFor='guess-input'>Enter guess:</label>
      <input
        required
        disabled={gameStatus !== 'running'}
        minLength={5}
        maxLength={5}
        id='guess-input'
        type='text'
        pattern='[A-Za-z]{5}'
        title='Five letters required'
        value={guess}
        onChange={(event) => {
          const nextGuess = event.target.value.toUpperCase();
          setGuess(nextGuess);
        }}
      />
    </form>
  );
}

export default GuessInput;
