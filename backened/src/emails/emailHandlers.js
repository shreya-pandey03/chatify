import {createWelcomeEmailTemplate} from "../emails/emailTemplates.js";
import { resendClient, sender } from "../lib/resend.js";


export const sendWelcomeEmail = async (email, name,clientURL) => {
    const {data, error} = await resendClient.emails.send({
      from: `${sender.name} <${sender.email}>`,
      to: email,
        subject: "Welcome to Chatify!",
        html: `
          <h1>Welcome to Chatify, ${name}!</h1>
          <p>We're excited to have you on board. Click the link below to get started:</p>
            <a href="${clientURL}">Get Started</a>
            <p>If you have any questions, feel free to reply to this email.</p>
            <p>Best regards,<br/>The Chatify Team</p>
        `,
    });
    if (error) {
      console.error("Error sending welcome email:", error);
    
      throw new Error("Failed to send welcome email");
    }

    console.log("Welcome email sent:", data);
  };