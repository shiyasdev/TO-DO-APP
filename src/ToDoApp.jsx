import React,{useState,useEffect} from "react";



function ToDoApp(){

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");


    const mainAllStyle= {
        margin:"0",
        padding:"0",
        display:"flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height:"1000px",
        width:"100%",
    }


    const mainDivStyle = {
        display:"flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height:"600px",
        width:"600px",
        background: "linear-gradient(yellow, orange)",
        borderRadius:"20px",
        gap:"20px",
        transition: "ease 1s",
    }

    const mainH1={
        fontSize: "36px",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontWeight: "bold",
        color:"hsla(220, 72%, 14%, 1.00)"
    }


    const inputDiv={
        display:"flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap:"20px",
    }

    const mainInput={
        height:"50px",
        width:"300px",
        padding:"20px",
        borderRadius:"20px",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontWeight: "bold",
    }

    const mainOl={
        height:"100px",
        width:"400px",
        padding:"10px",
        borderRadius:"20px",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontWeight: "bold",
        fontSize:"18px",
        display:"flex",
        justifyContent: "center",
        alignItems: "center",
    }

    const mainSpan={
        fontSize: "27px",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontWeight: "bold",
        color:"hsla(220, 72%, 14%, 1.00)",
        margin:"20px"
    }

    function handleChangeInput(event){

        setNewTask(event.target.value)

    }


    function addTask(){
        
        setTasks(t => [...t,newTask])
        setNewTask("");

    }


    function deleteTask(index){

        const update =tasks.filter((_,i) => i !==index)
        setTasks(update)

    }

   return(
    <>
       <div style={mainAllStyle}>
         <div style={mainDivStyle}>
            <h1 style={mainH1}>TO DO LIST APP</h1>
            <div style={inputDiv}>
                <input type="text" value={newTask} placeholder="ENTER TASK" onChange={handleChangeInput} style={mainInput}/>
                <button onClick={addTask} className="btn btn-outline-primary"> ADD</button>
            </div>
            <ol style={mainOl}>
                {tasks.map((task,index) => <h3 key={index}>
                    <span style={mainSpan}>{task}</span>
                    <button onClick={() => deleteTask(index)} className="btn btn-outline-danger"> DELETE</button>
                </h3>)}
            </ol>
        </div>
       </div>
    </>
   );
}


export default ToDoApp