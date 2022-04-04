import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/system';
import theme from '@/utils/Theme';
import DefaultLayout from '@/common/DefaultLayout';

function MyApp({ Component, pageProps }: any) {
  const Layout = Component.Layout || DefaultLayout;

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
