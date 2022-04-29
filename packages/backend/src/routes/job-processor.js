const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = async function(job){
  //TODO enqueue a new session for the next day. Implement logic for checking whether there are any cards for user to review

  const msg = {
    to: job.data.to, // Change to your recipient
    from: "kimyoungjin1001@gmail.com", // Change to your verified sender
    subject: "Here's your flashcards review link!",
    html: job.data.html,
  }
  const response = await sgMail.send(msg)
  if(response[0].statusCode !== 202) throw "Wrong email response: " + response

}
