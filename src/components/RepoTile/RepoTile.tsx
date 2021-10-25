import {StyledRepoTile, StyledRepoTitle,  StyledRepoDescription} from './RepoTile.styled';
import {RepoTileTypes} from './RepoTile.types';

export const RepoTile = ({title, name, url, description}:RepoTileTypes) => {
  return (
			<a href={url} target="_blank" rel="noopener noreferrer">
    <StyledRepoTile>
			<StyledRepoTitle>{title}</StyledRepoTitle>     
			<StyledRepoDescription>{description}</StyledRepoDescription>     
    </StyledRepoTile>
		</a>
  );
};
