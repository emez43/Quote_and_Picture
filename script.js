let divcontent = document.getElementById('content')
let divname = document.getElementById('name')
let divpic = document.getElementById('pic')
let btn = document.querySelector('.button-55')

let randomNum = Math.floor(Math.random() * 11)
console.log(randomNum)




btn.addEventListener('click', refreshPage)

function refreshPage() {

    // kép API

    fetch('https://picsum.photos/v2/list?page=' + randomNum + '&limit=100')
        .then(result => result.json())
        .then((data) => {
            let randomUrl = Math.floor(Math.random() * data.length)

            console.log(data[randomUrl].download_url)
            divpic.src = data[randomUrl].download_url
        })

    // idézet API
    fetch('http://api.quotable.io/random')
        .then((result) => result.json())
        .then((data) => {
            divcontent.textContent = ''
            let name = data.author
            divname.textContent = name + ':'
            let content = data.content
            divcontent.textContent = content
        })
        .catch(error => console.log(error))

    // random elhelyezés
    let randomTop = Math.ceil(Math.random() * 74)
    let randomLeft = Math.ceil(Math.random() * 50)
    document.getElementById('count').style.left = randomLeft + 'vw'
    document.getElementById('count').style.top = randomTop + 'vh'
}

refreshPage()
