let total_file = 2019;
function getData(){
    let randint = Math.floor(Math.random() * total_file);
    let url = `https://cdn.jsdelivr.net/gh/gogobody/dujitang/data/soul_${randint}.json`;
    let httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', url, true)
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            let data = JSON.parse(httpRequest.responseText).data;
            document.getElementById('sentence').innerHTML = data[0].content;
        }
    };
}

function randomSentence() {
   getData()
}

randomSentence();
