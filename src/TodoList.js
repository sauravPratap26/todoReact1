import React from "react";
import { useState } from "react";
function TodoList(){
    const[activity, setActivity]=useState("");
    const[listData, setListData]=useState([]);

    function addActivity(){
        setListData((listData)=>{
            const updatedList=[...listData,activity]
            console.log(updatedList)
            console.log(activity)
            setActivity("");
            console.log(activity)
            return updatedList
        })
    }
    function removeActivity(i){
        const updatedListData=listData.filter((elem, id)=>{
            return i!=id;
        })
        setListData(updatedListData);
    }

    function removeAll(){
        setListData([]);  
    }
    return(
        <>
            <div className="container">
                <div className="header">TODO LIST</div>
                <input type="text" placeholder="Enter Todo" value={activity}
                onChange={(e)=>setActivity(e.target.value)}/>
                <button onClick={addActivity}>ADD</button>
                <br></br>
                {listData!=[] && listData.map((data,i)=>{
                    return(
                        <>
                        <p key={i}>
                            <div className="listData">{data}</div>
                        </p>
                        <div className="btn-position"><button onClick={()=>removeActivity(i)}>remove</button></div>
                        </>
                    )
                })}

                {listData.length>=1 && <button onClick={removeAll}>Remove All</button>}
            </div>
        </>
    )
}

export default TodoList;