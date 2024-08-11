import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About2 from './components/About/About2.jsx'
import Contact from './components/Contact/Contact.jsx'
import ComplaintForm from './components/ComplaintForm/ComplaintForm.jsx'
import PrivacyPolicy  from './components/Agreement/Privacy.jsx'
import TermsAndConditions  from './components/Agreement/Terms.jsx'
import ScamReports from './components/ScamReports/ScamReports.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='About-us' element={<About2 />} />
      <Route path='Contact' element={<Contact/>} />
      <Route path='report-complaint' element={<ComplaintForm/>} />
      <Route path='scam-reports' element={<ScamReports/>} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)