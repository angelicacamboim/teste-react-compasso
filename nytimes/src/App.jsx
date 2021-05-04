import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Categoria from './pages/Categoria'

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/categoria/:id'>
          <Categoria />
        </Route>
{/* 
        <Route>
          <Pagina404 />
        </Route> */}

      </Switch>
    </Router>
    </div>
  );
}

export default App;
