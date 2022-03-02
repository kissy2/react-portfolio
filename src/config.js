export const config={
    hero : {
        name : "Here I'am Aymen Belhaj",
        preTypeWriter : "I'm a Passionate",
        typeWriter : ["Software Engineering Student", "Web Developer", ],
        btn1 : "Hire Me",
        btn2 : "Download CV",
        btn1Link : "contact",
        btn2Link : "https://drive.google.com/file/d/17zpCOqkj9dF_cueXVL9pw-Vl6TdzRipj/view?usp=sharing",

    },
    about : {
        titleDescription : "I'm a Software Engineering Student completely obsessed with innovation as well as the newest instructornologies",
        getToKnowMe1 : "Hey! It's <Strong>Aymen Belhaj</strong> and I'm a <strong> Software Engineer </strong> Student located in Aveiro, Portugal. Fascinated by the field of computer science since my childhood, it was obvious to me that I would eventually turn to engineering. I did some remote projects as a <Strong>FreeLancer</Strong> on the side for my friends, which allowed me to broaden my knowledge and learn a lot in addition to the courses I took at university.",
        getToKnowMe2 : "I am <Strong>dynamic</Strong>, <Strong>flexible</Strong> and able to adapt quickly to new situations and environment. I love what I do and, therefore, I do it well. <Strong>If you're looking for a developer to add to your team</Strong>, I'd love to hear from you! Feel free to <strong>contact</strong> me here.",
        Skills : ["Python", "Django", "Javascript", "React JS", "Node JS", "PHP", "Java", "J2EE", "HTML", "CSS", "BootStrap","MongoDB", "MySQL", "Azure", "AWS EC2", "Docker", "Docker-Compose", "Jenkins", "Github Actions", "Git", "Networking" ],    
    },
    experience : [
        {
        date : "July 2021 - August 2021",
        employerName : "Ministry of Social Affairs",
        jobTitle :  "Web Developer [Internship]",
        jobTasks : [
            "Created a GLPI plugin that detect threats based on the national vulnerability database.",
            "Automate reporting with graphical and statistical information about the vulnerabilities of each information system.",
            "Built a system to notify the instructornicians about vulnerabilities in their information systems",
        ],},
        {
        date : "Mars 2021 - June 2021",
        employerName : "Kreatorz",
        jobTitle :  "Python Developer [Internship]",
        jobTasks : [
            "Built a task automation software to eliminate repetitive activities. ",
            "Reverse engineered the target software in order to implement the IPC with the bot.",
            "Deployed this application as a Sass solution to Microsoft Azure cloud service.",
        ],},
        {
        date : "June 2020 - August 2020",
        employerName : "Comprod",
        jobTitle :  "Full-stack developer [Internship]",
        jobTasks : [
            "Built a fully functional e-commerce website to sell painting materials with React.js, Node.js and Express.js.",
            "Integrated a chatbot functionality to enhance user experience.",
            "Improve search engine optimization (SEO) by following some of the best practices.",
        ],},
        {
        date : "February 2019 - May 2019",
        employerName : "Alfaros",
        jobTitle :  "Full-stack developer [Internship]",
        jobTasks : [
            "Developed a system to optimize the work of the SOC team based on the SIEM solution from SolarWinds",
            "Built a fully functional web application using Python, Django framework, HTML,CSS,Chart.js, and JavaScript.",
            "Implemented a ticket management system to facilitate the coordination between the SOC team.",
        ],},
    ],
    education : [
        {
            universityName : "Higher Institute Of Computer Science Tunis ElManar" ,
            linkuniversity : "https://roundranking.com/universities/universite-de-tunis-el-manar.html",
            date : " September 2019 - June 2022",
            diplomatName : "Engineering and Development of Infrastructure and Communications Services", 
            diplomatDescription : " Infrastructure engineering ensures that the IT infrastructure is sufficiently robust, scalable, and efficient to deliver the integrated services underlying the physical environment that supports the processes, physical resources, and operators required for developing, integrating, operating, and sustaining IT applications and support services." , 
        },
        {
            universityName : "Higher Institute Of Computer Science Tunis ElManar" ,
            linkuniversity : "https://roundranking.com/universities/universite-de-tunis-el-manar.html",
            date : "September 2016 - June 2019",
            diplomatName : "License in Network and Services Administration", 
            diplomatDescription : "Network and computer systems administrators are responsible for the day-to-day operation of these networks. They organize, install, and support an organization's computer systems, including local area networks (LANs), wide area networks (WANs), network segments, intranets, and other data communication systems." , 
        },
    ],
    projectsTitleDescription : "From React JS, PHP to Task automation with python and everything else accomplished on my spare software development time.",
    projectsLimiter : 3,
    projects : [
        {
            projectTitle : "React Portfolio" ,
            projectDescription : "React based portfolio website, easy to set up and customizable from a single file.",
            imageSource : "https://i.imgur.com/WjTEMEA.png",
            projectOverview : `Use this template if you need a developers, data scientists, software engineers quick portfolio.<br/><br/>
            Just fill out src/config.js with your own data to get your personal portfolio.<br/>
            Customize the portfolio theme by using your preferred color scheme in the src/global.scss file.<br/>
            Feel free to use it as is or customize it as much as you like.<br/><br/>
            <h3 style="color:#333">Portfolio Sections</h3>
            ✔️ Summary and About me ans Skills<br/>
            ✔️ Work Experience<br/>
            ✔️ Education<br/>
            ✔️ Projects<br/>
            ✔️ Achievements And Certifications 🏆<br/>
            ✔️ Contact me<br/>
            `,
            skills : ["React JS", "HTML", "CSS", "Javascript", "Bootstrap" ],
            liveLink : "https://lucid-hopper-b080e7.netlify.app/",
            codeLink : "https://github.com/kissy2/react-portfolio",
        },
        {
            projectTitle : "Django dashboard for Solarwinds SIEM" ,
            projectDescription : "This web application is meant to extend some of the functionality of the SolarWinds Siem solution using its proper API to add extra featuresThis web application is intended to extend some of the functionality of the SolarWinds Siem solution and add additional features to make life easier for the soc team.",
            imageSource : "https://user-images.githubusercontent.com/51262744/151711799-f7e39a78-aefe-4d59-8915-1d8f37252e26.png",
            projectOverview : `This web application is meant to extend some of the functionality of the SolarWinds Siem solution using its API and has the following capabilities :
            <br/>
            <li>A dashboard that display of alerts in real time.</li>
            <li>A report generation management interface.</li>
            <li>An advanced search interface for the entire database.</li>
            <li>A functionality of sorting and filtering alerts according to the chosen field.</li>
            <li>An interface that allows you to define severity rules for alerts and prioritize between them.</li>
            <li>An automated false positive detection feature.</li>
            <li>Ticket management system to coordinate between the Soc team.</li>`,
            skills : ["Python", "Django", "HTML", "CSS", "Javascript", "JQuery", "Chart.JS", "SolarWinds", ],
            liveLink : "",
            codeLink : "https://github.com/kissy2/Django-Dashboard-Solarwinds-SIEM",
        },
        {
            projectTitle : "Rama Solutions website" ,
            projectDescription : "A multilangual website template made with PHP for agencies and small businesses.",
            imageSource : "https://i.imgur.com/Mp6XICl.png",
            projectOverview : `
            Rama Solutions multilingual PHP website template.<br/>
            Especially designed for agencies and businesses. So anyone can use it for consulting and agency websites.<br/>
            Moreover, the template contains all the necessary elements and sections with the latest version of Bootstrap 5.<br/>
            In addition, a Sticky and Slick Slider navigation menu that will help your website stand out. This versatile template is fully compatible with all browsers and devices.
            `,
            skills : ["PHP", "HTML", "CSS", "Javascript", "SQL Lite", "Azure"],
            liveLink : "https://ramasolutions.tech/",
            codeLink : "https://github.com/kissy2/Php-company-website-template",
        },
        {
            projectTitle : "Carbon Bot" ,
            projectDescription : "A bot for the famous video game Dofus that automate resource gathering, ingame combat, leveling up and a lot of other features.",
            imageSource : "https://www.kidsmmorpg.com/img/dofus-logo.jpg",
            projectOverview : `A bot is a piece of software that emulates a real game client to automate certain tasks. This software is a combination of pixel and socket bot, which means that it uses the pixels of the screen (+ your mouse and keyboard) to emulate actions and network packets to keep tracking the progress in the game. And it can run multiple clients in the background.
            <br/><br/>
            ⚠️ It should be noted that this bot is only available on Windows.
            <br/><br/>
            <li>Easy Control : play, pause/resume or stop the bot.</li>
            <li>Connection Handler : This software knows when your connection goes out and will wait for it to come back before continuing or will automatically pause if it takes a long time before reconnecting.</li>
            <li>Moderator Detector : Automatically detects moderators if they are present on the server and triggers an action based on the configuration file.</li>
            <li>Multi accounts management : You don't have to worry about switching from one account to another, you can still use your computer while using this software; all the logic is executed in the background.</li>
            <li>Integrated Path & Maps builder : easily create your own custom paths & farming maps.</li>
            <li>Treasure Hunt : Automate the whole process of the boring treasure hunt, from finding clues to fighting the chest (for other that differ from the iop class, this might require a bit of tweaking).</li>
            <li>Archmonster Hunter : automatically searches and detects archmonsters if they are present on a map and triggers an alarm.</li>
            <li>Keyboard shortcuts.</li>`,
            skills : ["Python", "Scapy", "MongoDB", "SQL Lite", "FFDec", "Azure"],
            liveLink : "",
            codeLink : "https://github.com/kissy2/Carbon-Bot",
        },
        {
            projectTitle : "React authentication" ,
            projectDescription : "React authentication app flexible to link it to any external authentication source like firebase or others.",
            imageSource : "https://user-images.githubusercontent.com/51262744/151706735-bb554366-8731-4423-a99c-26c4cba8dc15.png",
            projectOverview : `
            React authentication app flexible to link it to any external authentication source.<br/>
            Create Simple Login/Signup form with React JS code.<br/>
            The list of features I have built is the following:<br/>
            <li>Display login form with email, password, and submit button on the screen.</li>
            <li>Display signup form with username, email, password, and submit button on the screen.</li>
            <li>Users can input the values on the form.</li>
            <li>Validate username and password entered by the user(for testing purposes, the test was done against a local json file).</li>
            <li>Display an error message when the login fails.</li>
            <li>Redirect to a dashboard page and show the user who logged in.</li>
            `,
            skills : ["React JS", "HTML", "CSS", "Javascript", ],
            liveLink : "",
            codeLink : "https://github.com/kissy2/React-Auth",
        },
    ],
    certificatesTitleDescription : "I am obsessed with learning new technologies and here are some certificates that I have obtained to expand my knowledge.",
    certificatesLimiter : 6,
    certificates : [
        {
            name : "Machine Learning for Data Science and Analytics",
            instructor : "Columbia University",
            issuer : "edX",
            link : "https://courses.edx.org/certificates/9ad782f7e9964bde9c773038901ba60c"
        },
        {
            name : "Neural Networks and Deep Learning",
            instructor : "DeepLearning.AI",
            issuer : "Coursera",
            link : "https://coursera.org/verify/PYFC552E9SVM"
        },
        {
            name : "Convolutional Neural Networks",
            instructor : "DeepLearning.AI",
            issuer : "Coursera",
            link : "https://coursera.org/verify/6KPWGLQSBCV9"
        },
        {
            name : "DevNet Associate",
            instructor : "Cisco Networking Academy",
            issuer : "Cisco",
            link : "https://www.credly.com/badges/60228c98-1c86-4a0c-809f-7694fac760dd"
        },
        {
            name : "Developing Cloud Applications with Node.js and React",
            instructor : "IBM",
            issuer : "edX",
            link : "https://courses.edx.org/certificates/812e3d9ba6644dbabf93446784dac591"
        },
        {
            name : "Exploring GraphQL: A Query Language for APIs",
            instructor : "Linux Foundation",
            issuer : "edX",
            link : "https://courses.edx.org/certificates/f600955068df47599dd85c7a7a39715a"
        },
        {
            name : "Deep Learning Fundamentals with Keras",
            instructor : "IBM",
            issuer : "edX",
            link : "https://courses.edx.org/certificates/46375e5c09874837a2287d11bf62d21d"
        },
        {
            name : "Python Basics for Data Science",
            instructor : "IBM",
            issuer : "edX",
            link : "https://courses.edx.org/certificates/3e3d5e448d184cf49583b477124cabe7"
        },
        {
            name : "Introduction to Cloud Development with HTML, CSS, and JavaScript",
            instructor : "IBM",
            issuer : "edX",
            link : "https://courses.edx.org/certificates/db9ebb6cc66e44708634edd5859d5b77"
        },
        {
            name : "Introduction to Cloud Infrastructure Technologies",
            instructor : "Linux Foundation",
            issuer : "edX",
            link : "https://courses.edx.org/certificates/de0fa2d3eab04df780406ad0ea978804"
        },
        {
            name : " Introduction to Jenkins",
            instructor : "Linux Foundation",
            issuer : "edX",
            link : "https://courses.edx.org/certificates/b052cc7344af48c699702e6f18f75632"
        },
        {
            name : "Introduction to Linux",
            instructor : "Linux Foundation",
            issuer : "edX",
            link : "https://courses.edx.org/certificates/3a44005ecf024ab495bba022009480f0"
        },
        {
            name : "Cybersecurity Essentials",
            instructor : "Cisco Networking Academy",
            issuer : "Cisco",
            link : "https://www.credly.com/badges/5898abad-d20a-4b8a-96e4-501ec589a9ee"
        },
        {
            name : "English Test",
            instructor : "EF SET",
            issuer : "EF SET",
            link : "https://www.efset.org/cert/HWtspN"
        },

    ],
    contact : {
        titleDescription : "If you wanna get in touch, talk to me about a project collaboration or just say hi, fill up the awesome form below to drop me an email. Old-fashioned phone calls work too.",
        phoneDescription : "Interested in working together ?<br/>Just pick up the phone and let's talk.",
        phoneNumber : "+216 56025656",
        emailDescription : "If you're wondering about any thing just shoot me an email and let's talk.",
        email : "medaymenbelhaj@gmail.com",
        locationDescription : "R. da Pilôta 7, 3810-441, Portugal,<br/>Aveiro District, Portugal 234",
        location : "https://goo.gl/maps/XdVY7Jka5j85axQt7",
        form : "https://formspree.io/f/mrgjpwnb"
    },
    footer : {
        optionalText : "Living, learning, & leveling up one day at a time.",
        github : "https://github.com/kissy2",
        facebook : "https://www.facebook.com/profile.php?id=100063664420814",
        linkedin : "https://www.linkedin.com/in/aymen-belhaj",
        name : "Kissy2",
        optionalLink : "https://github.com/kissy2",
    },
}
