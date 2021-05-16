import Head from 'next/head'
import { useGameContext } from '../context/state'
import Nickname from '../components/nickname'
import Question from '../components/question'
import Score from '../components/score'

export default function Game({ questions }) {
  const { step } = useGameContext()
  return (
    <>
      <Head>
        <title>Wordcloud game</title>
      </Head>
      { step == 0 ? <Nickname></Nickname> : '' }
      { step == 1 || step == 2 ? <Question questions={ questions }></Question> : '' }
      { step == 3 ? <Score></Score> : '' }
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/questions')
  const questions = await res.json()

  return {
    props: { questions },
  }
}
