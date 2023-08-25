import { Route, Routes } from 'react-router-dom'
import { SignUp } from './pages/SignUp'

export function Router() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}
