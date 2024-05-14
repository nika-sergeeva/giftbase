import { Route, Routes } from "react-router-dom";
import { Suspense, useState } from "react";
import { MyListAsync } from "../pages/MyList/MyList.async";
import { ForFriendAsync } from "../pages/ForFriend/ForFriend.async";
import { Link } from "react-router-dom";
import './styles/index.scss';
import { useTheme } from "./styles/theme/useTheme";

 const App = () => {
   
   const {theme, toggleTheme} = useTheme();

 return (
<div className={`app ${theme}`}>
   <button onClick={toggleTheme}>TOGGLE THEME</button>
   <Link to={'/'}>My List</Link>
   <Link to={'/forfriend'}>For</Link>
   <Suspense fallback={''}>
   <Routes>
      <Route path={'/'} element={<MyListAsync />}/>
      <Route path={'/forfriend'} element={<ForFriendAsync />}/>
   </Routes>
   </Suspense>
   
</div>
 );
}

export default App