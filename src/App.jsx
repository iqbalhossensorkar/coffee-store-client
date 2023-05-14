import { Link, useLoaderData } from 'react-router-dom'
import './App.css'
import { FaCoffee } from 'react-icons/fa';
import Home from './components/Home';
import 'tailwindcss/tailwind.css';
import CoffeeCard from './components/CoffeeCard';
import { useState } from 'react';


function App() {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees);

  return (
    <>
      <Home></Home>
      <div className='text-center bg-addCoffee-second min-h-screen my-10'>
        <p className=''>--- Sip & Savor ---</p>
        <h1 className='font-extrabold text-3xl text-amber-950 my-4 '>Our Popular Products {coffees.length}</h1>
        <Link to='/addCoffee'><button className="btn bg-[#E3B577] gap-2">
          Add Coffee
          <FaCoffee className='text-amber-950'></FaCoffee>
        </button></Link>
        <div className='m-8 md:m-20 grid md:grid-cols-2 gap-8'>
          {
            coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
          }
        </div>
      </div>
    </>
  )
}

export default App
