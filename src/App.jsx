import React from "react";
import {
  Contacts,
  Experience,
  Footer,
  Header,
  Nav,
  Portfolio,
  Services,
  Testimonials,
} from "./components";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contacts />
      <Footer />
    </>
  );
};

export default App;
