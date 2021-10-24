import theme from '../../styles/theme';
import {StyledHeader} from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
     <picture>
			 <source media={`${theme.breakpoints.mobile}`} srcSet='./images/github-header.jpg' />
			 <img src="./images/github-header-mobile.jpg" alt="Header Git Hub" />
		 </picture>
    </StyledHeader>
  );
};
