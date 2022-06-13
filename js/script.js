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
        },
        {
            id: 104,
            thumbnail: './img/creativejunk.png',
            title: 'Creative Junk',
            descrip:'Custom Wordpress theme for Creative Junk <br/><br/> Creative Junk is a small non-profit organisation that would like to increase awareness of their cause and further it through education and engagement.<br/><br/>The organisation has two income streams that need to be accomodated on the site. Visitors should be able to support Creative Junk by puchasing membership or making a small donation, they also need to be able to order Creative Boxes.',
            link: 'https://josef.mcclean.yoobeestudent.net/creativejunk/'
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
                        <p>${projects[i].descrip}</p>
                        <a href="${projects[i].link}" target=blank><button>Go to website</button></a>
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


    // Firebase and SMTP Contact Form STARTS

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyBuu8GnL3X_MYPo_G2PPpLEyE-wty8QUOU",
      authDomain: "portfolio-contact-form-2afdc.firebaseapp.com",
      databaseURL: "https://portfolio-contact-form-2afdc-default-rtdb.asia-southeast1.firebasedatabase.app/",
      projectId: "portfolio-contact-form-2afdc",
      storageBucket: "portfolio-contact-form-2afdc.appspot.com",
      messagingSenderId: "1074243234499",
      appId: "1:1074243234499:web:720960c5c7f3d9c84b5076"
    };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


    // Conatct Form STARTS
    // Reference contactInfo collections
    let contactInfo = firebase.database().ref("infos");

    // Listen for a submit
    document.querySelector(".contact-form").addEventListener('submit', submitForm);

    function submitForm(e) {
        e.preventDefault();
        
        // Get input values
        let name = document.querySelector('.name').value;
        let email = document.querySelector('.email').value;
        let message = document.querySelector('.message').value;
        // console.log(name, email, message);

        saveContactInfo(name, email, message);

        document.querySelector('.contact-form').reset();

        sendEmail(name, email, message);
    }

    // Save infos to Firebase
    function saveContactInfo(name, email, message) {
        let newContactInfo = contactInfo.push();

        newContactInfo.set({
            name: name,
            email: email,
            message: message,
        });

        retrieveInfos();
    }

    //Retrive Infos
    function retrieveInfos() {
        let ref = firebase.database().ref('infos');
        ref.once( 'value', gotData );
        console.log('first');
    }

    function gotData(data) {
        let info = data.val();
        let keys = Object.keys(info);
    

        for (let i = 0; i < keys.length; i++) {
            let infoData = keys[i];
            let name = info[infoData].name;
            let email = info[infoData].email;
            let message = info[infoData].message;
            console.log(name, email, message);

            let infoResults = document.querySelector(".infoResults");

            infoResults.innerHTML += 
            `
            <div>
            <p><strong>Name: <strong/>${name} <br/>
            <a><strong>Email: <strong/>${email}</a>
            <a><strong>Message: <strong/>${message}</a>
            </p>
            </div>
            `
        }
    }

    // Send Email Info
    function sendEmail(name, email, message) {
        Email.send({
            Host: 'smtp.gmail.com',
            Username: 'mccleanjosef@gmail.com',
            Password: 'kxmfzazjlmweczqm',
            To: 'mccleanjosef@gmail.com',
            From: 'mccleanjosef@gmail.com',
            Subject: `${name} sent you a message`,
            Body: `Name: ${name} <br/> Email: ${email} <br/> Message: ${message}`,
        }).then((message) => alert('mail sent successfully'))
    }
    // Conatct Form ENDS
    // Firebase and SMTP Contact Form ENDS

});