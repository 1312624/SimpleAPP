import request from 'superagent';

class memberApis {
    static getAllMembers() {
        return request('GET', 'http://localhost:3030/api/member');
    }

    static addNewMember(memberCode, Name) {
        return request
            .post('http://localhost:3030/api/member')
            .send({ memberCode, Name })
    }

    static deleteMember(memberCode) {
        return request
            .delete(`http://localhost:3030/api/member/${memberCode}`);
    }

    static associateMember(memberCode, listAwards) {
        return request
            .put(`http://localhost:3030/api/member/${memberCode}`)
            .send({ Awards: listAwards });
    }

    static viewMember(memberCode) {
        return request
            .get(`http://localhost:3030/api/member/${memberCode}`);

    }
}

export default memberApis;