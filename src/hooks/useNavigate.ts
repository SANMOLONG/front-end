import { useNavigate } from "react-router-dom"

type useRouteType = {
  onNavigete: (url:string) => () => void
}

export const useRoute = ():useRouteType => {
  const navigete = useNavigate()
  const onNavigete = (url:string) => ()=> {
    navigete(url)
  }
  return {onNavigete}
}