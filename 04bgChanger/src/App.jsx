import {useState} from "react"

function App() {
  const [color, setColor] = useState("olive");

  // Array of color options
  const colors = [
    "red", "blue", "yellow", "green", "olive", 
    "pink", "gray", "purple", "lavender", 
    "white", "black"
  ];

  return (
    <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-2xl">
          {colors.map((col) => (
            <button
              key={col}
              onClick={() => setColor(col)}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: col, textShadow: "1px 1px 2px rgba(0, 0, 0, 0.5)" }}
            >
              {col.charAt(0).toUpperCase() + col.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );}

export default App
