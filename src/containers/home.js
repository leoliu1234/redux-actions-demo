import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as DashboardActions from '../actions/dashboard';
import Menu from '../components/home/menu';
import Main from '../components/home/main';
import { Link } from 'react-router';

class Home extends React.Component {
    render() {
        const {increment, counter, decrement, getThenShow} = this.props;
        return (
            <div id="layout">
                <Menu />
                <Main/>
                <Link to="/">App</Link>
            </div>
        );
    }
}

Home.propTypes = {
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
    getThenShow: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        counter: state.home.counter
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(DashboardActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);