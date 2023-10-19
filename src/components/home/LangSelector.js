import React from 'react';
import {Box} from "@mui/material";

export default function LangSelector({language, handleClick}) {
    const transition = 'all 250ms ease'

   return (
      <Box fontSize={'1.5rem'} sx={{cursor: 'pointer', ":hover": {transform: 'translateY(-3px)', transition: transition}}}>
         {
            language==='en' ?
               <span onClick={handleClick} aria-label="Full Moon" role="img">🇹🇷</span>
               :
               <span onClick={handleClick} aria-label="New Moon" role="img">🇺🇸</span>
         }
      </Box>
   )
}