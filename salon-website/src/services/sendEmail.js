import emailjs from '@emailjs/browser';
import { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } from '../constants/emailJsConfig';

export function sendEmail({ name, phone, email, message }) {
  const templateParams = {
    from_name: name,
    data: {
      email,
      phone,
      message
    }
  }
  emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );
}