// import Select from "react-select";
// import { useState } from "react";

// export default function SelectPayment () {
// const options = [
//     {value: "credit-card", label: "Credit Card", image: "/imgFooter/Mastercard.svg" },
//     {value: "debit-card", label: "Debit Card" },
//     {value: "paypal", label: "Paypal" },
//     {value: "google-pay", label: "GPay" },
//     {value: "american-exprees", label: "American Express" }
//   ]
//   const [selected, setSelected] = useState(null);

//   const handleChange = (selectedOption) => {
//     setSelected(selectedOption);
//     console.log(`Option selected:`, selectedOption);
//   };

//   return (
//     <div className="container">
//       <div className="mt-5 m-auto w-50">
//         <Select options={options} onChange={handleChange} autoFocus={true} />

//         <div className="mt-4">
//           {selected && <>You've selected {selected.value}</>}
//         </div>
//       </div>
//     </div>
//   );
// };

import Select from "react-select";
import { useState } from "react";

export default function SelectPayment() {
  const options = [
    { value: "Mastercard", label: "Mastercard", image: "/imgFooter/Mastercard.svg" },
    { value: "Visa", label: "Visa", image: "/imgFooter/Visa.svg" },
    { value: "PayPal", label: "Paypal", image: "/imgFooter/PayPal.svg" },
    { value: "Google-Pay", label: "GPay", image: "/imgFooter/GooglePay.svg" },
    { value: "American-Express", label: "American Express", image: "/imgFooter/Amex.svg" },
    { value: "Maestro", label: "Maestro", image: "/imgFooter/Maestro.svg" },
    { value: "Bancontact", label: "Bancontact", image: "/imgFooter/Bancontact.svg" }
  ];
  const [selected, setSelected] = useState(null);

  const handleChange = (selectedOption) => {
    setSelected(selectedOption);
    console.log(`Option selected:`, selectedOption);
  };

  const OptionWithImage = ({ innerProps, label, data }) => (
    <div {...innerProps} className=" flex items-center justify-between px-6">
      {label}
      {data.image &&  < img src={data.image} alt={label}  className="w-10 h-10 mr-2" />}
      
    </div>
  );

  return (
    <div className="container">
      <div className=" mt-5 m-auto w-50">
        <Select
          options={options}
          components={{ Option: OptionWithImage }}
          onChange={handleChange}
          autoFocus={true}
        />

        <div className="mt-4 text-header-bg font-semibold">
          {selected && <>You've selected {selected.value}</>}
        </div>
      </div>
    </div>
  );
};