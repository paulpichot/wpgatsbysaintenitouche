import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header/';
import '../styles/global/container.sass';
import '../styles/layout/layout.sass';

const Layout = ({ children, location }) => (
	<div>
		<Header location={location} />
		<main className="container plr-container mzauto">{children}</main>
	</div>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
