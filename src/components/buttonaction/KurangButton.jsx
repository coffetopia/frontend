import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const KurangButton = ({ onClick }) => {
    return (
        <button className='bg-[#F4991A] text-white w-7 h-7 rounded' onClick={onClick}>
            <FontAwesomeIcon icon={faMinus} />
        </button>
    );
};

export default KurangButton;
