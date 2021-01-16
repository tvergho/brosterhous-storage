import { EMAIL } from 'lib/constants';
import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  const {
    name, email, phone, description,
  } = req.body;
  sgMail.setApiKey(process.env.SENDGRID_API_KEY_V2);
  const msg = {
    to: EMAIL,
    from: {
      email: 'noreply@brosterhousstorage.com',
      name: 'Brosterhous Storage Support',
    },
    dynamicTemplateData: {
      personName: name,
      replyEmail: email,
      phone,
      message: description,
    },
    templateId: 'd-bcaa425a868b40be85ca2a91de1900d2',
    replyTo: {
      email,
      name,
    },
  };
  try {
    await sgMail.send(msg);
    return res.status(200).json('Success.');
  } catch (e) {
    console.log(e);
    return res.status(500).json('There was an error.');
  }
}
