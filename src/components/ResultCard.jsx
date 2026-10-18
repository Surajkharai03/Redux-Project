import { useDispatch } from "react-redux"
import { addCollection } from "../app/feature/collectionSlice"
import { toast } from "react-toastify"

const ResultCard = ({item}) => {     //receive the item data that the parent component sent to this component."



    const dispatch = useDispatch()

    const addToCollection =(item) =>{
      dispatch(addCollection(item))
      toast.success("Added to collection!")
      
      
      
    }
  

//     const oldData = JSON.parse(localStorage.getItem('collection')) || []  //Get the previously saved collection from localStorage and convert it back into a JavaScript array/object.
    
//     //Take the saved string → convert it back into a JavaScript array/object → use it in your code.

// // We use JSON.parse() when we have a JSON string and want to convert it to a JavaScript object/value that we can actually work with. 
// //  * parse = JSON string → JavaScript object
// //  * stringify = JavaScript object → JSON string

//     const newData = [...oldData,item]    //it creates a new array and copies the elements from oldData into it, then adds item.
//    // It creates a new array, rather than changing oldData.

    

//     localStorage.setItem('collection',JSON.stringify(newData))    // Convert newData into a string and save it in localStorage under the key collection.
    
//     // Take newData → convert it to a string → save it in the browser with the name "collection"
    
    
    
//   }

  return (
    <div className="w-[18vw] relative h-80 bg-white rounded-xl overflow-hidden">
     <a target="_blank" className="h-full" href={item.url}>
        {item.type =='photo'?<img className="h-full w-full object-cover object-center" src={item.src} alt="" />:'' }
        {item.type =='video'?<video className="h-full w-full object-cover object-center"  autoPlay loop muted src={item.src}></video>:''}
        {item.type =='gif'?<img className="h-full w-full object-cover object-center"  src={item.src} alt="" />:'' }
        </a>
        <div id='bottom' className="w-full flex  justify-between items-center px-4 py-5 gap-3 text-white absolute bottom-0">
          <h2 className="text-lg font-semibold capitalize h-14 overflow-hidden">{item.title}</h2> 
          <button onClick={()=>{
            addToCollection(item)
          }}
          className="bg-pink-600 active:scale-95 text-white rounded px-3 py-2 font-medium cursor-pointer">
            Save
            </button>
            </div>
    </div>
  )
}

export default ResultCard