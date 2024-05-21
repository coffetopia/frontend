import React from 'react';
import { css } from '@emotion/react';
import card from "../../assets/logobutton/card.png";
// Path menuju gambar logo

const cardStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100px;

    .btn {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px 20px;
        background-color: #f7f7f7;
        border: none;
        border-radius: 5px;
        cursor: pointer;

        .icon {
            width: 10px; /* Ukuran gambar ikon diubah menjadi 10px */
            height: 10px; /* Ukuran gambar ikon diubah menjadi 10px */
            margin-right: 10px;
        }

        .text {
            font-weight: bold;
        }
    }
`;

const Buttoncard = () => {
    return (
        <div css={cardStyle} className="flex items-center">
        <button className="btn flex items-center relative">
        <input type="checkbox" className="hidden" />
            <div className="border-2 border-[#321313] rounded-full bg-white w-4 h-4 absolute left-[20px]"></div>
            <img
                src={card}
                alt="card"
                className="icon bg-[#F4991A] border-[#321313] border rounded-lg"
                style={{ width: '50px', height: '50px', marginRight: '36px', marginLeft: '60px' }}
            />
            <span className="font-bold text-[#321313] ml-2">Card</span>
        </button>
    </div>
    


    );
};

export default Buttoncard;
