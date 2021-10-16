import reactDom from 'react-dom';
import './App.scss';
import './component/Nav/Navbar';
import Navbar from './component/Nav/Navbar';
import TourList from './component/TourList';
 

function App() {
  return (
    <main>
    <Navbar />
    <TourList />
    </main>
    
  );
}

export default App;
