import React from 'react';
import { motion } from "motion/react";
import { FaCode, FaPaintBrush, FaBullhorn, FaChartLine, FaHeadset, FaPenNib } from 'react-icons/fa';

const categories = [
    { icon: <FaCode />, title: "Development", count: "120+ jobs", big: true },
    { icon: <FaPaintBrush />, title: "Design", count: "80+ jobs" },
    { icon: <FaBullhorn />, title: "Marketing", count: "65+ jobs" },
    { icon: <FaChartLine />, title: "Sales", count: "40+ jobs" },
    { icon: <FaHeadset />, title: "Support", count: "35+ jobs" },
    { icon: <FaPenNib />, title: "Writing", count: "28+ jobs" },
];

const ExploreCategories = () => {
    return (
        <div className="px-4 sm:px-6 lg:px-0 py-16">
            <h2 className="text-4xl text-blue-600 font-bold text-center pb-4">Explore by Category</h2>
            <p className="text-center text-gray-500 max-w-xl mx-auto pb-12">
                Whatever your craft, there's a remote role waiting for you.
            </p>

            <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[140px] gap-4">
                {categories.map((cat, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: idx * 0.08 }}
                        whileHover={{ y: -6 }}
                        className={`
                            relative overflow-hidden rounded-2xl cursor-pointer
                            flex flex-col justify-end p-5
                            ${cat.big
                                ? "col-span-2 row-span-2 bg-blue-600 text-white"
                                : "bg-base-200 text-base-content"}
                        `}
                    >
                        <div className={`text-3xl ${cat.big ? "text-blue-200" : "text-blue-500"} mb-2`}>
                            {cat.icon}
                        </div>
                        <h3 className={`font-bold ${cat.big ? "text-2xl" : "text-lg"}`}>{cat.title}</h3>
                        <p className={`${cat.big ? "text-blue-100" : "text-gray-500"} text-sm`}>{cat.count}</p>

                        <div className={`absolute -right-6 -bottom-6 w-24 h-24 rounded-full ${cat.big ? "bg-white/10" : "bg-blue-500/5"}`} />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ExploreCategories;