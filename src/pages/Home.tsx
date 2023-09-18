import { FC, useState } from 'react'
import { useRoute } from '../hooks'
import * as SC from '../components'
import { homeSvg, togeterSvg, userSvg } from '../asset'

export const Home:FC = () => {
  const {onNavigete} = useRoute()
  const [mount, setMount] = useState<string>('seorak')
  const onChangeMount = (mount:string) => () => {
    setMount(mount)
  }
  return (
    <SC.PagesLayout>
      <SC.CustomH1 children="HOME"/>
      <button onClick={onChangeMount('seorak')} children="설악산"/>
      <button onClick={onChangeMount('오대')} children="오대산"/>
      <button onClick={onChangeMount('치악')} children="치악산"/>
      <button onClick={onChangeMount('태백')} children="태백산"/>
      <button onClick={onNavigete(mount)}>실시간 채팅</button>
      <div style={{ position: "fixed", bottom: 0, maxWidth: "700px", width: "100%" }}>
        <SC.NavBottom $jc='space-around'>
          {[homeSvg, togeterSvg, userSvg].map(list => 
            <SC.NavIcon children={<img  key={list} src={list} alt='NavbottomImg'/>} />)}
        </SC.NavBottom>
      </div>
    </SC.PagesLayout>
  )
}
