import React from 'react';
import Style from './About.module.scss';
import Terminal from "./Terminal";
import {Box, Grid} from "@mui/material";
import {info} from "../../info/Info.en";
import Book from '../../img/book.jpeg';
import { useTranslation } from 'react-i18next';


export default function About() {
    const {t, i18n} = useTranslation();
    const lang = i18n.language;
    const info = require(`../../info/Info.${lang}.js`).info;
    const firstName = info.firstName.toLowerCase();

    function aboutMeText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> {t('about', {firstname: firstName})}</p>
            <p><span style={{color: info.baseColor}}>{t('about static', {firstname: firstName})}<span
                className={Style.green}>(main)</span> $ </span>
                {info.bio}
            </p>
        </>;
    }

    function skillsText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> {t("cd skills")}
            </p>
            <p><span style={{color: info.baseColor}}>{t("skills")} <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <p style={{color: info.baseColor}}> {t('proficient with')}</p>
            <ul className={Style.skills}>
                {info.skills.proficientWith.map((proficiency, index) => <li key={index}>{proficiency}</li>)}
            </ul>
            <p style={{color: info.baseColor}}> {t('exposed to')}</p>
            <ul className={Style.skills}>
                {info.skills.exposedTo.map((skill, index) => <li key={index}>{skill}</li>)}
            </ul>
        </>;
    }

    function miscText() {
        return <>
            <p><span style={{color: info.baseColor}}>{firstName}{info.lastName.toLowerCase()} $</span> {t('cd hobbies')}</p>
            <p><span style={{color: info.baseColor}}>{t('hobbies')} <span
                className={Style.green}>(main)</span> $</span> ls</p>
            <ul>
                {info.hobbies.map((hobby, index) => (
                    <li key={index}><Box component={'span'} mr={'1rem'}>{hobby.emoji}</Box>{hobby.label}</li>
                ))}
            </ul>
        </>;
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'3rem'}>
            <Terminal text={aboutMeText()}/>
            <Terminal text={skillsText()}/>
            <Terminal text={miscText()}/>
            <Box display="flex" justifyContent="center" alignItems="center" marginTop={4}>
                <Grid container justify="center">
                    <Grid item xs={12}>
                        <img src={Book} alt="Description" style={{ maxWidth: "100%", height: "auto" }} />
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}