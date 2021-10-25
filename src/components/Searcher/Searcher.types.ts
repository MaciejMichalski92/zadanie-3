import { ReactNode } from 'react';

export interface SearchbarTypes {
  children: ReactNode;
}

interface EdgesArrayTypes {
	__typename: string, 
  node: {
		description: null,
		id: string,
		name: string,
		url: string
	}}

export interface UserDataTypes {
	
  user?: {
		avatarUrl?: string,
		name?: string,
		repositories?: {
			edges?: EdgesArrayTypes[],
		},
		__typename?: string, 
	}
}
