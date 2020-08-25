const router = require('express').Router();
const fs = require('fs');
const path = require('path');
router.route('/').get((req, res) => {
    let data = fs.readFileSync(path.resolve(__dirname, '../data/activejobs.json')).toLocaleString();
    if(data) {
        res.status(200).json({
            message: 'ok',
            activeJobs: JSON.parse(data)
        })
    }else {
        res.status(201).json({
            message: 'No Active Jobs'
        })
    }
});


module.exports = router;