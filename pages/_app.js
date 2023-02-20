import SSRProvider from 'react-bootstrap/SSRProvider';

import '../assets/sass/app.scss';

function MyApp({ Component, pageProps }) {
  /* const router = useRouter(); */
  /* const [loading, setLoading] = useState(false); */

  /*  useEffect(() => {
    const handleStart = (url) => {
      url !== router.pathname ? setLoading(true) : setLoading(false);
    };
    const handleComplete = (url) => setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);
  }, [router]); */

  return (
    <SSRProvider>
      {/* <Loader loading={loading} /> */}
      {/* <Default> */}
      <Component {...pageProps} />
      {/* </Default> */}
    </SSRProvider>
  );
}

export default MyApp;
