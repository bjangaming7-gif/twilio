// Download the helper library from https://www.twilio.com/docs/node/install
const twilio = require("twilio"); // Or, for ESM: import twilio from "twilio";

// Find your Account SID at twilio.com/console
// Provision API Keys at twilio.com/console/runtime/api-keys
// and set the environment variables. See http://twil.io/secure
// For local testing, you can use your Account SID and Auth token
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const apiKey = process.env.TWILIO_API_KEY;
const apiSecret = process.env.TWILIO_API_SECRET;
const client = twilio(apiKey, apiSecret, { accountSid: accountSid });

async function createVerification() {
  const verification = await client.verify.v2
    .services("VAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
    .verifications.create({
      channel: "sms",
      to: "+15017122661",
    });

  console.log(verification.sid);
}

createVerification();
