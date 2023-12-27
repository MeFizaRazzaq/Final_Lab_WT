import React from 'react';
import DisplayDragons from './DisplayDragons';
import { addDragon, addMission, fetchData, fetchDataMission } from '../store/slices/dragonSlice';
import { useDispatch, useSelector } from 'react-redux';
import DisplayMission from './DisplayMission';

function MyProfile() {
    
    const dispatch = useDispatch();
    
    const dragons = useSelector((state) => state.dragon);
    
  return (
    <>
    <div>
    <table>
    <thead>
        <tr>
            <th>My Dragons</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <button onClick={() => showContent()}>
                    Fetch Dragons
                </button>
            </td>
        </tr>
            <DisplayDragons/>
    </tbody>
</table>      
    </div>
    <div>
    <table>
    <thead>
        <tr>
            <th>My Missions</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <button onClick={() => showContentMission()}>
                    Fetch Missions
                </button>
            </td>
        </tr>
            <DisplayMission/>
    </tbody>
</table>      
    </div>
    </>
    
  )
}

export default MyProfile