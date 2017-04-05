import * as awardTypes from '../Constants/awardTypes';

const initialState = [];

export default function Awards(state = initialState, action) {
    switch (action.type) {
        case awardTypes.GET_ALL_AWARD_SUCCESS:
            return action.listAwards;

        case awardTypes.ADD_AWARD_SUCCESS:
            return [
                ...state,
                {
                    Name : action.Name
                }
            ];

        default:
            return state;
    }
}