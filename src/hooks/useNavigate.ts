import { useNavigate, useParams } from "react-router-dom"

type useRouteType = {
  onNavigete: (url:string) => () => void
  id: string | undefined
}

export const useRoute = ():useRouteType => {
  const navigete = useNavigate()
  const {id} = useParams()
  const onNavigete = (url:string) => ()=> {
    navigete(url)
  }
  return {onNavigete, id}
}