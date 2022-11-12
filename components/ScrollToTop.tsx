import React, { useEffect, useState } from 'react'

function ScrollToTop() {
    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const [scrolled, setScrolled] = useState(false)
    const checkScrollTop = () => {
        if (window.pageYOffset > 75) {
            setScrolled(true)
        } else if (window.pageYOffset <= 75) {
            setScrolled(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop)
        return () => {
            window.removeEventListener('scroll', checkScrollTop)
        }
    }, [scrolled])

    return (
        <>
            <button role="button"
                type='button'
                aria-label="Scroll to Top"
                className="scrollToTop bg-red p-3 fixed bottom-10 right-10 font-bold text-white border-2 border-white rounded-full"
                onClick={scrollTop}
                style={{ display: scrolled ? 'flex' : 'none' }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 font-medium">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                </svg>

            </button>
        </>
    )
}

export default ScrollToTop