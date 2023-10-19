import React from 'react';
import PortfolioBlock from "./PortfolioBlock";
import {Box, Grid} from "@mui/material";
import { useTranslation } from 'react-i18next';

export default function Portfolio() {
    const {i18n} = useTranslation();
    const lang = i18n.language;
    const info = require(`../../info/Info.${lang}.js`).info;
    return (
        <Box>
            <Grid container display={'flex'} justifyContent={'center'} marginTop={"10px"} alignItems={"center"}>
                {info.portfolio.map((project, index) => (
                   <Grid item xs={12} md={6} key={index}>
                       <PortfolioBlock image={project.image} live={project.live} source={project.source} title={project.title} description={project.description} />
                   </Grid>
                ))}
            </Grid>
        </Box>
    );
};