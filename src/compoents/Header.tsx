import React, {FC, useCallback, useRef, useState, useEffect} from "react";
import {NavLink, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {RootState} from '../store'
import {setLanguage} from "../store/actions/langActions";
import {translate} from "../i18n";

interface HeaderProps {
    fixed?: boolean;
    transparent?: boolean;
}

const Header: FC<HeaderProps> = ({fixed, transparent}) => {
    const {language} = useSelector((state: RootState) => state.lang);
    const dispatch = useDispatch();
    const [showDropdown, setShowDropdown] = useState<boolean>();
    const dropdownEl = useRef<HTMLUListElement>(null)

    let headerClass = 'header';

    if (fixed) {
        headerClass += ' header--fixed';
    }

    if (transparent) {
        headerClass += ' header--transparent';
    }

    const handleClickOutside = useCallback(
        (e) => {
            if (showDropdown && e.target.closest('.dropdown') !== dropdownEl.current) {
                setShowDropdown(false);
            }
        },
        [showDropdown, setShowDropdown, dropdownEl],
    );

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [handleClickOutside]);

    const chooseLanguageHandler = (value: string) => {
        setShowDropdown(false);
        dispatch(setLanguage(value))

    }

    return (
        <header className={headerClass}>
            <div className={'container'}>
                <div className={'header__brand'}>
                    <h1>
                        <Link to={'/'}>
                            React
                        </Link>
                    </h1>
                    <div className={'header__nav'}>
                        <div className={'header__nav_lang'}>
                            <p className={'selected'} onClick={() => setShowDropdown(true)}>{language}</p>
                            {showDropdown &&
                            <ul className={'dropdown'} ref={dropdownEl}>
                                <li onClick={() => chooseLanguageHandler('en')}>English</li>
                                <li onClick={() => chooseLanguageHandler('de')}>German</li>
                                <li onClick={() => chooseLanguageHandler('ge')}>Georgia</li>
                            </ul>
                            }
                        </div>
                        <ul className={'header__nav_menu'}>
                            <li>
                                <NavLink to={'/'} exact>
                                    {translate('home', language)}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/about'} exact>
                                    {translate('about', language)}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;