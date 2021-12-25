import React from 'react';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';

function App(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default App;
