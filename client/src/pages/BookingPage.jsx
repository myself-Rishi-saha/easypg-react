import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function BookingPage() {
  const [selectedRoom, setSelectedRoom] = useState("102");
  const location = useLocation();
  const { owner } = location.state || {};
  console.log(owner, owner.roomInfo, "room");

  const primaryColor = "#2CA4B5";

  return (
    <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6 font-sans">
      <h1 className="text-2xl font-bold">Confirm Your Booking</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Side */}
        <div className="lg:col-span-2 space-y-6">
          <div className="rounded-2xl shadow-md bg-white">
            <div className="p-4 space-y-4">
              <h2 className="text-xl font-semibold">Select a Room</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* {[{ id: '101', price: 12000, available: true }, { id: '102', price: 15000, available: false }].map((room) => (
                  <div
                    key={room.id}
                    className={`border rounded-2xl p-4 space-y-2 ${
                      selectedRoom === room.id ? '' : 'border-gray-200'
                    }`}
                    style={{
                      borderColor: selectedRoom === room.id ? primaryColor : undefined,
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-lg">Room {room.id}</h3>
                      <span
                        className={`text-sm px-2 py-1 rounded-full ${
                          room.available
                            ? 'bg-green-100 text-green-700'
                            : 'bg-orange-100 text-orange-700'
                        }`}
                      >
                        {room.available ? 'Available' : '1 Bed Left'}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 text-sm">
                      <span>WiFi</span>
                      <span>AC</span>
                      <span>{room.id === '102' ? 'Double' : 'TV'}</span>
                    </div>
                    <div className="text-lg font-bold" style={{ color: primaryColor }}>
                      ₹{room.price.toLocaleString()}
                      <span className="text-sm font-medium text-gray-500">/mo</span>
                    </div>
                    <button
                      onClick={() => setSelectedRoom(room.id)}
                      className={`w-full py-2 px-4 rounded-md font-semibold ${
                        selectedRoom === room.id
                          ? 'text-white'
                          : 'border'
                      }`}
                      style={{
                        backgroundColor: selectedRoom === room.id ? primaryColor : 'transparent',
                        borderColor: primaryColor,
                        color: selectedRoom === room.id ? 'white' : primaryColor,
                      }}
                    >
                      {selectedRoom === room.id ? 'Selected' : 'Select'}
                    </button>
                  </div>
                ))} */}
                {owner?.roomInfo?.map((room , idx) => room && (
                  <div
                    key={room._id}
                    className={`border rounded-2xl p-4 space-y-2 ${
                      selectedRoom === room._id ? "" : "border-gray-200"
                    }`}
                    style={{
                      borderColor:
                        selectedRoom === room._id ? primaryColor : undefined,
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="font-semibold text-lg">Room {room._id}</h3>
                      <span
                        className={`text-sm px-2 py-1 rounded-full ${
                          room.roomAvailable
                            ? "bg-green-100 text-green-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {room.roomAvailable ? "Available" : "1 Bed Left"}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 text-sm">
                      <span>WiFi</span>
                      <span>AC</span>
                      <span>{room._id === "102" ? "Double" : "TV"}</span>
                    </div>
                    <div
                      className="text-lg font-bold"
                      style={{ color: primaryColor }}
                    >
                      {/* ₹{room.price.toLocaleString()} */}
                      ₹{room.pricePerHead?.toLocaleString()}

                      <span className="text-sm font-medium text-gray-500">
                        /mo
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedRoom(room._id)}
                      className={`w-full py-2 px-4 rounded-md font-semibold ${
                        selectedRoom === room._id ? "text-white" : "border"
                      }`}
                      style={{
                        backgroundColor:
                          selectedRoom === room._id
                            ? primaryColor
                            : "transparent",
                        borderColor: primaryColor,
                        color:
                          selectedRoom === room._id ? "white" : primaryColor,
                      }}
                    >
                      {selectedRoom === room._id ? "Selected" : "Select"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-2xl shadow-md bg-white">
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-4">Room Preview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="Room Preview"
                  className="rounded-2xl w-full h-48 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                  alt="Room Preview"
                  className="rounded-2xl w-full h-48 object-cover"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 text-sm text-gray-700">
                <ul className="space-y-1">
                  <li>🛏️ Double Bed</li>
                  <li>🚿 Attached Bathroom</li>
                  <li>⚡ Power Backup</li>
                </ul>
                <ul className="space-y-1">
                  <li>👥 2 Person Sharing</li>
                  <li>📅 Available from June 1</li>
                  <li>✅ 1 Bed Available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="space-y-6">
          <div className="rounded-2xl shadow-md bg-white">
            <div className="p-4 space-y-4">
              <h2 className="text-xl font-semibold">Booking Summary</h2>
              <div>
                <label className="text-sm">Check-in Date</label>
                <input
                  type="date"
                  className="mt-2 border rounded-md w-full p-2"
                />
              </div>
              <div>
                <label className="text-sm">Duration</label>
                <select className="mt-2 border rounded-md w-full p-2">
                  <option>3 months</option>
                  <option>6 months</option>
                </select>
              </div>
              <div className="text-sm text-gray-700">
                <p>Room Rent (monthly): ₹15,000</p>
                <p>Duration: 6 months</p>
                <p>Security Deposit: ₹15,000</p>
              </div>
              <div
                className="text-lg font-bold text-right"
                style={{ color: primaryColor }}
              >
                Total: ₹1,05,000
              </div>
            </div>
          </div>

          <div className="rounded-2xl shadow-md bg-white">
            <div className="p-4 space-y-4">
              <h2 className="text-xl font-semibold">Payment Method</h2>
              <div className="space-y-2">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    value="upi"
                    defaultChecked
                  />
                  UPI Payment
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" value="card" />
                  Credit/Debit Card
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="payment" value="netbanking" />
                  Net Banking
                </label>
              </div>
              <div>
                <label className="text-sm">Have a coupon?</label>
                <div className="flex items-center gap-2 mt-2">
                  <input
                    className="border p-2 rounded-md flex-1"
                    placeholder="Enter code"
                  />
                  <button
                    className="px-4 py-2 rounded-md text-white"
                    style={{ backgroundColor: primaryColor }}
                  >
                    Apply
                  </button>
                </div>
              </div>
              <button
                className="w-full mt-4 py-2 px-4 rounded-md text-white"
                style={{ backgroundColor: primaryColor }}
              >
                Proceed to Payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
