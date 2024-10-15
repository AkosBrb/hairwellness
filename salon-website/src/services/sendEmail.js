import emailjs from '@emailjs/browser';

export function sendEmail({ name, phone, email, message }) {
  const templateParams = {
    from_name: name,
    from_email: email,
    to_name: '',
    message: message
  }
  const serviceID = 'service_7b5m63g';
  const templateID = 'template_qkd9bbj';
  const publicKey = '3oHOX7x9cCWpob_5y';
  emailjs.send(serviceID, templateID, templateParams, publicKey).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
    },
  );
}