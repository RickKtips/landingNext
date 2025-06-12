import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ paddingTop: '80px' }}> {/* Add padding to prevent content overlap with fixed header */}
        {children}
      </main>
    </>
  );
};

export default Layout;
