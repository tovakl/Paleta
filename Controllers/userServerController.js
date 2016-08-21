var express = require('express');
var router = express.Router();

var config=require('../configFile.json');

var mongoose = require ('mongoose');
var db=mongoose.createConnection(config.connectionString);

var userSchema = require('../Database/userModel');
var User = db.model('User',userSchema);

// routes
router.post('/signUp', function (req, res) {

    var user = req.body;
    var newUser = new User({userName:user.userName, password:user.password});

    User.count({ userName: user.userName }, function (err, count) {
        if (count > 0) {
            res.json({ success: false, msg: "שם משתמש קיים בפלטה", user: user });
        }
        else
        {
            newUser.save();
            req.session.user = newUser;
            res.json({ success: true, msg: "ברוך הבא משתמש רשום חדש", user: user });

        }

    });
});

router.post('/signIn', function (req, res) {
    
        var existUser = new User(req.body);

        console.log("In sign in :",existUser);

        if(req.session.user != null)
        {
            res.json({ in: false, msg: "הנך מחובר! התנתק לפני התחברות חוזרת", user: null });
        }
        else
        {
            User.findOne({  userName: existUser.userName}, function (err, user) {
                if (user) {

                    if(user.password != existUser.password)
                    {
                        res.json({ in: false, msg: "הסיסמא שהכנסת שגויה", user: user });
                    }
                    else
                    {
                        req.session.user = user;
                        res.json({ in: true, msg: "התחברת לפלטה בהצלחה", user: user });
                    }

                }
                else {
                    res.json({ in: false, msg: "שם המשתמש אינו קיים בפלטה", user: user });

                }
            });
        }
});

router.post('/signOut', function (req, res) {
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        } else {
            res.json({out: true});
        }
    });

});

router.post('/getSessionInfo', function (req, res) {
    console.log(req.session.user);
    if(req.session.user == null)
    {
        console.log("no session");
        res.json({signed : false, session : null});
    }
    else
    {
        console.log("yes session");
        res.json({signed: true, session: req.session });
    }

});


module.exports = router;
