import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import './NotFound.css';

function NotFound() {
    return (
        <div className="NotFound">
            <Header />
            <div class="bg-white dark:bg-gray-800 h-full NotFoundContent">
                <div class="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                        <span class="block">
                            Error 404
                        </span>
                        <span class="block text-indigo-500">
                            We couldn&#x27;t find the desired route.
                        </span>
                    </h2>
                    <div class="lg:mt-0 lg:flex-shrink-0">
                        <div class="mt-12 inline-flex rounded-md shadow">
                            <button type="button" class="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Go Home
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer class='w-full pin-b'/>
        </div>
    )
}

export default NotFound
