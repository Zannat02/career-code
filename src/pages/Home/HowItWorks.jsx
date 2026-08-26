import React from 'react';
import { motion } from "motion/react";
import { FaUserPlus, FaSearch, FaPaperPlane, FaCheckCircle } from 'react-icons/fa';

const steps = [
    { icon: <FaUserPlus />, title: "Create Account", desc: "Sign up in seconds and set up your profile to get started." },
    { icon: <FaSearch />, title: "Find a Job", desc: "Browse hundreds of remote jobs matched to your skills." },
    { icon: <FaPaperPlane />, title: "Apply Instantly", desc: "Submit your application with just a few clicks." },
    { icon: <FaCheckCircle />, title: "Get Hired", desc: "Hear back from companies and land your dream role." },
];

const HowItWorks = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-0 py-16">
            <h2 className="text-4xl text-blue-600 font-bold text-center pb-4">How It Works</h2>
            <p className="text-center text-gray-500 max-w-xl mx-auto pb-16">
                Four simple steps stand between you and your next remote job.
            </p>

            <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-4">
                <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-blue-200 z-0" />

                {steps.map((step, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, delay: idx * 0.15 }}
                        className="relative z-10 flex flex-col items-center text-center flex-1 max-w-xs"
                    >
                        <div className="w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl shadow-lg ring-8 ring-blue-100">
                            {step.icon}
                        </div>
                        <span className="mt-3 text-sm font-semibold text-blue-400">STEP {idx + 1}</span>
                        <h3 className="text-xl font-bold mt-1">{step.title}</h3>
                        <p className="text-gray-500 mt-2">{step.desc}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;