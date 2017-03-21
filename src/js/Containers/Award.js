import React, { Component } from 'react';
import { autobind } from 'core-decorators';

@autobind
export default class Award extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div class="row">
                <div class="panel panel-default col-md-6" style={{ padding: 0 }}>
                    <div class="panel-heading">
                        Award
                    </div>
                    <div class="panel-body">
                        {this.props.name}
                    </div>
                </div>
            </div>
        );
    }
}