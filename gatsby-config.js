module.exports = {
	siteMetadata: {
		title: `Wordpress x Gatsby x Sainte Nitouche`,
		description: `Wordpress x Gatsby x Sainte Nitouche`,
		author: `Paul Pichot`,
		wordPressUrl: `/`,
		siteLink: `/`
	},
	plugins: [
		// Setup WPGraphQL.com to be the source
		{
			resolve: `gatsby-source-graphql`,
			options: {
				// This type will contain remote schema Query type
				typeName: `WPGraphQL`,
				// This is field under which it's accessible
				fieldName: `wpgraphql`,
				// Url to query from
				url: `https://graphql.paulpichot.com/graphql`
			}
		},
		{
			resolve: 'gatsby-wpgraphql-inline-images',
			options: {
				wordPressUrl: `https://graphql.paulpichot.com/`,
				uploadsUrl: `https://graphql.paulpichot.com/wp-content/uploads/`,
				processPostTypes: ['Page', 'Post'],
				graphqlTypeName: `WPGraphQL`
			}
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `gatsby-wpgraphql-starter`,
				short_name: `starter`,
				start_url: `/`,
				background_color: `#f0f2f5`,
				theme_color: `#001529`,
				display: `minimal-ui`,
				icon: `src/images/wpgraphql-logo.png` // This path is relative to the root of the site.
			}
		},
		{
			resolve: 'gatsby-plugin-sass'
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		//`gatsby-plugin-offline`,
	]
};
