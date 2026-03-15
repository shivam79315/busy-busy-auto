import { transporter } from "../../config/mailer.js";
import { orderConfirmationTemplate } from "./email.template.js";

export const sendOrderConfirmationEmail = async (payload) => {

  const template = orderConfirmationTemplate(payload);

  await transporter.sendMail({
    from: `"Busy Busy Store" <${process.env.GMAIL_USER}>`,
    to: payload.email,
    subject: template.subject,
    html: template.html
  });

};