import React, { useEffect, useRef, useState } from 'react';
import { HiWrenchScrewdriver } from 'react-icons/hi2';
import { Ri24HoursLine } from 'react-icons/ri';
import { IoIosStarOutline } from 'react-icons/io';
import { BsShop } from 'react-icons/bs';

const counters = [
    { icon: <HiWrenchScrewdriver size={50} />, number: 100, label: 'Repairs Done' },
    { icon: <Ri24HoursLine size={50} />, number: 24, label: 'Hours Support' },
    { icon: <IoIosStarOutline size={50} />, number: 150, label: '5 Star Reviews' },
    { icon: <BsShop size={50} />, number: 50, label: 'Shops' },
];

const CounterComponent = () => {
    const [visible, setVisible] = useState(false);
    const sectionRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setVisible(true);
            },
            { threshold: 0.4 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div
            ref={sectionRef}
            className="w-full flex flex-col md:flex-row flex-wrap items-center md:justify-around gap-y-10 md:gap-y-0 md:gap-x-80 mt-20"
        >
            {counters.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center w-2/3 md:w-auto">
                    <div className="text-blue-500 text-4xl">{item.icon}</div>
                    <div className="text-3xl font-bold text-gray-800 mt-2">
                        {visible ? <Counter target={item.number} /> : 0}
                    </div>
                    <div className="text-gray-600 mt-1 text-sm">{item.label}</div>
                </div>
            ))}
        </div>


    );
};

// Counter animation
const Counter = ({ target }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const duration = 1500;
        const increment = target / (duration / 10);
        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                start = target;
                clearInterval(timer);
            }
            setCount(Math.floor(start));
        }, 10);
        return () => clearInterval(timer);
    }, [target]);

    return <>{count}</>;
};

export default CounterComponent;
