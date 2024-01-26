import React from 'react';

const HamburgerIcon = ({width, height}) => {
    return <>
        <svg xmlns="http://www.w3.org/2000/svg" width={width ?? 24} height={height ?? 24} viewBox="0 0 24 24" fill='none'>
            <path 
                d="M4 6h16v2H4zm4 5h12v2H8zm5 5h7v2h-7z"
                fill='currentColor'
            >
            </path>
        </svg>
    </>
}

export default HamburgerIcon
