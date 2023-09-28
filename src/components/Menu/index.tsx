import { Bell, UserCircle } from 'phosphor-react'
import { LinkTo } from '../utils/LinkTo'
import { MenuBar, MenuItems } from './styles'

export function Menu() {
  return (
    <MenuBar>
      <MenuItems>
        <li>
          <Bell size={28} color="white" />
        </li>

        <li>
          <LinkTo to="/user">
            <UserCircle size={28} color="white" />
          </LinkTo>
        </li>
      </MenuItems>
    </MenuBar>
  )
}
