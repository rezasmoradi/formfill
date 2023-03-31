import { wrapper } from '@/redux/store'
import '@/styles/globals.css'
import '@/styles/fontstyle.css'
import { Provider } from 'react-redux'

function App({ Component, pageProps }) {

  const { store, props } = wrapper.useWrappedStore(wrapper)

  return (
    <Provider store={store}>
        <Component {...pageProps} />
    </Provider>
  )
}

export default App