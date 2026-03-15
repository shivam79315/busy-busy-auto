import { sendOrderConfirmationEmail } from "./email.service.js";

export const sendOrderMail = async (req, res, next) => {

  try {

    const payload = req.body;

    await sendOrderConfirmationEmail(payload);

    res.json({
      success: true,
      message: "Email sent successfully"
    });

  } catch (error) {
    console.log(error);
    next(error);
  }

};