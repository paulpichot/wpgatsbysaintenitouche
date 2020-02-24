import React, { Fragment } from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
//import CategoriesWidget from '../components/Blog/CategoriesWidget';
//import RecentCommentsWidget from '../components/Blog/RecentCommentsWidget';
//import RecentPostsWidget from '../components/Blog/RecentPostsWidget';
import PostEntryMeta from '../components/Blog/PostEntryMeta';
import Meta from '../components/Header/Meta';
import contentParser from 'gatsby-wpgraphql-inline-images';
import Img from 'gatsby-image';

const renderTermNodes = (nodes, title) => (
	<div>
		{title}
		{` `}
		{nodes.map((term) => <p>{term.name}</p>)}
	</div>
);

const renderTerms = (categoryNodes = [], tagNodes = []) => (
	<Fragment>
		{categoryNodes ? renderTermNodes(categoryNodes, `Categories: `) : null}
		{tagNodes && tagNodes.length ? renderTermNodes(tagNodes, `Tags: `) : null}
	</Fragment>
);

const Post = (props) => {
	const {
		location,
		data: { wpgraphql: { post } },
		pageContext: { pluginOptions: { wordPressUrl, uploadsUrl } }
	} = props;
	const { title, content } = post;
	const postExcerpt = post.excerpt;
	const image = post.featuredImage;
	const isRegular = image && image.isRegular;
	let fluidData;
	if (!isRegular) {
		fluidData = image && JSON.parse(image.content);
	}
	if (isRegular) {
		fluidData = image && image.content;
	}

	if (!image) {
		return (
			<Layout location={location}>
				<Meta title={`${post.title}`} description={postExcerpt} />
				<h1>{title}</h1>
				<PostEntryMeta post={post} />
				<div>{contentParser({ content }, { wordPressUrl, uploadsUrl })}</div>
				{post.categories.nodes.length || post.tags.nodes.length ? (
					renderTerms(post.categories.nodes, post.tags.nodes)
				) : null}
			</Layout>
		);
	}

	return (
		<Layout location={location}>
			<Meta title={`${post.title}`} meta />
			<h1>{title}</h1>
			<PostEntryMeta post={post} />
			<Img fluid={fluidData} />
			<div>{contentParser({ content }, { wordPressUrl, uploadsUrl })}</div>
			{post.categories.nodes.length || post.tags.nodes.length ? (
				renderTerms(post.categories.nodes, post.tags.nodes)
			) : null}
		</Layout>
	);
};

export default Post;

export const pageQuery = graphql`
	query GET_POST($id: ID!) {
		wpgraphql {
			post(id: $id) {
				title
				content
				uri
				excerpt
				author {
					name
					slug
					avatar {
						url
					}
				}
				featuredImage {
					sizes
					sourceUrl
					srcSet
					content
				}
				tags {
					nodes {
						name
						link
					}
				}
				categories {
					nodes {
						name
						link
					}
				}
			}
		}
	}
`;
