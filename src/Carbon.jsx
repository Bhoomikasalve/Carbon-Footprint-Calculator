import React, { useState } from "react";


export default function CarbonFootprintCalculator() {
  const [electricity, setElectricity] = useState(0);
  const [carMileage, setCarMileage] = useState(0);
  const [ecarMileage, setECarMileage] = useState(0);
  const [flights, setFlights] = useState(0);
  const [phoneUse, setPhoneUse] = useState(0);
  const [treval, settrev] = useState(0);
  const [dtreval, setDtrev] = useState(0);
  const [footprint, setFootprint] = useState(null);

  const calculateFootprint = () => {
    const elecFootprint = electricity * 0.0004 * 12;
    const carFootprint = carMileage * 0.0003 * 52;
    const ecarFootprint = ecarMileage * 0.00005 * 52;
    const flightFootprint = flights * 0.09;
    const phoneFootprint = phoneUse * 0.00002 * 365;
    const electricvihical = treval * 0.00002 * 365;
    const dieselvihical = dtreval * 0.00002 * 365;
    const total =
      elecFootprint +
      carFootprint +
      ecarFootprint +
      flightFootprint +
      phoneFootprint +
      electricvihical +
      dieselvihical;
    setFootprint(total.toFixed(2));
  };

  
  return (
   <>
   
    <div className="max-w-5xl mx-auto p-6 bg-gradient-to-b from-orange-100 to-red-200">
      
      
      <h1 className="text-3xl font-black mb-6 text-center text-teal-500 ">Carbon Footprint Calculator</h1>
      <h1 className="text-center text-4xl font-bold text-orange-600">Treack Your Carbon Footprint per year</h1>
      <div className="bg-white  rounded-xl p-6 space-y-8">
       
        <div className="flex items-center gap-6">
          <label className="w-[350px] h-[50px] bg-gradient-to-b from-green-400 to-green-500 text-white font-extrabold flex items-center justify-center rounded-lg shadow-lg p-3">
            Electricity usage (kWh per month)
          </label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-lg p-2 h-[45px] max-w-[450px]"
            value={electricity}
            onChange={(e) => setElectricity(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-6">
          <label className="w-[350px] h-[50px] bg-gradient-to-b from-green-400 to-green-500 text-white font-extrabold flex items-center justify-center rounded-lg shadow-lg p-3">
            Car mileage (km per week)
          </label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-lg p-2 h-[45px] max-w-[450px]"
            value={carMileage}
            onChange={(e) => setCarMileage(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-6">
          <label className="w-[350px] h-[50px] bg-gradient-to-b from-green-400 to-green-500 text-white font-extrabold flex items-center justify-center rounded-lg shadow-lg p-3">
            E-Car mileage (km per week)
          </label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-lg p-2 h-[45px] max-w-[450px]"
            value={ecarMileage}
            onChange={(e) => setECarMileage(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-6">
          <label className="w-[350px] h-[50px] bg-gradient-to-b from-green-400 to-green-500 text-white font-extrabold flex items-center justify-center rounded-lg shadow-lg p-3">
            Number of short flights per year
          </label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-lg p-2 h-[45px] max-w-[450px]"
            value={flights}
            onChange={(e) => setFlights(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-6">
          <label className="w-[350px] h-[50px] bg-gradient-to-b from-green-400 to-green-500 text-white font-extrabold flex items-center justify-center rounded-lg shadow-lg p-3">
            Phone usage (hours per day)
          </label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-lg p-2 h-[45px] max-w-[450px]"
            value={phoneUse}
            onChange={(e) => setPhoneUse(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-6">
          <label className="w-[350px] h-[50px] bg-gradient-to-b  from-green-400 to-green-500 text-white font-extrabold flex items-center justify-center rounded-lg shadow-lg p-3">
            electric transport usage (per day)
          </label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-lg p-2 h-[45px] max-w-[450px]"
            value={treval}
            onChange={(e) => settrev(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-6">
          <label className="w-[350px] h-[50px] bg-gradient-to-b from-green-400 to-green-500 text-white font-extrabold flex items-center justify-center rounded-lg shadow-lg p-3">
            diesel transport usage (per day)
          </label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded-lg p-2 h-[45px] max-w-[450px]"
            value={dtreval}
            onChange={(e) => setDtrev(e.target.value)}
          />
        </div>

        
      </div>

      <button
          onClick={calculateFootprint}
          className="bg-blue-700 text-white font-black px-8 py-3 rounded-lg hover:bg-green-500 transition mt-6 text-xl text-center ml-20"
        >
          Calculate
        </button>

      {footprint && (
        <div className="mt-6 text-2xl font-semibold text-center bg-green-300 h-11 rounded-md border-green-400 border-4" >
          Estimated Carbon Footprint: {footprint} tons CO₂/year
        </div>
      )}
    </div>
    </>
  );
}
