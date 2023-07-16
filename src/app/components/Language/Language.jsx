'use client'
import { useState } from "react";

export const Language = () => {
    const [selectedLanguage, setSelectedLanguage] = useState("");

    const handleChangeLanguage = (event) => {
        setSelectedLanguage(event.target.value);
      };
    

    return (
        <div className=" flex gap-1  text-white"> 
            <select className="  bg-header-bg" value={selectedLanguage} onChange={handleChangeLanguage}> 
                <option value="en">English</option>
                <option value="ro">Română</option>
                <option value="ru">Русский</option>
            </select>
        </div>
    )
}
export default Language;