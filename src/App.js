import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import WorkPage from './components/WorkPage';
import Contact from './components/Contact';
import Footer from './components/Footer';

// ルーティング設定
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';



function App() {
  return (
    <Router>
    <div className="App">
      <Header />

      <Routes>
        <Route path = "/" element = {<HomePage />} />
        <Route path = "/works" element = {<WorkPage />} />
        <Route path = "/contact" element = {<Contact />} />
      </Routes>

      {/* <Footer /> */}

    </div>
    </Router>
  );
}

export default App;
