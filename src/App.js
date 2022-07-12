import './App.css';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';
import RoutesComponent from './components/RoutesComponent/RoutesComponent';

const App = () => {
  return (
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper_content'>
          <RoutesComponent />
        </div>
      </div>
  );
}

export default App;
