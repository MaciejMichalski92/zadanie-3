export const sizes = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1200px',
};

export const theme = {
  colors: {
    red: '#9e1c1c',
    black: '#000',
    white: '#fff',
		lightGrey: '#ddd', 
		darkGrey: '#aaa', 
  },
  breakpoints: {
    mobile: `(min-width: ${sizes.mobile})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    desktop: `(min-width: ${sizes.desktop})`,
  },
};
