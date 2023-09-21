import { FC } from 'react'
import * as SC from './css'
import { homeSvg, togeterSvg, userSvg } from '../asset'
import { useRoute } from '../hooks'

export const FooterNav:FC = () => {
  const {onNavigete} = useRoute();
  return (
    <div style={{ position: "fixed", bottom: 0, maxWidth: "700px", width: "100%" }}>
        <SC.NavBottom $jc='space-around'>
          {[[homeSvg, "/"], [togeterSvg, "/joinboard"], [userSvg, "/mypage"]].map(list => 
            <SC.NavIcon key={list[1]} onClick={onNavigete(list[1])} children={<img src={list[0]}  alt='NavbottomImg'/>} />)}
        </SC.NavBottom>
      </div>
  )
}
