import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './translations/en.json';
import trTranslations from './translations/tr.json';

i18n.use(initReactI18next)
.init({
   resources: {
      en: {
         translation: enTranslations
      },
      tr: {
         translation: trTranslations
      }
   },
   fallbackLng: 'en',
   debug: false,
   react:{
      useSuspense: false,
   }
});

function App() {
   return (
      <div>
         <BrowserRouter>
            <BaseLayout/>
         </BrowserRouter>
      </div>
   );
}


export default App;
export {i18n};