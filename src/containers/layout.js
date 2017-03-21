import React, { PropTypes } from 'react';
import Menu from '../components/layout/menu';

export default function Layout(props) {
    return (<div id="layout">
        <Menu />
        {props.children}
    </div>);
}