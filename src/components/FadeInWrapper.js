import React, { useRef, useState, useEffect } from "react";
import '../css/style.css'

const FadeInWrapper = ({children,}) => {

    const domRef = useRef();

    const [isVisible, setVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {   
        if (entries[0].isIntersecting) {
            setVisible(true);
            observer.unobserve(domRef.current);
        }});
        
        observer.observe(domRef.current);
        
        return () => observer.disconnect();
    }, []);

    return (
        <section 
            ref={ domRef } 
            className={ isVisible ? ' is-visible' : '' }
        >
            { children }
        </section>
        );
};

export default FadeInWrapper;