import { useState } from 'react'
import { useGameContext } from '../context/state'

export default function Nickname() {
  const { step, setStep, setNickname } = useGameContext()

  const saveNickname = async (event) => {
    event.preventDefault()

    setNickname(event.target.nickname.value)
    setStep(step + 1)
  }
  return (
    <div className="h-screen flex flex-wrap content-center justify-center">
      <div>
        <h2 className="text-4xl text-center font-bold my-6">Wordcloud game</h2>
        <form onSubmit={ saveNickname }>
          <input
            type="text"
            name="nickname"
            className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 px-4 py-2 mb-6 leading-8 transition-colors duration-500 ease"
            placeholder="Enter your nickname here ..."
          />
          <p className="text-center">
            <button
              className="text-center border border-blue-500 text-blue-500 rounded px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-blue-600 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              play
            </button>
          </p>
        </form>
      </div>
    </div>
  )
}
