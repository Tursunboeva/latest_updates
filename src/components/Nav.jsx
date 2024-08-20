import React from 'react'
import blog from '../Images/blog.svg'
import "../components/Nav.css"

import { useTranslation } from 'react-i18next';

const Nav = () => {
    const [ t, i18n ] = useTranslation();  
  
    const handleChangeLanguage = (e) => {
      i18n.changeLanguage(e.target.value);
    };
    return (
        <div>
            <nav>
                <div className="container">
                    <div className="nav_wrapper">
                        <img src={blog} alt="" />
                        <b><a href="">{t("a")}</a></b>
                        <select defaultValue={i18n.language} onChange={handleChangeLanguage}>
                            <option value="uz">Uz</option>
                            <option value="ru">Ru</option>
                            <option value="en">En</option>
                        </select>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav