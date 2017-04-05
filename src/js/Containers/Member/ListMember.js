import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Member from './Member';
import * as memberActions from '../../Actions/memberActions';
import AddModal from '../../Components/AddModal';
import { autobind } from 'core-decorators';
import _ from 'lodash';
import { Well } from 'react-bootstrap';

@connect(
    (state) => ({
        members : state.memberReducers
    }),
    (dispatch) => ({
        memberActions : bindActionCreators(memberActions, dispatch)
    })
)
class ListMember extends Component {
    constructor(props) {
        super(props);
    }


    componentWillMount() {
        const { memberActions } = this.props;
        memberActions.getAllMember();
    }

    render() {
        const { members, memberActions } = this.props;
        const { addMember, deleteMember, associateMember, getMemberInfo } = memberActions;

        return (
            <div class="container">
                <button class="btn btn-primary"
                    style={{ marginLeft: '-15px' }}
                    data-toggle="modal"
                    data-target="#addMember">Add New Member</button>
                <br /><br />
                <ul>
                    {
                        !!members.allMembers ?
                            (
                                members.allMembers.map(item => {
                                    return (
                                        <li key={Math.random()}>
                                            <Member name={item.Name}
                                                code={item.memberCode}
                                                onMemberDeleted={deleteMember}
                                                onMemberAssociate={associateMember}
                                                onViewMember={getMemberInfo} />
                                        </li>
                                    );
                                })
                            ) : (
                                <h4>Chưa có member nào</h4>
                            )
                    }
                </ul>

                <AddModal idModal="addMember"
                    header="Add New Member"
                    type="member"
                    addNewMember={addMember}/>
            </div>
        );
    }
}


export default ListMember;