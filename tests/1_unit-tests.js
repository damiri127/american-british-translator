const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
let translator = new Translator();

suite("Unit Tests", () => {
    suite("Check toBritishEnglish", function () {
        // Translate Mangoes are my favorite fruit. to British English
        test("Translate Mangoes are my favorite fruit", function (done) {
        assert.equal(
            translator.toBritishEnglish("Mangoes are my favorite fruit")[0],
            "Mangoes are my favourite fruit"
        );
        done();
        });
        // Translate I ate yogurt for breakfast. to British English
        test('Translate I ate yogurt for breakfast', function (done) { 
            assert.equal(
                translator.toBritishEnglish("I ate yogurt for breakfast")[0],
                "I ate yoghurt for breakfast"
            );
            done();
        });
        // Translate We had a party at my friend's condo. to British English
        test("Translate We had a party at my friend's condo", function (done) {
            assert.equal(translator.toBritishEnglish("We had a party at my friend's condo")[0],
                "We had a party at my friend's flat"
            );
            done();
        });
        // Translate Can you toss this in the trashcan for me? to British English
        test("Translate Can you toss this in the trashcan for me?", function (done) {
            assert.equal(translator.toBritishEnglish(
                "Can you toss this in the trashcan for me?"
            )[0],
                "Can you toss this in the bin for me?");
            done();
        });
        // Translate The parking lot was full. to British English
        test("Translate The parking lot was full.", function (done) {
            assert.equal(
                translator.toBritishEnglish("The parking lot was full.")[0],
                "The car park was full."
            );
            done();
        });
        // Translate Like a high tech Rube Goldberg machine. to British English
        test("Translate Like a high tech Rube Goldberg machine.", function (done) { 
            assert.equal(
                translator.toBritishEnglish("Like a high tech Rube Goldberg machine.")[0],
                "Like a high tech Heath Robinson device."
            );
            done();
        });
        // Translate To play hooky means to skip class or work. to British English
        test("Translate To play hooky means to skip class or work.", function (done) { 
            assert.equal(
                translator.toBritishEnglish("To play hooky means to skip class or work.")[0],
                "To bunk off means to skip class or work."
            );
            done();
        });
        // Translate No Mr. Bond, I expect you to die. to British English
        test("Translate No Mr. Bond, I expect you to die.", function (done) { 
            assert.equal(
                translator.toBritishEnglish("No Mr. Bond, I expect you to die.")[0],
                "No Mr Bond, I expect you to die."
            );
            done();
        });
        // Translate Dr. Grosh will see you now. to British English
        test("Translate Dr. Grosh will see you now.", function (done) {
            assert.equal(
                translator.toBritishEnglish("Dr. Grosh will see you now.")[0],
                "Dr Grosh will see you now."
            );
            done();
        });
        // Translate Lunch is at 12:15 today. to British English
        test("Translate Lunch is at 12:15 today.", function (done) {
            assert.equal(
                translator.toBritishEnglish("Lunch is at 12:15 today.")[0],
                "Lunch is at 12.15 today."
            );
            done();
        });
    });
    suite("Check toAmericanEnglish", function () {
        // Translate We watched the footie match for a while. to American English
        test("Translate We watched the footie match for a while.", function (done) { 
            assert.equal(
                translator.toAmericanEnglish("We watched the footie match for a while.")[0],
                'We watched the soccer match for a while.'
            );
            done();
        });
        // Translate Paracetamol takes up to an hour to work. to American English
        test("Translate Paracetamol takes up to an hour to work.", function (done) { 
            assert.equal(
                translator.toAmericanEnglish("Paracetamol takes up to an hour to work.")[0],
                "Tylenol takes up to an hour to work."
            );
            done();
        });
        // Translate First, caramelise the onions. to American English
        test("Translate First, caramelise the onions.", function (done) { 
            assert.equal(
                translator.toAmericanEnglish("First, caramelise the onions.")[0],
                "F"
            );
            done();
        });
        // Translate I spent the bank holiday at the funfair. to American English
        test("Translate I spent the bank holiday at the funfair.", function (done) { 
            assert.equal(
                translator.toAmericanEnglish("I spent the bank holiday at the funfair.")[0],
                "I spent the public holiday at the carnival."
            );
            done();
        });
        // Translate I had a bicky then went to the chippy. to American English
        test("Translate I had a bicky then went to the chippy.", function (done) { 
            assert.equal(
                translator.toAmericanEnglish("I had a bicky then went to the chippy.")[0],
                "I had a cookie then went to the fish-and-chip shop."
            );
            done();
        });
        // Translate I've just got bits and bobs in my bum bag. to American English
        test("Translate I've just got bits and bobs in my bum bag.", function (done) { 
            assert.equal(
                translator.toAmericanEnglish("I've just got bits and bobs in my bum bag.")[0],
                "I've just got odds and ends in my fanny pack."
            );
            done();
        });
        // Translate The car boot sale at Boxted Airfield was called off. to American English
        test("Translate The car boot sale at Boxted Airfield was called off.", function (done) { 
            assert.equal(
                translator.toAmericanEnglish("The car boot sale at Boxted Airfield was called off.")[0],
                "The swap meet at Boxted Airfield was called off."
            );
            done();
        });
        // Translate Have you met Mrs Kalyani? to American English
        test("Translate Have you met Mrs Kalyani?", function (done) { 
            assert.equal(
                translator.toAmericanEnglish("Have you met Mrs Kalyani?")[0],
                "H"
            );
            done();
        });
        // Translate Prof Joyner of King's College, London. to American English
        test("Translate Prof Joyner of King's College, London.", function (done) { 
            assert.equal(
                translator.toAmericanEnglish("Prof Joyner of King's College, London.")[0],
                "P"
            );
            done();
        });
        // Translate Tea time is usually around 4 or 4.30. to American English
        test("Translate Tea time is usually around 4 or 4.30.", function (done) { 
            assert.equal(
                translator.toAmericanEnglish("Tea time is usually around 4 or 4.30.")[0],
                "Tea time is usually around 4 or 4:30."
            );
            done();
        });
    });
    suite("Check Highlight Translation", function () {
        // Highlight translation in Mangoes are my favorite fruit.
        test("Highlight translation in Mangoes are my favorite fruit.", function (done) { 
            assert.equal(
                translator.toBritishEnglish("Mangoes are my favorite fruit")[0],
                'Mangoes are my <span class="highlight">favourite</span> fruit'
            );
            done();
        });
        // Highlight translation in I ate yogurt for breakfast.
        test("Highlight translation in I ate yogurt for breakfast.", function (done) { 
            done();
        });
        // Highlight translation in We watched the footie match for a while.
        test("Highlight translation in We watched the footie match for a while.", function (done) { 
            done();
        });
        // Highlight translation in Paracetamol takes up to an hour to work.
        test("Highlight translation in Paracetamol takes up to an hour to work.", function (done) { 
            done();
        });
    });
});
