
import './App.css';
import AddTask from './reducer/AddTask';
import ListeTask from './ListeTask';

function App() {
  return (
    <div className="App">
    <div  className="container p-4 mt-2">
       <div className="row">
 <h1 className="animate-charcter">TODO LIST </h1>
     <AddTask/> 
     <ListeTask/>
    </div>
    </div>
    </div>
   
   
  );
}

export default App;
