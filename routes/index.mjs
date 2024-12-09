import { Router } from 'express';
import AuthController from '../controller/authController.mjs';
import { authToken } from '../middleware/Token.mjs';
import { roleCheck } from '../middleware/roleCheck.mjs';

const router = Router();

router.get('/', (req, res) => {res.send('<a href="/auth/google">Auth</a>')});
router.get('/auth/google', AuthController.googleAuth);
router.get('/auth/google/callback', AuthController.googleAuthCallback);
router.get('/profile', authToken, AuthController.profile);
router.get('/profile/admin', authToken, roleCheck('admin'), AuthController.adminProfile);

export default router;