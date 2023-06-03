import '@/styles/globals.css'
import { NextUIProvider } from '@nextui-org/react';
import SSRProvider from 'react-bootstrap/SSRProvider';

function MyApp({ Component, pageProps }) {
  return (
    
    <SSRProvider>
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
   </SSRProvider>

  );
}


export default MyApp;