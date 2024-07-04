import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
document.title =`${title} | Tauhid hossen`
    },[title])
}
export default useTitle;