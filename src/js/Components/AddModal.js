import React, { Component } from 'react';
import request from 'superagent';
import { autobind } from 'core-decorators';

@autobind
export default class AddModal extends Component {

    onItemAdded() {
        if (this.props.type === 'member')
            this.onMemberAdded();
        else
            this.onAwardAdded();
    }

    onAwardAdded() {
        let self = this;
        request
            .post('http://localhost:3030/api/award')
            .send({ Name: self.refs.inputName.value })
            .set('Accept', 'application/json')
            .end(function (err, res) {
                if(err) alert('Award Name Already Exist')
                else self.props.addNewAward(res.body);
            });
    }

    onMemberAdded() {
        let self = this;
        request
            .post('http://localhost:3030/api/member')
            .send({
                memberCode: self.refs.inputCode.value,
                Name: self.refs.inputName.value,
            })
            .set('Accept', 'application/json')
            .end(function (err, res) {
                if(err) alert('Member Code Already Exist');
                else self.props.addNewMember(res.body);
            });
    }


    render() {
        return (
            <div id={this.props.idModal} class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">{this.props.header}</h4>
                        </div>
                        <div class="modal-body">
                            {
                                this.props.type === 'member' &&
                                <input ref="inputCode" type="text" placeholder="Code" />
                            }
                            <br /><br />
                            <input ref="inputName" type="text" placeholder="Name" />
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary" onClick={this.onItemAdded}>Save</button>
                            <button class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}