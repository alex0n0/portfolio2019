var arrProjects = [
    {
        name: 'Star Wars RPG',
        description: `<li>Browser based RPG game inspired by Star Wars.</li>
            <li>Randomised player images and stats.</li>
            <li>Clean UI with ample visual indicators and input restrictions to direct action in the intended direction.</li></ul>`,
        date: '24 Aug 2019',
        urlImage: './assets/res/project1_star_wars_rpg_game.png',
        urlDemo: 'https://alex0n0.github.io/Star-Wars-RPG-Game/',
        urlSource: 'https://github.com/alex0n0/Star-Wars-RPG-Game',
    },
    {
        name: 'Trivia Game',
        description: `<li>Prehistoric trivia with randomised questions and multiple choice options.</li>
            <li>And automated progression with the use of JS timers.</li>`,
        date: '31 Aug 2019',
        urlImage: './assets/res/project2_trivia_game.png',
        urlDemo: 'https://alex0n0.github.io/TriviaGame/',
        urlSource: 'https://github.com/alex0n0/TriviaGame',
    },
    {
        name: 'ChowTown - Personal Dining Catalogue',
        description: `<li>ChowTown is an application that aids users in finding and keeping record of their favourite restaurants around the world.</li>
            <li>Additionally allows users to plan trips by organising restaurants into collections.</li>
            <li>Built using Yelp API and Google Geocoding API.</li>
            <li>Relies on browser local storage for saving information created by the user.</li>`,
        date: '16 Sep 2019',
        urlImage: './assets/res/project3_chowtown.png',
        urlDemo: 'https://elliloes.github.io/Project-ChowTown/',
        urlSource: 'https://github.com/ElliLoes/Project-ChowTown',
    },
    {
        name: 'LIRI Bot - Node CLI with API integration',
        description: `<li>...</li>
            <li>C</li>
            <li>B</li>
            <li>C</li>`,
        date: '6 Sep 2019',
        urlImage: './assets/res/project4_liri_bot.png',
        urlDemo: 'https://github.com/alex0n0/LIRI_Bot',
        urlSource: 'https://github.com/alex0n0/LIRI_Bot',
    }
];



var objSkills = {
    tools: [
        {
            name: 'Git',
            url: './assets/res/skillIcons/git.svg'
        }
    ],
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
        }
    ],
    languages: [
        {
            name: 'JavaScript',
            url: './assets/res/skillIcons/javascript.svg'
        }
    ],
    backEnd: [
        {
            name: 'Firebase',
            url: './assets/res/skillIcons/firebase.svg'
        },
        {
            name: 'SQLite',
            url: './assets/res/skillIcons/sqlite.svg'
        }
    ]
}














$('#navbarToggler').find('a').on('click', function () {
    $('#navbarToggler').collapse('hide');
});













renderProjects(arrProjects);
function renderProjects(arr) {
    for (let i = 0; i < arr.length; i++) {
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
    }
}

















renderSkills(objSkills);

function renderSkills(obj) {
    appendSkills(obj.tools, $('#skillsTools'));
    appendSkills(obj.frontEnd, $('#skillsFrontend'));
    appendSkills(obj.languages, $('#skillsLanguages'));
    appendSkills(obj.backEnd, $('#skillsBackend'));

    $('.skillIcon').on('mouseover', function () {
        $(this).tooltip('show');
    });

    $('.btnShowIcons').on('click', function () {
        $(this).blur();
        $('.btnShowIcons').addClass('active');
        $('.btnShowText').removeClass('active');

        $('#skillsTools').addClass('flex-row');
        $('#skillsTools').removeClass('flex-column');
        $('#skillsTools').find('img').removeClass('d-none');
        $('#skillsTools').find('p').addClass('d-none');

        $('#skillsFrontend').addClass('flex-row');
        $('#skillsFrontend').removeClass('flex-column');
        $('#skillsFrontend').find('img').removeClass('d-none');
        $('#skillsFrontend').find('p').addClass('d-none');

        $('#skillsLanguages').addClass('flex-row');
        $('#skillsLanguages').removeClass('flex-column');
        $('#skillsLanguages').find('img').removeClass('d-none');
        $('#skillsLanguages').find('p').addClass('d-none');

        $('#skillsBackend').addClass('flex-row');
        $('#skillsBackend').removeClass('flex-column');
        $('#skillsBackend').find('img').removeClass('d-none');
        $('#skillsBackend').find('p').addClass('d-none');
    });
    $('.btnShowText').on('click', function () {
        $(this).blur();
        $('.btnShowText').addClass('active');
        $('.btnShowIcons').removeClass('active');

        $('#skillsTools').addClass('flex-column');
        $('#skillsTools').removeClass('flex-row');
        $('#skillsTools').find('p').removeClass('d-none');
        $('#skillsTools').find('img').addClass('d-none');

        $('#skillsFrontend').addClass('flex-column');
        $('#skillsFrontend').removeClass('flex-row');
        $('#skillsFrontend').find('p').removeClass('d-none');
        $('#skillsFrontend').find('img').addClass('d-none');

        $('#skillsLanguages').addClass('flex-column');
        $('#skillsLanguages').removeClass('flex-row');
        $('#skillsLanguages').find('p').removeClass('d-none');
        $('#skillsLanguages').find('img').addClass('d-none');

        $('#skillsBackend').addClass('flex-column');
        $('#skillsBackend').removeClass('flex-row');
        $('#skillsBackend').find('p').removeClass('d-none');
        $('#skillsBackend').find('img').addClass('d-none');
    });
}


function appendSkills(arr, region) {
    for (let i = 0; i < arr.length; i++) {
        region.append(
            `<img class="m-2 skillIcon" style="height: 60px" src="${arr[i].url}"
                alt="${arr[i].name}" data-toggle="tooltip" data-placement="bottom" title="${arr[i].name}">`
            + `<p class="d-none">${arr[i].name}</p>`
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




