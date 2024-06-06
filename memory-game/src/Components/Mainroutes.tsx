import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Introscreen from '../pages/Introscreen'
import Instruction from '../pages/Instruction'
import Activity from '../pages/activity'
import Finalpage from '../pages/Finalpage'

const Mainroutes:React.FC = () => {
  return (
    <div> 
        <Routes>
  <Route path='/' element={<Introscreen />} />
  <Route path='/Instruction' element={<Instruction />} />
  <Route path='/Activity' element={<Activity />} />
  <Route path='/Finalpage' element={<Finalpage />} />


        </Routes>
    </div>
  )
}

export default  Mainroutes