import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
	createHttpLink,
  gql,
} from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { UserDataTypes } from './Searchbar.types';

export const handleFetchData = async ()=>{

	const httpLink = createHttpLink({
		uri: `${process.env.REACT_APP_GITHUB_API_URL}`,
	});

	const authLink = setContext((_, { headers }) => {

		return {
			headers: {
				...headers,
				authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
			}
		}
	});

	const client = new ApolloClient({
		link: authLink.concat(httpLink),
		cache: new InMemoryCache()
	});

	const {data} = await client.query({
		query: gql`
			{
				user(login: "MaciejMichalski92") {
					avatarUrl
					name
					repositories(first: 100) {
						edges {
							node {
								id
								name
								url
								description
							}
						}
					}
				}
			}
		`
	})
	
	console.log(data);

	return data;
	}

	const addToContext = (data: UserDataTypes ) => {
		console.log('hello');
		
	}

export const handleSearch = async (e: React.FormEvent<HTMLFormElement>)=>{
	e.preventDefault();
	const data = await handleFetchData();
	addToContext(data)
}


