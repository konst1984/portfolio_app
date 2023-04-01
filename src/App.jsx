import React from "react";
import {
  About,
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
      <About />
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
