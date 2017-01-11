import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as DashboardActions from '../actions/dashboard';
import Navbar from '../components/navbar';
import { Link } from 'react-router';

class Home extends React.Component {
    render() {
        const {increment, counter, decrement, getThenShow} = this.props;
        return (
            <div>
                <Navbar />
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