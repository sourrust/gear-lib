var s3 = require('../lib/s3').s3,
    fixtures = {
        options: {
            file: 'test.js',
            client: {
                key: 'AKIAJ6RILQHB3LDITXYQ',
                secret: '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',
                bucket: 'gearjs'
            }
        },
        js: {body: 'function   test(  x )  {console.log(x);;;;}'}
    };

describe('s3()', function() {
    it('should deploy to s3', function(done) {
        s3(fixtures.options, fixtures.js, function(err, results) {
            done(err);
        });
    });

    it('should replace {checksum} in filename');
});