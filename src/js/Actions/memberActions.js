import * as memberTypes from '../Constants/memberTypes';
import memberApis from '../Apis/memberApis';

export function addMemberSuccess(memberCode, Name) {
    return {
        type: memberTypes.ADD_MEMBER_SUCCESS,
        memberCode,
        Name
    };
}

export function deleteMemberSuccess(memberCode) {
    return {
        type: memberTypes.DELETE_MEMBER_SUCCESS,
        memberCode
    };
}

export function viewMemberSuccess(memberInfo) {
    return {
        type: memberTypes.VIEW_MEMBER_SUCCESS,
        memberInfo
    };
}

export function getAllMemberSuccess(allMembers) {
    return {
        type: memberTypes.GET_ALL_MEMBER_SUCCESS,
        allMembers
    };
}

export function associateMemberSuccess(memberCode) {
    return {
        type: memberTypes.ASSOCIATE_MEMBER_SUCCESS,
        text: `Associate Member ${memberCode} SuccessFully`
    }
}

export function getAllMember() {
    return (dispatch) => {
        memberApis.getAllMembers()
            .then((members) => {
                dispatch(getAllMemberSuccess(members.body));
            })
            .catch(err => {
                throw (err);
            });
    };
}

export function addMember(memberCode, Name) {
    return (dispatch) => {
        memberApis.addNewMember(memberCode, Name)
            .then(() => {
                dispatch(addMemberSuccess(memberCode, Name));
            })
            .catch(err => {
                throw (err);
            });
    }
}

export function deleteMember(memberCode) {
    return (dispatch) => {
        memberApis.deleteMember(memberCode)
            .then(() => {
                dispatch(deleteMemberSuccess(memberCode));
            })
            .catch((err) => {
                throw (err);
            });
    }
}

export function associateMember(memberCode, listAwards) {
    return (dispatch) => {
        return new Promise((resolve, reject) => {
            memberApis.associateMember(memberCode, listAwards)
                .then(() => {
                    resolve(dispatch(associateMemberSuccess(memberCode)));
                })
                .catch(err => {
                    throw (err);
                })
        });
    }
}

export function getMemberInfo(memberCode) {
    return (dispatch) => {
        memberApis.viewMember(memberCode)
            .then((result) => {
                dispatch(viewMemberSuccess(result.body));
            })
            .catch(err => {
                throw(err);
            })
    }
}