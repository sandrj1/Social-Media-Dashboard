import iconFacebook from '../img/icon-facebook.svg';
import iconInstagram from '../img/icon-instagram.svg';
import iconTwitter from '../img/icon-twitter.svg';
import iconYoutube from '../img/icon-youtube.svg';
import iconUp from '../img/icon-up.svg';
import iconDown from '../img/icon-down.svg';

const overviewData = [
    {
        'title': 'Page Views',
        'icon': iconFacebook,
        'count': 87,
        'arrow': iconUp,
        'percentage': '3%'
    },
    {
        'title': 'Likes',
        'icon': iconFacebook,
        'count': 52,
        'arrow': iconDown,
        'percentage': '2%'
    },
    {
        'title': 'Likes',
        'icon': iconInstagram,
        'count': 5462,
        'arrow': iconUp,
        'percentage': '2257%'
    },
    {
        'title': 'Profile Views',
        'icon': iconInstagram,
        'count': '52k',
        'arrow': iconUp,
        'percentage': '1375%'
    },
    {
        'title': 'Retweets',
        'icon': iconTwitter,
        'count': 117,
        'arrow': iconUp,
        'percentage': '303%'
    },
    {
        'title': 'Likes',
        'icon': iconTwitter,
        'count': 507,
        'arrow': iconUp,
        'percentage': '553%'
    },
    {
        'title': 'Likes',
        'icon': iconYoutube,
        'count': 107,
        'arrow': iconDown,
        'percentage': '19%'
    },
    {
        'title': 'Total Views',
        'icon': iconYoutube,
        'count': 1407,
        'arrow': iconDown,
        'percentage': '12%'
    }
];

const Overview = () => {
    return (overviewData.map((item, index) => {
        const overviewCards = `
        <article class='${index === overviewData.length - 1
                ? 'overview overview--last'
                : 'overview'}'' key = '${index}'>
            <div class='overview__title'>
                <p>${item.title}</p>
                <img src='${item.icon}' alt=''>
            </div>
            <div class='overview__numbers'>
                <h3>${item.count}</h3>
                <div class='overview__percentage'>
                    <img src='${item.arrow}' alt=''>
                    <p class='${item.arrow === iconDown
                    ? 'arrow--red'
                    : 'arrow--green'}'>
                    ${item.percentage}</p>
                </div>
            </div>
        </article>
        `;
        return overviewCards;
    })).join('');
}

export default Overview;