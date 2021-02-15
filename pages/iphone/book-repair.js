import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { formium } from '../../lib/formium';
import { FormiumForm } from '@formium/react';

import Header from '../../components/Header';
import Form from '../../components/Form';
import Footer from '../../components/Footer';

export async function getStaticProps(context) {
    const form = await formium.getFormBySlug('book-repair');
    return { props: { form } };
  }
  export default function MyApp({ form }) {
    return (
      <div>
            <div>
      <NextSeo
      title="iPatchNext - iPhone Repair"
      description="iPatch Next.JS TailWind UI tests."
    />
    <Header />
     
  <div class="bg-gray-800">     
  <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl">
  <div className="px-0 sm:px-4 lg:px-0 lg:flex lg:justify-between lg:items-center">
    <div className="max-w-xl">
      <h2 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">Book iPhone Repair</h2>
      <p className="mt-5 text-xl text-gray-200">From broken screens to bad batteries, we fix it all.</p>
    </div>
  </div>
</div>
</div>
<FormiumForm
          data={form}
          onSubmit={async (values) => {
            // Send form values to Formium Dashboard
            await formium.submitForm('book-repair', values);
            alert('Success');
          }}
        />
<Footer />
</div>
      </div>
    );
  }
