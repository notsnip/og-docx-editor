import express from 'express';
const router= express.Router()


import registerUser from '../controllers/user.controller.js';

// "/user"

router.post('/register',registerUser)

export default router;
