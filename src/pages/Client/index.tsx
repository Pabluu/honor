import { Person } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { ButtonPrimary } from '../../components/ButtonPrimary'
import { Menu } from '../../components/Menu'
import { NavBar } from '../../components/Navbar'
import { api } from '../../lib/axios'
import {
  ClientContainer,
  ClientHead,
  ClientTable,
  NewClient,
  Title,
} from './styles'

interface clientSchema {
  id: number
  name: string
  active: boolean
  type: object
  company_id: string
}

export function Client() {
  // const navigate = useNavigate()
  const [listClients, setListClients] = useState([])

  async function fetchData() {
    const { data } = await api.get('/client')
    setListClients(data.clients)
  }

  useEffect(() => {
    fetchData()
  }, [])

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
              <th>#id</th>
              <th className="all">Nome</th>
              <th>Status</th>
              <th>Tipo de Cliente</th>
            </tr>
          </thead>

          <tbody>
            {listClients.map((client: clientSchema) => {
              return (
                <tr key={client.id}>
                  <td>{client.id}</td>
                  <td>{client.name}</td>
                  <td>{client.active.toString()}</td>
                  <td>{client.type.toString()}</td>
                </tr>
              )
            })}
          </tbody>
        </ClientTable>
      </ClientContainer>
    </>
  )
}
