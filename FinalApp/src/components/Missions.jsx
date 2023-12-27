import React from 'react';
import { useDispatch } from 'react-redux';
import DisplayMission from './DisplayMission';

function Missions() {
    const dispatch= useDispatch();
    const showContentMission=()=>{
        dispatch(fetchDataMission()).unwrap() // This unwraps the promise and returns the result/error payload
        .then((data) => {
            // Here, 'data' will contain the fetched dragons
            console.log("show conr=tnen m",data);
            dispatch(addMission(data));
        })
        .catch((error) => {
            console.error("Error fetching dragons:", error);
        });
    }
  return (
    <><h1>Missions</h1>
    <table>
        <thead>
            <tr><td>Name</td>
            <td>Description</td>
            <td>Status</td>
            <td>Action</td></tr>
        </thead>
    </table>
    <DisplayMission/>
    </>
  )
}

export default Missions