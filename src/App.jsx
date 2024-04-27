import {BrowserRouter,Routs,Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Profile from './Pages/Profile';
import Signin from './Pages/SignIn';
import SignUp from './Pages/SignUp';

const App = () => {
  return <BrowserRouter>
    <Routs>
      <Route path='/' element={<Home/>} />
      <Route path='/sign-in' element={<Signin/>} />
      <Route path='/sign-up' element={<SignUp/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/profile' element={<Profile/>} />
    </Routs>
    </BrowserRouter>
  
}

export default App