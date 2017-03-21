import React, { Component } from 'react';
import Award from '../Containers/Award';
import AddModal from '../Components/AddModal';
import request from 'superagent';
import { autobind } from 'core-decorators';

@autobind
export default class ListAward extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listAward: [],
        }
    }

    componentWillMount() {
        let self = this;
        request
            .get('http://localhost:3030/api/award')
            .end((err, res) => {
                if (!res) return;
                self.setState({ listAward: res.body });
            });
    }

    addAward(item) {
        this.state.listAward.push(item);
        this.setState({ listAward: this.state.listAward });
        $('#addAward').modal('hide');
    }

    render() {

        return (
            <div class="container">
                <button class="btn btn-primary"
                    style={{ marginLeft: '-15px' }}
                    data-toggle="modal"
                    data-target="#addAward">Add New Award</button>
                <br /><br />
                <ul>
                    {
                        this.state.listAward.length > 0 ? (

                            this.state.listAward.map(item => {
                                return (
                                    <li key={item._id}>
                                        <Award name={item.Name} />
                                    </li>
                                );
                            })
                        ) : (
                            <h4>Chưa có award nào</h4>
                        )
                    }
                </ul>

                <AddModal idModal="addAward"
                    header="Add New Award"
                    type="award"
                    addNewAward={this.addAward} />
            </div>
        );
    }
}