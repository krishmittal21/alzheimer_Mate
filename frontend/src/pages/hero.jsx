import {AiFillTwitterCircle, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import React from 'react'
import '../App.css'
import "../index.css"
export default function Hero() {
    return (
            <section className='min-h-screen'>
            
            <div className='text-center p-10 '>
                <h2 className='text-5xl py-2 text-green-500 font-medium'>Alzheimer Early Detection and Diagnosis</h2>
                <h3 className='text-2xl py-2 text-green-500 font-medium'>with Azure based deep learning</h3>
                <p className='text-md py-5 leading-8 text-gray-800'>
                Revolutionize Alzheimers care with our cutting-edge Azure-powered deep learning SaaS. Detect and diagnose Alzheimers early, empowering healthcare professionals to make a real difference. Join us in the fight against this devastating disease.
                </p>
            </div>
            <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
                <AiFillTwitterCircle/>
                <AiFillGithub/>
                <AiFillLinkedin/>
            </div>
            <div className='relative mx-auto rounded-full w-80 h-60 mt-20 overflow-hidden'>
            </div>
            </section>
    )
}
