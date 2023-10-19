import React, {useState} from 'react';
import Style from './Navbar.module.scss';
import Toggler from "./home/Toggler";
import {Link, useLocation} from "react-router-dom";
import {Box} from "@mui/material";
import { useTranslation } from 'react-i18next';
// import {info} from "../info/Info.en";
import LangSelector from './home/LangSelector';

export default function Navbar({darkMode, handleClick, handleLangSelect, language}) {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname === '/' ? 'home' : location.pathname.slice(1, location.pathname.length));
    const {t, i18n} = useTranslation();
    const lang = i18n.language;
    const info = require(`../info/Info.${lang}.js`).info;

    const links = [
        {
            name: t('home'),
            to: '/',
            active: 'home'
        },
        {
            name: t('about me'),
            to: '/about',
            active: 'about'
        },
        {
            name: info.initials,
            type: 'initials',
            to: '/',
            active: 'home'
        },
        {
            name: t('portfolio'),
            to: '/portfolio',
            active: 'portfolio'
        },
        {
            name: t('services'),
            to: '/services',
            active: 'services'
        }
    ]

    return (
        <Box component={'nav'} width={'100%'}>
            <Box component={'ul'} display={'flex'} justifyContent={'center'} alignItems={'center'}
                 gap={{xs: '1.5rem', md: '8rem'}} flexWrap={'wrap'}
                 textTransform={'lowercase'} fontSize={{md: '1rem', xs: '0.8rem'}}>
                {links.map((link, index) => (
                    <Box key={index} component={'li'} className={(link.active === active && !link.type) && Style.active}
                         sx={{borderImageSource: info.gradient}}>
                        <Link to={link.to} onClick={() => setActive(link.active)} className={Style.link}>
                            {!link.type && <p style={{padding: '0.5rem 0'}}>{link.name}</p>}
                            {link.type && <h1>{link.name}</h1>}
                        </Link>
                    </Box>
                ))}
                <li>
                    <Toggler darkMode={darkMode} handleClick={handleClick}/>
                </li>
                <li>
                    <LangSelector handleClick={handleLangSelect} language={language} />
                </li>
            </Box>
        </Box>
    )
}