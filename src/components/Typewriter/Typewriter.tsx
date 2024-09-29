import { useEffect, useState } from "react";
import { Box, Fade } from "@mui/material";

interface TypewriterProps {
    stringsArr: string[];
    pageIsLoaded: boolean
}

const Typewriter = (props: TypewriterProps) => {
    const typingStrings = props.stringsArr;
    const [loaded, setLoaded] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showText, setShowText] = useState(true);

    useEffect(() => {
        if (props.pageIsLoaded) {
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
        }
        
    }, [currentIndex, typingStrings.length, props.pageIsLoaded]);

    return (
        <>
            <Fade in={props.pageIsLoaded && showText} timeout={500}>
                <Box component="span">{typingStrings[currentIndex]}</Box>
            </Fade>
        </>
    );
};

export default Typewriter;
