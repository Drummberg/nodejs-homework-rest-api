const express = require('express');

const ctrl = require("../../controllers/users");

const {ctrlWrapper} = require("../../helpers");
const { validateBody } = require("../../middlewares");
const { signupSchema } = require('../../sheme/user');

const router = express.Router();


router.post('/signup', validateBody(signupSchema), ctrlWrapper(ctrl.signup));

router.post('/login', validateBody(signupSchema), ctrlWrapper(ctrl.login));




module.exports = router;