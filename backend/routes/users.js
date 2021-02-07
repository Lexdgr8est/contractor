const router = require('express').Router();

router.route('/').get((req, res) => {
    return res.status(200).json({
        message: 'Users has been listed'
    });
});

module.exports = router;;