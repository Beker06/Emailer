import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { name, lastname, number, email, city, message } =
                req.body;

            console.log(req.body);

            const transporter = nodemailer.createTransport({
                name: "My-Webpage",
                host : "smtp.gmail.com",
                port : 465,
                secure: true,
                auth : {
                    user : "bosc790@gmail.com",
                    pass : "cakvtjtrmlmmjbnh"
                },
                send: true,
            });

            console.log(transporter);

            transporter.verify(function (error, success) {
                if (error) {
                    console.log(error);
                    return;
                } else {
                    console.log("Server is ready to take our messages");
                }
            });

            
            const info = await transporter.sendMail({
                from: email,
                to: "bosc790@gmail.com",
                subject: "MESSAGE FROM MY WEBPAGE",
                text: `Name: ${name}${" "}${lastname}\nPhone number: ${number}\nE-mail: ${email}\nCity: ${city}\nMessage: ${message}`,
            });

            console.log("Message sent: %s", info.messageId);
            res.status(200).json({ message: "Email sent" });
        } catch (err) {
            res.status(500).json({
                message: "Error sending the message",
                error: err,
            });
        }
    }
}
