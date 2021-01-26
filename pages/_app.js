import '../styles/global.sass'

export default function App({ Component, pageProps }) {
    // Component
    return <div>
  <Component {...pageProps} />
  </div>
}