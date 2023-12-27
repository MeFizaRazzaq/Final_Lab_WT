import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataMission, addMission } from '../store/slices/dragonSlice';

function DisplayMission() {
    const dispatch = useDispatch();

  const data = useSelector((state)=>{
      console.log("fm",state);
      return state.missions;
  })
  const showContentMission=()=>{
    dispatch(fetchDataMission()).unwrap() // This unwraps the promise and returns the result/error payload
    .then((data) => {
        // Here, 'data' will contain the fetched dragons
        console.log("show conr=tnen m",data);
        dispatch(addMission(data));
    })
    .catch((error) => {
        console.error("Error fetching mission:", error);
    });
}
//showContentMission();
return<>{
    data.map((user, id) => {
        console.log("fm");
        let content = [];
        for (let i = 0; i < user.length; i++) {
            content.push(
                <tr key={`${id}-${i}`}>
                    <td>{user[i].mission_name}</td>
                    <td>{user[i].description}</td>
                    <td>
                    <button>Join Mission</button>
                    </td>
                    <td>
                    <button>Not a memeber</button></td>
                </tr>
            );
        }
        return content;
    })
}
</>
}

export default DisplayMission