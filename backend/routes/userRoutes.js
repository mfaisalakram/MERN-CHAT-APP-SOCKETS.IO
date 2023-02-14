import express from 'express';

const router = express.Router();



// register a user
router.route('/').post(registerUser);


// login user

// router.get('/', loginUser)


module.exports = router;