import nodemailer from 'nodemailer'

export async function sendMail(subject, toEmail, otpText) {
	const transporter = nodemailer.createTransport({
	  service: "gmail",
	  host: 'smtp.gmail.com',
   		port: 465,
		secure: true,
	  auth: {
		user: process.env.NODE_MAILER_EMAIL,
		pass: process.env.NODE_MAILER_PASSWORD,
	  },
	});
  
	const mailOptions = {
	  from: "reactors2023team@gmail.com",
	  to: toEmail,
	  subject: subject,
	  text: otpText,
	};
  
	await new Promise((resolve, reject) => {
		// send mail
		transporter.sendMail(mailOptions, (err, response) => {
		  if (err) {
			reject(err);
		  } else {
			resolve(response);
		  }
		});
	  });
  }