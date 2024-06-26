import { Field, Form, Formik } from "formik";
import validationSchema from "../helpers/validationSchema";
import { ErrorMessage } from "formik";

import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";

const ContactForm = ({ setContacts }) => {
  const handleAddContact = (values, actions) => {
    setContacts((prevState) => [
      ...prevState,
      { name: values.userName, number: values.userTel, id: nanoid() },
    ]);
    actions.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{ userName: "", userTel: "" }}
        onSubmit={handleAddContact}
        validationSchema={validationSchema}
      >
        <Form>
          <label>
            <ErrorMessage
              className={css.error}
              name="userName"
              component="span"
            />
            <Field
              name="userName"
              type="text"
              placeholder="Henry Morgan"
            ></Field>
          </label>
          <br />
          <label>
            <Field name="userTel" type="tel" placeholder="0957777777"></Field>
            <ErrorMessage
              className={css.error}
              name="userTel"
              component="span"
            />
          </label>
          <br />
          <button type="submit">📥</button>
        </Form>
      </Formik>
    </>
  );
};

export default ContactForm;
