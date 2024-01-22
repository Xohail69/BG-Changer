import { useState } from 'react'

const Button = ({color, setColor})=>{
  return (
    <button onClick={()=> setColor(color)}
          className="outline-none px-4 py-1 
          rounded-full text-white shadow-lg"
          style={{backgroundColor: color}}
          >{color}</button>

  )
}



function App() {
  const [color, setColor] = useState("black")
  const colors = ["black", "red", "blue", "green", "pink", "grey", "purple", "yellow", "violet"];

  return (
      <div className="w-full h-screen duration-200"
      style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap 
          justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap 
          justify-center gap-3 shadow-lg
           bg-white px-3 py-2 rounded-3xl">

          {
            colors.map( (color, index)=>(
              <Button
                key={index}
                color={color}
                setColor={setColor}
              />
            ) )
          }


{/*  
          <Button color="red" setColor={setColor}/>
          <Button color="blue" setColor={setColor}/>
          <Button color="green" setColor={setColor}/>
          <Button color="pink" setColor={setColor}/>
          <Button color="grey" setColor={setColor}/>
          <Button color="purple" setColor={setColor}/>
          <Button color="yellow" setColor={setColor}/>
          <Button color="violet" setColor={setColor}/> */}


          {/* <button onClick={()=> setColor("red")}
          className="outline-none px-4 py-1   
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>

          <button onClick={()=> setColor("blue")}
          className="outline-none px-4 py-1 
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>

        <button onClick={()=> setColor("green")}
          className="outline-none px-4 py-1 
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>

          <button onClick={()=> setColor("pink")}
          className="outline-none px-4 py-1 
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "pink"}}
          >Pink</button>

          <button onClick={()=> setColor("grey")}
          className="outline-none px-4 py-1 
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "grey"}}
          >Grey</button>

          <button onClick={()=> setColor("purple")}
          className="outline-none px-4 py-1 
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "purple"}}
          >Purple</button>

          <button onClick={()=> setColor("yellow")}
          className="outline-none px-4 py-1 
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "yellow"}}
          >Yellow</button>

          <button onClick={()=> setColor("violet")}
          className="outline-none px-4 py-1 
          rounded-full text-white shadow-lg"
          style={{backgroundColor: "violet"}}
          >Violet</button> */}

        


          </div>
        </div>

      </div>
      
  )
}

export default App