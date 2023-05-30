import { AuthProvider } from "../context/auth-context";
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import '../public/style.css';

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