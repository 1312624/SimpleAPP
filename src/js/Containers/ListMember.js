import React, { Component } from 'react';
import Member from '../Containers/Member';
import AddModal from '../Components/AddModal';
import request from 'superagent';
import { autobind } from 'core-decorators';
import _ from 'lodash';

@autobind
export default class ListMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listMember: [],
        }
    }

    componentWillMount() {
        let self = this;
        request
            .get('http://localhost:3030/api/member')
            .end((err, res) => {
                if (!res) return;
                self.setState({ listMember: res.body });
            });
    }

    addMember(item) {
        this.state.listMember.push(item);
        this.setState({ listMember: this.state.listMember });
        $('#addMember').modal('hide');
    }

    deleteMember(key) {
        let self = this;
        request
            .delete(`http://localhost:3030/api/member/${key}`)
            .end((err, res) => {
                _.remove(self.state.listMember, (item) => {
                    return item.memberCode === key;
                });


                self.setState({
                    listMember: self.state.listMember
                });
            });
    }

    render() {

        return (
            <div class="container">
                <button class="btn btn-primary"
                    style={{ marginLeft: '-15px' }}
                    data-toggle="modal"
                    data-target="#addMember">Add New Member</button>
                <br /><br />
                <ul>
                    {
                        this.state.listMember.length > 0 ?
                            (
                                this.state.listMember.map(item => {
                                    return (
                                        <li key={Math.random()}>
                                            <Member name={item.Name}
                                                code={item.memberCode}
                                                onMemberDeleted={this.deleteMember} />
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
                    addNewMember={this.addMember} />

            </div>
        );
    }
}