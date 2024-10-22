import * as yup from 'yup';

export const contactValidationSchema = yup.object().shape({
  name: yup.string()
    .required('Kötelező megadni!')
    .min(3, 'Túl rövid!')
    .max(30, 'Túl hosszú!'),
  phone: yup.number()
    .required('Kötelező telefonszámot megadni!'),
  email: yup.string()
    .required('Kötelező e-mail címet megadni!')
    .email('Érvénytelen e-mail cím!'),
  message: yup.string()
    .required('Kérlek írd le miben segíthetek!')
    .min(20, 'Túl rövid!')
    .max(100, 'Túl hosszú!')
})