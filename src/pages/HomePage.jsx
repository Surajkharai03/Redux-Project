import { useSelector } from "react-redux"
import ResultGrid from "../components/ResultGrid"
import SearchBar from "../components/SearchBar"
import Tabs from "../components/Tabs"
import { Link } from "react-router-dom"

const HomePage = () => {

     const { query} = useSelector((store) => store.search)
     
     
  return (
    <div>

     


         <SearchBar/>
    

  {query !== '' ? (             // "Show the Tabs and ResultGrid only when the user has entered something in the search box." means jv user kuch type krega tbhi dikhega tab page  and ResultGrid page
    <div>                                                   
      <Tabs />
      <ResultGrid />
    </div>
  ) : (
    ''
  )}
</div>
     
  )
}

export default HomePage