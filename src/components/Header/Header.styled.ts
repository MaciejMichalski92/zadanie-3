import styled from 'styled-components';
import theme, {sizes} from '../../styles/theme';

export const StyledHeader = styled.div`
	width: 100%;
	max-width: ${sizes.desktop};

	@media ${theme.breakpoints.desktop}{
		margin: 50px auto;
	}

	img{
		width: 100%;
	}

`