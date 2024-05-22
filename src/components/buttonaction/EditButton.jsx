import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons'; // Ensure correct import

const EditButton = ({ onEdit }) => {
    return (
        <button className='bg-[#3fff00] text-black w-7 h-7 rounded' onClick={onEdit}>
            <FontAwesomeIcon icon={faPencilAlt} />
        </button>
    );
};

export default EditButton;
