import logo from './logo.svg';
import './App.css';

import Title from './components/Title';
import Footer from './components/Footer';
import CardList from './components/CardList';


function App() {
  return (
    <div className="App">
      <Title />
      <CardList/>
      <Footer/>
    </div>
  );
}

export default App;
