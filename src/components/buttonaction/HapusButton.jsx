import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const HapusButton = ({ onClick }) => {
    return (
        <button className='bg-[#F41A1A] text-black w-7 h-7 rounded' onClick={onClick}>
            <FontAwesomeIcon icon={faTrash} />
        </button>
    );
};

export default HapusButton;
