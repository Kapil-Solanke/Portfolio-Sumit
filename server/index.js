const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");  
const dotenv = require("dotenv"); 
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(process.env.PORT||4000, () => console.log(`Server Running on ${process.env.PORT}`));

const contactEmail = nodemailer.createTransport({
    host:process.env.MAIL_HOST,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  
  contactEmail.verify((error) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Ready to Send");
    }
  });
  router.post("/contact", async(req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message; 
    const mail = {
      from: name,
      to: process.env.MAIL_USER,
      subject: "Contact Form Submission",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Message: ${message}</p>`,
    };
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        console.log(error);
        res.json({ status: "ERROR" });
      } else {
        console.log(mail);
        res.json({ status: "Message Sent" });
      }
    });
  });