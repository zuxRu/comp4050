import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';

import { useDocTitle } from '../../components/general/useDocTitle'
import { title } from '../../utils/urlString'
import "../../styles/selfProposed.css"
import Header from '../../components/general/Header';
import "../../App.css";

export default function SubmitSelfPref({isOpen}) {
  useDocTitle(`${title}: Submit Self Proposed Prefernce`)
  
  return (
    <div className={isOpen ? "master-flexbox": "master-flexbox-closed"}>
      <Header headerText="Submit Self Proposed Preference" />
      {/* <div >  */}
        <Formik
          initialValues={{ sp_title: "", sp_research_question: "", sp_description: "" }}
          validate={(values) => {
            let errors = {};
            if (!values.sp_title) {
              errors.sp_title = "Project Title Required*";
            }
            if (!values.sp_research_question) {
              errors.sp_research_question = "Reasearch Question Required*";
            }
            if (!values.sp_description) {
              errors.sp_description = "Project Description Required*";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({ isSubmitting }) => (
            <Form className='form'>
                <Field
                  type="text"
                  name="sp_title"
                  placeholder="Enter project title*"
                  className='form-fields child-flexbox'
                />
                <ErrorMessage name="sp_title" component="div" className='errorMessage' />

                <Field
                  type="text"
                  name="sp_research_question"
                  placeholder="Enter research question*"
                  className='form-fields child-flexbox'
                />
                <ErrorMessage name="sp_research_question" component="div" className='errorMessage' />

                <Field
                  type="textfield"
                  name="sp_description"
                  placeholder="Enter project description*"
                  className='form-fields child-flexbox'
                />
                <ErrorMessage name="sp_description" component="div" className='errorMessage' />
              <span>
                <button type="submit" disabled={isSubmitting} className='butn'>
                  Submit
                </button>
              </span>
            </Form>
          )}
        </Formik> 
      {/* </div> */}
    </div>
  )
}
