import { Link} from 'gatsby';
import React from 'react';
import SiteTitle from './SiteTitle/';
import '../../../styles/header/logo/logo.sass'

const Logo = ({location}) => {
    const isHome = location.pathname == undefined
    return (
        <>
            <div className="nav__logo no-logo">
            {isHome ? (
                <h1
                    className="nav__logo-container"
                    >
                    <Link to="/">
                        <SiteTitle/>
                    </Link>
                </h1>
            ) : (
                <span
                    className="nav__logo-container"
                    >
                    <Link to="/">
                        <SiteTitle/>
                    </Link>
                </span>
            )}
            </div>
        </>
    )

}

export default Logo;
