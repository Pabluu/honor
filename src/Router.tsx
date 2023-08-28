import { Route, Routes } from 'react-router-dom'
import { SignUp } from './pages/SignUp'

export function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={<h1 style={{ color: 'black' }}>PAGINA INICIAL</h1>}
      />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}
