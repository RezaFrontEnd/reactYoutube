export default function Message(){
    function handleClick()
    {
        console.log("button clicked")
    }
    return(
        <>
          <button onClick={handleClick}>click here to get message</button>
        </>
    )
}