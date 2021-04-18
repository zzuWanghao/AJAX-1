let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('get', `/page${n + 1}`)
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {

            const array = JSON.parse(request.response)
            console.log(array)
            array.forEach(item => {
                const li = document.createElement('li')
                li.textContent = item.id
                xxx.appendChild(li)

            });

            n += 1
        }
    }
    request.send()

}



getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('get', '/4.json')
    request.onreadystatechange = () => {

        if (request.readyState === 4 && request.status === 200) {

            console.log(request.response)
            const object = JSON.parse(request.response)
            console.log(object)
            myName.textContent = object.name
        }

    }
    request.send()

}

getXML.onclick = () => {

    const request = new XMLHttpRequest();
    request.open('GET', '/3.xml')

    request.onreadystatechange = () => {
        //console.log(request.readyState)
        if (request.readyState === 4 && request.status === 200) {

            const dom = request.responseXML;
            const text = dom.getElementsByTagName('warning')[0].textContent;
            console.log(text.trim());
        }
    }
    request.send();

}


getCSS.onclick = () => {

    const request = new XMLHttpRequest();
    request.open('GET', '/style.css')
    request.onreadystatechange = () => {
        console.log(request.readyState)
        if (request.readyState === 4) {

            if (request.status >= 200 && request.status < 300) {

                const style = document.createElement('style');//创建style 标签


                style.innerHTML = request.response//填写style内容
                document.head.appendChild(style)//插入头部

            } else {

                alert('加载CSS失败')
            }
        }

    }
    request.send();

}

getJS.onclick = () => {

    const request = new XMLHttpRequest();
    request.open('GET', '/script.js')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {


            const script = document.createElement('script');//script 标签
            script.innerHTML = request.response//填写script内容
            document.body.appendChild(script)//插入身体
        }
    }
    request.send();
}

getHTML.onclick = () => {

    const request = new XMLHttpRequest();
    request.open('GET', '/2.html')
    request.onreadystatechange = () => {
        if (request.readyState === 4 && request.status === 200) {

            const div = document.createElement('div');//div 标签
            div.innerHTML = request.response//填写div内容
            document.body.appendChild(div)//插入身体
        }
    }
    request.send();

}


