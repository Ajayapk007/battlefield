import './App.css';
import { Provider } from 'react-redux';
import Body from './components/Body';
import appStore from './reduxStore/appStore'

function App() {
  return (
    // yeh pr redux stroe and routes hoge page routes
    <Provider store={appStore} >
        <Body />
    </Provider>
  );
}

export default App;
