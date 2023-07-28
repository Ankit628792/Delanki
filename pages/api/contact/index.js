import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export default async function(request, response) {

    let { name, email, message, mobile } = JSON.parse(request.body)

    if(!name){
        response.status(400).json({success: false, message: 'MISSING PARAMS'})
    }

    let data = {
        email: 'ankit628792@gmail.com',
        subject: `${name} has contacted you on Delanki`,
        text: `${message}`,
        html: `
            <div style="
            padding: 20px 30px;
        "><h1 style="
            font-size: 24px;
            font-weight: 500;
            color: #f15d4d;
        ">${name} has contacted you on Delanki</h1><p style="
            font-size: 18px;
            color: darkcyan;
        ">His message is: </p><p style="
            color: gray;
            font-size: 16px;
        ">${message}</p>
        
        <p style="
            font-size: 16px;
            font-weight: 400;
            margin-top: 4px;
        ">Regards<br>${name}<br>email: ${email} <br> mobile number: ${mobile || 'None'}</p>
        </div>
            `
    }

    sendEMail(data);

    if (email) {

        let data2 = {
            email: email,
            subject: `Thanks for contacting Delanki`,
            text: `${message}`,
            html: `
            <div style="
            padding: 20px 30px;
        "><h1 style="
            font-size: 24px;
            font-weight: 500;
            color: #f15d4d;
        ">Thanks ${name} for contacting Delanki</h1>
        <p style="
            color: gray;
            font-size: 16px;
        ">Our team has received your message, we'll respond you as soon as possible. In the meantime, please let us know if you have any additional questions or concerns. Thank you for your understanding.</p></div>

        <p style="
            color: gray;
            margin-top: 4px;
            font-size: 16px;
        ">Thanks & Regards,<br/>Team Delanki</p></div>
            `
        }
        await sendEMail(data2);
    }

    let json_response = {
        success: true,
        message: 'Mail sent',
    };
    return response.status(200).json(json_response)
}


const sendEMail = async (data) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'Godaddy',
            host: "smtpout.secureserver.net",
            secureConnection: true,
            port: 465,
            auth: {
                user: process.env.mail_user,
                pass: process.env.mail_password,
            },
        })

        const mailData = {
            from: process.env.mail_user,
            to: `${data.email}`,
            subject: `${data.subject}`,
            text: `${data.text}`,
            html: `${data.html}`
        }

        const info = await transporter.sendMail(mailData);
        console.log("result : ", info);
        return 'mail sent'

    }
    catch (error) {
        console.log(error)
    }
}
