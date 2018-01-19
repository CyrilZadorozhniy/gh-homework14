import React from 'react';

class HeaderSite extends React.Component {
    render() {
        return (
            <header className="flex-dir-cn-r-sm">
                <div className="header-top-bar">
                    <div className="container flex-content-between-sm flex-align-center">
                        <input className="input-search resp-ind-sm" type="text" placeholder="Search"/>
                        <ul className="flex-content-between">
                            <li><a href="" className="a-login">login</a></li>
                            <li className="indent-left-35"><a href="" className="a-register">Register</a></li>
                        </ul>
                    </div>
                </div>
                <div className="header-bottom-bar">
                    <nav className="navbar navbar-expand-md navbar-light bg-light">
                        <div className="container flex-content-between">
                            <div className="wrap-logo">
                                <img className="max-width" src="img/logo.png" alt="Amber"/>
                                <h1 className="indent-text-hide">Amber</h1>
                            </div>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="flex-content-between-sm nav-top">
                                    <li>
                                        <a href="index.html" className="nav-link">home</a>
                                    </li>
                                    <li>
                                        <a href="blog-post.html" className="nav-link">typografy</a>
                                    </li>
                                    <li>
                                        <a href="blog.html" className="nav-link">blog</a>
                                    </li>
                                    <li>
                                        <a href="pages.html" className="nav-link">pages</a>
                                    </li>
                                    <li>
                                        <a href="" className="nav-link">elements</a>
                                    </li>
                                    <li>
                                        <a href="" className="nav-link">ecomerse</a>
                                    </li>
                                    <li>
                                        <a href="" className="nav-link">megamenu</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
        )
    }
}
export default HeaderSite
