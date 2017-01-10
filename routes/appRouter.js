var express = require('express');
var router = express.Router();
var Person = require('../models/daos/UserDao');
var Story = require('../models/daos/DeviceDao');
var apiResponse = require("../helper/ApiResponse");

router.get('/a', function(req, res, next) {

    var aaron = new Person({ name: 'AnvfvoodcpD', age: 64666 });
    aaron.save(function(err, person) {
        if (err) {
            console.log("error" + err);
            res.json(apiResponse.error(err));
        }

        var story1 = new Story({
            title: "Once upon a timex.",
            _creator: person._id // assign the _id from the person
        });

        story1.save(function(err) {
            if (err) {
                res.json(apiResponse.error(err));
            } else {


                res.send("success");


            }
        });
    });


});


router.get('/b', function(req, res, next) {

    Story
        .findOne({ title: 'Once upon a timex.' })
        .populate('_creator')
        .exec(function(err, story) {
            if (err || story == null) { res.json(apiResponse.error(err)) } else {
                story._creator.name = "rohith"
                story._creator.save();
                res.send("success");
            }
        });
});

module.exports = router;
