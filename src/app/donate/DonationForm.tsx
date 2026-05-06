"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["900"],
});

const DonationForm = () => {
  const [citizenship, setCitizenship] = useState("Indian");
  const [donationType, setDonationType] = useState("Once");
  const [amount, setAmount] = useState(4500);
  const [customAmount, setCustomAmount] = useState("");
  const [breakfast, setBreakfast] = useState(true);
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [showCertificateFields, setShowCertificateFields] = useState(false);

  const totalAmount =
    (customAmount ? Number(customAmount) : amount) + (breakfast ? 375 : 0);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (captchaAnswer !== "10") {
      alert("Captcha incorrect ❌");
      return;
    }

    alert(`Donation Successful ₹${totalAmount} ✅`);
  };

  return (
    <div className="min-h-screen bg-[#F9F8FF] p-6 flex justify-center">
      <div className="w-full max-w-4xl">

        {/* 🔥 HEADER */}
        <div className="mb-6">
          <p className="text-sm text-gray-500">Home &gt; Online Donations</p>
          <h1 className={`${playfair.className} text-4xl text-purple-900 mt-2`}>
            Online Donations
          </h1>
        </div>

        {/* 🌟 CARD */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-8 rounded-3xl shadow-xl space-y-8"
        >

          {/* ✅ DONATION CATEGORY */}
          <div>
            <h3 className="font-bold text-purple-900 mb-3">
              Donation Category
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                "Anganwadi Feeding",
                "Honor / Memory",
                "Special Occasion",
                "Wire Transfer",
                "SME Donations",
                "Sponsor School",
                "Sponsor Kitchen",
              ].map((item) => (
                <button
                  type="button"
                  key={item}
                  className="px-4 py-2 bg-purple-50 rounded-xl text-sm text-purple-700"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* ✅ CITIZENSHIP */}
          <div>
            <h3 className="font-bold text-purple-900 mb-3">
              Select Your Citizenship
            </h3>
            <div className="flex gap-4 flex-wrap">
              {[
                "Indian",
                "NRI",
                "Foreign",
              ].map((c) => (
                <button
                  type="button"
                  key={c}
                  onClick={() => setCitizenship(c)}
                  className={`px-4 py-2 rounded-xl border ${
                    citizenship === c
                      ? "bg-purple-600 text-white"
                      : "bg-white"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          {/* ✅ DONATION TYPE */}
          <div>
            <h3 className="font-bold text-purple-900 mb-3">
              Select Donation Type
            </h3>
            <div className="flex gap-4">
              {["Once", "Monthly"].map((t) => (
                <button
                  type="button"
                  key={t}
                  onClick={() => setDonationType(t)}
                  className={`flex-1 py-3 rounded-xl border ${
                    donationType === t
                      ? "bg-purple-600 text-white"
                      : ""
                  }`}
                >
                  Donate {t}
                </button>
              ))}
            </div>
          </div>

          {/* ✅ AMOUNT */}
          <div>
            <h3 className="font-bold text-purple-900 mb-3">
              Choose Donation Amount
            </h3>

            <p className="text-purple-700 mb-3">
              I wish to donate ₹ {amount} to feed{" "}
              <b>{Math.floor(amount / 1500)}</b> child(ren)
            </p>

            <div className="grid grid-cols-4 gap-3 mb-4">
              {[1500, 3000, 6000, 12000].map((val) => (
                <button
                  type="button"
                  key={val}
                  onClick={() => {
                    setAmount(val);
                    setCustomAmount("");
                  }}
                  className={`py-3 rounded-xl font-bold ${
                    amount === val && !customAmount
                      ? "bg-purple-600 text-white"
                      : "bg-purple-50 text-purple-600"
                  }`}
                >
                  ₹{val}
                </button>
              ))}

              <input
                type="number"
                placeholder="Other"
                value={customAmount}
                onChange={(e) => {
                  setCustomAmount(e.target.value);
                  setAmount(0);
                }}
                className="input-style text-center"
              />
            </div>

            {/* 🔥 BREAKFAST OPTION */}
            <label className="flex items-start gap-3 text-sm text-purple-800">
              <input
                type="checkbox"
                checked={breakfast}
                onChange={() => setBreakfast(!breakfast)}
              />
              <span>
                Support Morning Nutrition Programme by donating ₹375
              </span>
            </label>
          </div>

          {/* ✅ PERSONAL DETAILS */}
          <div>
            <h3 className="font-bold text-purple-900 mb-4">
              Personal Details
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              <select className="input-style">
                <option>Mr</option>
                <option>Mrs</option>
              </select>

              <input placeholder="Full Name" className="input-style" />
              <input placeholder="Email ID" className="input-style" />
              <input type="date" className="input-style" />
              <input placeholder="Mobile No" className="input-style" />
              <input placeholder="Whatsapp Number" className="input-style" />
              <input placeholder="Alternate Mobile" className="input-style" />
            </div>
          </div>

          {/* ✅ 80G */}
          <label className="flex gap-2 text-sm items-center cursor-pointer">
  <input
    type="checkbox"
    checked={showCertificateFields}
    onChange={() => setShowCertificateFields(!showCertificateFields)}
    className="accent-purple-600"
  />
  I would like to receive 80(G) Certificate
</label>
{showCertificateFields && (
  <div className="mt-4 grid md:grid-cols-2 gap-4 bg-purple-50 p-4 rounded-xl">

    <input placeholder="PAN Number *" className="input-style" />
    <input placeholder="Aadhaar Number *" className="input-style" />

    <textarea
      placeholder="Address *"
      className="input-style md:col-span-2 h-20"
    />

    <input placeholder="Pin Code *" className="input-style" />
    <input placeholder="City *" className="input-style" />
    <input placeholder="State *" className="input-style" />
    <input placeholder="Preference State" className="input-style" />

  </div>
)}
          {/* ✅ CAPTCHA */}
          <div>
            <label className="font-semibold">Captcha: 3 + 7 = ?</label>
            <input
              value={captchaAnswer}
              onChange={(e) => setCaptchaAnswer(e.target.value)}
              className="input-style mt-2"
            />
          </div>

          {/* ✅ TERMS */}
          <label className="flex gap-2 text-sm">
            <input type="checkbox" required />
            I agree to Privacy Policy & Terms
          </label>

          {/* ✅ SUBMIT */}
          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-4 rounded-xl font-bold text-lg"
          >
            Donate ₹{totalAmount}
          </button>
        </motion.form>
      </div>

      <style jsx>{`
        .input-style {
          @apply w-full px-4 py-3 border rounded-xl outline-none focus:border-purple-500;
        }
      `}</style>
    </div>
  );
};

export default DonationForm;