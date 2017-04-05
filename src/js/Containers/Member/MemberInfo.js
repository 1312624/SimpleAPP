import React, { Component } from 'react';
import Member from './Member';
import Award from '../Award/Award';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMemberInfo, viewMemberSuccess } from '../../Actions/memberActions';

@connect(
    (state) => ({
        currentMember: state.memberReducers
    }),
    (dispatch) => ({
        actions: bindActionCreators({ getMemberInfo, viewMemberSuccess }, dispatch)
    })
)
class MemberInfo extends Component {

    componentWillMount() {
        const { memberCode } = this.props.params;
        const { getMemberInfo } = this.props.actions;
        getMemberInfo(memberCode);
    }

    render() {
        const { targetMember } = this.props.currentMember;
        return (
            !!targetMember ? (
                <div class="container">
                    <h2 class="text-center">More Info About {targetMember.Name}</h2>
                    <div class="row">
                        <h4>Member Code : <b>{targetMember.memberCode}</b></h4>
                        <h4>Name : <b>{targetMember.Name}</b></h4>
                        <h4>List Awards: </h4>
                        {
                            targetMember.Awards ?
                                (
                                    <ul>
                                        {
                                            targetMember.Awards.map(item => {
                                                return (
                                                    <li key={item._id}>
                                                        <Award name={item.Name} />
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                ) : (
                                    <h4>Dont have now</h4>
                                )
                        }
                    </div>
                </div>
            ) : (
                    <h4>LOADING......</h4>
                )
        );
    }
}

export default MemberInfo;