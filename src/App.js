import logo from './logo.svg';
import React from 'react'

import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';

function App() {


  const name = 'nkdebug';
  const x = true;


  return (
    <div className="container">
      <Header/>
      <Footer/>
    </div>
  );
}

// class App extends React.Component {
//     render() {
//       return <h1>Welcome from React Class</h1>
//     }
// }

export default App;