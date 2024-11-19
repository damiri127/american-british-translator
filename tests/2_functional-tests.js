const chai = require('chai');
const chaiHttp = require('chai-http');
const assert = chai.assert;
const server = require('../server.js');

chai.use(chaiHttp);

let Translator = require('../components/translator.js');
const { text } = require('body-parser');
const translator = new Translator();

suite('Functional Tests', () => {
    suite('Test with deferent request POST', function () {
        // Translation with text and locale fields: POST request to /api/translate
        test('Translation with text and locale fields', function (done) { 
            chai
                .request(server)
                .post('/api/translate')
                .send({
                    text: "I ate yogurt for breakfast.",
                    locale: 'american-to-british'
                })
                .end(function (err, res) {
                    assert.equal(res.status, 200);
                    assert.equal(
                        res.body.translation,
                        'I ate <span class="highlight">yoghurt</span> for breakfast.'
                    );
                    done();
                })
        });
        // Translation with text and invalid locale field: POST request to /api/translate
        test('Translation with text and invalid locale field', function (done) { 
            chai
                .request(server)
                .post('/api/translate')
                .send({
                    text: "Check data in database",
                    locale: 'british-to-french'
                })
                .end(function (err, res) {
                    assert.equal(res.status, 200);
                    assert.equal(res.body.error, "Invalid value for locale field");
                })
            done();
        });
        
        // Translation with missing text field: POST request to /api/translate
        test('Translation with missing text field', function (done) { 
            chai
                .request(server)
                .post('/api/translate')
                .send({
                    text: undefined,
                    locale: 'british-to-american'
                })
                .end(function (err, res) {
                    assert.equal(res.status, 200);
                    assert.equal(res.body.error, "Required field(s) missing")
                })
            done();
        });
        
        // Translation with missing locale field: POST request to /api/translate
        test('Translation with missing locale field', function (done) { 
            chai
            .request(server)
            .post('/api/translate')
            .send({
                text: "I would like to drink coffee",
                locale: undefined
            })
            .end(function (err, res) {
                assert.equal(res.status, 200);
                assert.equal(res.body.error, "Required field(s) missing")
            })
        done();
        });
        
        // Translation with empty text: POST request to /api/translate
        test('Translation with empty text', function (done) { 
            chai
            .request(server)
            .post('/api/translate')
            .send({
                text: "",
                locale: 'british-to-american'
            })
            .end(function (err, res) {
                assert.equal(res.status, 200);
                assert.equal(res.body.error, "No text to translate")
            })
        done();
        });
        
        // Translation with text that needs no translation: POST request to /api/translate
        test('Translation with text thath needs no translation', function (done) { 
            chai
            .request(server)
            .post('/api/translate')
            .send({
                text: "Yeepieeeee",
                locale: 'british-to-american'
            })
            .end(function (err, res) {
                assert.equal(res.status, 200);
                assert.equal(res.body.translation, "Everything looks good to me!")
            })
        done();
        });
        
    });

});
