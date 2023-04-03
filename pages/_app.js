import '../public/styles.css';
import { AuthProvider } from "../src/Context/auth-context";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  )
}

export default MyApp