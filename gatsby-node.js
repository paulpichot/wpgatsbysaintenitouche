const createPosts = require(`./gatsby/createPosts`);
const createPages = require(`./gatsby/createPages`);
const createUsers = require(`./gatsby/createUsers`);
const createCategories = require(`./gatsby/createCategories`);
const createTags = require(`./gatsby/createTags`);

exports.createPages = async ({ actions, graphql }) => {
	const pluginOptions = {
		wordPressUrl: `https://graphql.paulpichot.com/`,
		uploadsUrl: `https://graphql.paulpichot.com/wp-content/uploads/`
	};
	await createPosts({ actions, graphql }, pluginOptions);
	await createPages({ actions, graphql }, pluginOptions);
	await createUsers({ actions, graphql }, pluginOptions);
	await createCategories({ actions, graphql }, pluginOptions);
	await createTags({ actions, graphql }, pluginOptions);
};
