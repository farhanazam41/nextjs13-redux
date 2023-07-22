'use client'
import React, { useState } from 'react';
import Navbar from './Navbar';

function Dashboard() {
    const [activeDashboard, setActiveDashboard] = useState('dashboard1')

    const onHandleToggleDashboard = (dashboard: string) =>{
        setActiveDashboard(dashboard);
    }
  return (
    <div>
        <Navbar onHandleToggleDashboard={onHandleToggleDashboard}/>
        {activeDashboard === 'dashboard1' && <>this is dashboard 1</>}
        {activeDashboard === 'dashboard2' && <>this is dashboard 2</>}
        {activeDashboard === 'dashboard3' && <>this is dashboard 3</>}
    </div>
  )
}

export default Dashboard
