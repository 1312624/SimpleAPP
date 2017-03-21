import React, { Component } from 'react';
import Member from './Member';
import Award from './Award';
import request from 'superagent';

export default class MemberInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMember: {}
        }
    }

    componentWillMount() {
        const memberCode = this.props.params.memberCode;

        let self = this;
        request
            .get(`http://localhost:3030/api/member/${memberCode}`)
            .end((err, res) => {
                if (!res) return;
                self.setState({ currentMember: res.body });
            });
    }

    render() {
        return (
            <div class="container">
                <h2 class="text-center">More Info About {this.state.currentMember.Name}</h2>
                <div class="row">
                    <h4>Member Code : <b>{this.state.currentMember.memberCode}</b></h4>
                    <h4>Name : <b>{this.state.currentMember.Name}</b></h4>
                    <h4>List Awards: </h4>
                    {
                        this.state.currentMember.Awards ?
                            (
                                <ul>
                                    {
                                        this.state.currentMember.Awards.map(item => {
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
        );
    }
}