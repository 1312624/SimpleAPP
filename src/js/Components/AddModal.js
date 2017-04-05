import React, { Component } from 'react';
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
        const { addNewAward } = this.props;
        addNewAward(this.inputName.value);
        $(`#${this.props.idModal}`).modal('hide');
    }

    onMemberAdded() {
        const { addNewMember } = this.props;
        addNewMember(this.inputCode.value, this.inputName.value);
        $(`#${this.props.idModal}`).modal('hide');
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
                                <input ref= { (input) => this.inputCode = input } type="text" placeholder="Code" />
                            }
                            <br /><br />
                            <input ref= { (input) => this.inputName = input } type="text" placeholder="Name" />
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