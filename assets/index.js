let jsondata = [];
let total_file = 2019;
function getData(func){
    let randint = Math.floor(Math.random() * total_file);
    let url = `/data/soul_${randint}.json`;
    let httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', url, true)
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            let data = JSON.parse(httpRequest.responseText).data;
            jsondata = jsondata.concat(data)
            if (func !== undefined) func()
        }
    };
}
function setContent() {
    document.getElementById('sentence').innerHTML = jsondata[Math.floor(Math.random() * jsondata.length)].content;
}

function randomSentence() {
   getData(setContent)
}

randomSentence();
