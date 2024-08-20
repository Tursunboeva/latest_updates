import { Link } from 'react-router-dom'; 
import { useTranslation } from 'react-i18next';
import "../routes/Single.css"
import ava from '../Images/avatar.svg'
import banner from '../Images/Banner.png'
export const Single = () => {
  const [ t, i18n ] = useTranslation();  
  return (
    <div>
      <div className="container">
        <div className="single_wrapper">
          <h1>{t("b1")}</h1>
          <div className="avatar">
                          <img src={ava} alt="" />
                          <div className="text_ava">
                            <h5>Husni Ramdani</h5>
                            <small>30 November 2021</small>
                          </div>
                    </div>
                    <img className='img_title' src={banner} alt="" />
                    <p>{t("b2")}</p><br />
                    <p>{t("b4")}</p>
        </div>
        <Link to={'/'}><button>{t("b3")}</button></Link>
      </div>
    </div>
  )
}
