import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export function GameWrapper({ children }) {
  const [ step, setStep ] = useState(0)
  const [ nickname, setNickname ] = useState(null)
  const [ chosenWords, setChosenWords ] = useState([])
  const [ score, setScore ] = useState(0)


  let sharedState = { step, setStep, nickname, setNickname, chosenWords, setChosenWords, score, setScore }

  return (
    <GameContext.Provider value={ sharedState }>
      {children}
    </GameContext.Provider>
  );
}

export function useGameContext() {
  return useContext(GameContext);
}