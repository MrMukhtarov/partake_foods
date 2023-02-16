import React from 'react'
import './Safe.css'
import { GiJellyBeans } from 'react-icons/gi';
import { BsFillEggFill } from 'react-icons/bs';
import { TbBottle } from 'react-icons/tb';
import { GiCoffeeBeans } from 'react-icons/gi';
import { GiCoconuts } from 'react-icons/gi';
import { GiSesame } from 'react-icons/gi';
import { FaFish } from 'react-icons/fa';
import { GiWheat } from 'react-icons/gi';
import { GiJellyfish } from 'react-icons/gi';



const Safe = () => {
  return (
    <div className='safe'>
        <div className="all">
            <div className="top col-lg-12 text-center">
                <h2>Safe to Share</h2>
                <p>All Partake products are free of the top 9 allergens.</p>
            </div>
            <div className="bottom d-flex text-center">
                <div className="box">
                <GiJellyBeans title='Group 3 1'/>
                <p>Peanust</p>
                </div>
                <div className="box">
                <BsFillEggFill title='Group 3-1 1'/>
                <p>Eggs</p>
                </div>
                <div className="box">
                <TbBottle title='Group 3-2 1'/>
                <p>Dairy</p>
                </div>
                <div className="box">
                <GiCoffeeBeans title='Group 3-3 1'/>
                <p>Soy</p>
                </div>
                <div className="box">
                <GiCoconuts title='Group 3-4 1'/>
                <p>Tree Nuts</p>
                </div>
                <div className="box">
                <GiSesame title='Group 3-5 1'/>
                <p>Sesame</p>
                </div>
                <div className="box">
                <FaFish title='Group 3-6 1'/>
                <p>Fish</p>
                </div>
                <div className="box">
                <GiWheat title='Group 3-7 1'/>
                <p>Wheat</p>
                </div>
                <div className="box">
                <GiJellyfish title='Group 3-8 1'/>
                <p>Shellfish</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Safe