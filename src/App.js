import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faPlusSquare } from '@fortawesome/free-regular-svg-icons'

import Header from './components/header/header.component'
import HomePage from './pages/homepage/homepage.component';
import SignIn from './pages/sign-in/sign-in.component'
import SignUp from './pages/signup/signup.component';
import LandingPage from './pages/landing-page/landing-page.component';
import RestaurantDetails from './pages/restaurant-details/restaurant-details.component';

library.add(fas, faPlusSquare)

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/home' element={<LandingPage />} />
          <Route path='/restaurant/detail' element={<RestaurantDetails />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
