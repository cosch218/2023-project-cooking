import { Routes, Route } from 'react-router-dom';

import "./css/reset.css";
import "./css/style.css";
import './css/sign.css'




import Main from "./pages/Main";
import Recipe from './pages/Recipe';
import Town from './pages/Town';
import Class from './pages/Class';
import Mypage_MyRecipe from './pages/Mypage_MyRecipe';
import Mypage_RecipeBook from './pages/Mypage_RecipeBook';
import SignIn from './pages/SignIn';
import SignUpAgreement from './pages/SignUpAgreement';
import SignUpForm from './pages/SignUpForm';
import Layout from './pages/Layout';

import Nav from './components/Nav';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Main/>}/>
          <Route path='/recipe' element={<Recipe/>}/>
          <Route path='/town' element={<Town/>}/>
          <Route path='/class' element={<Class/>}/>
          <Route path='/mypage_myrecipe' element={<Mypage_MyRecipe/>}/>
          <Route path='/mypage_recipebook' element={<Mypage_RecipeBook/>}/>
        </Route>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup_agreement' element={<SignUpAgreement/>}/>
        <Route path='/signup_form' element={<SignUpForm/>}/>
      </Routes>
    </div>
  );
}

export default App;