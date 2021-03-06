import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
//import CategoriesWidget from '../components/Blog/CategoriesWidget';
//import RecentCommentsWidget from '../components/Blog/RecentCommentsWidget';
//import RecentPostsWidget from '../components/Blog/RecentPostsWidget';
import PostEntry from '../components/Blog/PostEntry';
import Meta from '../components/Header/Meta';

const CategoryTemplate = (props) => {
	const { location, data: { wpgraphql: { category } } } = props;
	return (
		<Layout location={location}>
			<Meta title={`${category.name}`} />

			<h1>Category: {category.name}</h1>

			{category.posts.nodes && category.posts.nodes.map((post) => <PostEntry post={post} />)}
		</Layout>
	);
};

export default CategoryTemplate;

export const pageQuery = graphql`
	query GET_CATEGORY($id: ID!) {
		wpgraphql {
			category(id: $id) {
				id
				name
				slug
				posts(first: 100) {
					nodes {
						...PostEntryFragment
					}
				}
			}
		}
	}
`;
