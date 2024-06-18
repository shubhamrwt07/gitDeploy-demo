const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require('path')



const app = express();
app.use(cors({ origin: "*" }));
app.use(bodyParser.json());
const Port = 8081 || process.env.PORT;
require("./config/db.config.js");
require("./routes/index.js")(app);

const nodemailer = require("nodemailer");

app.post("/api/sendmail", async (req, res) => {
  let user = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "support@rowthtech.com",
      pass: "jzkaxixunjohaita",
    },
  });

  const details = {
    from: "support@rowthtech.com",
    to: "raavishdahuja@rowthtech.com",
    cc: "m.bhandari@rowthtech.com",
    subject: "New inquiry received",
    text: "email",
    html: `<strong>Rowth Tech User Email. </strong>
        <ul>
             <li>Name:${user.name}</li>
             <li>Email: ${user.email}</li>
            <li>Phone: ${user.phone}</li>
            <li>Org: ${user.place}</li> 
            <li>MSG: ${user.msg}</li>
        </ul> `,
  };

  try {
    const info = await transporter.sendMail(details);
    if (info) {
      res.status(200).json({ status: 200, message: "successfully send mail" });
    }
  } catch (error) {
    res.status(404).json({ status: 404, message: "somthing worng" });
  }
});

app.use(express.static(path.join(__dirname,"user")));

app.get("*",(req,res)=>{
res.sendFile(path.join(__dirname,"user","index.html"));
});

app.listen(Port, () => {
  console.log(`server is running in port ${Port}`);
});
