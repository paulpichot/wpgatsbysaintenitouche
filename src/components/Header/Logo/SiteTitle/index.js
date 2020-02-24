import { StaticQuery} from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const SiteTitle = ({location, data}) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
        `}


		render={(data) => (
            <span>{data.site.siteMetadata.title}</span>
		)}
	/>
);

SiteTitle.propTypes = {
	siteTitle: PropTypes.string
};

SiteTitle.defaultProps = {
	siteTitle: ``
};

export default SiteTitle;
