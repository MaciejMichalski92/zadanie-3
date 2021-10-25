import { useState } from 'react';
import Title from '../Title';
import RepoTile from '../RepoTile';
import {StyledSearchbar, StyledSearchDiv} from './Searcher.styled';
import { useGlobalContext } from '../../context';



export const Searcher = () => {
	
	const userFromContext = useGlobalContext();
	const [searchedWord, setSearchedWord] = useState<string>('');


	const tilesMapped = userFromContext?.user?.repositories?.edges!.filter(({node:{name}})=>{
		if (searchedWord.length >=3)
		  return name.toLowerCase().includes(searchedWord.toLowerCase())
		else return name
	})!.map(({node:{description,id,name,url}})=>(
			<RepoTile key={id} title={name} description={description? description: "nie posiada opisu"} name={name} url={url}/>
	))
	
	
  return (
		<>
    <StyledSearchbar>
      <Title>Wpisz nazwę:</Title>
			<StyledSearchDiv >
				<input type="text" placeholder='Wpisz...' value={searchedWord} onChange={e=> setSearchedWord(e.target.value)}/>
			</StyledSearchDiv>
    </StyledSearchbar>
		<main>
			{tilesMapped?tilesMapped: null}
		</main>
		</>
  );
};
