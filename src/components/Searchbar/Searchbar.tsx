import Title from '../Title';
import { handleSearch } from './Searchbar.hooks';
import {StyledSearchbar, StyledForm} from './Searchbar.styled';

export const Searchbar = () => {



  return (
    <StyledSearchbar>
      <Title>Wpisz nazwę:</Title>
			<StyledForm onSubmit={e => handleSearch(e)}>
				<input type="text" placeholder='Wpisz...' />
				<button type="submit">Wyszukaj</button>
			</StyledForm>
    </StyledSearchbar>
  );
};
