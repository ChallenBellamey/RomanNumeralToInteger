const app = require('../app.js');
const { expect } = require('chai');
const request = require('supertest')(app);

describe('/api', () => {

    it('GET returns (200) information on how to use', () => {
        return request
            .get('api')
            .expect(200)
            .then(({ body }) => {
                expect(body.message).to.equal('Hello! Please attach a query to your get request to receive a roman numeral conversion, i.e. /api/roman-numeral-to-integer?rn=CC');
            })
    });

    it('POST returns (405) method not allowed', () => {
        return request
            .get('api')
            .expect(405)
            .then(({ body }) => {
                expect(body.message).to.equal('Method not allowed.');
            })
    });

    it('PATCH returns (405) method not allowed', () => {
        return request
            .get('api')
            .expect(405)
            .then(({ body }) => {
                expect(body.message).to.equal('Method not allowed.');
            })
    });

    it('DELETE returns (405) method not allowed', () => {
        return request
            .get('api')
            .expect(405)
            .then(({ body }) => {
                expect(body.message).to.equal('Method not allowed.');
            })
    });

    describe('/roman-numeral-to-integer', () => {

        it('GET returns (200) information on how to use', () => {
            return request
                .get('api/roman-numeral-to-integer')
                .expect(200)
                .then(({ body }) => {
                    expect(body.message).to.equal('Hello! Please attach a query to your get request to receive a roman numeral conversion, i.e. /api/roman-numeral-to-integer?rn=CC');
                })
        });

        it('POST returns (405) method not allowed', () => {
            return request
                .get('api/roman-numeral-to-integer')
                .expect(405)
                .then(({ body }) => {
                    expect(body.message).to.equal('Method not allowed.');
                })
        });
    
        it('PATCH returns (405) method not allowed', () => {
            return request
                .get('api/roman-numeral-to-integer')
                .expect(405)
                .then(({ body }) => {
                    expect(body.message).to.equal('Method not allowed.');
                })
        });
    
        it('DELETE returns (405) method not allowed', () => {
            return request
                .get('api/roman-numeral-to-integer')
                .expect(405)
                .then(({ body }) => {
                    expect(body.message).to.equal('Method not allowed.');
                })
        });
    })
})