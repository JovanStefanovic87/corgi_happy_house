import Cookies from 'universal-cookie';

export default function saveLanguageCookie(language) {
    const cookie = new Cookies();
    const AUTH_COOKIE_EXPIRES = new Date();
    AUTH_COOKIE_EXPIRES.setDate(AUTH_COOKIE_EXPIRES.getDate() + 100000);
    const cookieSettings = {
        expires: AUTH_COOKIE_EXPIRES,
        path: '/',
        // secure: true
        domain: window.location.hostname,
    };
    cookie.set('lang', language, cookieSettings);
}
