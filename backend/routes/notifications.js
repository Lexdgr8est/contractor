const router = require('express').Router();
const fs = require('fs');
const path = require('path');
router.route('/').get((req, res) => {
    let data = fs.readFileSync(path.resolve(__dirname, '../data/notifications.json')).toLocaleString();
    if(data) {
        res.status(200).json({
            message: 'ok',
            notifications: JSON.parse(data)
        })
    }else {
        res.status(201).json({
            message: 'No Notifications'
        })
    }
});


module.exports = router;