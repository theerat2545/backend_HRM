import {Router} from 'express';
import {
  login,
  // logout,
  refreshToken,
  forgotPassword,
  resetPassword,
} from '../controllers/auth.controller';
import validate from '../middleware/validate.middleware';
import {
    loginSchema,
    refreshTokenSchema,
    forgotPasswordSchema,
    resetPasswordSchema,
} from '../schemas/auth.schema';

 const router = Router();

router.post('/login', validate(loginSchema), login);
// router.post('/logout', logout);
router.post('/refresh-token', validate(refreshTokenSchema), refreshToken);
router.post('/forgot-password', validate(forgotPasswordSchema), forgotPassword);
router.post('/reset-password', validate(resetPasswordSchema), resetPassword)

export default router;