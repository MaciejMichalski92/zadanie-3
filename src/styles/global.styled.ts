import { createGlobalStyle } from 'styled-components'

import theme from './theme';

export const GlobalStyle = createGlobalStyle`

	*{
		margin: 0;
		padding: 0;
		box-sizing: content-box;
	}

	html{
		--scroll-behavior: smooth;
		scroll-behavior: smooth;
	}

	body{
		font-family: 'Oswald',sans-serif;
	}

	
	.wrapper{
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main{
		flex-grow: 1;
	}

	p {
		font-family: 'Raleway', sans-serif;
		font-size: 13px;

		@media ${theme.breakpoints.tablet} {
			font-size: 15px;
		}
	}

	h1 {
		font-size: clamp(26px, 2vw, 35px);
		text-transform: uppercase;
		text-align: center;
	}

	h2 {
		font-size: clamp(20px, 2vw, 26px);
	}

`;
