import {startApp} from '/src/app/app.js'
import 'bootstrap';
startApp()
InjectBootstrapProgress()
let references=document.getElementsByTagName('a')
console.log(references.length)
for (let i = 0; i < references.length; i++) {
    let element = references[i];
    let url = element.href
    element.href = url.replace(/src/g,"dist")
    console.log(element.href)
}
let encode = document.createElement('meta')
encode.charset = 'utf8'
document.head.appendChild(encode);


function InjectBootstrapProgress(){
    let progress = document.getElementsByTagName('progress')
    if(progress.length > 0){
        let prog = progress[0]
    let value = prog.value
    prog.remove()
    let bootwrap = document.createElement('div')
    bootwrap.className =  'progress'
    let bootbar = document.createElement('div')
    bootbar.className = 'progress-bar progress-bar-striped progress-bar-animated'
    bootbar.setAttribute("role", "progressbar")
    bootbar.setAttribute("aria-valuenow", `${value}`)
    bootbar.setAttribute("aria-valuemin", 0)
    bootbar.setAttribute("aria-valuemax", 100)
    bootbar.setAttribute("style", `width: ${value}%`)
    bootbar.innerHTML = `${value}%`
    bootbar.style.color = "black"
    bootwrap.style.width = "20%"
    bootwrap.style.marginBottom="20px"
    bootwrap.appendChild(bootbar)
    document.getElementsByTagName("footer")[0].appendChild(bootwrap)
    }
}
    


