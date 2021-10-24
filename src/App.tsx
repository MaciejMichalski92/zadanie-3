import Searchbar from './components/Searchbar';
import Title from './components/Title';
import Header from './components/Header';
import Footer from './components/Footer';
import {GlobalContext} from './context'
import { useReducer } from 'react';

const App = () => {
	

  return (
		//<GlobalContext.Provider value ={}>
    <div className="wrapper">
		<Header/>
		<Title primary>Wyszukiwarka Repozytoriów GitHub</Title>
		<Searchbar/>
		<main>
		</main>
		<Footer/>
    </div>
		//</GlobalContext.Provider>
  );
}

export default App;
