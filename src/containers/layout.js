import React, { PropTypes } from 'react';
import Menu from '../components/layout/menu';

export default function Layout(props) {
    return (<div id="layout">
        <Menu />
        {props.children}
        <footer className="footer">&copy; 2017 Leo  </footer>
    </div>);
}