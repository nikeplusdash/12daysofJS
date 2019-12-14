function handler() {
    let text = document.querySelector("#data")
    if (text.value.trim() != "") {
        var div = document.createElement("div")
        var input = document.createElement("input")
        var label = document.createElement("label")
        div.className="row form-check ml-1"
        label.htmlFor = "c"+(++i)
        label.innerText=text.value
        label.className="form-check-label"
        input.type="checkbox"
        input.className="form-check-input"
        input.id="c"+i
        input.setAttribute('data-index', i)
        input.addEventListener("click",(e)=>{
            console.log(e.shiftKey,"pressed")
            if (e.shiftKey && recent != null) {
                console.log(recent,"press")
                checkboxes = document.querySelectorAll("input[type='checkbox']")
                var lc = parseInt(recent.getAttribute("data-index"))
                var cc = parseInt(e.srcElement.getAttribute("data-index"))
                console.log("lc="+lc,"cc="+cc)
                var low=0 , high=0
                lc > cc ? (low = cc, high = lc) : (low = lc, high = cc)
                for (var k = low; k < high; k++) {
                    checkboxes[k].checked=recent.checked
                }
            }
            recent=e.srcElement
        })
        div.appendChild(input)
        div.appendChild(label)
        body.appendChild(div)
    }
    else
        console.log("Empty")
    text.value = ""
    if (!isThere) {document.getElementById("collapseOne").classList.add("show");isThere=true}
}

var i = 0,isThere=false
var recent=null
var body

window.onload = () => {
    body = document.getElementsByClassName("card-body")[0]
    document.querySelector("#data").addEventListener("keydown", function (event) {
        if (event.key == "Enter") {
            handler()
        }
    })
    
}