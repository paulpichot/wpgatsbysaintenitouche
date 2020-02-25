import React from 'react';

import Layout from '../components/Layout';
import Meta from '../components/Header/Meta';

const Home = ({ location }) => (
	<Layout location={{ location }}>
		<Meta title="Accueil" />
		<h1>Accueil</h1>
	</Layout>
);

export default Home;
