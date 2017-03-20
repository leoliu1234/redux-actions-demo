import React, { PropTypes } from 'react';

export default class Main extends React.Component {
    render() {
        const { images } = this.props;

        var imageElements = images.map(img => {
            return <div className="pure-u-1-5">
                <div className="image-details">
                    <img src={img.url} />
                </div>
            </div>
        });
        return (
            <div id="main">
                <header className="header">Header</header>
                <section className="content">
                    <div className="pure-g">
                        {imageElements}
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