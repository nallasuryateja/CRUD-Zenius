


import './App.css';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';


import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <Routes>
            <Route exact path="/create" Component={Create}/>
            <Route exact path="/read" Component={Read}/>
            <Route exact path="/update" Component={Update}/>
         
        </Routes>
      
        
      </div>

    </Router>
    
  );
}

export default App;