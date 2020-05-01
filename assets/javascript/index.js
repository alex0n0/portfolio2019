// var arrProjectsUnused = [
//     {
//         name: 'Friend Finder',
//         description: `
//             <p class="ml-n4 mb-"><b>Friend Finder is a Heroku hosted site for creating profiles and being recommended a friend with similar interests.</b></p>
//             <p class="ml-n4 mb-0"><b>Features</b></p>
//             <div class="mb-3">
//                 <li>Create a profile with a randomly generated profile image</li>
//                 <li>Receive a recommendation for a friend with matching interests</li>
//                 <li>Node server with API routes</li>
//             </div>
//         `,
//         date: '26 Oct 2019',
//         urlImage: './assets/res/project5_friendfinder.png',
//         urlDemo: 'https://beanstalk33.herokuapp.com/',
//         urlSource: 'https://github.com/alex0n0/Friend-Finder',
//     },
//     {
//         name: 'Trivia Game',
//         description: `
//             <p class="ml-n4 mb-"><b>A randomised prehistoric trivia game with 10 rounds,</b></p>
//             <p class="ml-n4 mb-0">Features</p>
//             <div class="mb-3">
//                 <li>Randomised multiple choice</li>
//                 <li>Game flow is controlled via browser timers and intervals</li>
//             </div>
//         `,
//         date: '31 Aug 2019',
//         urlImage: './assets/res/project2_trivia_game.png',
//         urlDemo: 'https://alex0n0.github.io/TriviaGame/',
//         urlSource: 'https://github.com/alex0n0/TriviaGame',
//     },
//     {
//         name: 'Subreddit Scraper (HTML/JS App)',
//         description: `
//             <p class="ml-n4"><b>Subreddit Scraper app allows you to toggle between different subreddits to scrape and save articles.</b></p>
//             <p class="ml-n4 mb-0">Features</p>
//             <div class="mb-3">
//                 <li>Save and delete articles from scraped articles</li>
//                 <li>Create, update and delete notes on saved articles</li>
//                 <li>mLab (MongoDB) data storage</li>
//             </div>
//         `,
//         date: '30 Nov 2019',
//         urlImage: '',
//         urlDemo: 'https://beanstalk66.herokuapp.com/',
//         urlSource: 'https://github.com/alex0n0/WebScraper',
//     }
// ];

var arrProjects = [
    {
        name: 'Star Wars RPG (HTML/JS App)',
        description: `
            <p class="ml-n4 mb-"><b>“One vs all”–style browser based game.</b></p>
            <p class="ml-n4 mb-0">Features</p>
            <div class="mb-3">
                <li>Randomised player images and stats</li>
                <li>Updated player stats with each turn</li>
                <li>UX considerations in the form of semantically coloured zones and disabled buttons depending on game phase</li>
            </div>
        `,
        date: '24 Aug 2019',
        urlImage: './assets/res/screenshot_star_wars_rpg_game.png',
        demoExists: true,
        urlDemo: 'https://alex0n0.github.io/Star-Wars-RPG-Game/',
        urlSource: 'https://github.com/alex0n0/Star-Wars-RPG-Game',
    },
    {
        name: 'ChowTown (HTML/JS App)',
        description: `
            <p class="ml-n4"><b>ChowTown is a web application encouraging exploration of dining options locally and internationally.</b></p>
            <p class="ml-n4 mb-0">Features</p>
            <div class="mb-3">
                <li>Search for restaurants based on food category and location</li>
                <li>Save restaurants of interest and organise them into collections</li>
                <li>Uses APIs from Yelp and Google (Geocoding)</li>
            </div>
        `,
        date: '16 Sep 2019',
        urlImage: './assets/res/screenshot_chowtown.png',
        demoExists: true,
        urlDemo: 'https://alex0n0.github.io/ChowTown/',
        urlSource: 'https://github.com/alex0n0/ChowTown',
    },
    {
        name: 'LIRI Bot (Node CLI App)',
        description: `
            <p class="ml-n4"><b>LIRI Bot is a command line application for making searches to a variety of APIs. This application is run in the terminal (MacOS/Linux), command line (Windows).</b></p>
            <p class="ml-n4 mb-0">Features</p>
            <div class="mb-3">
                <li>Uses APIs from Spotify, OMDb, Bands In Town</li>
                <li>Controlled via recursive functions</li>
            </div>
        `,
        date: '5 Oct 2019',
        urlImage: './assets/res/screenshot_liri_bot.png',
        demoExists: false,
        urlDemo: 'https://github.com/alex0n0/LIRI_Bot',
        urlSource: 'https://github.com/alex0n0/LIRI_Bot',
    },
    {
        name: 'Bamazon (Node CLI App)',
        description: `
            <p class="ml-n4"><b>Bamazon is a command line application with a customer and manager interface for purchasing and managing inventory.</b></p>
            <p class="ml-n4 mb-0">Features</p>
            <div class="mb-3">
                <li>Customer interface allows the user to view available stock and choose items purchase</li>
                <li>Manager interface allows the user to view products, increase stock and create new products</li>
            </div>
        `,
        date: '19 Oct 2019',
        urlImage: './assets/res/screenshot_bamazon.png',
        demoExists: false,
        urlDemo: 'https://github.com/alex0n0/bamazon-cli',
        urlSource: 'https://github.com/alex0n0/bamazon-cli',
    },

    {
        name: 'Eat Da Burger (HTML/JS App)',
        description: `
            <p class="ml-n4"><b>Eat Da Burger is a Heroku hosted, Node server delivered, webpage with dedicated API routes for create/read/update functionality.</b></p>
            <p class="ml-n4 mb-0">Features</p>
            <div class="mb-3">
                <li>Make <i>new</i> and <i>repeat</i> burger requests</li>
                <li>List of burgers that have been <i>created</i> and <i>eaten</i></li>
                <li>Node server with API routes</li>
                <li>JawsDB (MySQL) data storage</li>
            </div>
        `,
        date: '2 Nov 2019',
        urlImage: './assets/res/screenshot_eatdaburger.png',
        demoExists: true,
        urlDemo: 'https://beanstalk99.herokuapp.com/',
        urlSource: 'https://github.com/alex0n0/eat-da-burger',
    },
    {
        name: 'Automender (HTML/JS App)',
        description: `
            <p class="ml-n4"><b>Automender is a SaaS application where customers can make appointments with mechanic centres registered with the service.</b></p>
            <p class="ml-n4 mb-0">Features</p>
            <div class="mb-3">
                <li>Mechanic account creation, update & appointment viewing</li>
                <li>Customer appointment booking</li>
                <li>Location based results filtering</li>
                <li>Node server with API routes</li>
                <li>JawsDB (MySQL) data storage</li>
            </div>
        `,
        date: '12 Nov 2019',
        urlImage: './assets/res/screenshot_automender.png',
        demoExists: true,
        // urlDemo: 'https://usyd-bc-project-two.herokuapp.com/',
        urlDemo: 'https://afternoon-refuge-07267.herokuapp.com/',
        urlSource: 'https://github.com/nick-ramsay/project-two',
    },
    {
        name: "Clicker Game (React App)",
        description: `
            <p class="ml-n4"><b>Clicker game is a Batman themed memory game built using React.js requiring you to click on each option only once.</b></p>
            <p class="ml-n4 mb-0">Features</p>
            <div class="mb-3">
                <li>Randomised options that shuffle after each click</li>
                <li>Tracking for current score and highest score during each session</li>
                <li>Includes animation for loss state</li>
            </div>
        `,
        date: '7 Dec 2019',
        urlImage: './assets/res/screenshot_reactclickergame.png',
        demoExists: true,
        urlDemo: 'https://beanstalk88.herokuapp.com/',
        urlSource: 'https://github.com/alex0n0/reactclickergame',
    },
    {
        name: 'OrderAway (React App)',
        description: `
            <p class="ml-n4"><b>OrderAway is a SaaS for restaurants to create accounts and access table side ordering interfaces that directly display orders on a kitchen screen.</b></p>
            <p class="ml-n4"><b>An additional corporate portal is provided for restaurants to create and update multiple menus and publish them to the table side interface.</b></p>
            <p class="ml-n4 mb-0">Features</p>
            <div class="mb-3">
                <li>Corporate Interface</li>
                <ul>
                    <li>CRUD operations on menus and menu contents</li>
                </ul>
                <li>Customer Interface</li>
                <ul>
                    <li>Create a bill for each round of customers</li>
                    <li>Make orders for menu items</li>
                </ul>
                <li>Kitchen Interface</li>
                <ul>
                    <li>View live orders and mark them as complete</li>
                    <li>View history of orders for past 24 hours</li>
                </ul>
                <li>mLab (Mongo) data storage</li>
            </div>
        `,
        date: '25 Dec 2019',
        urlImage: './assets/res/screenshot_orderaway.png',
        demoExists: true,
        urlDemo: 'https://beanstalk03.herokuapp.com/',
        urlSource: 'https://github.com/alex0n0/OrderAway',
    }
];




var objSkills = {
    frontEnd: [
        {
            name: 'HTML 5',
            url: './assets/res/skillIcons/html5.svg'
        },
        {
            name: 'CSS 3',
            url: './assets/res/skillIcons/css3.svg'
        },
        {
            name: 'Sass',
            url: './assets/res/skillIcons/sass.svg'
        },
        {
            name: 'Bootstrap',
            url: './assets/res/skillIcons/bootstrap.svg'
        },
        {
            name: 'jQuery',
            url: './assets/res/skillIcons/jquery.svg'
        },
        {
            name: 'React',
            url: './assets/res/skillIcons/react.svg'
        },
        {
            name: 'Angular',
            url: './assets/res/skillIcons/angular-icon.svg'
        },

    ],
    languages: [
        {
            name: 'JavaScript',
            url: './assets/res/skillIcons/javascript.svg'
        },
        {
            name: 'TypeScript',
            url: './assets/res/skillIcons/typescript-icon.svg'
        },
        {
            name: 'C#',
            url: './assets/res/skillIcons/c-sharp.svg'
        }
    ],
    backEnd: [
        {
            name: 'Node.js',
            url: './assets/res/skillIcons/nodejs-icon.svg'
        },
        {
            name: 'Express.js',
            url: './assets/res/skillIcons/express.svg'
        },
        {
            name: 'MySQL',
            url: './assets/res/skillIcons/mysql.svg'
        },
        {
            name: 'SQL Server',
            url: './assets/res/skillIcons/mssql.png'
        },
        {
            name: 'SQLite',
            url: './assets/res/skillIcons/sqlite.svg'
        },
        {
            name: 'MongoDB',
            url: './assets/res/skillIcons/mongodb.svg'
        },
        {
            name: 'Firebase',
            url: './assets/res/skillIcons/firebase.svg'
        }
    ],
    tools: [
        {
            name: 'Git',
            url: './assets/res/skillIcons/git.svg'
        },
        {
            name: 'Photoshop',
            url: './assets/res/skillIcons/photoshop.png'
        }
    ]
}














$('#navbarToggler').find('a').on('click', function () {
    $('#navbarToggler').collapse('hide');
});













renderProjects(arrProjects);
function renderProjects(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].demoExists) {
            $('#portfolioProjects').prepend(
                `<div class="col-12 col-lg-6 mb-4">
                    <div class="card bg-light flex-row flex-wrap p-0 py-3">
                        <h4 class="col-12 d-block d-sm-none d-lg-block text-center mb-3">${arr[i].name}</h4>
                        <div class="col-12 col-sm-6 col-lg-12 mb-4 mb-sm-0 mb-lg-4">
                            <a href="${arr[i].urlImage}" title="${arr[i].name}" target="_blank">
                                <img src="${arr[i].urlImage}" class="img-fluid rounded shadow" alt="${arr[i].name}"> 
                            </a>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-12 d-flex flex-column">

                            <p class="small text-muted mb-2 text-right text-sm-left text-lg-right">Created ${arr[i].date}</p>
                            <ul class="mb-auto">${arr[i].description}</ul>
                            <div class="d-flex justify-content-between mt-2 flex-column flex-sm-row flex-lg-column">
                                <a href="${arr[i].urlDemo}" target="_blank" class="btn btn-outline-secondary btn-sm mr-sm-3 mr-lg-0 mb-2 mb-sm-0 mb-lg-2 flex-grow-1">
                                    <i class="fas fa-eye mr-1"></i>Demo
                                </a>
                                <a href="${arr[i].urlSource}" target="_blank" class="btn btn-outline-secondary btn-sm flex-grow-1">
                                    <i class="fab fa-github mr-1"></i>Source
                                </a>
                            </div>
                        </div>
                    </div>
                </div>`
            );
        } else {
            $('#portfolioProjects').prepend(
                `<div class="col-12 col-lg-6 mb-4">
                    <div class="card bg-light flex-row flex-wrap p-0 py-3">
                        <h4 class="col-12 d-block d-sm-none d-lg-block text-center mb-3">${arr[i].name}</h4>
                        <div class="col-12 col-sm-6 col-lg-12 mb-4 mb-sm-0 mb-lg-4">
                            <a href="${arr[i].urlImage}" title="${arr[i].name}" target="_blank">
                                <img src="${arr[i].urlImage}" class="img-fluid rounded shadow" alt="${arr[i].name}"> 
                            </a>
                        </div>
                        <div class="col-12 col-sm-6 col-lg-12 d-flex flex-column">
                            <h4 class="d-none d-sm-block d-lg-none">${arr[i].name}</h4>
                            <p class="small text-muted mb-2 text-right text-sm-left text-lg-right">created ${arr[i].date}</p>
                            <ul class="mb-auto">${arr[i].description}</ul>
                            <div class="d-flex justify-content-between mt-2 flex-column flex-sm-row flex-lg-column">
                                <a href="${arr[i].urlSource}" target="_blank" class="btn btn-outline-secondary btn-sm flex-grow-1">
                                    <i class="fab fa-github mr-1"></i>Source
                                </a>
                            </div>
                        </div>
                    </div>
                </div>`
            );
        }

    }
}

















renderSkills(objSkills);

function renderSkills(obj) {
    appendSkills(obj.frontEnd, $('#skillsFrontend'));
    appendSkills(obj.languages, $('#skillsLanguages'));
    appendSkills(obj.backEnd, $('#skillsBackend'));
    appendSkills(obj.tools, $('#skillsTools'));

    $('.skillIcon').on('mouseover', function () {
        $(this).tooltip('show');
    });

    $('.btnShowIcons').on('click', function () {
        $(this).blur();
        $('.btnShowIcons').addClass('active');
        $('.btnShowText').removeClass('active');

        // $('#skillsFrontend').addClass('flex-row');
        // $('#skillsFrontend').removeClass('flex-column');
        $('#skillsFrontend').addClass('justify-content-center');
        $('#skillsFrontend').find('img').removeClass('d-none');
        $('#skillsFrontend').find('p').addClass('d-none');

        // $('#skillsLanguages').addClass('flex-row');
        // $('#skillsLanguages').removeClass('flex-column');
        $('#skillsLanguages').addClass('justify-content-center');
        $('#skillsLanguages').find('img').removeClass('d-none');
        $('#skillsLanguages').find('p').addClass('d-none');

        // $('#skillsBackend').addClass('flex-row');
        // $('#skillsBackend').removeClass('flex-column');
        $('#skillsBackend').addClass('justify-content-center');
        $('#skillsBackend').find('img').removeClass('d-none');
        $('#skillsBackend').find('p').addClass('d-none');

        // $('#skillsTools').addClass('flex-row');
        // $('#skillsTools').removeClass('flex-column');
        $('#skillsTools').addClass('justify-content-center');
        $('#skillsTools').find('img').removeClass('d-none');
        $('#skillsTools').find('p').addClass('d-none');
    });
    $('.btnShowText').on('click', function () {
        $(this).blur();
        $('.btnShowText').addClass('active');
        $('.btnShowIcons').removeClass('active');

        // $('#skillsFrontend').addClass('flex-column');
        // $('#skillsFrontend').removeClass('flex-row');
        $('#skillsFrontend').removeClass('justify-content-center');
        $('#skillsFrontend').find('p').removeClass('d-none');
        $('#skillsFrontend').find('img').addClass('d-none');

        // $('#skillsLanguages').addClass('flex-column');
        // $('#skillsLanguages').removeClass('flex-row');
        $('#skillsLanguages').removeClass('justify-content-center');
        $('#skillsLanguages').find('p').removeClass('d-none');
        $('#skillsLanguages').find('img').addClass('d-none');

        // $('#skillsBackend').addClass('flex-column');
        // $('#skillsBackend').removeClass('flex-row');
        $('#skillsBackend').removeClass('justify-content-center');
        $('#skillsBackend').find('p').removeClass('d-none');
        $('#skillsBackend').find('img').addClass('d-none');

        // $('#skillsTools').addClass('flex-column');
        // $('#skillsTools').removeClass('flex-row');
        $('#skillsTools').removeClass('justify-content-center');
        $('#skillsTools').find('p').removeClass('d-none');
        $('#skillsTools').find('img').addClass('d-none');
    });
}


function appendSkills(arr, region) {
    for (let i = 0; i < arr.length; i++) {
        region.append(
            `<img class="m-2 skillIcon" style="height: 40px" src="${arr[i].url}"
                alt="${arr[i].name}" data-toggle="tooltip" data-placement="bottom" title="${arr[i].name}">`
            + `<p class="d-none p-3 m-0">${arr[i].name}</p>`
        );
    }
}











$('#formContact').on('submit', function (e) {
    e.preventDefault();

    var subjectString = $('#inputSubject').val().trim();
    var emailString = $('#inputEmail').val().trim();
    var messageString = $('#inputMessage').val().trim();
    if (subjectString.length == 0 || emailString.length == 0 || messageString.length == 0) {
        if (subjectString.length == 0) {
            $('#inputSubjectWarning').text('Required');
        }
        if (emailString.length == 0) {
            $('#inputEmailWarning').text('Required');
        }
        if (messageString.length == 0) {
            $('#inputMessageWarning').text('Required');
        }
    } else {
        console.log('subject:', subjectString, '| email:', emailString, '| message:', messageString);
        $('#inputSubject').val('');
        $('#inputEmail').val('');
        $('#inputMessage').val('');
    }
});

$('#inputSubject').on('input', function () {
    if ($(this).val().trim().length == 0) {
        $('#inputSubjectWarning').text('Required');
    } else {
        $('#inputSubjectWarning').text('');
    }
});
$('#inputSubject').on('focus', function () {
    $('#inputSubjectWarning').text('');
});


$('#inputEmail').on('input', function () {
    if ($(this).val().trim().length == 0) {
        $('#inputEmailWarning').text('Required');
    } else {
        $('#inputEmailWarning').text('');
    }
});
$('#inputEmail').on('focus', function () {
    $('#inputEmailWarning').text('');
});

$('#inputMessage').on('input', function () {
    if ($(this).val().trim().length == 0) {
        $('#inputMessageWarning').text('Required');
    } else {
        $('#inputMessageWarning').text('');
    }
});
$('#inputMessage').on('focus', function () {
    $('#inputMessageWarning').text('');
});




