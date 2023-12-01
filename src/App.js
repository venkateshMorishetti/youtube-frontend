import './App.css';
import {Provider} from 'react-redux'
import Header from './components/Header';
import Body from './components/Body';
import appStore from './utility/appStore';

function App() {
  return (
    <Provider store={appStore}>
      <Header />
      <Body /> 
    </Provider>
  );
}

export default App;
