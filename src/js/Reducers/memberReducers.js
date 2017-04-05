import * as memberTypes from '../Constants/memberTypes';

const initialState = {};

export default function members(state = initialState, action) {
    switch (action.type) {
        case memberTypes.GET_ALL_MEMBER_SUCCESS:
            return {
                allMembers : action.allMembers
            };

        case memberTypes.ADD_MEMBER_SUCCESS:
            return {
                allMembers :
                [
                    ...state.allMembers,
                    {
                        memberCode: action.memberCode,
                        Name: action.Name
                    }
                ]
            };

        case memberTypes.DELETE_MEMBER_SUCCESS:
            return {
                allMembers : state.allMembers.filter(member => member.memberCode !== action.memberCode)
            }

        case memberTypes.VIEW_MEMBER_SUCCESS:
            return {
                allMembers : state.allMembers,
                targetMember : action.memberInfo
            };

        case memberTypes.ASSOCIATE_MEMBER_SUCCESS:
            return {
                allMembers : state.allMembers,
                text : action.text
            };

        default:
            return state;
    }
}