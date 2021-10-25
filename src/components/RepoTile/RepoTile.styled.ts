import styled from 'styled-components';
import theme from '../../styles/theme';

export const StyledRepoTile = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 30px 0;
	
	transition: .3s ;

	:hover {
    box-shadow: 1px 2px 5px ${theme.colors.darkGrey};
  }

	img {
		width: 100%;
	}
`
export const StyledRepoTitle = styled.h3`
	font-size: 16px;
	font-weight: bold;
	margin: 10px 0 ;

`
export const StyledRepoDescription = styled.p`
	font-size: 13px;
	text-align: center;
	
`