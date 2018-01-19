import React from 'react';

class FooterSite extends React.Component {
    render() {
        return (
            <footer className="footer-site">
                <div className="container">
                    <ul className="flex-content-center-lg">
                        <li className="bottom-palitra footer-site-getintouch">
                            <h3>Get in touch</h3>
                            <ul>
                                <li>
                                    <i className="fa fa-flag" aria-hidden="true"></i>
                                    <p>
                                        Address: <span>321 Street Name, United Kingdom, London</span>
                                    </p>
                                </li>
                                <li>
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                    <p>
                                        Phone: <span>+7 998 71 150 30 20</span>
                                    </p>
                                </li>
                                <li>
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                    <p>
                                        Email: <span>info@ambertheme.com</span>
                                    </p>
                                </li>
                                <div className="wrap-img">
                                    <img className="max-width" src="img/map.jpg"/>
                                </div>
                            </ul>
                        </li>
                        <li className="bottom-palitra footer-site-twitter">
                            <h3>Latest tweets</h3>
                            <ul>
                                <li>
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                    <p>CMS Masters And Their Best Web Design Tools <a className="p-tifany" href="">#bestwebdesigntools</a><a className="p-tifany" href=""> #webdesign </a></p>
                                    <span>— about 12 min ago</span>
                                </li>
                                <li>
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                    <p>WOOCOMMERCE functionality added!!! See Industrial theme become even powerful! -<a className="p-tifany" href="">bit.ly/industrial-wp</a></p>
                                    <span>— about 47 days ago</span>
                                </li>
                                <li>
                                    <i className="fa fa-twitter" aria-hidden="true"></i>
                                    <p>CMS Masters And Their Best Web Design Tools <a className="p-tifany" href="">#bestwebdesigntools</a><a className="p-tifany" href=""> #webdesign </a></p>
                                </li>
                            </ul>
                        </li>
                        <li className="bottom-palitra footer-site-follow">
                            <h3>Follow us</h3>
                            <ul>
                                <li>
                                    <a href="" className="a-facebook"></a>
                                    <p>Like us on Facebook</p>
                                </li>
                                <li>
                                    <a href="" className="a-twitter"></a>
                                    <p>Like us on Twitter</p>
                                </li>
                                <li>
                                    <a href="" className="a-youtube"></a>
                                    <p>Watch videos on YouTube</p>
                                </li>
                                <li>
                                    <a href="" className="a-inst"></a>
                                    <p>Friend us on Instagram</p>
                                </li>
                                <li>
                                    <a href="" className="a-pinter"></a>
                                    <p>Repin on Pinterest</p>
                                </li>
                            </ul>
                        </li>
                        <li className="bottom-palitra footer-site-posts">
                            <h3>Popular posts</h3>
                            <ul>
                                <li>
                                    <h4>September, 30</h4>
                                    <a href="">Candy canes dragée pudding. Donut cheesecake I love chocolate icing </a>
                                </li>
                                <li>
                                    <h4>April, 22</h4>
                                    <a href="">Muffin croissant cookie sesame snaps. Ice cream donut cookie gingerbread</a>
                                </li>
                                <li>
                                    <h4>May, 12</h4>
                                    <a href="">Cotton candy muffin tart gummies candy danish liquorice chupa chups tootsie roll</a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className="footer-site-bottom">
                        <ul>
                            <li><p>© 2014 StylemixThemes. All rights reserved.</p></li>
                            <li><p>Powered by WordPress.</p></li>
                        </ul>
                        <a href="" className="button-type-four">Back to the top of page</a>
                    </div>
                </div>
            </footer>
        )
    }
}
export default FooterSite