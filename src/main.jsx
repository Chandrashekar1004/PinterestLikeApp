// #56:38
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { BrowserRouter,Routes,Route } from 'react-router'
import CreatePage from './routes/createPage/CreatePage.jsx'
import PostPage from './routes/postPage/PostPage.jsx'
import AuthPage from './routes/authPage/AuthPage.jsx'
import Homepage from './routes/homePage/Homepage.jsx'
import ProfilePage from './routes/profilePage/ProfilePage.jsx'
import SearchPage from './routes/searchPage/SearchPage.jsx'
import MainLayout from './routes/Layouts/MainLayout.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Routes>
      <Route element={<MainLayout />}>
      <Route path="/" element={<Homepage />} />
      <Route path="/create" element={<CreatePage />} />
      <Route path="/pin/:id" element={<PostPage />} />
      <Route path="/:username" element={<ProfilePage/>} />
      <Route path="/search" element={<SearchPage/>} />
      </Route>
      <Route path="/auth" element={<AuthPage />} />

    </Routes>
    </BrowserRouter>  
  </StrictMode>,
)
