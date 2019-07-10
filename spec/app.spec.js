const { app } = require('../app.js');
const { expect } = require('chai');
const request = require('supertest')(app);

/*
User Stories
- GET /api returns (200) information on how to use
- GET /api/roman-numerals-to-integer returns (200) information on how to use
- GET /api/roman-numerals-to-integer?rn=*valid Roman numerals* returns (200) correct integer conversion
- GET /api/roman-numerals-to-integer?rn=*roman numeralss greater than MMMMM* returns (400) value greater than 5000
- GET /api/roman-numerals-to-integer?rn=*invalid Roman numerals* returns (400) invalid Roman numerals
- GET /*invalid url* returns (400) invalid url
- POST /* returns (400) method not allowed
- PATCH /* returns (400) method not allowed
- DELETE /* returns (400) method not allowed
*/

describe('/api', () => {

    it('GET returns (200) information on how to use', () => {
        return request
            .get('/api')
            .expect(200)
            .then(({ body }) => {
                expect(body.message.slice(0, 87)).to.equal('Hello! Please attach a query to your get request to receive a Roman numerals conversion');
            })
    });

    it('POST returns (405) method not allowed', () => {
        return request
            .post('/api')
            .expect(405)
            .then(({ body }) => {
                expect(body.message).to.equal('Method not allowed.');
            })
    });

    it('PATCH returns (405) method not allowed', () => {
        return request
            .patch('/api')
            .expect(405)
            .then(({ body }) => {
                expect(body.message).to.equal('Method not allowed.');
            })
    });

    it('DELETE returns (405) method not allowed', () => {
        return request
            .delete('/api')
            .expect(405)
            .then(({ body }) => {
                expect(body.message).to.equal('Method not allowed.');
            })
    });

    describe('/roman-numerals-to-integer', () => {

        it('GET returns (200) information on how to use', () => {
            return request
                .get('/api/roman-numerals-to-integer')
                .expect(200)
                .then(({ body }) => {
                    expect(body.message.slice(0, 87)).to.equal('Hello! Please attach a query to your get request to receive a Roman numerals conversion');
                })
        });

        it('POST returns (405) method not allowed', () => {
            return request
                .post('/api/roman-numerals-to-integer')
                .expect(405)
                .then(({ body }) => {
                    expect(body.message).to.equal('Method not allowed.');
                })
        });
    
        it('PATCH returns (405) method not allowed', () => {
            return request
                .patch('/api/roman-numerals-to-integer')
                .expect(405)
                .then(({ body }) => {
                    expect(body.message).to.equal('Method not allowed.');
                })
        });
    
        it('DELETE returns (405) method not allowed', () => {
            return request
                .delete('/api/roman-numerals-to-integer')
                .expect(405)
                .then(({ body }) => {
                    expect(body.message).to.equal('Method not allowed.');
                })
        });

        describe('?rn=*valid Roman numerals', () => {
            it('GET returns (200) correct integer conversion (given I)', () => {
                return request 
                    .get('/api/roman-numerals-to-integer?rn=I')
                    .expect(200)
                    .then(({ body }) => {
                        expect(body).to.eql({numerals: 'I', result: 1})
                    })
            });

            it('GET returns (200) correct integer conversion (given V)', () => {
                return request 
                    .get('/api/roman-numerals-to-integer?rn=V')
                    .expect(200)
                    .then(({ body }) => {
                        expect(body).to.eql({numerals: 'V', result: 5})
                    })
            });

            it('GET returns (200) correct integer conversion (given X)', () => {
                return request 
                    .get('/api/roman-numerals-to-integer?rn=X')
                    .expect(200)
                    .then(({ body }) => {
                        expect(body).to.eql({numerals: 'X', result: 10})
                    })
            });

            it('GET returns (200) correct integer conversion (given L)', () => {
                return request 
                    .get('/api/roman-numerals-to-integer?rn=L')
                    .expect(200)
                    .then(({ body }) => {
                        expect(body).to.eql({numerals: 'L', result: 50})
                    })
            });

            it('GET returns (200) correct integer conversion (given C)', () => {
                return request 
                    .get('/api/roman-numerals-to-integer?rn=C')
                    .expect(200)
                    .then(({ body }) => {
                        expect(body).to.eql({numerals: 'C', result: 100})
                    })
            });

            it('GET returns (200) correct integer conversion (given D)', () => {
                return request 
                    .get('/api/roman-numerals-to-integer?rn=D')
                    .expect(200)
                    .then(({ body }) => {
                        expect(body).to.eql({numerals: 'D', result: 500})
                    })
            });

            it('GET returns (200) correct integer conversion (given M)', () => {
                return request 
                    .get('/api/roman-numerals-to-integer?rn=M')
                    .expect(200)
                    .then(({ body }) => {
                        expect(body).to.eql({numerals: 'M', result: 1000})
                    })
            });

            it('GET returns (200) correct integer conversion (given II)', () => {
                return request 
                    .get('/api/roman-numerals-to-integer?rn=II')
                    .expect(200)
                    .then(({ body }) => {
                        expect(body).to.eql({numerals: 'II', result: 2})
                    })
            });

            it('GET returns (200) correct integer conversion (given III)', () => {
                return request 
                    .get('/api/roman-numerals-to-integer?rn=III')
                    .expect(200)
                    .then(({ body }) => {
                        expect(body).to.eql({numerals: 'III', result: 3})
                    })
            });

            it('GET returns (200) correct integer conversion (given IV)', () => {
                return request 
                    .get('/api/roman-numerals-to-integer?rn=IV')
                    .expect(200)
                    .then(({ body }) => {
                        expect(body).to.eql({numerals: 'IV', result: 4})
                    })
            });

            it('GET returns (200) correct integer conversion (given XLII)', () => {
                return request 
                    .get('/api/roman-numerals-to-integer?rn=XLII')
                    .expect(200)
                    .then(({ body }) => {
                        expect(body).to.eql({numerals: 'XLII', result: 42})
                    })
            });

            it('GET returns (200) correct integer conversion (given MMXIX)', () => {
                return request 
                    .get('/api/roman-numerals-to-integer?rn=MMXIX')
                    .expect(200)
                    .then(({ body }) => {
                        expect(body).to.eql({numerals: 'MMXIX', result: 2019})
                    })
            });

            it('GET returns (200) correct integer conversion (given MMMMM)', () => {
                return request 
                    .get('/api/roman-numerals-to-integer?rn=MMMMM')
                    .expect(200)
                    .then(({ body }) => {
                        expect(body).to.eql({numerals: 'MMMMM', result: 5000})
                    })
            });

            it('GET returns (200) correct integer conversion (given MMMMIM)', () => {
                return request 
                    .get('/api/roman-numerals-to-integer?rn=MMMMIM')
                    .expect(200)
                    .then(({ body }) => {
                        expect(body).to.eql({numerals: 'MMMMIM', result: 4999})
                    })
            });

            it('GET returns (200) correct integer conversion (given CCLXXVIII)', () => {
                return request 
                    .get('/api/roman-numerals-to-integer?rn=CCLXXVIII')
                    .expect(200)
                    .then(({ body }) => {
                        expect(body).to.eql({numerals: 'CCLXXVIII', result: 278})
                    })
            });
        });

        describe('?rn=*roman numerals greater than MMMMM*', () => {
            it('GET returns (400) value greater than 5000', () => {
                return request 
                    .get('/api/roman-numerals-to-integer?rn=MMMMMI')
                    .expect(400)
                    .then(({ body }) => {
                        expect(body.message).to.equal('Requested value is greater than 5000.')
                    })
            });
        });

        describe('?rn=*invalid Roman numeral*', () => {
            it('GET returns (400) invalid Roman numerals', () => {
                return request
                    .get('/api/roman-numerals-to-integer?rn=ABC')
                    .expect(400)
                    .then(({ body }) => {
                        expect(body.message).to.equal('Invalid Roman numerals.')
                    })
            });
        });
    });

    describe ('/*invalid url*', () => {
        it('GET returns (400) invalid url', () => {
            return request
                .get('/api/invalid-url')
                .expect(400)
                .then(({ body }) => {
                    expect(body.message).to.equal('Invalid url.')
                })
        });
    });
});

describe ('/*invalid url*', () => {
    it('GET returns (400) invalid url', () => {
        return request
            .get('/invalid-url')
            .expect(400)
            .then(({ body }) => {
                expect(body.message).to.equal('Invalid url.')
            })
    });
});