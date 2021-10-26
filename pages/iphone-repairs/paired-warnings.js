import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { NextSeo } from "next-seo";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function Home() {
    return (
        <div>
            <Navigation />
            <div className="bg-gray-50">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                    <div className="py-24 text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">Paired Warnings</h1>
                        <p className="mt-4 max-w-3xl mx-auto text-base text-gray-500">
                            We offer a large selection of iPhone repairs including screens, batteries, charging ports and more for nearly all models.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}