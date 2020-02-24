import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
//import CategoriesWidget from '../components/Blog/CategoriesWidget';
//import RecentCommentsWidget from '../components/Blog/RecentCommentsWidget';
//import RecentPostsWidget from '../components/Blog/RecentPostsWidget';
import Meta from '../components/Header/Meta';
import contentParser from 'gatsby-wpgraphql-inline-images';

const Page = (props) => {
	const {
		location,
		data: { wpgraphql: { page } },
		pageContext: { pluginOptions: { wordPressUrl, uploadsUrl } }
	} = props;
	const { title, content } = page;
	return (
		<Layout location={location}>
			<Meta title={`${page.title}`} />

			<h1>{title}</h1>

			<div>{contentParser({ content }, { wordPressUrl, uploadsUrl })}</div>
		</Layout>
	);
};

export default Page;

export const pageQuery = graphql`
	query GET_PAGE($id: ID!) {
		wpgraphql {
			page(id: $id) {
				title
				content
				uri
			}
		}
	}
`;
