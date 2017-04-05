import React, { Component } from 'react';
import Award from './Award/Award';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getAllAwards, getAllAwardsSuccess } from '../Actions/awardActions';

@connect(
    (state) => ({
        listAwards: state.awardReducers
    }),
    (dispatch) => ({
        actions: bindActionCreators({ getAllAwards, getAllAwardsSuccess }, dispatch)
    })
)
@autobind
class AssModal extends Component {

    componentWillMount() {
        const { getAllAwards } = this.props.actions;
        getAllAwards();
    }

    AssociateAward(idModal, code, onMemberAssociate) {
        var awards = [];
        $(".checkbox label input[type='checkbox']:checked").each(function () {
            awards.push($(this).val());
        });


        onMemberAssociate(code, awards).then((result) => {
            alert(result.text);
        });

        $(`#${idModal}`).modal('hide');
    }

    render() {
        const { code, listAwards, idModal, onMemberAssociate } = this.props;
        return (

            <div id={idModal} class="modal fade" role="dialog">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h4 class="modal-title">Choose Awards</h4>
                        </div>
                        <div class="modal-body" style={{ paddingLeft: '35px', overflow: 'auto', height: '400px' }}>
                            <ul>
                                {
                                    listAwards.length > 0 ? (
                                        listAwards.map(award => {
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
                            <button class="btn btn-primary" onClick={ () => this.AssociateAward(idModal, code, onMemberAssociate) }>Associate</button>
                            <button class="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default AssModal;