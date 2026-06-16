import { VaildateEmail, VaildateRegistration } from "../../middleware/Auth/auth.validation.registration.js";
import { checkEmail } from "../../controllers/Auth/auth.checkEmail.controller.js";
import { register } from "../../controllers/Auth/auth.register.controller.js";
import { Router } from "express";

const router = Router();

router.post('/check-email', VaildateEmail, checkEmail);
router.post('/register', VaildateRegistration, register);

export default router;