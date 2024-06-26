import { useRef } from "react";
import ListIcon from "./ListIcon";
import { useScroll, motion } from "framer-motion";
import { EXPERIENCES } from "../Globel/Text";

const Details = ({ position, company, companyLink, time, address, work }) => {
    const Listref = useRef(null);
    return (
        <li
            ref={Listref}
            className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center 
			justify-between md:w-[80%]"
        >
            <ListIcon referance={Listref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
                    {position} &nbsp;
                    <div className="capitalize underline text-primary dark:text-primaryDark">@{company}</div>
                </h3>
                <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
                    {time} | {address}
                </span>
                <p className="font-medium w-full md:text-sm text-left">{work}</p>
            </motion.div>
        </li>
    );
};

const Experience = () => {
    const Lineref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: Lineref,
        layoutEffect: false,
        offset: ["start end", "center start"],
    });
    return (
        <div className="my-40 md:my-20 md:mb-10">
            <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
                Experience
            </h2>
            <div className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
                <motion.div
                    ref={Lineref}
                    className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px]
					xs:left-[20px]"
                    style={{ scaleY: scrollYProgress }}
                />
                <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
                    {EXPERIENCES.map((item, i) => (
                        <Details
                            key={i + "kldsfb" + i}
                            position={item.position}
                            company={item.company}
                            companyLink={item.companyLink}
                            time={item.time}
                            address={item.address}
                            work={item.work}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Experience;
