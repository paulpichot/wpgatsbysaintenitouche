import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
//import CategoriesWidget from '../components/Blog/CategoriesWidget';
//import RecentCommentsWidget from '../components/Blog/RecentCommentsWidget';
//import RecentPostsWidget from '../components/Blog/RecentPostsWidget';
import PostEntry from '../components/Blog/PostEntry';
import Meta from '../components/Header/Meta';

const User = (props) => {
	const { location, data: { wpgraphql: { user } } } = props;
	return (
		<Layout location={location}>
			<Meta title={`${user.name}`} />

			<h1>{user.name}</h1>
			<h2>Latest Posts</h2>
			{user.posts.nodes.map((post) => <PostEntry post={post} />)}
		</Layout>
	);
};

export default User;

export const pageQuery = graphql`
	query user($id: ID!) {
		wpgraphql {
			user(id: $id) {
				name
				avatar {
					url
				}
				posts {
					nodes {
						...PostEntryFragment
					}
				}
			}
		}
	}
`;
