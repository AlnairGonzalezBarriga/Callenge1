import { AuthProvider } from "./auth/context/AuthProvider"
import AppRouter from "./router/AppRouter"

const Challenge = () => {
  return (
    <AuthProvider>
      <AppRouter/>
    </AuthProvider>
  )
}

export default Challenge