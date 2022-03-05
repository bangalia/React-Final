//import logo from './logo.svg';
import './App.css';

import Title from './components/Title';
import Footer from './components/Footer';
import CardList from './components/CardList';
import BigCard from './components/BigCard';



function App() {
  return (
    <div className="App">
      <Title />
      <CardList/>
      <BigCard/>
      <Footer/>
    </div>
  );
}

export default App;
