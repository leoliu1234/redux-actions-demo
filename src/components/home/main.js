import React, { PropTypes } from 'react';

export default class Main extends React.Component {
    render() {
        const {images} = this.props;
        return (
            <div id="main">
                <header className="header">Header</header>
                <section className="content">
                    <div className="pure-g">
                        <div className="pure-u-1-3">
                            <div className="image-details">
                                <img src="/images/src_1.jpg" />
                            </div>
                        </div>
                        <div className="pure-u-1-3">
                            <div className="image-details">
                                <img src="/images/src_2.jpg" />
                            </div>
                        </div>
                        <div className="pure-u-1-3">
                            <div className="image-details">
                                <img src="/images/src_3.jpg" />
                            </div>
                        </div>
                    </div>
                    <div className="pure-g">
                        <div className="pure-u-1-3">{JSON.stringify(images)}</div>
                        <div className="pure-u-1-3"><p>Thirds</p></div>
                        <div className="pure-u-1-3"><p>Thirds</p></div>
                    </div>
                    <div className="pure-g">
                        <div className="pure-u-1-3"><p>Thirds</p></div>
                        <div className="pure-u-1-3"><p>Thirds</p></div>
                        <div className="pure-u-1-3"><p>Thirds</p></div>
                    </div>
                    <div className="pure-g">
                        <div className="pure-u-1-3"><p>Thirds</p></div>
                        <div className="pure-u-1-3"><p>Thirds</p></div>
                        <div className="pure-u-1-3"><p>Thirds</p></div>
                    </div>
                    <div className="pure-g">
                        <div className="pure-u-1-3"><p>Thirds</p></div>
                        <div className="pure-u-1-3"><p>Thirds</p></div>
                        <div className="pure-u-1-3"><p>Thirds</p></div>
                    </div>
                </section>
                <footer className="footer">Footer</footer>
            </div>
        );
    }
}

Main.propTypes = {
    images: PropTypes.array.isRequired
};