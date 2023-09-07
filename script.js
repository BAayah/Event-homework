let btn = document.getElementById('btn')

let p = document.getElementById('p')

const hideText = () => {    
    p.hidden ?
    p.hidden = false :
    p.hidden = true
}
btn.onclick = hideText
