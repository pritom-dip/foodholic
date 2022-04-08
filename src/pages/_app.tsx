import '../../styles/globals.css';
import { ThemeProvider } from '@mui/system';
import theme from '@/utils/Theme';
import DefaultLayout from '@/common/DefaultLayout';
import { SnackbarProvider } from 'notistack';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';

function MyApp({ Component, pageProps }: any) {
  const Layout = Component.Layout || DefaultLayout;

  const notistackRef: any = React.createRef();

  const onClickDismiss = (key: any) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        ref={notistackRef}
        maxSnack={3}
        preventDuplicate
        hideIconVariant
        action={(key) => (
          <CloseIcon
            onClick={onClickDismiss(key)}
            sx={{ color: '#fff', cursor: 'pointer' }}
          />
        )}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default MyApp;
