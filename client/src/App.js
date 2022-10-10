import './App.css';
import Home from './components/Home.jsx';
import Details from './components/Details.jsx';
import LandingPage from './components/LandingPage.jsx'
import CreatePokemons from './components/CreatePokemons';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path='/home' component={Home}/>
      <Route exact path='/details/:id' render={({match}) => <Details id={match.params.id} />}/>
      <Route exact path='/create' component={CreatePokemons}/>
    </BrowserRouter>
    </div>
   
  );
}

export default App;
