export default function Todoitem({item,todos,setTodos})
{
    function handleComplete(name){
        const newArray = todos.map((todo)=>todo.name===name ? {...todo,done:!todo.done}:todo)
        setTodos(newArray)
        console.log(todos)
    }    
    return(
        <>
            <div className="w-[500px] text-[#353935] text-[20px] mx-auto">
                <div className="text-bold p-[20px]">
                    <span className={item.done ? "line-through":""}  onClick={()=>{
                        const newArray = todos.map((todo)=>todo.name===item.name?{...todo,done:!todo.done}:todo)
                        setTodos(newArray)
                        
                    }}>{item.name}</span>
                     <span>
                        <button  onClick={()=>setTodos(todos.filter((todo)=>todo !== item))} 
                     className="float-right mr-[20px] py-[12px] px-[20px] 
                      bg-[#f7ca18] text-white mt-[-15px] rounded-lg cursor-pointer">x</button></span>
                </div>
                 <hr className="border-1 border-solid border-[#f4f4f4] " />
            </div>
        </>
    )
}