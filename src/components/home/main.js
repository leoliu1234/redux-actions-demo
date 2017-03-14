import React from 'react';

export default class Main extends React.Component {
    render() {
        return (
            <div id="main">
                <table className="pure-table pure-table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Make</th>
                            <th>Model</th>
                            <th>Year</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Honda</td>
                            <td>Accord</td>
                            <td>2009</td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td>Toyota</td>
                            <td>Camry</td>
                            <td>2012</td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td>Hyundai</td>
                            <td>Elantra</td>
                            <td>2010</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}