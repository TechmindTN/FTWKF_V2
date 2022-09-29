import React from 'react';



import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Signin from './pages/examples/Signin';
import Settings from './components/Navbar';

function App(){
 

  return (
    <main className="wrapper">
   <Signin/>
    </main>
  );
}
export default App;