const social = document.querySelector('.social__container');
const overview = document.querySelector('.overview__container');
const iconFacebook = require('../img/icon-facebook.svg');
const iconInstagram = require('../img/icon-instagram.svg');
const iconTwitter = require('../img/icon-twitter.svg');
const iconYoutube = require('../img/icon-youtube.svg');
const iconUp = require('../img/icon-up.svg');
const iconDown = require('../img/icon-down.svg');

const socialData = [
    {
        'icon': iconFacebook,
        'handle': '@nathanf',
        'followers': 1987,
        'description': 'followers',
        'newData': 12,
        'arrow': iconUp
    },
    {
        'icon': iconTwitter,
        'handle': '@nathanf',
        'followers': 1044,
        'description': 'followers',
        'newData': 99,
        'arrow': iconUp
    },
    {
        'icon': iconInstagram,
        'handle': '@realnathanf',
        'followers': '11k',
        'description': 'followers',
        'newData': 1099,
        'arrow': iconUp
    },
    {
        'icon': iconYoutube,
        'handle': 'Nathan F.',
        'followers': 8239,
        'description': 'subscribers',
        'newData': 144,
        'arrow': iconDown
    }
]

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
]

window.onload = function () {
    let socialCards = '';
    let overviewCards = '';
    

    socialData.map((item, index) => {
        console.log(item.icon);
        key = index;
        socialCards += `
        <article className='social'>
            <div className='social__handle'>
                <img src='${item.icon}' alt=''>
                <p>${item.handle}</p>
            </div>
            <h2>${item.followers}</h2>
            <p>${item.description}</p>
            <div className='social__updates'>
                <img src='${item.arrow}'>
                <p class='${
                item.arrow === iconDown
                    ? 'red'
                    : null
                }'>
                ${item.newData} Today</p>
            </div>
        </article>
        `;
        social.innerHTML = socialCards;
    })

    overviewData.map((item, index) => {
        key = index;
        overviewCards += `
        <article className='overview'>
            <div className='overview__title'>
                <p>${item.title}</p>
                <img src='${item.icon}' alt=''>
            </div>
            <div className='overview__numbers'>
                <h3>${item.count}</h3>
                <div className='overview__percentage'>
                    <img src='${item.arrow}' alt=''>
                    <p>${item.percentage}</p>
                </div>
            </div>
        </article>
        `;
        overview.innerHTML = overviewCards;
    })
}