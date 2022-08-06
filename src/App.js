import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import WorkPage from './components/WorkPage';
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
    
      </Routes>
    </div>
    </Router>
  );
}

export default App;
