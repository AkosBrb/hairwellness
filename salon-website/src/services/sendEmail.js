import emailjs from '@emailjs/browser';
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from '../constants/emailJsConfig';

export async function sendEmail({ name, phone, email, message }) {
  const templateParams = {
    from_name: name,
    data: {
      email,
      phone,
      message
    }
  }
  const responseStatus = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
    (response) => {
      return response.status
    },
    (error) => {
      return error
    },
  );
  return responseStatus
}