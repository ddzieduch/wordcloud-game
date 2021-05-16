import { useState } from 'react'
import { useGameContext } from '../context/state'

export default function Score() {
  const { step, setStep, nickname, score } = useGameContext()

  return (
    <div className="h-screen flex flex-wrap content-center justify-center">
      <div>
        <h2 className="text-3xl text-center font-bold mt-6">
          Congratulations, { nickname }!
        </h2>
        <h3 className="text-3xl text-center font-bold">Your score:</h3>
        <h3 className="text-3xl text-center font-bold text-blue-500 mb-6">
          { score } Points
        </h3>
      </div>
    </div>
  )
}
