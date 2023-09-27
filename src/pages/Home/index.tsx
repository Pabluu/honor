import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Menu } from '../../components/Menu'
import { NavBar } from '../../components/Navbar'
import { verifySession } from '../../lib/verifySession'
import { HomeContainer } from './styles'

export function Home() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!verifySession()) navigate('/signin')
  }, [navigate])

  return (
    <HomeContainer>
      <Menu />
      <NavBar />

      {/* <div>
        <h1>HELLO MAN</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos sequi
          harum, pariatur commodi, saepe eius amet non illo, ullam sit dolorum
          explicabo itaque libero debitis? Facilis sapiente perferendis at amet?
        </p>
        <h2>HELLO MAN 222</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus,
          enim alias magni ducimus veritatis architecto neque dignissimos libero
          quisquam nesciunt sit omnis reiciendis placeat reprehenderit
          blanditiis ea, amet, obcaecati porro?
        </p>
      </div> */}
    </HomeContainer>
  )
}
