import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import React, { useEffect } from "react";
import kwesforms from 'kwesforms';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Home() {
    useEffect(() => {
      kwesforms.init();
    }, []);
  
    return (
      <main>
        <h1>Booking</h1>
        <form
          id="bookingForm"
          className="kwes-form"
          action="https://kwes.io/api/foreign/forms/N52Hhfi6oCrKkb3FaKU6"
        >
          <div>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
            />
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      </main>
    );
  }