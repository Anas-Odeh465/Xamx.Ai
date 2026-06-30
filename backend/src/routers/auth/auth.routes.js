import { verifyControl } from "../../controllers/auth/auth.verify.otp.controller.js";
import { resendControl } from "../../controllers/auth/auth.resend.otp.controller.js";
import { registerControl } from "../../controllers/auth/auth.register.controller.js";
import { emailControl } from "../../controllers/auth/auth.email.controller.js";
import { setupControl } from "../../controllers/auth/auth.setup.controller.js";
import { validateRegister } from "../../middleware/auth/auth.register.js";
import { validateCode  } from "../../middleware/auth/auth.verify.js";
import { validateSetup } from "../../middleware/auth/auth.setup.js";
import { validateEmail } from "../../middleware/auth/auth.email.js";
import { router } from "../routes.js";

router.post('/check-email', validateEmail, emailControl);
router.post('/setup-profile', validateSetup, setupControl);
router.post('/verify-email', validateCode , verifyControl);
router.post('/register', validateRegister, registerControl);
router.post('/verify-resend', validateEmail, resendControl);

export default router;