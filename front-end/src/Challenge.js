import { Provider } from "react-redux"
import { AuthProvider } from "./auth/context/AuthProvider"
import AppRouter from "./router/AppRouter"
import {store} from './store/store'

const Challenge = () => {
  return (
    <Provider store={ store }>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </Provider>
  )
}

export default Challenge