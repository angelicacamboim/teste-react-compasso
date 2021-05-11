import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Categoria from './pages/Categoria'
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/:id' component={Categoria}/>

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
