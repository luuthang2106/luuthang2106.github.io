import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import AppLayout from './Layout'
import About from './pages/About'
import Vietlott from './pages/Vietlott'
import KafkaUI from './pages/KafkaUI'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout/>}>
          <Route path="/" element={<About/>}/>
          <Route path="/kafka-ui" element={<KafkaUI/>}/>
          <Route path="/vietlott" element={<Vietlott/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
