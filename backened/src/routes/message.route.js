import express from 'express';

import { getAllContacts, getChatPatners, getMessagesById, sendMessage } from '../controllers/message.controller.js';
import { arcjetProtection } from '../middlewares/arcjetProtection.js';
import { protectRoute } from '../middlewares/protectRoute.js';

const router =express.Router();

router.use(arcjetProtection,protectRoute);

router.get("/contacts",protectRoute,getAllContacts);
router.get("/chats",getChatPatners);
router.get("/:id",getMessagesById);
router.post("/send/:id",sendMessage);


export default router;