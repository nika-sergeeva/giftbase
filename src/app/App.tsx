import { Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import './styles/index.scss'
import { Suspense } from "react";
import { MyListAsync } from "../pages/MyList/MyList.async";
import { ForFriendAsync } from "../pages/ForFriend/ForFriend.async";
import { Link } from "react-router-dom";

 const App = () => {
console.log('Hello!')
 return (
<div className="app">
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