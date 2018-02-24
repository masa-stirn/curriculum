const coreTemp = document.querySelector('#semTemp').content;
const cores = document.querySelector('#core-areas');
let openCore = false;
const link = "http://www.masawudesign.dk/kea/curriculum/json/coreAreas.json";


fetch(link).then(result => result.json()).then(core => put(core));


function put(core) {
    core.forEach(core => {
        const clone = coreTemp.cloneNode(true);
        clone.querySelector(".coreWrap").id = core.id;
        clone.querySelector("h4").textContent = "CONTENT";
        clone.querySelector("h3").textContent = core.name;
        clone.querySelector("p").textContent = core.content;
        clone.querySelector(".accordian:nth-of-type(2) h4").textContent = "KNOWLEDGE";
        clone.querySelector(".accordian:nth-of-type(3) h4").textContent = "SKILLS";
        clone.querySelector(".accordian:nth-of-type(4) h4").textContent = "COMPETENCIES";
        clone.querySelector(".core-img").src = "imgs/" + core.id + ".png";
        let opens = clone.querySelectorAll('.open');

        opens.forEach(elm => {
            elm.addEventListener("click", (e) => {
                console.log(e.target.querySelector(".details"));
               e.target.querySelector(".details").classList.toggle("height0");
            });
        });

        // display the items of the array knowledge as list items in html
        const liKnowledge = core.knowledge[1].seamester2;
        let inside = "";
        for (let i = 0; i < liKnowledge.length; i++) {
            inside += "<li>" + liKnowledge[i] + "</li>";
            clone.querySelector(".core-knowledge").textContent = inside;
        };

        clone.querySelector(".core-knowledge").innerHTML = inside;

        // display the items of the array skills as list items in html
        const liSkills = core.skills[1].seamester2;
        let inside2 = "";
        for (let i = 0; i < liSkills.length; i++) {
            inside2 += "<li>" + liSkills[i] + "</li>";
            clone.querySelector(".core-skills").textContent = inside2;
        };

        clone.querySelector(".core-skills").innerHTML = inside2;

        // display the items of the array skills as list items in html
        const liCompetencies = core.competencies[1].seamester2;
        let inside3 = "";
        for (let i = 0; i < liCompetencies.length; i++) {
            inside3 += "<li>" + liCompetencies[i] + "</li>";
            clone.querySelector(".core-competencies").textContent = inside3;
        };

        clone.querySelector(".core-competencies").innerHTML = inside3;

        // append content to each child
        cores.appendChild(clone);

    });

    document.querySelector("#design").classList.remove("hide");
};

// jump to core area and highlith the active tab and display clickable content

let coreBox = document.querySelectorAll('.core-box');

coreBox.forEach(e => {
    e.addEventListener("click", () => {
        // remove style from design tab
        if(document.querySelector(".core-active")){
coreActive = document.querySelector(".core-active")
coreActive.classList.remove("core-active");
}
        e.classList.add("core-active");
        //console.log(e.classList[1]);
        document.querySelectorAll(".coreWrap").forEach(elm => elm.classList.add("hide"));
        // filter to display only active coreBox
        if (e.classList[1] == "core-dev") {
            document.querySelector("#development").classList.remove("hide");
        }
        if (e.classList[1] == "core-business") {
            document.querySelector("#business").classList.remove("hide");
        }
        if (e.classList[1] == "core-comm") {
            document.querySelector("#communication").classList.remove("hide");
        }
        if (e.classList[1] == "core-design") {
            document.querySelector("#design").classList.remove("hide");
        }
    })
})

//open the 4 core areas footer and swap the arrows

document.querySelector(".core-areas-nav-top").addEventListener("click", () => {
    document.querySelector(".core-areas-navs").classList.toggle("height0");
    document.querySelector(".arrow-down").classList.toggle("hide");
        document.querySelector(".arrow-up").classList.toggle("hide");
if(document.querySelector(".arrow-up")){
coreActive = document.querySelector(".core-active")
coreActive.classList.remove("core-active");
}

})

// open the exam accordian
let opensE = document.querySelectorAll('.openE');

        opensE.forEach(elm => {
            elm.addEventListener("click", (e) => {
                //console.log(e.target.querySelector(".details"));
               e.target.querySelector(".details").classList.toggle("height02");
            });
        });

// link buttons to right urls

document.querySelector('.go-home').addEventListener("click", () => {
    window.location.href = "index";
            });
document.querySelector('.sem1').addEventListener("click", () => {
    window.location.href = "semester1";
            });
document.querySelector('.sem2').addEventListener("click", () => {
    window.location.href = "semester2";
            });
document.querySelector('.sem3').addEventListener("click", () => {
    window.location.href = "semester3";
            });
