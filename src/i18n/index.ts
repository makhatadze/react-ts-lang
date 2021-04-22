import en from './en.json';
import ge from './ge.json';
import de from './de.json';

export const translate = (key: string, language: string): string => {
    let langData: { [key: string]: string } = {};

    if (language === 'en'){
        langData = en;
    } else if (language ==='de') {
        langData = de;
    } else if (language === 'ge') {
        langData = ge;
    }

    return langData[key];
}