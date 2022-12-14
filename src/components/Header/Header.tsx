import logo from "../../assets/svg/logo.svg"
import search from "../../assets/svg/search.svg"
import profile_pic from "../../assets/svg/profile-pic.svg"
import burger from "../../assets/svg/hamburger.svg"
import lang from "../../assets/svg/lang.svg"

import "./Header.css"

const Header = () => {
    return (
        <header className="header wrapper_lg">
            <div className="header__logo">
                <a href="/" className="header__logo-link">
                    <img src={logo} alt="Logo"
                        className="header__logo-pic" />
                </a>
            </div>
            <div className="header__search">
                <div className="header__search-placeholder-group">
                    <div className="header__search-placeholder-item">
                        Искать везде
                    </div>
                    <span className="header__search-placeholder-breaker" />
                    <div className="header__search-placeholder-item">
                        Неделя в любое время
                    </div>
                    <span className="header__search-placeholder-breaker" />
                    <div className="header__search-placeholder-item header__search-placeholder-item_light-text">
                        Сколько гостей?
                    </div>
                </div>
                <div className="header__search-icon-wrap">
                    <img src={search} className="header__search-icon"></img>
                </div>
            </div>
            <nav className="nav header__nav">
                <a href="#" className="nav__host">Сдать жилье на Airbnb</a>
                <div className="nav__lang-wrap">
                    <img src={lang} alt="" className="nav__lang-icon" />
                </div>
                <div className="nav__profile-wrap">
                    <div className="nav__profile-burger">
                        <img src={burger} alt="" />
                    </div>
                    <div className="nav__img_wrap">
                        <img src={profile_pic} alt="" />
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header