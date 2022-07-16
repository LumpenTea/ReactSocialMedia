import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';
import RoutesComponent from './components/RoutesComponent/RoutesComponent';

const App = ({state}) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper_content'>
          <RoutesComponent state={state} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
