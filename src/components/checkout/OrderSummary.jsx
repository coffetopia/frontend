import React from "react";

const OrderSummary = ({ confirmedOrder, totalPrice }) => {
  return (
    <div className="p-4 bg-white border-1 rounded-md w-full sm:w-4/5 mt-0 border-[#321313]">
      <table className="w-full">
        <tbody>
          {confirmedOrder.map((product, index) => (
            <tr key={index}>
              <td className="p-4">{product.name}</td>
              <td className="p-4 text-center">{product.amount}</td>
              <td className="p-4 text-right">{`IDR ${(product.price * product.amount).toLocaleString("id-ID")}`}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="font-bold">
            <td className="p-4">Total</td>
            <td className="p-4 text-center"></td>
            <td className="p-4 text-right">{`IDR ${totalPrice.toLocaleString("id-ID")}`}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default OrderSummary;
