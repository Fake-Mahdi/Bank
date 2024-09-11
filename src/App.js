import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Training from './pages/training';
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Training />} />
          {/* Add a fallback route */}
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
