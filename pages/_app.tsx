import 'styles/global.sass'
import { useStore } from 'lib/store'
import { Provider } from 'react-redux'
import type { AppProps /*, AppContext */ } from 'next/app'

export default function MyApp({ Component, pageProps }: AppProps) {
  const store = useStore(pageProps.initialReduxState)
  // Component
  return (<Provider store={store}>
      <Component {...pageProps} />
    </Provider>)
}