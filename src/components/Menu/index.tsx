import { Bell, UserCircle } from 'phosphor-react'
import { MenuBar, MenuItems } from './styles'

export function Menu() {
  return (
    <MenuBar>
      <MenuItems>
        <li>
          <Bell size={28} color="white" />
        </li>

        <li>
          <a href="/user">
            <UserCircle size={28} color="white" />
          </a>
        </li>
      </MenuItems>
    </MenuBar>
  )
}
