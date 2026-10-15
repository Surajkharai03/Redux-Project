import { useDispatch, useSelector } from "react-redux"
import { setActiveTab } from "../app/feature/searchSlice"


const Tabs = () => {
    const tabs = ['photos','videos','gif']

   const dispatch =  useDispatch()

  const activeTab = useSelector((state) => state.search.activeTab)   //  name(search) se activeTab 




  return (
    <div className="flex gap-5 p-10">
        {tabs.map(function(elem,idx){
            return (
            <button className={`${activeTab==elem?'bg-blue-700':'bg-gray-600'}  px-5 py-2 transitions rounded uppercase cursor-pointer active:scale-95`}
             key={idx}
             onClick={()=>{
                dispatch(setActiveTab(elem))
             }}
             >
            {elem}

            </button>
        )
        })}

    </div>
  )
}

export default Tabs