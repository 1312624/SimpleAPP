import React, { Component } from 'react';
import Award from './Award';
import AddModal from '../../Components/AddModal';
import { autobind } from 'core-decorators';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as awardActions from '../../Actions/awardActions';

@connect(
    (state) => ({
        listAwards: state.awardReducers
    }),
    (dispatch) => ({
        awardActions: bindActionCreators(awardActions, dispatch)
    })
)
@autobind
class ListAward extends Component {

    componentWillMount() {
        const { getAllAwards } = this.props.awardActions;
        getAllAwards();
    }

    render() {

        const { listAwards } = this.props;
        const { addAward } = this.props.awardActions;
        return (
            <div class="container">
                <button class="btn btn-primary"
                    style={{ marginLeft: '-15px' }}
                    data-toggle="modal"
                    data-target="#addAward">Add New Award</button>
                <br /><br />
                <ul>
                    {
                        listAwards.length > 0 ? (

                            listAwards.map(item => {
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
                    addNewAward={addAward} />
            </div>
        );
    }
}

export default ListAward;