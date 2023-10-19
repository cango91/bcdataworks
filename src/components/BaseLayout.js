import React, { useEffect, useState } from 'react';
import Style from './BaseLayout.module.scss'
import Navbar from "./Navbar";
import Home from "./home/Home";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
import { Route, Routes } from "react-router-dom";
import { Box, Grid } from "@mui/material";
import Services from './services/Services';
import { i18n } from '../App';

export default function BaseLayout() {
   let [darkMode, setDarkMode] = useState(false);
   const [language, setLanguage] = useState('en');

   function handleToggleDarkMode() {
      let oppositeOfCurrentDarkMode = !darkMode
      localStorage.setItem('darkMode', `${oppositeOfCurrentDarkMode}`)
      setDarkMode(oppositeOfCurrentDarkMode)
   }

   function handleToggleLanguage() {
      if (language === 'en') {
         i18n.changeLanguage('tr');
         setLanguage('tr');
         localStorage.setItem('lang', 'tr');
      } else {
         i18n.changeLanguage('en');
         setLanguage('en');
         localStorage.setItem('lang', 'en');
      }
   }

   useEffect(() => {
      let detectedDarkMode = eval(localStorage.getItem('darkMode'));
      let detectedLanguage = localStorage.getItem('lang');

      if (detectedLanguage) {
         setLanguage(detectedLanguage);
      } else {
         if (navigator.languages[0].toLowerCase().startsWith('tr')) {
            localStorage.setItem('lang', 'tr');
            setLanguage('tr');
         } else {
            localStorage.setItem('lang', 'en');
         }
      }

      if (detectedDarkMode) {
         setDarkMode(detectedDarkMode)
      } else {
         localStorage.setItem('darkMode', 'false');
      }


   }, []);

   return (
      <Box className={darkMode ? Style.dark : Style.light}>
         <Grid container display={'flex'} flexDirection={'column'} minHeight={'100vh'}
            justifyContent={'space-between'}>
            <Grid item>
               <Navbar darkMode={darkMode} handleClick={handleToggleDarkMode} handleLangSelect={handleToggleLanguage} language={language} />
            </Grid>
            <Grid item flexGrow={1}>
               <Routes>
                  <Route exact path={'/'} element={<Home />} />
                  <Route exact path={'/about'} element={<About />} />
                  <Route exact path={'/portfolio'} element={<Portfolio />} />
                  <Route exact path={'/services'} element={<Services />} />
               </Routes>
            </Grid>
            <Grid item>
               <Box component={'footer'} display={'flex'} flexDirection={'column'} alignItems={'center'}
                  py={'1.5rem'} sx={{ opacity: 0.7 }} width={'100%'}>
                  <p>template created with &hearts; by <a target='_blank' rel='noopener noreferrer' href={'https://paytonpierce.dev'}>Payton Pierce,</a></p> <p>modified by<a target='_blank' rel='noopener noreferrer' href={'https://cango91.github.io'}> Can Göloğlu,</a></p>
                  <p>&copy; 2023</p>
               </Box>
            </Grid>
         </Grid>
      </Box>
   )
}

