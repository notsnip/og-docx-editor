import express from 'express';
const router= express.Router()


import registerUser from '../controllers/user.controller.js';

/* GET add admin page. */
router.post('/register',registerUser)

export default router;
