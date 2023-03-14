import express from 'express';
import {
    register,
    verify,
    login,
    logout,
    addTask,
    updateTask,
    removeTask,
    getMyProfile,
    updatePassword,
    updateProfile,
    forgetPassword,
    resetPassword,
} from '../controllers/User.js';
import { isAuthenticated } from '../middleware/auth.js';
const router = express.Router();

router.route("/register").post(register);
router.route("/verify").post(isAuthenticated, verify);
router.route("/login").post(login);
router.route("/logout").get(logout);
router.route("/newTask").post(isAuthenticated, addTask);
router.route("/me").get(isAuthenticated, getMyProfile);
router
.route("/task/:taskId")
.get(isAuthenticated, updateTask)
.delete(isAuthenticated, removeTask);

router.route("/updateProfile").put(isAuthenticated, updateProfile);
router.route("/updatePassword").put(isAuthenticated, updatePassword);

router.route("/forgetPassword").post(forgetPassword);

router.route("/resetPassword").put(resetPassword);

export default router;