import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';
import NavBar from './components/Navbar/NavBar';
import RoutesComponent from './components/RoutesComponent/RoutesComponent';

const App = ({postsData, dialogsData, messagesData}) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <NavBar />
        <div className='app-wrapper_content'>
          <RoutesComponent postsData={postsData} dialogsData={dialogsData} messagesData={messagesData} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
