export function createWelcomeEmailTemplate(name,clientURL) {
  return `

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Email Template</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4; font-family: Arial, sans-serif;">

  <!-- Container -->
  <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden;">

    <!-- Header -->
    <div style="background-color: #0073e6; color: #ffffff; padding: 20px; text-align: center; font-size: 24px;">
      Company Name
    </div>

    <!-- Body -->
    <div style="padding: 30px; color: #333333; font-size: 16px; line-height: 1.5;">
      <p style="margin: 0 0 16px;">Hello ${FirstName},</p>
      <p style="margin: 0 0 16px;">
        Thank you for contacting us. We're excited to connect and assist you with your needs.
      </p>
      <p style="margin: 0 0 24px;">
        Feel free to reply to this email with any questions. We're happy to help!
      </p>

      <!-- Call to Action Button -->
      <div style="text-align: center; margin: 30px 0;">
        <a href="https://yourwebsite.com" style="background-color: #0073e6; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
          Visit Our Website
        </a>
      </div>
    </div>

    <!-- Footer -->
    <div style="background-color: #f4f4f4; color: #666666; font-size: 12px; text-align: center; padding: 20px;">
      &copy; 2025 Company Name. All rights reserved.<br/>
      123 Business Rd, City, State, 00000<br/>
      <a href=${clientURL} style="color: #0073e6; text-decoration: none;">Unsubscribe</a>
    </div>

  </div>
</body>
</html>
`;
}