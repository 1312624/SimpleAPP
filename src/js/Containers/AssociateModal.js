import React, { Component } from 'react';
import Award from './Award';
import request from 'superagent';
import { autobind } from 'core-decorators';

@autobind
export default class AssModal extends Component {

    constructor() {
        super();
        this.state = {
            currentListAward: []
        }
    }

    componentWillMount() {
        let self = this;
        request
            .get('http://localhost:3030/api/award')
            .end((err, res) => {
                self.setState({ currentListAward: res.body });
            });
    }

    AssociateAward() {
        console.log(this.props.code);
        var awards = [];
        $(".checkbox label input[type='checkbox']:checked").each(function () {
            awards.push($(this).val());
        });

        let self = this;
        request
            .put(`http://localhost:3030/api/member/${self.props.code}`)
            .send({ Awards: awards })
            .end((err, res) => {
                if (!err) {
                    alert(`Associate Award To Member ${self.props.code} Successfully`);
                    $('#assoModal').modal('hide');
                }
                else alert(`Something went wrong`);
            });
    }

    render() {
        return (

            <div id='assoModal' class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Choose Awards</h4>
                        </div>
                        <div class="modal-body" style={{ paddingLeft: '35px', overflow: 'auto', height: '400px' }}>
                            <ul>
                                {
                                    this.state.currentListAward.length > 0 ? (
                                        this.state.currentListAward.map(award => {
                                            return (
                                                <li key={award._id}>
                                                    <div class="checkbox" style={{ float: 'left', marginRight: '10px' }}>
                                                        <label>
                                                            <input type="checkbox" value={award._id} />
                                                            <span class="cr"><i class="cr-icon glyphicon glyphicon-ok"></i></span>
                                                        </label>
                                                    </div>

                                                    <Award name={award.Name} />
                                                </li>
                                            );
                                        })
                                    ) : (
                                            <h4>Loading....</h4>
                                        )
                                }
                            </ul>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-primary" onClick={this.AssociateAward}>Associate</button>
                            <button class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}