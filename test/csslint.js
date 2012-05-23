var should = require('should'),
    csslint = require('../lib/csslint').csslint,
    fixtures = {
        css: {body: '%%%%'}
    };

describe('csslint()', function() {
    it('should lint css', function(done) {
        csslint({}, fixtures.css, function(err, results) {
            //should.exist(err);
            done(err);
        });
    });
});