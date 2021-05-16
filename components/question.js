import { useState } from 'react'
import { useGameContext } from '../context/state'

export default function Question(questions) {
  const { step, setStep, chosenWords, setChosenWords, setScore } = useGameContext()

  let question = questions.questions[1].question
  let all_words = questions.questions[1].all_words
  let good_words = questions.questions[1].good_words
  let bad_words = all_words.filter((word) => good_words.indexOf(word) == -1)

  const calculateScore = () => {
    let wrong_answers = chosenWords.filter((word) => good_words.indexOf(word) == -1)
    let good_answers = chosenWords.filter((word) => bad_words.indexOf(word) == -1)
    let omitted_answers = good_words.filter((word) => good_answers.indexOf(word) == -1)

    console.log('Wrong answers ' + wrong_answers)
    console.log('Good answers ' + good_answers)
    console.log('Omitted answers ' + omitted_answers)

    setScore(good_answers.length * 2 - (wrong_answers.length + omitted_answers.length))
  }

  const checkWord = (event) => {
    if (chosenWords.indexOf(event.target.textContent) == -1) {
      setChosenWords([...chosenWords, event.target.textContent])
    } else {
      setChosenWords(chosenWords.filter((word) => word != event.target.textContent))
    }
  }

  return (
    <div className="h-screen flex flex-wrap content-center justify-center">
      <div>
        <h2 className="text-2xl text-center font-bold my-6">{ question }</h2>
        <div className="md:w-3/5 h-2/3 m-2 mx-auto mb-6 border p-8 md:p-16 border-gray-200 rounded flex flex-wrap sm:space-x-24 font-bold">
          {all_words.map((word, index) => (
            <span onClick={checkWord} key={index} className="p-4 relative cursor-pointer">
              { word }
            </span>
          ))}
        </div>
        <p className="text-center">
          <button
            onClick={ calculateScore }
            className="text-center border border-blue-500 text-blue-500 rounded px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-blue-600 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            check answers
          </button>
        </p>
      </div>
    </div>
  )
}
