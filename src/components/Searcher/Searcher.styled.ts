import styled from 'styled-components';
import theme, {sizes} from '../../styles/theme';

export const StyledSearchbar = styled.div`
	max-width: ${sizes.desktop};
	margin: 20px;
	padding: 20px;
	background-color: ${theme.colors.red};
	box-shadow: 0px 3px 6px 2px #666;

	@media ${theme.breakpoints.tablet}{
		padding: 50px;
	}

	@media ${theme.breakpoints.desktop}{
		margin: 50px auto;
		width: ${sizes.desktop};
	}

	h2{
		font-weight: 300;
		color: ${theme.colors.white};
	}

`

export const StyledSearchDiv = styled.div`
	display: flex;
	flex-direction: column;
	justify-items: center;
	align-items: center;
  padding: 10px 20px;
	border-radius: 10px;
	background-color: ${theme.colors.black};

	@media ${theme.breakpoints.mobile}{
    flex-direction: row
	}

	input, button{
		padding: 10px 15px;
		border-radius: 10px;
	}

	input{
		flex-grow: 1;
		margin: 20px 0;
	
		@media ${theme.breakpoints.mobile}{
			margin: 0 10px;
		}
	}

	button{
		font-weight: bold;
		text-transform: uppercase;
		background-color: ${theme.colors.white};
		border: none;
		cursor: pointer;
	}
`