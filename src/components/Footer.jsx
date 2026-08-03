export default function Footer({completedTodos,totalTodos}) {
  return (
    <div className="fixed bottom-0 left-0 w-full text-[1.5em] font-bold text-center bg-[#f7ca18]
    p-[10px] mt-[15px]">
        <span className="m-[50px]">completedTodos:{completedTodos}</span>
        <span className="m-[50px]">totalTodos:{totalTodos}</span>
    </div>
  );
}
