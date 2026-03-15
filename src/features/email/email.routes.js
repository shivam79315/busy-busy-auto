import express from "express";
import { sendOrderMail } from "./email.controller.js";

const router = express.Router();

router.post("/order-confirmation", sendOrderMail);

export default router;