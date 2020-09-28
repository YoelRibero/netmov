export const userStatus = () => {
  const random = Math.random()
  const status = random > 0.5 ? 'connected' : 'disconnected'
  return status
}