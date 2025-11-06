const projects = [
    {
        "title": "64 Casas",
        "desc": "A online multiplayer chess game developed with Node.js and Socket.io for the server and p5.js as a renderer for the client",
        "img": "64-casas-thumbnail.png",
        "url": "https://github.com/OddLamb/64-casas"
    }
];
const certificates = [
    {
        "title": "IA para Todos",
        "enterprise": "StartSe University",
        "date": "09/25",
        "url": "https://lms.startse.com/certificado/v2/66d8620a181083001247fa9c?studentId=68cb31d10ec6f0ff59c762bf&trk=public_profile_see-credential"
    },
    {
        "title": "Foundational C# with Microsoft",
        "enterprise": "freeCodeCamp",
        "date": "11/24",
        "url": "https://www.freecodecamp.org/certification/OddLamb/foundational-c-sharp-with-microsoft?trk=public_profile_see-credential"
    },
    {
        "title": "Responsive Web Design",
        "enterprise": "freeCodeCamp",
        "date": "11/24",
        "url": "https://www.freecodecamp.org/certification/oddlamb/responsive-web-design?trk=public_profile_see-credential"
    }
];
certificates.forEach((certificate) => {
    const projectList = document.querySelector("#certificate-list");
    projectList.innerHTML += `
        <li>
            <p><b>${certificate.title}</b></p>
            <p><i>${certificate.enterprise}</i></p>
            <p>Date of emission: ${certificate.date}</p>
            <a href="${certificate.url}">
                See Credencial
            </a>
        </li>`
})
projects.forEach((project) => {
    const projectList = document.querySelector("#project-list");
    projectList.innerHTML += `
        <span class="project">
            <span class="text-container">
                <span class="title">${project.title}</span>
                <span class="desc">${project.desc}</span>
            </span>
            <span class="thumbnail">
                <img src="./assets/thumbnails/${project.img}" alt="">
            </span>
            <a href="${project.url}">Source</a>
        </span>`
})