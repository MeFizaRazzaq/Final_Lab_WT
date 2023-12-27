import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, addDragon } from '../store/slices/dragonSlice';

function DisplayDragons() {

    const dispatch = useDispatch();

    const data = useSelector((state)=>{
      console.log("fe",state);
      return state.dragons;
  })
  const showContent=()=>{
    dispatch(fetchData()).unwrap() // This unwraps the promise and returns the result/error payload
    .then((data) => {
        // Here, 'data' will contain the fetched dragons
        console.log(data);
        dispatch(addDragon(data));
    })
    .catch((error) => {
        console.error("Error fetching dragons:", error);
    });
}
showContent();
  return<>{
    data.map((user, id) => {
        console.log("fm");
        let content = [];
        for (let i = 0; i < user.length; i++) {
            content.push(
                <tr key={`${id}-${i}`}>
                    <td>
                    <img src="{user[i].flickr_images}" alt="" /></td>
                    <td>{user[i].name}</td>
                    <td>{user[i].description}</td>
                    <td>
                    <button>Reserve</button></td>
                </tr>
            );
        }
        return content;
    })
  }
</>
}

export default DisplayDragons