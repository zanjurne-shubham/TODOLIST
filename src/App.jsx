// import { useState } from "react";
// import "./output.css";
// import Navbar from "./components/Navbar";
// import { v4 as uuidv4 } from "uuid";
// import { useEffect } from "react";

// const App = () => {
//   const [todo, settodo] = useState("");
//   const [todos, settodos] = useState([]);
// const [showfinished, setshowfinished] = useState(true)
// useEffect(() => {
//   let todoString=localStorage.getItem("todos");
//   if(todoString){
//      let todos=JSON.parse(todoString);
//      settodos(todos)
//   }

// }, [])

//   const HandleChange = (e) => {
//     settodo(e.target.value);
//   };

//   const HandleAdd = () => {
//     settodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
//     settodo("");
//     saveTols()
//   };



//   const handleCheckBox = (e, id) => {
//     let index = todos.findIndex((item) => {
//       return item.id === id;
//     });
//     let newTodo = [...todos];
//     newTodo[index].isCompleted = !newTodo[index].isCompleted;
//     settodos(newTodo);
//     saveTols()
//   };

//   const HandleDelete = (e, id) => {
//     let newTodo = todos.filter((t) => {
//       if (t.id != id) {
//         return t;
//       }
//     });
//     settodos(newTodo);
//     saveTols()
//   };
//   const HandleEdit = (e, id) => {
//     let index = todos.findIndex((item) => {
//       return item.id == id;
//     });
//     let newTodos = [...todos];
//     newTodos[index].todo = prompt("enter your new todo");
//     settodos(newTodos);
//     saveTols()
//   };


//   const saveTols=() => {
//     localStorage.setItem("todos",JSON.stringify(todos));
//   }



//   const toggleFinished=(e) => {
//     setshowfinished(!showfinished)
//   }
  
  
//   return (
//     <>
//       <Navbar />
//       <div className="container mx-auto my-5 rounded-xl p-3.5 bg-violet-200 min-h-[80vh]">
//         <div className="addTodo my-5">
//           <h2 className="text-lg font-bold">Add a Todo</h2>
//           <input
//             onChange={HandleChange}
//             value={todo}
//             className="w-1/2 bg-white"
//             type="text"
//           />

//           <button
//             onClick={HandleAdd} disabled={todo.length<=3}
//             className="bg-violet-600 hover:bg-violet-800 p-2 disabled:bg-red-700 py-1 text-sm font-bold rounded-lg text-white mx-7"
//           >
//             Add
//           </button>
//         </div>
//      <input type="checkbox" checked={showfinished} onChange={toggleFinished}/> Show Finished
//         <h2 className="text-lg font-bold">Your Todos</h2>
//         <div className="todos">

//           {todos.length===0 && <div className="font-bold text-2xl text-center m-7">No Todos To Display</div>}
//           {todos.map((item) => {
//             return (showfinished || !item.isCompleted) && (

//               <div
//                 key={item.id}
//                 className="todo flex w-3/4 my-3 justify-between"
//               >
//                  <div className="flex gap-8"> 
//                   <input
                
//                   onChange={(e) => {
//                     handleCheckBox(e, item.id);
//                   }}
//                   name={item.id}
//                   type="checkbox"
//                   checked={item.isCompleted}
                 
//                 />
//                 <div className={item.isCompleted ? "line-through" : ""}>
//                   {item.todo}
//                 </div>
//                  </div>
                
//                 <div className="buttons flex h-fu">
//                   <button
//                     onClick={(e) => {
//                       HandleEdit(e, item.id);
//                     }}
//                     className="bg-violet-600 hover:bg-violet-800 p-2  py-1 text-sm font-bold rounded-lg text-white mx-1 "
//                   >
//                     Edit
//                   </button>

//                   <button
//                     name={item.id}
//                     onClick={(e) => {
//                       HandleDelete(e, item.id);
//                     }}
//                     className="bg-violet-600 hover:bg-violet-800 p-2  py-1 text-sm font-bold rounded-lg text-white mx-1"
//                   >
//                     {" "}
//                     Delete
//                   </button>
//                 </div>
//               </div>

//             );
//           })}
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;    




































////////////////////////////////////////////



import React from 'react'
import "./output.css"
import { useState } from 'react'
import { v4 as uuidv4 } from "uuid";
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useEffect } from 'react';
import { FaEdit  } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const App = () => {

const [SingleTodo, setSingleTodo] = useState("")
const [MultipleTodos, setMultipleTodos] = useState([])
const  [showFinished, setshowFinished] = useState(true)
useEffect(() => {
 let MultipleTodos=JSON.parse(localStorage.getItem("MultipleTodos"))
 if(MultipleTodos!=null){
 setMultipleTodos(MultipleTodos);
 }
}, [])



const HandleOnChange=(e)=>{
setSingleTodo(e.target.value);
}

const HandleAdd=()=>{
 setMultipleTodos([...MultipleTodos,{id:uuidv4(),SingleTodo,isCompleted:false}])
 setSingleTodo("")
strorTOlocal()
}


const HandleCheckbox=(e,id)=>{
 let index=MultipleTodos.findIndex((item)=>{
  return item.id==id;
 })

 let newMultipleTodos=[...MultipleTodos];
 newMultipleTodos[index].isCompleted=!newMultipleTodos[index].isCompleted;
 setMultipleTodos(newMultipleTodos);

strorTOlocal()
}



const HandleEdit=(e,id)=>{
let Index=MultipleTodos.findIndex((item)=>{
  return item.id===id;
})
let newMultipleTodos=[...MultipleTodos];
newMultipleTodos[Index].SingleTodo=prompt("Enter Right Todo")
setMultipleTodos(newMultipleTodos);

strorTOlocal()

}


const HandleDelete=(e,id)=>{

let newMultipleTodos=MultipleTodos.filter((item)=>{
  if(item.id!=id){
    return item;
  }
})
setMultipleTodos(newMultipleTodos);

strorTOlocal()
}


const strorTOlocal=()=>{
  localStorage.setItem("MultipleTodos",JSON.stringify(MultipleTodos))
}

const togglefinisghed=(e) => {
  setshowFinished(!showFinished);
}



  return (
   <>
   <Navbar />
      <div className="container mx-auto my-5 rounded-xl p-3.5 bg-violet-200 min-h-[80vh] w-7/8">
        <div className="flex justify-center  font-bold text-2xl mb-5">
          <h1 > iTask-Manager Your Todos At One Place</h1>
        </div> 
        

        <div className="addTodo my-5">
         <h2 className="text-lg font-bold">Add a Todo</h2>
         <div className='flex'>

           <input onChange={HandleOnChange} value={SingleTodo}  className="w-full bg-white"  type="text" />

          <button onClick={HandleAdd}disabled={SingleTodo.length<=3}className="bg-violet-600 hover:bg-violet-800 p-2  py-1 text-sm font-bold rounded-lg text-white mx-7"> Add</button>
         </div>
         
        </div>
     <input type="checkbox" onChange={togglefinisghed} checked={showFinished} /> Show Finished
        <h2 className="text-lg font-bold">Your Todos</h2>
        <div className="todos">

         {MultipleTodos.length===0 && <div className="font-bold m-7">No Todos Left</div>}
      { MultipleTodos.map((item)=>{

        return (showFinished || !item.isCompleted) && (
                 <div key={item.id} className="todo flex w-4/4 my-3 justify-between items-center" >
                 <div className="flex gap-8"> 
                  <input onChange={(e)=>{HandleCheckbox(e,item.id)}} checked={item.isCompleted} type="checkbox"/>
                 <div className={item.isCompleted?"line-through":""}>{item.SingleTodo} </div>
                 </div>
                
                <div className="buttons ">
                 <div className='flex'>
                  <button  onClick={(e)=>{HandleEdit(e,item.id)}} className="bg-violet-600 hover:bg-violet-800 p-2  py-1 text-sm font-bold rounded-lg text-white mx-1 "> <FaEdit /> </button>
                  <button  onClick={(e)=>{HandleDelete(e,item.id)}} className="bg-violet-600 hover:bg-violet-800 p-2  py-1 text-sm font-bold rounded-lg text-white mx-1" >  <MdDelete /> </button>
                  </div> 
                </div>
              </div>

        )
        })
      }

            

          
        </div>
      </div>









   <Footer />
   </>
  )
}

export default App
