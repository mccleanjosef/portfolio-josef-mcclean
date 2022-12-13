import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

$(document).ready(function(){
    console.log('script is linked');

    // change main vertical scroll to horizontal
    const scrollContainer = document.querySelector('main');

    scrollContainer.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });

    // start of projects object-array
    const projects = [
        {
            id:101,
            thumbnail: './img/storms-coffee-capture1.PNG',
            title: 'Storms Coffee',
            tools: ['HTML5','CSS3'],
            toolImgs: ['./img/html5-logo-31813.png','./img/css3-icon.png'],
            descrip:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur congue ligula in ante elementum luctus. Aenean hendrerit felis eu mauris pellentesque vehicula. Sed auctor a dui in ullamcorper. Mauris ex nibh, consequat sit amet tellus sed, suscipit pulvinar nulla.',
            link: ''
        },
        {
            id:102,
            thumbnail: './img/conservation-volunteers-mockup.jpg',
            title: 'Conservation Volunteers',
            tools: ['HTML5','CSS3','JavaScript'],
            toolImgs: ['./img/html5-logo-31813.png','./img/css3-icon.png','./img/javascript-39397.png'],
            descrip:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur congue ligula in ante elementum luctus. Aenean hendrerit felis eu mauris pellentesque vehicula. Sed auctor a dui in ullamcorper. Mauris ex nibh, consequat sit amet tellus sed, suscipit pulvinar nulla.',
            link: ''
        },
        {
            id:103,
            thumbnail: './img/creativejunk.png',
            title: 'Creative Junk',
            tools: ['WordPress','PHP','Woo Commerce','Yoast SEO','CSS3','JavaScript'],
            toolImgs: ['./img/Wordpress_Blue_logo.png','./img/php-logo.png','./img/WooCommerce_logo.png','./img/yoast-seo-logo.png','./img/css3-icon.png','./img/javascript-39397.png'],
            descrip:'Custom Wordpress theme for Creative Junk <br/><br/> Creative Junk is a small non-profit organisation that would like to increase awareness of their cause and further it through education and engagement.<br/><br/>The organisation has two income streams that need to be accomodated on the site. Visitors should be able to support Creative Junk by puchasing membership or making a small donation, they also need to be able to order Creative Boxes.',
            link: 'https://josef.mcclean.yoobeestudent.net/creativejunk/'
        },
        {
            id:104,
            thumbnail: './img/sanctuary-mockup.jpg',
            title: 'Sanctuary',
            tools: ['HTML5','SASS','JavaScript','API','MongoDB','bcryptjs','express','JSON'],
            toolImgs: ['./img/html5-logo-31813.png','./img/css3-icon.png','./img/javascript-39397.png','./img/gear-api-icon.png','./img/mongodb-leaf-icon.png','./img/shield-bcrypt.png','./img/expressjs.png','./img/JSON_logo.png'],
            descrip:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur congue ligula in ante elementum luctus. Aenean hendrerit felis eu mauris pellentesque vehicula. Sed auctor a dui in ullamcorper. Mauris ex nibh, consequat sit amet tellus sed, suscipit pulvinar nulla.',
            link: ''
        },
        {
            id:105,
            thumbnail: './img/gobal-news-mockup-image.jpg',
            title: 'Gobal News',
            tools: ['HTML5','SASS','JavaScript','API'],
            toolImgs: ['./img/html5-logo-31813.png','./img/sass-logo.png','./img/javascript-39397.png','./img/gear-api-icon.png'],
            descrip:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur congue ligula in ante elementum luctus. Aenean hendrerit felis eu mauris pellentesque vehicula. Sed auctor a dui in ullamcorper. Mauris ex nibh, consequat sit amet tellus sed, suscipit pulvinar nulla.',
            link: ''
        },
        {
            id:106,
            thumbnail: './img/x-y-plot-chart.JPG',
            title: 'Apples v Bananas',
            tools: ['HTML5','SASS','JavaScript','Chartist'],
            toolImgs: ['./img/html5-logo-31813.png','./img/css3-icon.png','./img/javascript-39397.png','./img/chartist.png'],
            descrip:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur congue ligula in ante elementum luctus. Aenean hendrerit felis eu mauris pellentesque vehicula. Sed auctor a dui in ullamcorper. Mauris ex nibh, consequat sit amet tellus sed, suscipit pulvinar nulla.',
            link: ''
        },
        {
            id:107,
            thumbnail: './img/Northern Construction.PNG',
            title: 'Northern Construction',
            tools: ['HTML5','SASS'],
            toolImgs: ['./img/html5-logo-31813.png','./img/sass-logo.png'],
            descrip:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur congue ligula in ante elementum luctus. Aenean hendrerit felis eu mauris pellentesque vehicula. Sed auctor a dui in ullamcorper. Mauris ex nibh, consequat sit amet tellus sed, suscipit pulvinar nulla.',
            link: ''
        },
        {
            id:108,
            thumbnail: './img/lets go!.PNG',
            title: 'Lets go!',
            tools: ['HTML5','SASS','JavaScript'],
            toolImgs: ['./img/html5-logo-31813.png','./img/sass-logo.png','./img/javascript-39397.png'],
            descrip:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur congue ligula in ante elementum luctus. Aenean hendrerit felis eu mauris pellentesque vehicula. Sed auctor a dui in ullamcorper. Mauris ex nibh, consequat sit amet tellus sed, suscipit pulvinar nulla.',
            link: ''
        },
        {
            id:109,
            thumbnail: './img/game-one.JPG',
            title: 'Game One',
            tools: ['HTML5','SASS','JavaScript'],
            toolImgs: ['./img/html5-logo-31813.png','./img/sass-logo.png','./img/javascript-39397.png'],
            descrip:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur congue ligula in ante elementum luctus. Aenean hendrerit felis eu mauris pellentesque vehicula. Sed auctor a dui in ullamcorper. Mauris ex nibh, consequat sit amet tellus sed, suscipit pulvinar nulla.',
            link: ''
        },
        {
            id:110,
            thumbnail: './img/peruse-desktop-mockup.jpg',
            title: 'Peruse',
            tools: ['HTML5','SASS','JavaScript'],
            toolImgs: ['./img/html5-logo-31813.png','./img/sass-logo.png','./img/javascript-39397.png'],
            descrip:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur congue ligula in ante elementum luctus. Aenean hendrerit felis eu mauris pellentesque vehicula. Sed auctor a dui in ullamcorper. Mauris ex nibh, consequat sit amet tellus sed, suscipit pulvinar nulla.',
            link: ''
        },
        {
            id:111,
            thumbnail: './img/save-the-date_antonia-and-liam.jpg',
            title: 'Save The Date',
            tools: ['HTML5','CSS'],
            toolImgs: ['./img/html5-logo-31813.png','./img/css3-icon.png'],
            descrip:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur congue ligula in ante elementum luctus. Aenean hendrerit felis eu mauris pellentesque vehicula. Sed auctor a dui in ullamcorper. Mauris ex nibh, consequat sit amet tellus sed, suscipit pulvinar nulla.',
            link: ''
        },
        {
            id:112,
            thumbnail: './img/shift.JPG',
            title: 'SHIFT',
            tools: ['HTML5','CSS3','JavaScript','JSON'],
            toolImgs: ['./img/html5-logo-31813.png','./img/css3-icon.png','./img/javascript-39397.png','./img/JSON_logo.png'],
            descrip:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur congue ligula in ante elementum luctus. Aenean hendrerit felis eu mauris pellentesque vehicula. Sed auctor a dui in ullamcorper. Mauris ex nibh, consequat sit amet tellus sed, suscipit pulvinar nulla.',
            link: ''
        },
        {
            id:113,
            thumbnail: './img/bakery-co-i-pad-pro-mockup.jpg',
            title: 'Bakery Co',
            tools: ['HTML5','CSS3','JavaScript','JSON'],
            toolImgs: ['./img/html5-logo-31813.png','./img/css3-icon.png','./img/javascript-39397.png','./img/JSON_logo.png'],
            descrip:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Curabitur congue ligula in ante elementum luctus. Aenean hendrerit felis eu mauris pellentesque vehicula. Sed auctor a dui in ullamcorper. Mauris ex nibh, consequat sit amet tellus sed, suscipit pulvinar nulla.',
            link: ''
        }

    ];


    // generating projects STARTS
    function objectsLoop(){
        let i = 0;
        for(i = 0; i < projects.length; i++){
            generateProject(i);
        }
        overlay();
    }
    objectsLoop();
    objectsLoop(); //repeat of row
    objectsLoop(); //repeat of row

    function generateProject(x){

        if(projects[x].id <= 105 && projects[x].id >= 101){
            $('#projectsTop').append(
                `
                <div tabindex="${x}" id="${projects[x].id}" class="marquee__item">
                    <div title="${projects[x].title}" class="marquee__img-wrap">
                        <img class="marquee__img" src="${projects[x].thumbnail}" alt="project thumbnail">
                    </div>
                </div>
                `
            );
        }

        if(projects[x].id <= 110 && projects[x].id >= 106){
            $('#projectsMiddle').append(
                `
                <div tabindex="${x}" id="${projects[x].id}" class="marquee__item">
                    <div title="${projects[x].title}" class="marquee__img-wrap">
                        <img class="marquee__img" src="${projects[x].thumbnail}" alt="project thumbnail">
                    </div>
                </div>
                `
            );
        }

        if(projects[x].id <= 113 && projects[x].id >= 111){
            $('#projectsBottom').append(
                `
                <div tabindex="${x}" id="${projects[x].id}" class="marquee__item">
                    <div title="${projects[x].title}" class="marquee__img-wrap">
                        <img class="marquee__img" src="${projects[x].thumbnail}" alt="project thumbnail">
                    </div>
                </div>
                `
            );
        }

    }
    // generating projects ENDS

    // Open project overlay on item click
    $('.marquee__item').click(function(){
        $('#projectOverlay').removeClass('hide');
        $('#projectOverlay').removeClass('fade-out');
        $('#projectOverlay').addClass('fade-in');

        // Start of switching project scroll axis
        const scrollContainerProject = document.querySelector('.project');

        if(scrollContainerProject){
            scrollContainerProject.addEventListener('wheel', (evt) => {
                evt.preventDefault();
                scrollContainerProject.scrollLeft += evt.deltaY;
            });
        }
    });

    // generating overlay STARTS
    function overlay(){

        $('.marquee__item').click(function(){
            let i = 0;
            for(i = 0; i < projects.length; i++){
                if(parseInt(this.id) === projects[i].id){
                    $('#projectOverlay').empty().append(
                        `
                        <div class="project-ctn">
                            <div class="project">
                                <div class="project__close-circle">
                                    <img class="project__close" src="./img/close-bold.svg" alt="close project">
                                </div>
                                <h2 class="project__title">${projects[i].title}</h2>
                                <div class="project__img-wrapper">
                                    <img class="project__overlay-img" src="${projects[i].thumbnail}" alt="project thumbnail">
                                </div>
                                <h3 class="project__sub-title">Key tools</h3>
                                <div class="project__tool-imgs"></div>
                                <br>
                                <p class="project__text">${projects[i].descrip}</p>
                                <a class="project__link" href="${projects[i].link}" target=blank><button>Go to website</button></a>
                                <p class="project__text">${projects[i].descrip}</p>
                                <p class="project__text">${projects[i].descrip}</p>
                                <p class="project__text">${projects[i].descrip}</p>
                                <p class="project__text">${projects[i].descrip}</p>
                                <p class="project__text">${projects[i].descrip}</p>
                                <p class="project__text">${projects[i].descrip}</p>
                                <p class="project__text">${projects[i].descrip}</p>
                                <p class="project__text">${projects[i].descrip}</p>
                                <p class="project__text">${projects[i].descrip}</p>
                                <p class="project__text">${projects[i].descrip}</p>
                                <p class="project__text">${projects[i].descrip}</p>
                                <p class="project__text">${projects[i].descrip}</p>
                                <p class="project__text">${projects[i].descrip}</p>
                                <p class="project__text">${projects[i].descrip}</p>
                                <p class="project__text">${projects[i].descrip}</p>
                                <p class="project__text">${projects[i].descrip}</p>
                            </div>
                        </div>
                        `
                    );
                    // <p class="project__tools-wrap"></p>
                    // console.log(projects[i].tools.length);
                    // let toolsArray = projects[i].tools;
                    // let toolsString = String(toolsArray);
                    // console.log(toolsString);
                    // $('.project__tools-wrap').append(    
                    //     toolsString
                    // );
                    

                    let j = 0;
                    for(j = 0; j < projects[i].toolImgs.length; j++){
                        console.log(projects[i].toolImgs[j]);
                        
                        $('.project__tool-imgs').append(    
                            `
                            <div class="project__tool-ctn">
                                <img class="project__tool-img" src="${projects[i].toolImgs[j]}" alt="key tool image">
                                <p class="project__tool-text">${projects[i].tools[j]}</p>
                            </div>
                            `
                        );
                    }
                    

                    // let j = 0;
                    // for(j = 0; j < projects[i].tools.length; j++){
                    //     console.log(projects[i].tools[j]);
                        
                    //     // $('.project__tools-wrap').append(
                            
                    //     //     String()
                    //     // );
                    // }
                }
            }
            OverlayContent(this.id);
        });

    }
    // generating overlay ENDS

    // Overlay content STARTS
    function OverlayContent(projectSelectedId){
        console.log(projectSelectedId);

        // close project on close icon
        $('.project__close-circle').click(function(){
            $('#projectOverlay').removeClass('fade-in');
            $('#projectOverlay').addClass('fade-out');
            setTimeout(function() {
                $("#projectOverlay").addClass('hide');
              }, 500);
        });
    }
    // Overlay content ENDS

    // Contact Form STARTS
    const name = document.getElementById('fullName').value;
    const email = document.getElementById('email-address').value;
    const message = document.getElementById('contactMessage').value;
    
    $('#contactSubmit').click(function(event){
        if ( name === '' || email === '' || message === '' ) {
            event.preventDefault();
            console.log('error message');
            // return false;
       
        } else {
            console.log('yes');
            // return true;
        }
    });
    
    // if(name !== '' && email !== '' && message !== ''){
    //     console.log('yes');
    //     $('#contactSubmit').click(function(){
    //         // empty contact form fields on submission
    //         $('#fullName').val('');
    //         $('#email-address').val('');
    //         $('#contactMessage').val('');
    //     });
    // }
    
    // Contact Form ENDS


});