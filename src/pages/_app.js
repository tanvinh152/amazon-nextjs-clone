import { Provider } from 'react-redux'
import { store } from '../app/store'
import '../styles/globals.css'
import {Provider as AutoProvider} from 'next-auth/client'

const MyApp = ({ Component, pageProps }) => {
  return (
    <AutoProvider session={pageProps.session}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </AutoProvider>
  )
}

export default MyApp
