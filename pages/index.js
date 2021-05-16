import Nickname from '../components/nickname'
import Question from '../components/question'
import Score from '../components/score'

export default function Game({ questions }) {
  return (
    <>
      <Nickname></Nickname>
      <Question questions={ questions }></Question>
      <Score></Score>
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
