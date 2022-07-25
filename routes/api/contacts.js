const express = require('express');

const ctrl = require("../../controllers/contacts");

const { ctrlWrapper } = require('../../helpers');

const { validateBody, validateParams } = require('../../middlewares');

const { contactAddData, favoriteScheme } = require('../../sheme');

const router = express.Router();

router.get('/', ctrlWrapper(ctrl.allContacts));

router.get('/:contactId', validateParams, ctrlWrapper(ctrl.getContactById));

router.post('/', validateBody(contactAddData), ctrlWrapper(ctrl.addContact));

router.patch('/:contactId/favorite', validateParams, validateBody(favoriteScheme), ctrlWrapper(ctrl.updateStringContact));

router.delete('/:contactId', validateParams, ctrlWrapper(ctrl.removeContact));

router.put('/:contactId', validateParams, validateBody(contactAddData), ctrlWrapper(ctrl.updateContact));

module.exports = router
