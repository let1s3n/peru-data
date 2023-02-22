import { SSRProvider } from 'react-bootstrap';
import DefaultLayout from '../components/layout/DefaultLayout/DefaultLayout';
import '../sass/app.scss';

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </SSRProvider>
  );
}

export default MyApp;
