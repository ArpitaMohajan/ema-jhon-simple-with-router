
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Head from './components/header/Head';
import Shop from './components/header/Shop/Shop';
import Inventory from './components/Inventory/Inventory';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import OverReview from './components/OrderReview/OrderReview';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Head></Head>
        <Switch>
          <Route exact path="/">
            <Shop></Shop>
          </Route>
          <Route path="/shop">
            <Shop></Shop>
          </Route>
          <Route path="/orders">
            <OrderReview></OrderReview>
          </Route>
          <Route path="/inventory">
            <Inventory></Inventory>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
