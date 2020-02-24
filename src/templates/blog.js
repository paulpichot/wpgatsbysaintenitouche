import React, { Component } from 'react';
import { graphql, navigate } from 'gatsby';
//import CategoriesWidget from '../components/Blog/CategoriesWidget';
//import RecentCommentsWidget from '../components/Blog/RecentCommentsWidget';
//import RecentPostsWidget from '../components/Blog/RecentPostsWidget';
import PostEntry from '../components/Blog/PostEntry';
import BlogLayout from '../components/Blog/Layout';
import Meta from '../components/Header/Meta';

class IndexPage extends Component {
	renderPreviousLink = () => {
		const { pageContext: { pageNumber } } = this.props;

		let previousLink = null;

		if (!pageNumber) {
			return null;
		} else if (1 === pageNumber) {
			previousLink = `/`;
		} else if (1 < pageNumber) {
			previousLink = `/page/${pageNumber - 1}`;
		}

		return (
			<button type="primary" onClick={() => navigate(previousLink)}>
				Previous Posts
			</button>
		);
	};

	renderNextLink = () => {
		const { pageContext: { hasNextPage, pageNumber } } = this.props;

		if (hasNextPage) {
			return (
				<button type="primary" onClick={() => navigate(`/page/${pageNumber + 1}`)}>
					Next Posts
				</button>
			);
		} else {
			return null;
		}
	};

	render() {
		const { data, location, pageContext: { pageNumber } } = this.props;
		const blogPageNumber = pageNumber ? ` Page ${pageNumber}` : ``;
		return (
			<BlogLayout pageNumber={pageNumber} location={{ location }}>
				<Meta title={`Blog${blogPageNumber}`} />
				{data &&
					data.wpgraphql &&
					data.wpgraphql.posts.nodes.map((post) => (
						<div key={post.id}>
							<PostEntry post={post} />
						</div>
					))}
				{this.renderPreviousLink()}

				{this.renderNextLink()}
			</BlogLayout>
		);
	}
}

export default IndexPage;

export const query = graphql`
	query GET_POSTS($ids: [ID]) {
		wpgraphql {
			posts(where: { in: $ids }) {
				nodes {
					...PostEntryFragment
				}
			}
		}
	}
`;
