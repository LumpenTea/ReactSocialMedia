import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';
import RoutesComponent from './components/RoutesComponent/RoutesComponent';

const App = ({ state, dispatch }) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <NavBar state={state} />
      <div className='app-wrapper_content'>
        <RoutesComponent state={state} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
