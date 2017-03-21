import React, { Component } from 'react';
import ListMember from '../Containers/ListMember';

export default class IndexPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="container">
                <ListMember />
            </div>
        );
    }
}