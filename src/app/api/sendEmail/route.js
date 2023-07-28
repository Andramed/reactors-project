import sgMail from '@sendgrid/mail';

import { NextResponse } from "next/server";
sgMail.setApiKey(SENDGRID_API_KEY);


export async function POST(req, res) {

    const email = req.nextUrl.searchParams.get("email");
    const name = req.nextUrl.searchParams.get("name");

    const message = "From : "+ name + " Email : " + email + " Message : " + req.nextUrl.searchParams.get("message");


    const msg = {
        "from": {"email":"reactors2023team@gmail.com"},
        "personalizations":[{
          "to":[{"email": "reactors2023team@gmail.com",
                 "name": "Reactors"}],
          "subject":"Contact Me" //to add to params       
        }],
        "content": [{"type":"text/plain",
                    "value": message
        }]
      };

    try {
        await sgMail.send(msg);
        return NextResponse.json({ "success": "successfully sent email" });
    } catch (error) {
        console.error(error);
        if (error.response) {
            console.log(error.response.body);
          }
          return NextResponse.json({ status: "ERROR", message: error.message });
    }
};