import React from "react";
import { Link } from 'react-router';

export default class Header extends React.Component {
    render() {
        return (
            <nav class="navbar navbar-default">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">Example App</a>
                    </div>
                    <ul class="nav navbar-nav">
                        <li class="active">
                            <Link to="/">Members</Link>
                        </li>
                        <li>
                            <Link to="/awards">Awards</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
