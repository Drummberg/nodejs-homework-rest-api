const express = require('express');

const ctrl = require("../../controllers/contacts");

const { ctrlWrapper } = require('../../helpers');

const { validateBody, validateParams, user } = require('../../middlewares');

const { contactAddData, favoriteScheme } = require('../../sheme/contact');

const router = express.Router();

router.get('/', user, ctrlWrapper(ctrl.allContacts));

router.get('/:id', validateParams, ctrlWrapper(ctrl.getContactById));

router.post('/', user, validateBody(contactAddData), ctrlWrapper(ctrl.addContact));

router.patch('/:id/favorite', validateParams, validateBody(favoriteScheme), ctrlWrapper(ctrl.updateStringContact));

router.delete('/:contactId', validateParams, ctrlWrapper(ctrl.removeContact));

router.put('/:contactId', validateParams, validateBody(contactAddData), ctrlWrapper(ctrl.updateContact));

module.exports = router
