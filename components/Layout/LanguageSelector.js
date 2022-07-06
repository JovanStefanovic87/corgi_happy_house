import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import { languageOptions } from '../../languages';
import saveLanguageCookie from "../../helpers/saveLanguageCookie";

export default function LanguageSelector() {
  const router = useRouter();
  const  [userLanguage, setUserLanguage]  = useState('');

  const handleLanguageChange = e => {
    setUserLanguage(e.target.value);
  }

  useEffect(() => {
    if(userLanguage){
        router.push(router.asPath, router.asPath, {locale: userLanguage});
        saveLanguageCookie(router.locale);
    }
    // eslint-disable-next-line
  }, [userLanguage])


  return (
      <select
        onChange={handleLanguageChange}
        value={userLanguage}
      >
        {Object.entries(languageOptions).map(([id, name]) => (
          <option key={id} value={id}>{name}</option>
        ))}
      </select>
  );
};