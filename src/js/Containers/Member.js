import React, { Component } from 'react';
import Award from './Award';
import request from 'superagent';
import { autobind } from 'core-decorators';
import { browserHistory } from "react-router";
import AssModal from './AssociateModal';


@autobind
export default class Member extends Component {

    Delete() {
        this.props.onMemberDeleted(this.props.code);
    }

    openAwardModal() {
        $('#assoModal').modal('show');
    }



    MoreInfo() {
        browserHistory.push(`/member/${this.props.code}`);
    }

    render() {
        return (
            <div class="row">
                <AssModal code={this.props.code} />
                <div class="panel panel-default col-md-6" style={{ padding: 0 }}>
                    <div class="panel-heading">
                        {this.props.code}
                    </div>
                    <div class="panel-body">
                        {this.props.name}
                        <i class="fa fa-ellipsis-v member-3dots">
                            <div class="member-3dots-content">
                                <div onClick={this.openAwardModal}><p>Associate Award</p></div>
                                <div onClick={this.MoreInfo}><p>More Info</p></div>
                                <div onClick={this.Delete}><p>Delete</p></div>
                            </div>
                        </i>
                    </div>
                </div>
            </div>

        );
    }
}