// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Playfair_Display } from "next/font/google";

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["900"],
// });

// const DonationForm = () => {
//   const [citizenship, setCitizenship] = useState("Indian");
//   const [donationType, setDonationType] = useState("Once");
//   const [amount, setAmount] = useState(4500);
//   const [customAmount, setCustomAmount] = useState("");
//   const [breakfast, setBreakfast] = useState(true);
//   const [captchaAnswer, setCaptchaAnswer] = useState("");
//   const [showCertificateFields, setShowCertificateFields] = useState(false);

//   const totalAmount =
//     (customAmount ? Number(customAmount) : amount) + (breakfast ? 375 : 0);

//   const handleSubmit = (e: any) => {
//     e.preventDefault();

//     if (captchaAnswer !== "10") {
//       alert("Captcha incorrect ❌");
//       return;
//     }

//     alert(`Donation Successful ₹${totalAmount} ✅`);
//   };

//   return (
//     <div className="min-h-screen bg-[#F9F8FF] p-6 flex justify-center">
//       <div className="w-full max-w-4xl">

//         {/* 🔥 HEADER */}
//         <div className="mb-6">
//           <p className="text-sm text-gray-500">Home &gt; Online Donations</p>
//           <h1 className={`${playfair.className} text-4xl text-purple-900 mt-2`}>
//             Online Donations
//           </h1>
//         </div>

//         {/* 🌟 CARD */}
//         <motion.form
//           onSubmit={handleSubmit}
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white p-8 rounded-3xl shadow-xl space-y-8"
//         >

//           {/* ✅ DONATION CATEGORY */}
//           <div>
//             <h3 className="font-bold text-purple-900 mb-3">
//               Donation Category
//             </h3>
//             <div className="flex flex-wrap gap-3">
//               {[
//                 "Anganwadi Feeding",
//                 "Honor / Memory",
//                 "Special Occasion",
//                 "Wire Transfer",
//                 "SME Donations",
//                 "Sponsor School",
//                 "Sponsor Kitchen",
//               ].map((item) => (
//                 <button
//                   type="button"
//                   key={item}
//                   className="px-4 py-2 bg-purple-50 rounded-xl text-sm text-purple-700"
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* ✅ CITIZENSHIP */}
//           <div>
//             <h3 className="font-bold text-purple-900 mb-3">
//               Select Your Citizenship
//             </h3>
//             <div className="flex gap-4 flex-wrap">
//               {[
//                 "Indian",
//                 "NRI",
//                 "Foreign",
//               ].map((c) => (
//                 <button
//                   type="button"
//                   key={c}
//                   onClick={() => setCitizenship(c)}
//                   className={`px-4 py-2 rounded-xl border ${
//                     citizenship === c
//                       ? "bg-purple-600 text-white"
//                       : "bg-white"
//                   }`}
//                 >
//                   {c}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* ✅ DONATION TYPE */}
//           <div>
//             <h3 className="font-bold text-purple-900 mb-3">
//               Select Donation Type
//             </h3>
//             <div className="flex gap-4">
//               {["Once", "Monthly"].map((t) => (
//                 <button
//                   type="button"
//                   key={t}
//                   onClick={() => setDonationType(t)}
//                   className={`flex-1 py-3 rounded-xl border ${
//                     donationType === t
//                       ? "bg-purple-600 text-white"
//                       : ""
//                   }`}
//                 >
//                   Donate {t}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* ✅ AMOUNT */}
//           <div>
//             <h3 className="font-bold text-purple-900 mb-3">
//               Choose Donation Amount
//             </h3>

//             <p className="text-purple-700 mb-3">
//               I wish to donate ₹ {amount} to feed{" "}
//               <b>{Math.floor(amount / 1500)}</b> child(ren)
//             </p>

//             <div className="grid grid-cols-4 gap-3 mb-4">
//               {[1500, 3000, 6000, 12000].map((val) => (
//                 <button
//                   type="button"
//                   key={val}
//                   onClick={() => {
//                     setAmount(val);
//                     setCustomAmount("");
//                   }}
//                   className={`py-3 rounded-xl font-bold ${
//                     amount === val && !customAmount
//                       ? "bg-purple-600 text-white"
//                       : "bg-purple-50 text-purple-600"
//                   }`}
//                 >
//                   ₹{val}
//                 </button>
//               ))}

//               <input
//                 type="number"
//                 placeholder="Other"
//                 value={customAmount}
//                 onChange={(e) => {
//                   setCustomAmount(e.target.value);
//                   setAmount(0);
//                 }}
//                 className="input-style text-center"
//               />
//             </div>

//             {/* 🔥 BREAKFAST OPTION */}
//             <label className="flex items-start gap-3 text-sm text-purple-800">
//               <input
//                 type="checkbox"
//                 checked={breakfast}
//                 onChange={() => setBreakfast(!breakfast)}
//               />
//               <span>
//                 Support Morning Nutrition Programme by donating ₹375
//               </span>
//             </label>
//           </div>

//           {/* ✅ PERSONAL DETAILS */}
//           <div>
//             <h3 className="font-bold text-purple-900 mb-4">
//               Personal Details
//             </h3>

//             <div className="grid md:grid-cols-2 gap-4">
//               <select className="input-style">
//                 <option>Mr</option>
//                 <option>Mrs</option>
//               </select>

//               <input placeholder="Full Name" className="input-style" />
//               <input placeholder="Email ID" className="input-style" />
//               <input type="date" className="input-style" />
//               <input placeholder="Mobile No" className="input-style" />
//               <input placeholder="Whatsapp Number" className="input-style" />
//               <input placeholder="Alternate Mobile" className="input-style" />
//             </div>
//           </div>

//           {/* ✅ 80G */}
//           <label className="flex gap-2 text-sm items-center cursor-pointer">
//   <input
//     type="checkbox"
//     checked={showCertificateFields}
//     onChange={() => setShowCertificateFields(!showCertificateFields)}
//     className="accent-purple-600"
//   />
//   I would like to receive 80(G) Certificate
// </label>
// {showCertificateFields && (
//   <div className="mt-4 grid md:grid-cols-2 gap-4 bg-purple-50 p-4 rounded-xl">

//     <input placeholder="PAN Number *" className="input-style" />
//     <input placeholder="Aadhaar Number *" className="input-style" />

//     <textarea
//       placeholder="Address *"
//       className="input-style md:col-span-2 h-20"
//     />

//     <input placeholder="Pin Code *" className="input-style" />
//     <input placeholder="City *" className="input-style" />
//     <input placeholder="State *" className="input-style" />
//     <input placeholder="Preference State" className="input-style" />

//   </div>
// )}
//           {/* ✅ CAPTCHA */}
//           <div>
//             <label className="font-semibold">Captcha: 3 + 7 = ?</label>
//             <input
//               value={captchaAnswer}
//               onChange={(e) => setCaptchaAnswer(e.target.value)}
//               className="input-style mt-2"
//             />
//           </div>

//           {/* ✅ TERMS */}
//           <label className="flex gap-2 text-sm">
//             <input type="checkbox" required />
//             I agree to Privacy Policy & Terms
//           </label>

//           {/* ✅ SUBMIT */}
//           <button
//             type="submit"
//             className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold text-lg"
//           >
//             Donate ₹{totalAmount}
//           </button>
//         </motion.form>
//       </div>

//       <style jsx>{`
//         .input-style {
//           @apply w-full px-4 py-3 border rounded-xl outline-none focus:border-purple-500;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default DonationForm;



// "use client";

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Playfair_Display } from "next/font/google";

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["900"],
// });

// const DonationForm = () => {
//   const [citizenship, setCitizenship] = useState("Indian");
//   const [donationType, setDonationType] = useState("Once");
//   const [months, setMonths] = useState("3");

//   const [amount, setAmount] = useState(4500);
//   const [customAmount, setCustomAmount] = useState("");

//   const [breakfast, setBreakfast] = useState(true);
//   const [captchaAnswer, setCaptchaAnswer] = useState("");
//   const [showCertificateFields, setShowCertificateFields] = useState(false);

//   // ✅ AMOUNT LOGIC
//   const baseAmount = customAmount ? Number(customAmount) : amount;

//   const totalAmount =
//     donationType === "Monthly"
//       ? baseAmount * Number(months)
//       : baseAmount;

//   const finalAmount = totalAmount + (breakfast ? 375 : 0);

//   const handleSubmit = (e: any) => {
//     e.preventDefault();

//     if (captchaAnswer !== "10") {
//       alert("Captcha incorrect ❌");
//       return;
//     }

//     alert(`Donation Successful ₹${finalAmount} ✅`);
//   };

//   return (
//     <div className="min-h-screen bg-[#F9F8FF] p-6 flex justify-center">
//       <div className="w-full max-w-4xl">

//         {/* 🔥 HEADER */}
        

//         {/* 🌟 CARD */}
//         <motion.form
//           onSubmit={handleSubmit}
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white p-8 rounded-3xl shadow-xl space-y-8"
//         >

//           {/* ✅ DONATION CATEGORY */}
//           <div>
//             <h3 className="font-bold text-purple-900 mb-3">
//               Donation Category
//             </h3>
//             <div className="flex flex-wrap gap-3">
//               {[
//                 "Annapurna",
//                 "Atmnirbhar",
//                 "Adhyayan",
//                 "Annadata",
//                 "Swabhiman",
//                 "Pranitva",
//                 "Arogya",
//               ].map((item) => (
//                 <button
//                   type="button"
//                   key={item}
//                   className="px-4 py-2 bg-purple-50 rounded-xl text-sm text-purple-700"
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* ✅ CITIZENSHIP */}
//           <div>
//             <h3 className="font-bold text-purple-900 mb-3">
//               Select Your Citizenship
//             </h3>
//             <div className="flex gap-4 flex-wrap">
//               {["Indian", "NRI", "Foreign"].map((c) => (
//                 <button
//                   type="button"
//                   key={c}
//                   onClick={() => setCitizenship(c)}
//                   className={`px-4 py-2 rounded-xl border ${
//                     citizenship === c
//                       ? "bg-purple-600 text-white"
//                       : "bg-white"
//                   }`}
//                 >
//                   {c}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* ✅ DONATION TYPE */}
//           <div>
//             <h3 className="font-bold text-purple-900 mb-3">
//               Select Donation Type
//             </h3>

//             <div className="flex gap-4 mb-4">
//               {["Once", "Monthly"].map((t) => (
//                 <button
//                   type="button"
//                   key={t}
//                   onClick={() => setDonationType(t)}
//                   className={`flex-1 py-3 rounded-xl border ${
//                     donationType === t
//                       ? "bg-purple-600 text-white"
//                       : ""
//                   }`}
//                 >
//                   Donate {t}
//                 </button>
//               ))}
//             </div>

//             {/* 🔥 MONTH DROPDOWN */}
//             {donationType === "Monthly" && (
//               <div>
//                 <label className="text-sm font-medium text-purple-900">
//                   Select Duration (Months)
//                 </label>

//                 <select
//                   value={months}
//                   onChange={(e) => setMonths(e.target.value)}
//                   className="input-style mt-2"
//                 >
//                   <option value="3">3 Months</option>
//                   <option value="6">6 Months</option>
//                   <option value="12">12 Months</option>
//                 </select>
//               </div>
//             )}
//           </div>

//           {/* ✅ AMOUNT */}
//           <div>
//             <h3 className="font-bold text-purple-900 mb-3">
//               Choose Donation Amount
//             </h3>

//             <p className="text-purple-700 mb-3">
//               I wish to donate ₹ {baseAmount} to feed{" "}
//               <b>{Math.floor(baseAmount / 1500)}</b> child(ren)
//             </p>

//             <div className="grid grid-cols-4 gap-3 mb-4">
//               {[1500, 3000, 6000, 12000].map((val) => (
//                 <button
//                   type="button"
//                   key={val}
//                   onClick={() => {
//                     setAmount(val);
//                     setCustomAmount("");
//                   }}
//                   className={`py-3 rounded-xl font-bold ${
//                     amount === val && !customAmount
//                       ? "bg-purple-600 text-white"
//                       : "bg-purple-50 text-purple-600"
//                   }`}
//                 >
//                   ₹{val}
//                 </button>
//               ))}

//               <input
//                 type="number"
//                 placeholder="Other"
//                 value={customAmount}
//                 onChange={(e) => {
//                   setCustomAmount(e.target.value);
//                   setAmount(0);
//                 }}
//                 className="input-style text-center"
//               />
//             </div>

//             {/* BREAKFAST */}
//             <label className="flex items-start gap-3 text-sm text-purple-800">
//               <input
//                 type="checkbox"
//                 checked={breakfast}
//                 onChange={() => setBreakfast(!breakfast)}
//               />
//               Support Morning Nutrition Programme (+₹375)
//             </label>
//           </div>

//           {/* ✅ PERSONAL DETAILS */}
//           <div>
//             <h3 className="font-bold text-purple-900 mb-4">
//               Personal Details
//             </h3>

//             <div className="grid md:grid-cols-2 gap-4">
//               <select className="input-style">
//                 <option>Mr</option>
//                 <option>Mrs</option>
//               </select>

//               <input placeholder="Full Name" className="input-style" />
//               <input placeholder="Email ID" className="input-style" />
//               <input type="date" className="input-style" />
//               <input placeholder="Mobile No" className="input-style" />
//               <input placeholder="Whatsapp Number" className="input-style" />
//               <input placeholder="Alternate Mobile" className="input-style" />
//             </div>
//           </div>

//           {/* ✅ 80G */}
//           <label className="flex gap-2 text-sm items-center">
//             <input
//               type="checkbox"
//               checked={showCertificateFields}
//               onChange={() =>
//                 setShowCertificateFields(!showCertificateFields)
//               }
//             />
//             I would like to receive 80(G) Certificate
//           </label>

//           {showCertificateFields && (
//             <div className="grid md:grid-cols-2 gap-4 bg-purple-50 p-4 rounded-xl">
//               <input placeholder="PAN Number *" className="input-style" />
//               <input placeholder="Aadhaar Number *" className="input-style" />

//               <textarea
//                 placeholder="Address *"
//                 className="input-style md:col-span-2"
//               />

//               <input placeholder="Pin Code *" className="input-style" />
//               <input placeholder="City *" className="input-style" />
//               <input placeholder="State *" className="input-style" />
//               <input placeholder="Preference State" className="input-style" />
//             </div>
//           )}

//           {/* CAPTCHA */}
//           <div>
//             <label className="font-semibold">Captcha: 3 + 7 = ?</label>
//             <input
//               value={captchaAnswer}
//               onChange={(e) => setCaptchaAnswer(e.target.value)}
//               className="input-style mt-2"
//             />
//           </div>

//           {/* TERMS */}
//           <label className="flex gap-2 text-sm">
//             <input type="checkbox" required />
//             I agree to Privacy Policy & Terms
//           </label>

//           {/* SUBMIT */}
//           <button
//             type="submit"
//             className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold text-lg"
//           >
//             Donate ₹{finalAmount}
//           </button>

//         </motion.form>
//       </div>

//       {/* STYLES */}
//       <style jsx>{`
//         .input-style {
//           @apply w-full px-4 py-3 border rounded-xl outline-none focus:border-purple-500;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default DonationForm;


// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Playfair_Display } from "next/font/google";

// const playfair = Playfair_Display({
//   subsets: ["latin"],
//   weight: ["900"],
// });

// const DonationForm = () => {
//   // ✅ STATE MANAGEMENT
//   const [selectedCategory, setSelectedCategory] = useState("Annapurna");
//   const [citizenship, setCitizenship] = useState("Indian");
//   const [donationType, setDonationType] = useState("Once");
//   const [months, setMonths] = useState("3");
//   const [amount, setAmount] = useState(1500);
//   const [customAmount, setCustomAmount] = useState("");
//   const [breakfast, setBreakfast] = useState(true);
//   const [captchaAnswer, setCaptchaAnswer] = useState("");
//   const [showCertificateFields, setShowCertificateFields] = useState(false);

//   // ✅ CATEGORY & IMPACT CONFIGURATION
//   const categories = ["Annapurna", "Atmnirbhar", "Adhyayan", "Annadata", "Swabhiman", "Pranitva", "Arogya"];

//   const impactMap = {
//     Annapurna: { unit: "meal", label: "provide meals for", cost: 100 },
//     Atmnirbhar: { unit: "person", label: "empower", cost: 500 },
//     Adhyayan: { unit: "student", label: "support education for", cost: 1000 },
//     Annadata: { unit: "farmer", label: "empower", cost: 1500 },
//     Swabhiman: { unit: "family", label: "support the dignity of", cost: 2000 },
//     Pranitva: { unit: "life", label: "impact", cost: 1200 },
//     Arogya: { unit: "patient", label: "provide healthcare for", cost: 800 },
//   };

//   // ✅ ECERTIFICATE & DEDICATION STATE
//   const [showECertificate, setShowECertificate] = useState(false);
//   const [occasion, setOccasion] = useState("Birthday");
//   const [dedicatedTo, setDedicatedTo] = useState("");
//   const [occasionDate, setOccasionDate] = useState("");
//   const [recipientEmails, setRecipientEmails] = useState("");
//   const [closingMessage, setClosingMessage] = useState("Sincerely");

//   // ✅ CALCULATION LOGIC
//   const activeImpact = impactMap[selectedCategory] || impactMap.Annapurna;
//   const baseAmount = customAmount ? Number(customAmount) : amount;
  
//   // Calculate impact count based on the base amount
//   const impactCount = Math.floor(baseAmount / activeImpact.cost);

//   const totalAmount = donationType === "Monthly" ? baseAmount * Number(months) : baseAmount;
//   const finalAmount = totalAmount + (breakfast ? 375 : 0);

//   const occasions = ["Birthday", "Diwali", "Work Anniversary", "Wedding Anniversary", "Achievements", "Housewarming", "Other"];

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (captchaAnswer !== "10") {
//       alert("Captcha incorrect ❌");
//       return;
//     }
//     alert(`Donation of ₹${finalAmount.toLocaleString('en-IN')} Successful! ✅`);
//   };

//   return (
//     <div className="min-h-screen bg-[#F9F8FF] p-6 flex justify-center">
//       <div className="w-full max-w-4xl">
//         <motion.form
//           onSubmit={handleSubmit}
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-white p-8 rounded-3xl shadow-xl space-y-8"
//         >
//           {/* ✅ DONATION CATEGORY */}
//           {/* <div>
//             <h3 className="font-bold text-purple-900 mb-3">Donation Category</h3>
//             <div className="flex flex-wrap gap-3">
//               {categories.map((item) => (
//                 <button
//                   type="button"
//                   key={item}
//                   onClick={() => setSelectedCategory(item)}
//                   className={`px-4 py-2 rounded-xl text-sm transition-all border ${
//                     selectedCategory === item
//                       ? "bg-purple-600 text-white border-purple-600 shadow-md"
//                       : "bg-purple-50 text-purple-700 border-transparent hover:bg-purple-100"
//                   }`}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div> */}

//           {/* ✅ CITIZENSHIP & TYPE */}
//           <div className="grid md:grid-cols-2 gap-8">
//             <div>
//               <h3 className="font-bold text-purple-900 mb-3">Citizenship</h3>
//               <div className="flex gap-3">
//                 {["Indian", "NRI"].map((c) => (
//                   <button
//                     type="button"
//                     key={c}
//                     onClick={() => setCitizenship(c)}
//                     className={`flex-1 py-2 rounded-xl border ${citizenship === c ? "bg-purple-600 text-white" : "bg-white text-gray-600"}`}
//                   >
//                     {c}
//                   </button>
//                 ))}
//               </div>
//             </div>
//             <div>
//   <h3 className="font-bold text-purple-900 mb-3">Donation Type</h3>
//   <div className="flex gap-3 mb-4">
//     {["Once", "Monthly"].map((t) => (
//       <button
//         type="button"
//         key={t}
//         onClick={() => setDonationType(t)}
//         className={`flex-1 py-2 rounded-xl border transition-all ${
//           donationType === t 
//           ? "bg-purple-600 text-white border-purple-600 shadow-md" 
//           : "bg-white text-gray-600 border-gray-200"
//         }`}
//       >
//         {t}
//       </button>
//     ))}
//   </div>

//   {/* Monthly Dropdown - Shows only when "Monthly" is selected */}
//   {donationType === "Monthly" && (
//     <motion.div 
//       initial={{ opacity: 0, y: -10 }} 
//       animate={{ opacity: 1, y: 0 }}
//       className="space-y-2"
//     >
//       <label className="text-sm font-semibold text-purple-900">
//         Select Duration (Months)
//       </label>
//       <select
//         value={months}
//         onChange={(e) => setMonths(e.target.value)}
//         className="w-full px-4 py-3 border-2 border-purple-100 rounded-xl focus:border-purple-600 outline-none bg-white text-purple-900"
//       >
//         <option value="3">3 Months</option>
//         <option value="6">6 Months</option>
//         <option value="12">12 Months</option>
//         <option value="24">24 Months</option>
//       </select>
//       <p className="text-xs text-purple-600 italic">
//         * Your donation of ₹{baseAmount} will be processed every month.
//       </p>
//     </motion.div>
//   )}
// </div>
//           </div>

//           {/* ✅ AMOUNT SELECTION */}
//     <div>
//             <h3 className="font-bold text-purple-900 mb-3">Donation Category</h3>
//             <div className="flex flex-wrap gap-3">
//               {categories.map((item) => (
//                 <button
//                   type="button"
//                   key={item}
//                   onClick={() => setSelectedCategory(item)}
//                   className={`px-4 py-2 rounded-xl text-sm transition-all border ${
//                     selectedCategory === item
//                       ? "bg-purple-600 text-white border-purple-600 shadow-md"
//                       : "bg-purple-50 text-purple-700 border-transparent hover:bg-purple-100"
//                   }`}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* ✅ AMOUNT SELECTION */}
//           <div>
//             <h3 className="font-bold text-purple-900 mb-3">Choose Amount</h3>

//             <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
//               {[1500, 3000, 6000, 12000].map((val) => (
//                 <button
//                   type="button"
//                   key={val}
//                   onClick={() => { setAmount(val); setCustomAmount(""); }}
//                   className={`py-3 rounded-xl font-bold transition-all ${
//                     amount === val && !customAmount 
//                     ? "bg-purple-600 text-white shadow-md" 
//                     : "bg-purple-50 text-purple-600 border border-purple-100"
//                   }`}
//                 >
//                   ₹{val}
//                 </button>
//               ))}
//               <input
//                 type="number"
//                 placeholder="Other"
//                 value={customAmount}
//                 onChange={(e) => { setCustomAmount(e.target.value); setAmount(0); }}
//                 className="w-full px-4 py-3 border-2 border-purple-100 rounded-xl focus:border-purple-600 outline-none text-center"
//               />
//             </div>

//             {/* Dynamic Impact Display */}
//             {impactCount > 0 && (
//               <motion.div 
//                 initial={{ opacity: 0, x: -10 }} 
//                 animate={{ opacity: 1, x: 0 }}
//                 key={selectedCategory + impactCount} // Key helps trigger animation on change
//                 className="mb-4 p-4 bg-purple-50 border-l-4 border-purple-600 rounded-r-xl"
//               >
//                 <p className="text-purple-900 font-medium">
//                   ✨ This contribution will <span className="font-bold">{activeImpact.label}</span>{' '}
//                   <span className="text-xl font-extrabold text-purple-700">{impactCount}</span>{' '}
//                   {impactCount === 1 ? activeImpact.unit : `${activeImpact.unit}s`}.
//                 </p>
//               </motion.div>
//             )}

//             <label className="flex items-center gap-3 text-sm text-purple-800 cursor-pointer p-2 hover:bg-purple-50 rounded-lg transition-colors">
//               <input 
//                 type="checkbox" 
//                 checked={breakfast} 
//                 onChange={() => setBreakfast(!breakfast)} 
//                 className="w-4 h-4 accent-purple-600" 
//               />
//               Support Morning Nutrition Programme (+₹375)
//             </label>
//           </div>
//           {/* ✅ ECERTIFICATE SECTION */}
//           <div className="border-t border-gray-100 pt-6">
//             <label className="flex items-center gap-3 cursor-pointer">
//               <input 
//                 type="checkbox" 
//                 className="w-5 h-5 accent-purple-600" 
//                 onChange={(e) => setShowECertificate(e.target.checked)} 
//               />
//               <span className="font-bold text-purple-900 text-lg">I want to send an eCertificate</span>
//             </label>
//           </div>

//           <AnimatePresence>
//             {showECertificate && (
//               <motion.div 
//                 initial={{ opacity: 0, height: 0 }} 
//                 animate={{ opacity: 1, height: "auto" }} 
//                 exit={{ opacity: 0, height: 0 }}
//                 className="space-y-6 overflow-hidden pt-4"
//               >
//                 <div>
//                   <h3 className="font-bold text-purple-900 mb-3">Choose Occasion</h3>
//                   <div className="flex flex-wrap gap-2">
//                     {occasions.map((occ) => (
//                       <button
//                         key={occ}
//                         type="button"
//                         onClick={() => setOccasion(occ)}
//                         className={`px-4 py-2 rounded-full text-sm border transition-all ${
//                           occasion === occ 
//                           ? "bg-purple-600 text-white shadow-md" 
//                           : "bg-white text-gray-600 border-gray-200 hover:border-purple-300"
//                         }`}
//                       >
//                         {occ}
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="bg-gray-50 p-4 rounded-2xl border border-dashed border-gray-300">
//                   <div className="flex justify-between items-center mb-4">
//                     <h3 className="font-bold text-purple-900">Choose your card</h3>
//                     <button type="button" className="text-purple-600 text-sm font-semibold hover:underline">View all cards</button>
//                   </div>
//                   <div className="flex gap-4 overflow-x-auto pb-2">
//                     {[1, 2, 3].map((card) => (
//                       <div key={card} className="min-w-[120px] h-16 bg-white rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 text-xs text-center p-2 cursor-pointer hover:border-purple-500">
//                         Card Style {card}
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <div className="grid md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-semibold text-purple-900 mb-1">Dedicated To: In Honour Of *</label>
//                     <input 
//                       required 
//                       placeholder="Name of person" 
//                       className="input-style" 
//                       value={dedicatedTo} 
//                       onChange={(e) => setDedicatedTo(e.target.value)} 
//                     />
//                   </div>
//                   <div>
//                     <label className="block text-sm font-semibold text-purple-900 mb-1">Occasion On *</label>
//                     <input 
//                       required 
//                       type="date" 
//                       className="input-style" 
//                       value={occasionDate} 
//                       onChange={(e) => setOccasionDate(e.target.value)} 
//                     />
//                   </div>
//                 </div>

//                 <div>
//                   <label className="block text-sm font-semibold text-purple-900 mb-1">Recipient Email(s) *</label>
//                   <textarea 
//                     required 
//                     placeholder="Enter multiple emails separated by commas" 
//                     className="input-style h-20" 
//                     value={recipientEmails} 
//                     onChange={(e) => setRecipientEmails(e.target.value)} 
//                   />
//                 </div>

//                 <div className="flex flex-col md:flex-row justify-between items-end gap-4 bg-purple-50 p-4 rounded-xl">
//                   <div className="w-full md:w-auto">
//                     <label className="block text-sm font-semibold text-purple-900 mb-2">Closing Message</label>
//                     <div className="flex gap-2">
//                       {["Sincerely", "Thank you", "Regards"].map((msg) => (
//                         <button
//                           key={msg}
//                           type="button"
//                           onClick={() => setClosingMessage(msg)}
//                           className={`px-3 py-1.5 rounded-lg text-xs font-medium border ${
//                             closingMessage === msg 
//                             ? "bg-white border-purple-600 text-purple-600 shadow-sm" 
//                             : "bg-transparent border-gray-300 text-gray-500"
//                           }`}
//                         >
//                           {msg}
//                         </button>
//                       ))}
//                     </div>
//                   </div>
//                   <button 
//                     type="button" 
//                     className="w-full md:w-auto bg-white border-2 border-purple-600 text-purple-600 px-6 py-2 rounded-xl font-bold hover:bg-purple-600 hover:text-white transition-all shadow-sm"
//                   >
//                     Preview your eCard
//                   </button>
//                 </div>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           {/* ✅ PERSONAL DETAILS SECTION */}
//           <div className="space-y-4 border-t border-gray-100 pt-6">
//             <h3 className="font-bold text-purple-900">Personal Details</h3>
            
//             <div className="grid md:grid-cols-2 gap-4">
//               <div className="flex gap-2">
//                 <select className="input-style w-24 bg-white" required>
//                   <option value="">Title</option>
//                   <option value="Mr">Mr</option>
//                   <option value="Mrs">Mrs</option>
//                   <option value="Ms">Ms</option>
//                   <option value="M/S">M/S</option>
//                 </select>
//                 <input 
//                   placeholder="Full Name *" 
//                   className="input-style flex-1" 
//                   required 
//                 />
//               </div>
//               <input 
//                 placeholder="Email ID *" 
//                 type="email" 
//                 className="input-style" 
//                 required 
//               />
//             </div>

//             <div className="grid md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-xs font-semibold text-purple-700 mb-1 ml-1">Date of birth</label>
//                 <input type="date" className="input-style" />
//               </div>
//               <div>
//                 <label className="block text-xs font-semibold text-purple-700 mb-1 ml-1">Mobile No *</label>
//                 <input placeholder="Mobile No" type="tel" className="input-style" required />
//               </div>
//             </div>

//             <div className="grid md:grid-cols-2 gap-4">
//               <div className="flex items-center gap-2 px-1">
//                 <input type="checkbox" id="whatsapp" className="w-4 h-4 accent-green-600" defaultChecked />
//                 <label htmlFor="whatsapp" className="text-[11px] text-gray-500 leading-tight">
//                   Please share your WhatsApp number for donation updates
//                 </label>
//               </div>
//               <input placeholder="Alternate Mobile No." type="tel" className="input-style" />
//             </div>

//             {/* ✅ TAX CERTIFICATE TOGGLE */}
//             <label className="flex gap-2 text-sm items-center cursor-pointer font-medium text-purple-900 pt-2">
//               <input
//                 type="checkbox"
//                 checked={showCertificateFields}
//                 onChange={() => setShowCertificateFields(!showCertificateFields)}
//                 className="w-4 h-4 accent-purple-600"
//               />
//               I would like to receive 80(G) Tax Benefit Certificate
//             </label>

//             <AnimatePresence>
//               {showCertificateFields && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -10 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   exit={{ opacity: 0, y: -10 }}
//                   className="bg-purple-50 p-6 rounded-2xl space-y-4"
//                 >
//                   <div className="grid md:grid-cols-2 gap-4">
//                     <input 
//                       placeholder="PAN Number *" 
//                       className="input-style bg-white uppercase" 
//                       required 
//                       maxLength={10} 
//                     />
//                     <input 
//                       placeholder="Aadhaar Number *" 
//                       className="input-style bg-white" 
//                       required 
//                     />
//                   </div>

//                   <input 
//                     placeholder="Address (House No, Building, Street) *" 
//                     className="input-style bg-white" 
//                     required 
//                   />

//                   <div className="grid md:grid-cols-3 gap-4">
//                     <input placeholder="Pin Code *" className="input-style bg-white" required />
//                     <input placeholder="City *" className="input-style bg-white" required />
//                     <input placeholder="State *" className="input-style bg-white" required />
//                   </div>

//                   <div>
//                     <label className="block text-xs font-semibold text-purple-700 mb-1 ml-1">
//                       Preference State (For Regional Reporting)
//                     </label>
//                     <input placeholder="Preference State" className="input-style bg-white" />
//                   </div>
                  
//                   <p className="text-[10px] text-purple-400 mt-2">
//                     * Information is required for generating the 10BE tax form as per Income Tax regulations.
//                   </p>
//                 </motion.div>
//               )}
//             </AnimatePresence>
//           </div>

//           {/* ✅ FINAL SUBMIT */}
//           <div className="pt-4 border-t border-gray-100 space-y-6">
//             <div className="flex flex-col md:flex-row md:items-center gap-4">
//               <label className="font-semibold">Security: 3 + 7 = ?</label>
//               <input type="text" value={captchaAnswer} onChange={(e) => setCaptchaAnswer(e.target.value)} className="input-style md:w-32" required />
//             </div>

//             <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-2xl font-bold text-xl shadow-lg transition-transform active:scale-[0.98]">
//               Donate ₹{finalAmount.toLocaleString('en-IN')}
//             </button>
//           </div>
//         </motion.form>
//       </div>

//       <style jsx>{`
//         .input-style {
//           @apply w-full px-4 py-3 border border-gray-200 rounded-xl outline-none transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-200;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default DonationForm;


"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Playfair_Display } from "next/font/google";
import jsPDF from "jspdf"; // <--- Add this standard import

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["900"],
});


declare global {
  interface Window {
    Razorpay: any;
  }
}

const DonationForm = () => {
  // ✅ STATE MANAGEMENT
  const [selectedCategory, setSelectedCategory] = useState("Annapurna");
  const [citizenship, setCitizenship] = useState("Indian");
  const [donationType, setDonationType] = useState("Once");
  const [months, setMonths] = useState("3");
  const [amount, setAmount] = useState(1500);
  const [customAmount, setCustomAmount] = useState("");
  const [breakfast, setBreakfast] = useState(true);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [showCertificateFields, setShowCertificateFields] = useState(false);

  // User Details State
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");

  // ✅ CATEGORY & IMPACT CONFIGURATION
  const categories = ["Annapurna", "Atmnirbhar", "Adhyayan", "Annadata", "Swabhiman", "Pranitva", "Arogya"];

  const impactMap = {
    Annapurna: { unit: "meal", label: "provide meals for", cost: 100 },
    Atmnirbhar: { unit: "person", label: "empower", cost: 500 },
    Adhyayan: { unit: "student", label: "support education for", cost: 1000 },
    Annadata: { unit: "farmer", label: "empower", cost: 1500 },
    Swabhiman: { unit: "family", label: "support the dignity of", cost: 2000 },
    Pranitva: { unit: "life", label: "impact", cost: 1200 },
    Arogya: { unit: "patient", label: "provide healthcare for", cost: 800 },
  };

  // ✅ ECERTIFICATE & DEDICATION STATE
  const [showECertificate, setShowECertificate] = useState(false);
  const [occasion, setOccasion] = useState("Birthday");
  const [dedicatedTo, setDedicatedTo] = useState("");
  const [occasionDate, setOccasionDate] = useState("");
  const [recipientEmails, setRecipientEmails] = useState("");
  const [closingMessage, setClosingMessage] = useState("Sincerely");

  // ✅ CALCULATION LOGIC
  const activeImpact =
  impactMap[selectedCategory as keyof typeof impactMap] ||
  impactMap.Annapurna;

const baseAmount = customAmount
  ? Number(customAmount)
  : amount;

const impactCount = Math.floor(
  baseAmount / activeImpact.cost
);

const totalAmount =
  donationType === "Monthly"
    ? baseAmount * Number(months)
    : baseAmount;

const finalAmount =
  totalAmount + (breakfast ? 375 : 0);

  const occasions = ["Birthday", "Diwali", "Work Anniversary", "Wedding Anniversary", "Achievements", "Housewarming", "Other"];

  const generateCertificate = (paymentId: string) => {
  const doc = new jsPDF({
    orientation: "landscape",
    unit: "mm",
    format: "a4",
  });

  doc.setDrawColor(124, 58, 237);
  doc.setLineWidth(2);
  doc.rect(10, 10, 277, 190);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(30);
  doc.setTextColor(124, 58, 237);
  doc.text("CERTIFICATE OF DONATION", 148.5, 40, {
    align: "center",
  });

  doc.setFontSize(16);
  doc.setTextColor(60, 60, 60);
  doc.setFont("helvetica", "normal");

  doc.text(
    "This certificate is proudly presented to",
    148.5,
    65,
    {
      align: "center",
    }
  );

  doc.setFontSize(24);
  doc.setFont("helvetica", "bold");

  doc.text(fullName || "Valued Donor", 148.5, 80, {
    align: "center",
  });

  doc.setFontSize(14);
  doc.setFont("helvetica", "normal");

  doc.text(
    `For their generous contribution of Rs. ${finalAmount.toLocaleString(
      "en-IN"
    )} towards the ${selectedCategory} initiative.`,
    148.5,
    100,
    {
      align: "center",
      maxWidth: 200,
    }
  );

  doc.setFontSize(10);

  doc.text(
    `Date: ${new Date().toLocaleDateString()}`,
    40,
    160
  );

  doc.text(
    `Transaction ID: ${paymentId}`,
    40,
    170
  );

  if (showCertificateFields) {
    doc.setFont("helvetica", "italic");

    doc.text(
      "Note: This is an 80G Tax-Exempt Receipt.",
      40,
      180
    );
  }

  doc.save(`Donation_Certificate_${paymentId}.pdf`);
};

const handlePayment = async () => {
    // 1. Safety check for the Script
    if (typeof window === "undefined" || !window.Razorpay) {
      alert("Payment gateway is still loading. Please try again in 2 seconds.");
      return;
    }

    if (captchaAnswer !== "10") {
      alert("Captcha incorrect ❌");
      return;
    }

    try {
      // 2. Call your backend to create the order
      const response = await fetch("/api/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: finalAmount }), 
      });
      
      const order = await response.json();

      if (!order || !order.id) {
        throw new Error("Order creation failed");
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount, // This should be (finalAmount * 100) from your API
        currency: "INR",
        name: "Your NGO Name",
        description: `Donation for ${selectedCategory}`,
        order_id: order.id,
        handler: async function (response: any) {
          // Success logic
          generateCertificate(response.razorpay_payment_id);
          alert("Payment Successful!");
        },
        prefill: {
          name: fullName,
          email: email,
          contact: mobile,
        },
        theme: { color: "#7C3AED" },
        modal: {
          ondismiss: function() {
            console.log("Checkout form closed");
          }
        }
      };

      const rzp = new window.Razorpay(options);
      
      // 3. Catch initialization errors
      rzp.on('payment.failed', function (response: any){
        console.error("Payment failed detail:", response.error);
        alert(`Payment Failed: ${response.error.description}`);
      });

      rzp.open();
    } catch (err) {
      console.error("Critical Payment Error:", err);
      alert("Could not connect to payment server.");
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8FF] p-6 flex justify-center">
      <div className="w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-3xl shadow-xl space-y-8"
        >
          {/* ✅ CITIZENSHIP & TYPE */}
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-purple-900 mb-3">Citizenship</h3>
              <div className="flex gap-3">
                {["Indian", "NRI"].map((c) => (
                  <button
                    type="button"
                    key={c}
                    onClick={() => setCitizenship(c)}
                    className={`flex-1 py-2 rounded-xl border ${citizenship === c ? "bg-purple-600 text-white" : "bg-white text-gray-600"}`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-purple-900 mb-3">Donation Type</h3>
              <div className="flex gap-3 mb-4">
                {["Once", "Monthly"].map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setDonationType(t)}
                    className={`flex-1 py-2 rounded-xl border transition-all ${donationType === t ? "bg-purple-600 text-white border-purple-600 shadow-md" : "bg-white text-gray-600 border-gray-200"}`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {donationType === "Monthly" && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="space-y-2">
                  <label className="text-sm font-semibold text-purple-900">Select Duration (Months)</label>
                  <select
                    value={months}
                    onChange={(e) => setMonths(e.target.value)}
                    className="w-full px-4 py-3 border-2 border-purple-100 rounded-xl focus:border-purple-600 outline-none bg-white text-purple-900"
                  >
                    <option value="3">3 Months</option>
                    <option value="6">6 Months</option>
                    <option value="12">12 Months</option>
                    <option value="24">24 Months</option>
                  </select>
                </motion.div>
              )}
            </div>
          </div>

          {/* ✅ CATEGORY SELECTION */}
          <div>
            <h3 className="font-bold text-purple-900 mb-3">Donation Category</h3>
            <div className="flex flex-wrap gap-3">
              {categories.map((item) => (
                <button
                  type="button"
                  key={item}
                  onClick={() => setSelectedCategory(item)}
                  className={`px-4 py-2 rounded-xl text-sm transition-all border ${selectedCategory === item ? "bg-purple-600 text-white border-purple-600 shadow-md" : "bg-purple-50 text-purple-700 border-transparent hover:bg-purple-100"}`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* ✅ AMOUNT SELECTION */}
          <div>
            <h3 className="font-bold text-purple-900 mb-3">Choose Amount</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-4">
              {[1500, 3000, 6000, 12000].map((val) => (
                <button
                  type="button"
                  key={val}
                  onClick={() => { setAmount(val); setCustomAmount(""); }}
                  className={`py-3 rounded-xl font-bold transition-all ${amount === val && !customAmount ? "bg-purple-600 text-white shadow-md" : "bg-purple-50 text-purple-600 border border-purple-100"}`}
                >
                  ₹{val}
                </button>
              ))}
              <input
                type="number"
                placeholder="Other"
                value={customAmount}
                onChange={(e) => { setCustomAmount(e.target.value); setAmount(0); }}
                className="w-full px-4 py-3 border-2 border-purple-100 rounded-xl focus:border-purple-600 outline-none text-center"
              />
            </div>

            {impactCount > 0 && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                key={selectedCategory + impactCount}
                className="mb-4 p-4 bg-purple-50 border-l-4 border-purple-600 rounded-r-xl"
              >
                <p className="text-purple-900 font-medium">
                  ✨ This contribution will <span className="font-bold">{activeImpact.label}</span>{" "}
                  <span className="text-xl font-extrabold text-purple-700">{impactCount}</span> {impactCount === 1 ? activeImpact.unit : `${activeImpact.unit}s`}.
                </p>
              </motion.div>
            )}

            <label className="flex items-center gap-3 text-sm text-purple-800 cursor-pointer p-2 hover:bg-purple-50 rounded-lg transition-colors">
              <input type="checkbox" checked={breakfast} onChange={() => setBreakfast(!breakfast)} className="w-4 h-4 accent-purple-600" />
              Support Morning Nutrition Programme (+₹375)
            </label>
          </div>

          {/* ✅ ECERTIFICATE SECTION */}
          <div className="border-t border-gray-100 pt-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 accent-purple-600" onChange={(e) => setShowECertificate(e.target.checked)} />
              <span className="font-bold text-purple-900 text-lg">I want to send an eCertificate</span>
            </label>
          </div>

          <AnimatePresence>
            {showECertificate && (
              <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="space-y-6 overflow-hidden pt-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input placeholder="Dedicated To *" className="input-style" value={dedicatedTo} onChange={(e) => setDedicatedTo(e.target.value)} />
                  <input type="date" className="input-style" value={occasionDate} onChange={(e) => setOccasionDate(e.target.value)} />
                </div>
                <textarea placeholder="Recipient Email(s) *" className="input-style h-20" value={recipientEmails} onChange={(e) => setRecipientEmails(e.target.value)} />
              </motion.div>
            )}
          </AnimatePresence>

          {/* ✅ PERSONAL DETAILS SECTION */}
          <div className="space-y-4 border-t border-gray-100 pt-6">
            <h3 className="font-bold text-purple-900">Personal Details</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <input placeholder="Full Name *" className="input-style" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
              <input placeholder="Email ID *" type="email" className="input-style" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input placeholder="Mobile No *" type="tel" className="input-style" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
              <div className="flex items-center gap-2">
                <input type="checkbox" checked={showCertificateFields} onChange={() => setShowCertificateFields(!showCertificateFields)} className="w-4 h-4 accent-purple-600" />
                <span className="text-sm font-medium text-purple-900">80(G) Tax Benefit</span>
              </div>
            </div>

            <AnimatePresence>
              {showCertificateFields && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="bg-purple-50 p-6 rounded-2xl space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input placeholder="PAN Number *" className="input-style bg-white uppercase" maxLength={10} required />
                    <input placeholder="Aadhaar Number *" className="input-style bg-white" required />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* ✅ FINAL SUBMIT */}
          <div className="pt-4 border-t border-gray-100 space-y-6">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <label className="font-semibold">Security: 3 + 7 = ?</label>
              <input type="text" value={captchaAnswer} onChange={(e) => setCaptchaAnswer(e.target.value)} className="input-style md:w-32" required />
            </div>

            <button
              type="button"
              onClick={handlePayment}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-2xl font-bold text-xl shadow-lg transition-transform active:scale-[0.98]"
            >
              Donate ₹{finalAmount.toLocaleString("en-IN")}
            </button>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .input-style {
          @apply w-full px-4 py-3 border border-gray-200 rounded-xl outline-none transition-all focus:border-purple-500 focus:ring-2 focus:ring-purple-200;
        }
      `}</style>
    </div>
  );
};

export default DonationForm;