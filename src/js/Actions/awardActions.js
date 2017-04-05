import * as awardTypes from '../Constants/awardTypes';
import awardApis from '../Apis/awardApis';

export function getAllAwards() {
    return (dispatch) => {
        awardApis.getAllAwards()
            .then(result => {
                dispatch(getAllAwardsSuccess(result.body));
            })
            .catch((err) => {
                throw(err);
            });
    }
}

export function getAllAwardsSuccess(listAwards) {
    return {
        type : awardTypes.GET_ALL_AWARD_SUCCESS,
        listAwards
    }
}

export function addAward(Name) {
    return (dispatch) => {
        awardApis.addNewAward(Name)
            .then(() => {
                dispatch(addAwardSuccess(Name));
            })
            .catch(err => {
                throw(err);
            });
    }
}

export function addAwardSuccess(Name) {
    return {
        type : awardTypes.ADD_AWARD_SUCCESS,
        Name
    }
}
