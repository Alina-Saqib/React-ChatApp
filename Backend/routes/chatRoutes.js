const express = require('express')
const { protect } = require('../Middleware/authMiddleware')
const {accessChat,fetchChat,createGroupChat,renameGroup,removeFromGroup,addToGroup} = require('../controllers/chatControllers')
const router =  express.Router()

router.route('/').post(protect,accessChat);
router.route('/').get(protect,fetchChat);
router.route('/group').post(protect,createGroupChat);
router.route('/rename').put(protect,renameGroup);//put for update
router.route('/groupadd').put(protect,addToGroup);
router.route('/groupremove').put(protect,removeFromGroup);


module.exports = router;