/*
    Qunit - Javascript Unit Test
*/

    QUnit.test("Multiply", function(assert){
        assert.ok(multiply(5,2), "Valid Multiplication");
        assert.ok(!multiply(5,"d"), "Invalid - String passed");
    });

