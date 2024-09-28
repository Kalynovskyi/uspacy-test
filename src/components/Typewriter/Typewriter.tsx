import { useEffect, useState } from "react";
import styles from "./Typewriter.module.css";

interface TypewriterProps {
    stringsArr: string[];
}

const Typewriter = (props: TypewriterProps) => {
    const typingStrings = props.stringsArr;
    const [currentString, setCurrentString] = useState(typingStrings[0]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex >= 0 && currentIndex < typingStrings.length) {

            const timeout = setTimeout(() => {
                setCurrentString(typingStrings[currentIndex]);
                setCurrentIndex(currentIndex + 1);    
            }, 3000);

            return () => {
                clearTimeout(timeout);
            };
        } else {
            setCurrentIndex(0);
        }
    }, [typingStrings, currentString, currentIndex]);

    return (
        <>
            <span>
                {currentString}
            </span>
        </>
    );
};

export default Typewriter;
