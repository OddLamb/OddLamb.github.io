const projects = [
    {
        "title": "64 Casas",
        "desc": "A online multiplayer chess game developed with Node.js and Socket.io for the server and p5.js as a renderer for the client",
        "img": "64-casas-thumbnail.png",
        "url": "https://github.com/OddLamb/64-casas"
    }
]
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