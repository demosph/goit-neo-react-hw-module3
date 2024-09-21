import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useId } from 'react';
import styles from './ContactForm.module.css';

const ContactForm = ({ onCreate }) => {
  const nameId = useId();
  const phoneId = useId();

  const initialValues = {
    name: '',
    number: '',
  };

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Name is too short!')
      .max(50, 'Name is too long!')
      .required('Name is required'),
    number: Yup.string()
      .min(3, 'Number is too short!')
      .max(50, 'Number is too long!')
      .matches(/^[\d+-]+$/, 'Number must contain only digits, +, and -')
      .required('Number is required'),
  });

  function onSubmit({ name, number }, { resetForm }) {
    onCreate({ id: 'id-' + nanoid(), name, number });
    resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={contactSchema}
    >
      <Form className={styles.contactForm}>
        <div className={styles.contactFormGroup}>
          <label htmlFor={nameId}>Name</label>
          <Field name="name" id={nameId} type="text"></Field>
          <ErrorMessage name="name" component="div" className={styles.error} />
        </div>
        <div className={styles.contactFormGroup}>
          <label htmlFor={phoneId}>Phone</label>
          <Field name="number" id={phoneId} type="phone"></Field>
          <ErrorMessage
            name="number"
            component="div"
            className={styles.error}
          />
        </div>
        <div className={styles.contactFormSubmit}>
          <button type="submit">Add contact</button>
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;