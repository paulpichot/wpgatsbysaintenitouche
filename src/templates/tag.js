import React from 'react';
import Layout from '../components/Layout';
import { graphql } from 'gatsby';
//import CategoriesWidget from '../components/Blog/CategoriesWidget';
//import RecentCommentsWidget from '../components/Blog/RecentCommentsWidget';
//import RecentPostsWidget from '../components/Blog/RecentPostsWidget';
import PostEntry from '../components/Blog/PostEntry';
import Meta from '../components/Header/Meta';

const TagTemplate = (props) => {
	const { location, data: { wpgraphql: { tag } } } = props;
	return (
		<Layout location={location}>
			<Meta title={`${tag.title}`} />
			<h2>{tag.name}</h2>

			{tag.posts.nodes && tag.posts.nodes.map((post) => <PostEntry post={post} />)}
		</Layout>
	);
};

export default TagTemplate;

export const pageQuery = graphql`
	query GET_TAG($id: ID!) {
		wpgraphql {
			tag(id: $id) {
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
