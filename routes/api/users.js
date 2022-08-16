const express = require('express');

const ctrl = require("../../controllers/users");

const {ctrlWrapper} = require("../../helpers");
const { validateBody, user, upload } = require("../../middlewares");
const { signupSchema } = require('../../sheme/user');

const router = express.Router();


router.post('/signup', validateBody(signupSchema), ctrlWrapper(ctrl.signup));

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail));

router.post("/verify", ctrlWrapper(ctrl.resendVerifyEmail));

router.post('/login', validateBody(signupSchema), ctrlWrapper(ctrl.login));

router.get('/current', user, ctrlWrapper(ctrl.getCurrent));

router.get('/logout', user, ctrlWrapper(ctrl.logout));

router.patch('/', user, ctrlWrapper(ctrl.updateUser));

router.patch('/avatars', user, upload.single('avatar'), ctrlWrapper(ctrl.updateAvatar));


module.exports = router;