import React from 'react';
import '../../styles/tailwind.css';

const Home = () => (
  <a className="home p-5 w-full text-left block bg-transparent text-blue-700">Home</a>
)
const Mail = () => (
  <a className="mail p-5 w-full text-left block bg-transparent text-blue-700">Mail</a>
)
const Payments = () => (
  <a className="payment p-5 w-full text-left block bg-transparent text-blue-700">Payments</a>
)
const Shopping = () => (
  <a className="shopping p-5 w-full text-left block bg-transparent text-blue-700">Shopping</a>
)
const Gym = () => (
  <a className="gym p-5 w-full text-left block bg-transparent text-blue-700">Gym</a>
)
const Notes = () => (
  <a className="notes p-5 w-full text-left block bg-transparent text-blue-700">Notes</a>
)

export{
  Home,
  Mail,
  Payments,
  Shopping,
  Gym,
  Notes
}