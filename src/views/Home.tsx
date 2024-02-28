import { useNavigate } from 'react-router-dom'
import { ConsUrl } from '../constants/url'
import useStore from '../store/useStore'

const Home = () => {
  const navigate = useNavigate()

  const { inc } = useStore()

  const handle = (url: string) => {
    inc()
    navigate(url)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid white',
        borderRadius: '5px',
        padding: '10px',
        gap: '50px',
      }}
    >
      <p>Home</p>
      <button onClick={() => handle(`/page1/7`)}>page1 </button>
      <button onClick={() => handle(ConsUrl.Page2)}>page2 </button>
    </div>
  )
}

export default Home
