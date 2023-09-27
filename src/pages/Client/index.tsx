import { Circle, Person } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'
import { ButtonPrimary } from '../../components/ButtonPrimary'
import { Menu } from '../../components/Menu'
import { NavBar } from '../../components/Navbar'
import { verifySession } from '../../lib/verifySession'
import {
  ClientContainer,
  ClientHead,
  ClientTable,
  NewClient,
  Title,
} from './styles'

export function Client() {
  const navigate = useNavigate()

  if (!verifySession()) {
    navigate('/sigin')
  }

  return (
    <>
      <Menu />
      <NavBar />

      <ClientContainer>
        <ClientHead>
          <Title>Listagem de Clientes</Title>
          <NewClient>
            <Person size={24} />
            <ButtonPrimary text="Cadastrar" />
          </NewClient>
        </ClientHead>
        <ClientTable>
          <thead>
            <tr>
              <th> </th>
              <th>#id</th>
              <th className="all">Nome</th>
              <th>Valor</th>
              <th>Status de Pagamento</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>
                <Circle size={24} color="#FACC15" weight="fill" />
              </td>
              <td>001</td>
              <td>Jefferson</td>
              <td>R$ 1000,00</td>
              <td>Aberto</td>
            </tr>

            <tr>
              <td>
                <Circle size={24} color="#00B37E" weight="fill" />
              </td>
              <td>002</td>
              <td>Pablo Henrique</td>
              <td>R$ 350,00</td>
              <td>Pago</td>
            </tr>

            <tr>
              <td>
                <Circle size={24} color="#FACC15" weight="fill" />
              </td>
              <td>003</td>
              <td>Silva Cunha</td>
              <td>R$ 100,00</td>
              <td>Aberto</td>
            </tr>

            <tr>
              <td>
                <Circle size={24} color="#3F3F46" weight="fill" />
              </td>
              <td>004</td>
              <td>Irmandade</td>
              <td>R$ 120,00</td>
              <td>-</td>
            </tr>

            <tr>
              <td>
                <Circle size={24} color="#00B37E" weight="fill" />
              </td>
              <td>005</td>
              <td>Isabela</td>
              <td>R$ 1320,00</td>
              <td>Pago</td>
            </tr>
          </tbody>
        </ClientTable>
      </ClientContainer>
    </>
  )
}
