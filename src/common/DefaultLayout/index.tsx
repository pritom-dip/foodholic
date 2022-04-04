import Header from '@/components/Header';

const DefaultLayout = ({
  children
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default DefaultLayout;
