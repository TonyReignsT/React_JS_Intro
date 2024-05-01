import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'

function App() {
  return (
    //Enclosing components within a fragment (Empty tags) Since you can only return one component
    <>
    <Header />
    <Food />
    <Footer />
    
    </>
  );
}

export default App
