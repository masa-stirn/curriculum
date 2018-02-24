const coreTemp = document.querySelector('#coreTemp').content
const cores = document.querySelector('#cores')
const examgeneral = document.querySelector('#examgeneral')
const contentTemp = document.querySelector('#contentTemp').content
const contentsPlace = document.querySelector('#contents')
let openCore = false
const linkexams = "http://www.masawudesign.dk/kea/curriculum/json/exams.json"
const linkcontent = "http://www.masawudesign.dk/kea/curriculum/json/generalAbout.json"
const linkcoreAreas = "http://www.masawudesign.dk/kea/curriculum/json/coreAreas.json";

//ects general
function getExams(linkexams) {      //.then(function(response) { });  //.then(result=>result.json())
  fetch(linkexams, {mode: 'no-cors'}).then(result=>result.json()).then(exams=>putE(exams))
}

function putE(exams) {

    exams.forEach(exam => {
      const cloneCore = coreTemp.cloneNode(true)
      cloneCore.querySelector("article").id = exam.examId
      //console.log(exam.exams)
      cloneCore.querySelector("h3").innerHTML = exam.exams
      cloneCore.querySelector("p").innerHTML = exam.ects

      cores.appendChild(cloneCore)

      cloneCore.addEventListener("click", function(expand) {
        if (openCore === false) {
          openCore = true
          cloneCore.style.height = 'auto'
          console.log('expand' + ' ' + core.title)
        } else {
          cloneCore.style.height = '10em'
          console.log('close' + ' ' + core.title)
        }
      })
  })
} getExams(linkexams)


//content
function getContentIndex(linkcontent) {
  fetch(linkcontent, {mode: 'no-cors'}).then(result=>result.json()).then(contents=>putC(contents))
}

function putC(contents) {

    contents.forEach(content => {
      const cloneCont = contentTemp.cloneNode(true)
      cloneCont.querySelector("article").id = content.article
      cloneCont.querySelector("h3").innerHTML = content.article
      //let newImg = document.createElement("img")
      //newImg.alt = "SVG IMG";
      //document.querySelector("#illustration").appendChild(newImg)


      content.sections.forEach(elm => {
        //console.log(elm.title);
        let newH5 = document.createElement("h5")
        newH5.textContent = elm.title
        cloneCont.querySelector('article').appendChild(newH5)

        let newP = document.createElement("p")
        newP.innerHTML = elm.short
        //newP.id = "c" + elm.id
        cloneCont.querySelector('article').appendChild(newP)

        if (elm.text) {
          newP.innerHTML += "<br> <b>⤋</b>"
          newP.style.cursor = "pointer"
          let newS = document.createElement("span");
          newS.classList.add('hide')
          newS.classList.add('allSpan')
          newS.id = elm.id
          newS.innerHTML = elm.text
          cloneCont.querySelector('article').appendChild(newS)

          newP.addEventListener("click", function (expand) {
            document.querySelectorAll('.allSpan').forEach(all => {
              all.classList.add('hide')
            })
            curElm = elm.id//.substr(1, 3);
            curSpan = document.querySelector("#" + curElm)
            console.log(curElm)
            curSpan.classList.remove('hide')
          })
        }
      });
      //console.log(content.sections[0])

      contentsPlace.appendChild(cloneCont)
  })
} getContentIndex(linkcontent)











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

