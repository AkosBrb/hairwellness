import * as yup from 'yup';

const phoneRegEx = /((?:\+?3|0)6)(?:-|\()?(\d{1,2})(?:-|\))?(\d{3})-?(\d{3,4})/

export const contactValidationSchema = yup.object().shape({
  name: yup.string()
    .required('Kötelező megadni!')
    .min(3, 'Túl rövid!')
    .max(30, 'Túl hosszú!'),
  phone: yup.number()
    .required('Kötelező telefonszámot megadni!')
    .matches(phoneRegEx, 'Érvénytelen telefonszám!')
    .min(11, 'Érvénytelen telefonszám!')
    .max(12, 'Érvénytelen telefonszám!'),
  email: yup.string()
    .required('Kötelező e-mail címet megadni!')
    .email('Érvénytelen e-mail cím!'),
  message: yup.string()
    .required('Kérlek írd le miben segíthetek!')
    .min(20, 'Túl rövid!')
    .max(100, 'Túl hosszú!')
})