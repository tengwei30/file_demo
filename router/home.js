const express = require('express');
const homeCtrl = require('../controller/home');

const router = express.Router();

router.get('/', homeCtrl.showIndex)

router.get('/files', homeCtrl.files)

module.exports = router