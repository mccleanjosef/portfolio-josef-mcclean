$(document).ready(function(){
    console.log('script is linked');

    // change vertical scroll to horizontal
    const scrollContainer = document.querySelector('main');

    scrollContainer.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
    });

    // start of projects object-array
    const projects = [
        {
            id: 101,
            thumbnail: './img/sanctuary-mockup.jpg',
            title: 'Sanctuary',
        },
        {
            id: 102,
            thumbnail: './img/gobal-news-mockup-image.jpg',
            title: 'Gobal News',
        },
        {
            id: 103,
            thumbnail: './img/conservation-volunteers-mockup.jpg',
            title: 'Conservation Volunteers',
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

    function generateProject(x){
        
        $('.projects-ctn').append(
            `
            <div id="${projects[x].id}" class="project">
                <img src="${projects[x].thumbnail}" alt="project thumbnail">
            </div> 
            `
        );
    }
    // generating projects ENDS

    // Open project overlay on project click
    $('.project').click(function(){
        $('#projectOverlay').removeClass('hide');
    });

    // generating overlay STARTS
    function overlay(){

        $('.project').click(function(){
            let i = 0;
            for(i = 0; i < projects.length; i++){
                if(parseInt(this.id) === projects[i].id){
                    $('#projectOverlay').empty().append(
                        `
                        <img class="project-close" src="./img/close-bold.svg" alt="close project">
                        <div class="img-wrapper">
                            <img class="overlay-img" src="${projects[i].thumbnail}" alt="project thumbnail">
                        </div>
                        <h2>${projects[i].title}</h2>
                        `
                    );
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
        $('.project-close').click(function(){
            $('#projectOverlay').addClass('hide');
        });
    }
    // Overlay content ENDS
});