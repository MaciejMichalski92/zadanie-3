import { TitleTypes } from './Title.types';

export const Title = ({ children, primary }: TitleTypes) => {
  return primary ? <h1>{children}</h1> : <h2>{children}</h2>;
};
