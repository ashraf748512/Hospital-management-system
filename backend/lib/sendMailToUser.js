import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MY_EMAIL_ADDRESS,
    pass:process.env.MY_EMAIL_PASS ,
  },
});

export const sendPasswordResetEmail = async (email, token, baseUrl) => {
  try {
    const resetLink = `${baseUrl}/auth/resetPassword?token=${token}`;
    const mailOptions = {
      from: process.env.MY_EMAIL_ADDRESS,
      to: email,
      subject: 'Password Reset Request',
      text: `Click the following link to reset your password: ${resetLink}`,
      html: `<p>Click the following link to reset your password:</p><a href="${resetLink}">${resetLink}</a>`,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`Password reset email sent to ${email}: ${info.response}`);
  } catch (error) {
    console.error(`Error sending email to ${email}:`, error.message);
  }
};


