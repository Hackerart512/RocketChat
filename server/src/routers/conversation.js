const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');

const Conversation = require('../middleware/conversation');

router.use(bodyParser.json())


//Route 1: 
router.post('/add', [
    body('senderId', "Enter a valid email").isLength({ max: 8 }),
    body('receiverId', 'Enter a password').isLength({ max: 8 })
], async function (req, res) {
    let success = false;

    let senderId = req.body.senderId;
    let receiverId = req.body.receiverId;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    const exist = await Conversation.findOne({ members: { $all: [receiverId, senderId] } })

    if (exist) {
        response.status(200).json('conversation already exists');
        return;
    }

    const newConversation = new Conversation({
        members: [senderId, receiverId]
    });

    try {
        const savedConversation = await newConversation.save();
        res.status(200).json(savedConversation);
    } catch (error) {
        res.status(500).json(error);
    }

})

// Route:2 Get
router.get('/get',  async (req, res) => {
    try {
        const conversation = await Conversation.findOne({ members: { $all: [req.body.senderId, req.body.receiverId] } });
        res.status(200).json(conversation);
    } catch (error) {
        res.status(500).json(error);
    }
})

module.exports = router;