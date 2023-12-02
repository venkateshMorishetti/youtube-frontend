import './App.css';
import {Provider} from 'react-redux'
import Header from './components/Header';
import Body from './components/Body';
import appStore from './utility/appStore';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import WatchPage from './components/WatchPage';
import MainContainer from './components/MainContainer';

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Body />,
      children: [
        {
          path: '/',
          element: <MainContainer />,
        },
        {
          path: '/watch',
          element: <WatchPage />,
        },
      ]
    }
  ])
  return (

    
    <Provider store={appStore}>

      <Header />
      <RouterProvider router={routes}/>
    </Provider>
  );
}

export default App;
