import { useContext, useEffect, useState } from "react";
import Navigation from "./components/Header/Navigation";
import TabMenu from "./components/Main/TabMenu";
import CartProvier from "./components/Context/CartProvider";
import Cart from "./components/Cart/Cart";
function App() {
  const [showCart, setShowCart] = useState(false);
  
  const showCarthandler = () => {
    setShowCart(true);
  }

  const hideCartHandler = () => {
    setShowCart(false);
  }
  return (
    <CartProvier>
      {showCart && <Cart onClose={hideCartHandler} />}
      <TabMenu />
      <Navigation onOpen={showCarthandler} />
    </CartProvier>
  );
}

export default App;