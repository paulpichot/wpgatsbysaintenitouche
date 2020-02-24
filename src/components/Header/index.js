import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import '../../styles/global/container.sass';
import '../../styles/header/header.sass';

const Index = ({ location }) => (
	<header>
		<div className="nav">
			<div className="container--header container plr-container mzauto">
				<Logo location={location} />
				<Menu location={location} />
			</div>
		</div>
	</header>
);

export default Index;
