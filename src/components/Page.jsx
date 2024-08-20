import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'; // Link ni import qilish
import ava from '../Images/avatar.svg';
import "../components/Page.css";
import img1 from '../Images/img1.png';
import img2 from '../Images/img2.png';
import img3 from '../Images/img3.png';

const Page = () => {
  const [t, i18n] = useTranslation();
  return (
    <div>
      <div className="container">
        <div className="pages_wrapper">
          <div className="first_page">
            <div className="box">
              <h2>{t("a1")}</h2>
              <p>{t("a2")}</p>
              <Link to={'/single'}>
                <div className="avatar">
                  <img src={ava} alt="" />
                  <div className="text_ava">
                    <h5>Husni Ramdani</h5>
                    <small>30 November 2021</small>
                  </div>
                </div>
              </Link>
            </div>
            <div className="box">
              <h2>{t("a1")}</h2>
              <p>{t("a2")}</p>

            </div>
          </div>
          <div className="secondary_page">
            <img src={img1} alt="" />
            <div className="box2">
              <h2>{t("a1")}</h2>
              <p>{t("a3")}</p>
              <Link to={'/single'}>
                <div className="avatar">
                  <img src={ava} alt="" />
                  <div className="text_ava">
                    <h5>Husni Ramdani</h5>
                    <small>30 November 2021</small>
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="third_page">
            <div className="box3">
              <img src={img2} alt="" />
              <div className="title_box">
                <h3>{t("a1")}</h3>
                <b>{t("a4")} <span>{t("a6")}</span></b>
              </div>
            </div>
            <div className="box3">
              <img src={img3} alt="" />
              <div className="title_box">
                <h3>{t("a1")}</h3>
                <p>{t("a7")}</p>
                <b>{t("a4")} <span>{t("a6")}</span></b>
              </div>
            </div>
          </div>
          <div className="fourth_page">
            <div className="box">
              <h2>{t("a1")}</h2>
              <p>{t("a2")}</p>
              <Link to={'/single'}>

                <div className="avatar">
                  <img src={ava} alt="" />
                  <div className="text_ava">
                    <h5>Husni Ramdani</h5>
                    <small>30 November 2021</small>
                  </div>
                </div></Link>
            </div>
            <div className="box">
              <h2>{t("a1")}</h2>
              <p>{t("a2")}</p>
              <Link to={'/single'}>
                <div className="avatar">
                  <img src={ava} alt="" />
                  <div className="text_ava">
                    <h5>Husni Ramdani</h5>
                    <small>30 November 2021</small>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Page;
