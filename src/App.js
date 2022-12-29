import Navigasi from './Components/navbar';
import Popular from './Components/popular';
import './App.css'
import { GlobalProvider } from './context/GlobalContext';

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Navigasi />
        <h1>Popular Movie</h1>
        <Popular />
      </GlobalProvider>
    </div>
  );
}

export default App;
