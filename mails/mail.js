const nodemailer = require("nodemailer");


const sendEmail=async function main() {
  try{
    // let testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'herta.schimmel@ethereal.email',
            pass: 'pTqUPGtapKHFJFPhkS'
        },
        tls: {
            rejectUnauthorized: false
        }
    });


    // let transporter = nodemailer.createTransport({
    //   host: "smtp.ethereal.email",
    //   port: 587,
    //   secure: false, // true for 465, false for other ports
    //   auth: {
    //     user: testAccount.user, 
    //     pass: testAccount.pass, 
    //   },
    // });
  
    
    let info = await transporter.sendMail({
      from: '"Fred Foo 👻" <herta.schimmel@ethereal.email>', 
      to: "sai2aeronautical@gmail.com", 
      subject: "Hello ✔", 
      text: "Hii", 
      html: "<b>New user details</b>", 
    });
  
    console.log("Message sent: %s", info.messageId);
    
  
    
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    
  }catch(e) {
      console.error(e)
  }

}

  

module.exports=sendEmail