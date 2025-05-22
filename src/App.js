import logo from './logo.jpg';
import Router from './Routers/Router';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { CartProvider } from './Context/CartContext';
import { SearchProvider } from "./Context/SearchContext";

function App() {
  return (
    <>
    <SearchProvider>
    <CartProvider>
       <Router/>
    </CartProvider>
    </SearchProvider>
    </>
  );
}

export default App;
