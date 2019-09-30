import React from 'react';

const Home = () => (
  <button id= "home" className="p-5 w-full text-left block bg-transparent text-blue-700">Home</button>
)
const Mail = () => (
  <button id= "mail" className="p-5 w-full text-left block bg-transparent text-blue-700">Mail</button>
)
const Payments = () => (
  <button id="payment" className="p-5 w-full text-left block bg-transparent text-blue-700">Payments</button>
)
const Shopping = () => (
  <button id="shopping" className="p-5 w-full text-left block bg-transparent text-blue-700">Shopping</button>
)
const Gym = () => (
  <button id="gym" className="p-5 w-full text-left block bg-transparent text-blue-700">Gym</button>
)
const Notes = () => (
  <button id="notes" className="p-5 w-full text-left block bg-transparent text-blue-700">Notes</button>
)

export{
  Home,
  Mail,
  Payments,
  Shopping,
  Gym,
  Notes
}