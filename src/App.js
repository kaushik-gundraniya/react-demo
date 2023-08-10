import './App.css';
import { 
  BrowserRouter as Router, 
  Route,
  Routes ,
} from 'react-router-dom';

import MainNavbar from './components/MainNavbar';
import Home from './components/content/Home';
import Task from './components/module/task/Task';
import About from './components/content/About';
import store from './store/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <Router>
      <MainNavbar/>
      <Routes>
        <Route exact index element={<Home />} />
        <Route exact path="tasks" element={<Task />} />
        <Route exact path="about" element={<About />} />
        {/* <Route path="*" element={<NoPage />} /> */}
        </Routes>
      </Router>
      </Provider>
  );
}

export default App;
