const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');
const User = require('../model/User');
const fetchuser = require('../middleware/fetchuser');

router.use(bodyParser.json())

//Route :1 update profile POST:"/api/profile/updateprofile"
router.put('/updateprofile', fetchuser, async function (req, res) {

    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { profilePic, fullName, nickName, phoneNumber, location, bio } = req.body;
    console.log(profilePic)
    try {

        let userId = req.user.id;

        let user = await User.findById(userId);

        if (profilePic) user.profile.profilePic = profilePic;
        if (fullName) user.profile.fullName = fullName;
        if (nickName) user.profile.nickName = nickName;
        if (phoneNumber) user.profile.phoneNumber = phoneNumber;
        if (location) user.profile.location = location;
        if (bio) user.profile.bio = bio;

        await user.save();

        res.status(200).json({ user });
    } catch (err) {
        console.log("Error : " + err.message);
        res.status(500).json({ message: "An internal error" });
    }
})

// Route:3 Get user profile
router.get('/getprofile', fetchuser, async (req, res) => {
    try {
        var userid = req.user.id;
        const user = await User.findById(userid).select("-password");
        res.json({ user })
    } catch (e) {
        res.status(500).json({ message: "This is internal Error...." })
    }
})


module.exports = router;