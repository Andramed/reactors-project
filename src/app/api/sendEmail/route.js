import sgMail from '@sendgrid/mail';

import { NextResponse, NextRequest } from "next/server";

require("dotenv").config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


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
        // res.status(200).send('Email sent successfully');
        return NextResponse.json({ "success": "successfully" });
    } catch (error) {
        console.error(error);
        // res.status(500).send('Error sending email');
        

        if (error.response) {
            console.log(error.response.body);
          }
        //   res.status(400).json();    
          return NextResponse.status(400).json({ status: "ERROR", message: error.message });
    }
};