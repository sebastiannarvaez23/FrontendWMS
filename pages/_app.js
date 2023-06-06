import { AuthProvider } from "../src/context/auth-context";
import { store } from '../src/redux/store';
import { Provider } from 'react-redux';
import '../src/public/style.css';

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  )
}

export default MyApp