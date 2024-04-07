import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Works } from './components/Works';
import { Form } from './components/Form';


export const App = () => {

  return (
    <>      
      <Navbar />     
      <Hero />
      <About />
      <Works />
      <Form />
    </>
  );
};
