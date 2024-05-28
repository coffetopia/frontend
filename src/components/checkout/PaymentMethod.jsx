import React from "react";
import Buttoncard from "../buttoncheckout/Buttoncard";
import Buttonbank from "../buttoncheckout/Buttonbank";
import Buttoncash from "../buttoncheckout/Buttoncash";

const PaymentMethod = () => {
  return (
    <div className="p-4 bg-white border rounded-md w-full sm:w-4/5 mt-0 border-white">
      <div className="mb-4">
        <Buttoncard />
      </div>
      <div className="mb-4">
        <Buttonbank />
      </div>
      <div>
        <Buttoncash />
      </div>
    </div>
  );
};

export default PaymentMethod;
