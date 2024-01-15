
import './App.css';
import CreateNewContext from './component/CreateNewContext';
import States from './component/states';

function App() {
  let val={
    lang:"javascript ", 
    uses:" frontend & backend"
  }
  return (
    <div className="App">
      <CreateNewContext.Provider value={val} >
   <States/>
   </CreateNewContext.Provider>
    </div>
  );
}

export default App;
