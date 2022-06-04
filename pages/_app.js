import AuthProvider from '../store/auth-context'
import CartProvider from '../store/cart-context'
import DropdownProvider from '../store/dropdown-context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <DropdownProvider>
        <CartProvider>
          <Component {...pageProps} />
        </CartProvider>
      </DropdownProvider>
    </AuthProvider>
  )
}

export default MyApp
