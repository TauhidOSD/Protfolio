import { useEffect } from "react"

const useTitle=title=>{
    useEffect(()=>{
document.title =`${title} | Rezuan alam rean`
    },[title])
}
export default useTitle;