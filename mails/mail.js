const nodemailer=require('nodemailer')
const {google}=require('googleapis')
const oAuth2=google.auth.OAuth2

const clientID='1075417148314-1dk70gmum50rp4qcjmbc8eebgpbkfiu7.apps.googleusercontent.com'
const clientSecret='5RDmtEmXEd4pRBtrnBz__m46'
const redirectURI='https://developers.google.com/oauthplayground';
const refreshToken='1//04GNcwMGQv-YiCgYIARAAGAQSNwF-L9IrOvup_KcLSZsHnLrfsPhQSztDOzy7xNYyRIpW7-UmV0ZLEotqWlrtYM-RaammKiiGEjM'

const oAuth2client=new oAuth2(clientID, clientSecret, redirectURI)
oAuth2client.setCredentials({refresh_token:refreshToken})

async function sendEmail(msg){
    try{
     const accessToken= await oAuth2client.getAccessToken()

     const transporter=nodemailer.createTransport({
         service: 'gmail',
         auth:{
             type:'OAuth2',
             user:'duddelash@iitrpr.ac.in',
             clientId:clientID,
             clientSecret:clientSecret,
             refreshToken:refreshToken,
             accessToken: accessToken
         },
         tls : { rejectUnauthorized: false }
     })

     const mailOptions={
         from:'"Yaswanth Koneri"<duddelash@iitrpr.ac.in>',
         to:'techswap.iit@gmail.com',
         subject:'Registration Notification',
         text:'New User has been registered',
         html:`<p>New Registered User</p>
         <br>
         <b> <table>
         <tr><td>Name</td><td>${msg.name}</td></tr>
        <tr><td>Institute</td><td>${msg.institute}</td></tr>
        <tr><td>Mobile</td><td>${msg.mobile}</td></tr>
         <tr><td>Department</td><td>${msg.department}</td></tr>
         <tr><td>State</td><td>${msg.state}</td></tr>
         <tr><td>Date</td><td>${msg.date}</td></tr>
     
     
     </table> </b> `

     }

     const result=await transporter.sendMail(mailOptions)
    //  return result
     console.log('Email sent',result)
    }
    catch(e){
        console.error(e)
    }
}


module.exports = sendEmail