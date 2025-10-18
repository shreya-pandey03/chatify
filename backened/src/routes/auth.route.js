import express from 'express';
import { signup } from '../controllers/auth.controller.js';
const router = express.Router();

router.get("/singup",signup);
import express from "express";
import { signup, login, logout } from "../controllers/auth.controller.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";
import {
  signup,
  login,
  logout,
  updateProfile,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// router.get("/test", (req, res) => {
//   res.status(200).json({ message: "Auth route is working" });
// });

router.use(arcjetProtection);

router.get("/login",(req,res)=>{
    res.send("Login endpoint");
;})
router.post("/singup", signup);

router.post("/login", login);

router.get("/logout",(req,res)=>{
    res.send("Logout endpoint");
});
router.post("/logout", logout);


router.put("/update-profile", protectRoute, updateProfile);

router.get("/protected", protectRoute, (req, res) => {
  res.status(200).json({ message: "You are authorized", user: req.user });
});

export default router;
