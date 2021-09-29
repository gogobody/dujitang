(function dujitang() {
    var e=document.getElementById('djtang')
    var tag = e.getAttribute('data-tag')
    var a=document.createElement(tag?tag:'a');
    a.href='#';
    a.id='djt_id';
    a.text=':D 获取中...';
    e.after(a);
    var randint = Math.floor(Math.random() * 2019);
    var url = `https://cdn.jsdelivr.net/gh/gogobody/dujitang/data/soul_${randint}.json`;
    var httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', url, true)
    httpRequest.send();
    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4 && httpRequest.status === 200) {
            var data = JSON.parse(httpRequest.responseText).data;
            a.innerText = data[0].content;
        }
    };
})()