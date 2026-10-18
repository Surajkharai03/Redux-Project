import { useState } from "react"
import { useDispatch } from "react-redux"
import { setQuery } from "../app/feature/searchSlice"


const SearchBar = () => {
    const [text, settext] = useState("")

   const dispatch =  useDispatch()

    const submitHandler = (e) =>{
        e.preventDefault()               // baar baar refresh hone se rokta h means form submit hone pr page relaod nhi hoga 
        dispatch(setQuery(text))

        settext('')
        
    }



  return (
    <div>
        <form onSubmit={(e) =>{
            submitHandler(e)
           }} className="flex  bg-(--c1) gap-5 p-10">
            <input
            value={text}
            onChange={(e) =>{
                settext(e.target.value);   // jo value hm likhenge input m voh hme dikhegi
                
            }}
            required
            className=" w-full border-2 px-4 py-2 text-xl rounded outline-none" type="text" placeholder="Search Anything..." />
            <button className="  active:scale-95 cursor-pointer border-2 px-4 py-2 text-xl rounded outline-none">Search</button>
        </form>
    </div>
  )
}

export default SearchBar