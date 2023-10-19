import React from 'react';
import IconLink from "./IconLink";
import Style from './portfolio.module.scss';
import {Box} from "@mui/material";

function PortfolioBlock(props) {
   const {image, live, source, title, description} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} className={Style["Portfolio-Image"]} src={image} alt={'mockup'} />
         <h2 style={{fontSize: '1.8rem', padding:"5px 10px"}}>{title}</h2>
         <Box className={Style.portfolio} display={'flex'} flexDirection={'column'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
               <Box className={Style['portfolio--sub']}>
                  {description}
               </Box>
            {/* <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={live} title={'Live Demo'} icon={'fab fa-safari'}/>
            </Box>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'}/>
            </Box> */}
         </Box>
      </Box>
   );
}

export default PortfolioBlock;