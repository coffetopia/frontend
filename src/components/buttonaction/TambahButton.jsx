import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const TambahButton = ({  onTambah }) => {
    return (
        <button className='bg-[#F4991A] text-white w-7 h-7 rounded' onClick={onTambah}>
            <FontAwesomeIcon icon={faPlus} />
        </button>
    );
};

export default TambahButton;
