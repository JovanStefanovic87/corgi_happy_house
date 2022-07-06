import React, {
  useState,
  createContext,
  useEffect,
  useCallback,
  useRef,
  useContext,
} from "react";
import { useRouter } from "next/router";
import saveLanguageCookie from "../helpers/saveLanguageCookie";

export const LanguageContext = createContext({
  language: "en",
  t: {},
});

export function LanguageProvider({ children }) {
  const initialLanguageLoaded = useRef(false);
  const router = useRouter();
  const [initialRoute, setInitialRoute] = useState(true);
  const [{ language, t }, setLanguage] = useState({
    language: router.locale ?? "en",
    t: {},
  });

  const getUITranslations = async (newLang) => {
    switch (newLang) {
      case "en":
        return (await import("../languages/en.json"))
          .default;
      case "de":
        return (await import("../languages/de.json"))
        .default;
      case "rs":
        return (await import("../languages/rs.json"))
          .default;
    }
  };

  const updateLanguage = useCallback(
    async (newLang) => {
      if (initialLanguageLoaded.current && newLang === language) return;
      const newTranslations = await getUITranslations(newLang);
      initialLanguageLoaded.current = true;
      setLanguage({
        language: newLang,
        t: newTranslations,
      });
    },
    [language]
  );

  useEffect(() => {
    updateLanguage(language);
  }, [language]);

  useEffect(() => {
    if (!initialRoute)
      if (router.locale != language) {
        updateLanguage(router.locale);
        saveLanguageCookie(router.locale);
      }
    setInitialRoute(false);
    //eslint-disable-next-line
  }, [router.locale]);

  const provider = {
    language,
    t,
  };

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useT = () => {
  const { t } = useContext(LanguageContext);
  return t;
};
