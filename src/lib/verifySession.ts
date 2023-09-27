export function verifySession() {
  const user = localStorage.getItem('user')

  return !!user
}
