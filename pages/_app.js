import '../styles/globals.css'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

function MyApp({ Component, pageProps }) {
  
  return <MuiThemeProvider><Component {...pageProps} /></MuiThemeProvider>
}

export default MyApp
