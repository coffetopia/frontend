import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const TambahButton = ({ onClick }) => {
  return (
    <button className='bg-[#F4991A] text-white w-7 h-7 rounded ml-2' onClick={onClick}>
      <FontAwesomeIcon icon={faPlus} />
    </button>
  );
};

export default TambahButton;