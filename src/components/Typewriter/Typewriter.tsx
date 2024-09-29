import { useEffect, useState } from "react";
import { Box, Fade } from "@mui/material";

interface TypewriterProps {
    stringsArr: string[];
}

const Typewriter = (props: TypewriterProps) => {
    const typingStrings = props.stringsArr;
    const [loaded, setLoaded] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showText, setShowText] = useState(true);

    useEffect(() => {
        setLoaded(true);
        const intervalId = setInterval(() => {
            setShowText(false);

            setTimeout(() => {
                setCurrentIndex(
                    (currentIndex) => (currentIndex + 1) % typingStrings.length
                );
                setShowText(true);
            }, 300);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [currentIndex, typingStrings.length]);

    return (
        <>
            <Box>
                <Fade in={showText} timeout={500}>
                    <Box component="span">{typingStrings[currentIndex]}</Box>
                </Fade>
            </Box>
        </>
    );
};

export default Typewriter;
