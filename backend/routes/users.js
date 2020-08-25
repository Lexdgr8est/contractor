const router = require('express').Router();
const jwt = require('jsonwebtoken');

const users = [
    {
        id: '1',
        username: 'rootlex',
        password: 'rootlex'
    },
    {
        id: '2',
        username: 'lexify',
        password: 'lexify'
    }
]

router.route('/').get((req, res, next) => {
    return res.status(200).json({
        users,
        message: 'Users has been listed'
    });
});

router.route('/login').post((req, res, next) => {
    // console.log(req);
    if(!req.body) {
        return res.status(201).json({
            error: 'req body cannot be empty',
          }); 
    }else {
        let user = users.find(user => user.username === req.body.username);
        if(!user) {
            return res.status(201).json({
                message: 'Username is not registered'
              });
        }else {
            if(user.password !== req.body.password) {
                return res.status(201).json({
                    message: 'Password is not correct'
                  });   
            }else {
                let token = jwt.sign({ id: user.id}, process.env.JWT_SECRET);
                return res.status(200).json({
                    message: 'successful',
                    token: token,
                    user: user
                })
            }
        }
    }
}); 


module.exports = router;