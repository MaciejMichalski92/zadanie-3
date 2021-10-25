import Searchbar from './components/Searcher';
import Title from './components/Title';
import Header from './components/Header';
import Footer from './components/Footer';
import {GlobalContext} from './context'
import { useEffect, useState } from 'react';
import { UserDataTypes } from './components/Searcher/Searcher.types'; 
import { handleFetchData } from './context/fetching.helper';

const App = () => {

	const [fetchedData, setFetchedData] = useState<UserDataTypes | null>(null)

	let data: UserDataTypes | null;
		
		useEffect(()=>{
			const fetchData = async ()=>{
			data = await handleFetchData();
			setFetchedData(data)
		}
			fetchData()
	},[])

  return (
		<GlobalContext.Provider value={fetchedData}>
    <div className="wrapper">
		<Header/>
		<Title primary>Wyszukiwarka Repozytoriów GitHub</Title>
		<Searchbar/>
		<main>
		</main>
		<Footer/>
    </div>
		</GlobalContext.Provider>
  );
}

export default App;
