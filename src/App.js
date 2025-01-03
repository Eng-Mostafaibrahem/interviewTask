import "./App.css";
import DirectOrder from "./Components/DirectOrder/DirectOrder";
import messages from "./locales/local";
import { IntlProvider } from "react-intl";
import Navbar from "./Components/Navbar/Navbar";
import { useEffect, useState } from "react";

function App() {
  const [lang, setLang] = useState(
    localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
  );

  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang) {
      setLang(storedLang);
    } else {
      setLang("en");
    }
  }, []);

  const handleLanguageChange = (newLang) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };
  console.log(lang);

  return (
    <IntlProvider locale={lang} defaultLocale={lang} messages={messages[lang]}>
      <div
        className={lang === "ar" ? "rtl" : "ltr"}
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        <div className="min-h-screen bg-gray-100">
          <Navbar lang={lang} onLanguageChange={handleLanguageChange} />
          <DirectOrder />
        </div>
      </div>
    </IntlProvider>
  );
}

export default App;
