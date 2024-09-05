import React from 'react';
import CountUp from 'react-countup';

const Index = () => {
    const planning = 100;
    const actual = 90;

    const efficiency = (actual / planning) * 100;

    return (
        <div>
            <div className="mb-5 flex items-center justify-center">
                <div className="max-w-[50%] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                    <div className="p-5 bg-red-600 flex justify-center items-center">
                        <h1 className="text-black text-6xl font-black mb-4 dark:text-white-light">LINE 1 WAFER</h1>
                    </div>
                    <div className="py-7 px-6">
                        <div className="flex flex-col items-center mb-2">
                            <h4 className="text-black text-3xl mt-4 text-center dark:text-white font-black mb-2">PLANNING</h4>
                            <div className="w-[100%] h-[30%] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex items-center justify-center">
                                <CountUp start={0} end={planning} className="text-danger text-9xl font-extrabold text-center pr-2" />
                                <h4 className="text-black text-4xl text-center dark:text-white font-extrabold">CARTON</h4>
                            </div>
                        </div>
                        <div className="flex flex-col items-center mb-2">
                            <h4 className="text-black text-3xl mt-4 text-center dark:text-white font-black mb-2">ACTUAL</h4>
                            <div className="w-[100%] h-[30%] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex items-center justify-center">
                                <CountUp start={0} end={actual} duration={100} className="text-danger text-9xl font-extrabold text-center pr-2" />
                                <h4 className="text-black text-4xl text-center dark:text-white font-extrabold">CARTON</h4>
                            </div>
                        </div>
                        <div className="flex flex-col items-center mb-2">
                            <h4 className="text-black text-3xl mt-4 text-center dark:text-white font-black mb-2">EFFICIENCY</h4>
                            <div className="w-[100%] h-[30%] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex items-center justify-center">
                                <CountUp start={0} end={efficiency} duration={10} className="text-danger text-9xl font-extrabold text-center" />
                                <p className="dark:text-white text-9xl font-extrabold pr-2">%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="max-w-[50%] w-full bg-white shadow-[4px_6px_10px_-3px_#bfc9d4] rounded border border-white-light dark:border-[#1b2e4b] dark:bg-[#191e3a] dark:shadow-none">
                    <div className="p-5 bg-red-600 flex justify-center items-center">
                        <h1 className="text-black text-6xl font-black mb-4 dark:text-white-light">LINE 2 WAFER</h1>
                    </div>
                    <div className="py-7 px-6">
                        <div className="flex flex-col items-center mb-2">
                            <h4 className="text-black text-3xl mt-4 text-center dark:text-white font-black mb-2">PLANNING</h4>
                            <div className="w-[100%] h-[30%] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex items-center justify-center">
                                <CountUp start={0} end={100} className="text-danger text-9xl font-extrabold text-center pr-2" />
                                <h4 className="text-black text-4xl text-center dark:text-white font-extrabold">CARTON</h4>
                            </div>
                        </div>
                        <div className="flex flex-col items-center mb-2">
                            <h4 className="text-black text-3xl mt-4 text-center dark:text-white font-black mb-2">ACTUAL</h4>
                            <div className="w-[100%] h-[30%] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex items-center justify-center">
                                <CountUp start={0} end={100} duration={100} className="text-danger text-9xl font-extrabold text-center pr-2" />
                                <h4 className="text-black text-4xl text-center dark:text-white font-extrabold">CARTON</h4>
                            </div>
                        </div>
                        <div className="flex flex-col items-center mb-2">
                            <h4 className="text-black text-3xl mt-4 text-center dark:text-white font-black mb-2">EFFICIENCY</h4>
                            <div className="w-[100%] h-[30%] shadow-[1px_2px_12px_0_rgba(31,45,61,0.10)] rounded border border-white-light dark:border-[#1b2e4b] flex items-center justify-center">
                                <CountUp start={0} end={100} duration={1000} className="text-danger text-9xl font-extrabold text-center" />
                                <p className="dark:text-white text-9xl font-extrabold pr-2">%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
