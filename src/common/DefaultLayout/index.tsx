import Header from '@/components/Header';
import Footer from '../Footer';

const DefaultLayout = ({
  children
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default DefaultLayout;
