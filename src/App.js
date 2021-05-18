import BookContainer from './components/bookContainer'
import {Provider} from 'react-redux'
import HookBookContainer from './components/HookBookContainer'
import HookPenContainer from './components/HookPenContainer'
import Header from './components/Header'
import store from './Redux/store'
import './App.css';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <HookPenContainer />
      <Header />
      <BookContainer />
      <HookBookContainer />
      
    </div>
    </Provider>
  );
}

export default App;
