import { useNavigate } from 'react-router-dom'
import { ConsUrl } from '../constants/url'
import useStore from '../store/useStore'

const Page2 = () => {
  const navigate = useNavigate()
  const { page } = useStore()
  const handle = (url: string) => {
    navigate(url)
  }

  return (
    <>
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
        Page2
      </div>
      {page}
      <button onClick={() => handle(ConsUrl.Page1)}>ir page 1</button>
      <button onClick={() => handle(ConsUrl.Home)}>Home</button>
    </>
  )
}

export default Page2
