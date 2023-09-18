import { Route, Routes } from 'react-router-dom'
import * as Pages from './pages'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'

function App() {
  const LayoutRef = useRef<HTMLDivElement | null>(null)
  useEffect(()=> {
    const resizeHeight = () => {
      LayoutRef.current && (LayoutRef.current.style.height = `${window.innerHeight}px`)
    }
    resizeHeight()
    window.addEventListener("resize", resizeHeight)
    return () => {
      window.removeEventListener("resize", resizeHeight)
    }
  }, [LayoutRef])

  return (
    <Layout ref={LayoutRef}>
    <Routes>
      <Route path='/' element={<Pages.Main />}/>
      <Route path='/home' element={<Pages.Home />}/>
      <Route path='/home/:id' element={<Pages.Chatting />}/>
      <Route path='/mypage' element={<Pages.Mypasge />}/>
    </Routes>
    </Layout>
    )
}

export default App

const Layout = styled.div`
  margin: 0 auto;
  max-width: 700px;
  overflow: auto;
  @media (min-width: 400px) {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 
  }
`