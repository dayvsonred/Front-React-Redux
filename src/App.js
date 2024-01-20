import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Switch } from 'react-router-dom';
import Home from './components/Home';
import Cadastro from './components/Cadastro';
import GraficoBarras from './components/GraficoBarras';

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <Switch>
//           <Route path="/" exact component={Home} />
//           <Route path="/cadastro" component={Cadastro} />
//           <Route path="/grafico-barras" component={GraficoBarras} />
//         </Switch>
//       </Router>
//     );
//   }
// }

const App = () => {
  return (
    <Router>
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cadastro" component={Cadastro} />
          <Route path="/grafico-barras" component={GraficoBarras} />
      </Switch>
    </Router>
  );
};

export default App;
