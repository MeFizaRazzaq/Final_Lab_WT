import React from 'react';
import MyProfile from './MyProfile';
import DragonsPage from './DragonsPage';
import Missions from './Missions';
import { useState } from 'react';

function Navbar() {
    
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <>
        <div className='nav'>
            <h1>Space Traveler's Hub</h1>
            <div className='nav2'>
                <button onClick={() => setActiveTab('dragon')}>Dragons</button> 
                <button  onClick={() => setActiveTab('Mission')}>Mission</button>
                <button  onClick={() => setActiveTab('profile')}>My Profile</button>
            </div>
        </div>
        {activeTab === 'dragon' && <DragonsPage />}
        {activeTab === 'Mission' && <Missions />}
        {activeTab === 'profile' && <MyProfile />}
    </>
  )
}

export default Navbar