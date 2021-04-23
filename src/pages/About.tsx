import React, {Fragment, FC} from "react";
import {useSelector} from 'react-redux';

import Header from "../compoents/Header";
import {translate} from '../i18n';
import {RootState} from '../store';


const About: FC = () => {
    const {language} = useSelector((state: RootState) => state.lang);

    return (
        <Fragment>
            <Header/>
            <section className={'about'}>
                <div className={'container'}>
                    <h1>{translate('about', language)}</h1>
                    <p>{translate('aboutUsText', language)}</p>
                </div>
            </section>
        </Fragment>
    )
}

export default About;