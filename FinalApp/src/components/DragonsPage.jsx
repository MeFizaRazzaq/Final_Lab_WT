import React from 'react';
import { useDispatch } from 'react-redux';
import DisplayDragons from './DisplayDragons';

function DragonsPage() {
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
    <><h1>Dragons</h1>
    <table>
    </table>
    <DisplayDragons/></>
  )

}

export default DragonsPage