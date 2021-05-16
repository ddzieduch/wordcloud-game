import 'tailwindcss/tailwind.css'
import { GameWrapper } from '../context/state'

function MyApp({ Component, pageProps }) {
  return (
    <GameWrapper>
      <Component {...pageProps} />
    </GameWrapper>
  )
}

export default MyApp
