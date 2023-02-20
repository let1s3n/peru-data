import SSRProvider from 'react-bootstrap/SSRProvider';

import '../sass/app.scss';

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
