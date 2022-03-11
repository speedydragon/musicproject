import './App.css';
import { Route, Switch, Redirect } from "react-router-dom"; 

// Components
import Store from './components/Store';
import ProductDetails from './components/ProductDetails';
// Context
import ProductContextProvider from './context/ProductContextProvider';
import CartContextProvider from './context/CartContextProvider';

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
      <Switch>
      <Route path="/products/:id" component={ProductDetails} />
      <Route path="/products" component={Store} />
      <Redirect to="/products" />
      </Switch>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;



{/* <CartContextProvider>
        <Navbar />
        <Switch>
          <Route path="/products/:id" component={ProductDetails} />
          <Route path="/products" component={Store} />
          <Route path="/cart" component={ShopCart} />
          <Redirect to="/products" />
        </Switch>
      </CartContextProvider> */}


// import CartContextProvider from './context/CartContextProvider';

// import ProductDetails from './components/ProductDetails';
// import Navbar from './components/shared/Navbar';
// import ShopCart from './components/ShopCart';

// import { Route, Switch, Redirect } from "react-router-dom";

      