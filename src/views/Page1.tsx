import { useNavigate } from 'react-router-dom'
import { ConsUrl } from '../constants/url'
import { useEffect } from 'react'
import useStore from '../store/useStore'

const Page1 = () => {
  const { page } = useStore()
  const navigate = useNavigate()

  const handle = (url: string) => {
    navigate(url)
  }

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${page}`,{

    })
      .then((response) => response.json())
      .then((json) => console.log(json))
  }, [page])

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
      <div>Page1</div>
      <p>{page}</p>
      <button onClick={() => handle(ConsUrl.Page2)}>ir page 2</button>
      <button onClick={() => handle(ConsUrl.Home)}>Home</button>
    </div>
  )
}

export default Page1
