import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as homeActions from '../actions/home';
import Menu from '../components/home/menu';
import Main from '../components/home/main';
import { Link } from 'react-router';

class Home extends React.Component {
    componentDidMount() {
        const {dispatch} = this.props;
        dispatch(homeActions.fetchImages());
    }

    render() {
        const {increment, counter, decrement, getThenShow, images, dispatch} = this.props;
        return (
            <div id="layout">
                <Menu />
                <Main images={images} />
            </div>
        );
    }
}

Home.propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
    getThenShow: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    showimages: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        counter: state.home.counter,
        images: state.home.images
    };
}

function mapDispatchToProps(dispatch) {
    return { ...bindActionCreators(homeActions), dispatch: dispatch };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);