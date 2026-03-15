import { sendMail } from "../../config/mailer.js";
import { orderConfirmationTemplate } from "./email.template.js";

export const sendOrderConfirmationEmail = async (payload) => {

  const template = orderConfirmationTemplate(payload);

  await sendMail({
    to: payload.email,
    subject: template.subject,
    html: template.html
  });

};