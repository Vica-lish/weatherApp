import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/navBar/NavBar';
import MainPage from './components/mainPage/MainPage';
import FavoritesPage from './components/favoritesPage/FavoritesPage';
import './App.css';

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route path='/favorites'>
            <FavoritesPage />
          </Route>
          <Route path='/'>
            <MainPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
