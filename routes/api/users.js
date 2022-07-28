const express = require('express');

const ctrl = require("../../controllers/users");

const {ctrlWrapper} = require("../../helpers");
// const { validateBody} = require("../../middlewares");

const router = express.Router();


router.post('/signup', ctrlWrapper(ctrl.signup));




module.exports = router;