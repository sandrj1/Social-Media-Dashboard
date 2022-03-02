import iconFacebook from '../img/icon-facebook.svg';
import iconInstagram from '../img/icon-instagram.svg';
import iconTwitter from '../img/icon-twitter.svg';
import iconYoutube from '../img/icon-youtube.svg';
import iconUp from '../img/icon-up.svg';
import iconDown from '../img/icon-down.svg';

const socialData = [
    {
        'name': 'facebook',
        'icon': iconFacebook,
        'handle': '@nathanf',
        'followers': 1987,
        'description': 'followers',
        'newData': 12,
        'arrow': iconUp
    },
    {
        'name': 'twitter',
        'icon': iconTwitter,
        'handle': '@nathanf',
        'followers': 1044,
        'description': 'followers',
        'newData': 99,
        'arrow': iconUp
    },
    {
        'name': 'instagram',
        'icon': iconInstagram,
        'handle': '@realnathanf',
        'followers': '11k',
        'description': 'followers',
        'newData': 1099,
        'arrow': iconUp
    },
    {
        'name': 'youtube',
        'icon': iconYoutube,
        'handle': 'Nathan F.',
        'followers': 8239,
        'description': 'subscribers',
        'newData': 144,
        'arrow': iconDown
    }
];

const Social = () => {
    return (socialData.map((item) => {
        const socialCards = `
        <article class='social'>
        <div class='social__border social__border--${item.name}'></div>
        <div class='social__box'>
            <div class='social__handle'>
                <img src='${item.icon}' alt=''>
                <p>${item.handle}</p>
            </div>
            <h2>${item.followers}</h2>
            <p class='social__description'>${item.description}</p>
            <div class='social__updates'>
                <img src='${item.arrow}' alt=''>
                <p class='${item.arrow === iconDown
                ? 'arrow--red'
                : 'arrow--green'}'>
                ${item.newData} Today</p>
            </div>
        </div>
        </article>
        `;
        return socialCards;
    })).join('');
}

export default Social;