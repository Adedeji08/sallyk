import './App.css';
import Home from './Pages/Home.js';
import { BrowserRouter as Router, Switch, Route } from 
'react-router-dom';
import Product from './Pages/Product.js';

function App() {
  return (
    <>
    <Router>
      <Home />
      <Switch>
    <Route path='/' exact Pages={Home} />
    <Route path='/Product' Pages={Product} />
    </Switch>
    </Router>
    </>
  );
}


export default App;
