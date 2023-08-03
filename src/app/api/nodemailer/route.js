import { sendMail } from '@/app/services/nodemailer';
import { NextResponse } from 'next/server';

const handler = async (req, res) => {
	try {
	  const { method } = req;
	  const data = await req.json()

	  console.log(method, console.log(data));
	  switch (method) {
		case "POST": {
		  //Do some thing
		  await sendMail(
			data.object,
			"reactors2023team@gmail.com",
			 `Message: ${data.message} user data: name: ${data.name}, last name: ${data.last_name} email: ${data.email}`,
			
		  );
		  return NextResponse.json({message: 'succes'})
		  break;
		}
		case "GET": {
		  //Do some thing
		//   res.status(200).send(req.auth_data);
		  break;
		}
		default:
		  return NextResponse.setHeader("Allow", ["POST", "GET", "PUT", "DELETE"]);
	
		  break;
	  }
	} catch (err) {
	  return NextResponse.json({
		error_code: "api_one",
		message: err.message,
	  });
	}
  };

export { handler as GET, handler as POST }