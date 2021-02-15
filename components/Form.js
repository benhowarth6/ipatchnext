import React from 'react';
import { formium } from '../lib/formium';
import { FormiumForm } from '@formium/react';
export async function getStaticProps(context) {
  const form = await formium.getFormBySlug('book-repair');
  return { props: { form } };
}
export default function Form({ form }) {
  return (
    <div>
      <h1>My first Formium form</h1>
      <FormiumForm
        data={form}
        onSubmit={async (values) => {
          // Send form values to Formium
          await formium.submitForm('book-repair', values);
          alert('Success');
        }}
      />
    </div>
  );
}