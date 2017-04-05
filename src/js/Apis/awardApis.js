import request from 'superagent';

class awardApis {
    static getAllAwards() {
        return request
            .get('http://localhost:3030/api/award');
    }

    static addNewAward(Name) {
        return request
            .post('http://localhost:3030/api/award')
            .send({ Name })
            .set('Accept', 'application/json');
    }
}

export default awardApis;