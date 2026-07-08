import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '@fontsource/italiana'
import '@fontsource-variable/cormorant'
import '@fontsource-variable/jost'
import './styles.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Guide from './pages/Guide.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/guide" element={<Guide />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
