//To do M+ M- and MC function

let buttontext = document.querySelectorAll("button")

let inputelement = document.querySelector("input")

let deletebutton = document.querySelector(".delete")


deletebutton.addEventListener("click", () => {
    let value = inputelement.value
    inputelement.value = value.slice(0, value.length - 1)
})


buttontext.forEach((button) => {

    button.addEventListener("click",() => {
        if (button.textContent === '=') {
            if (inputelement.value === "") {
                inputelement.value = ""
            } else {
                  inputelement.value = eval(inputelement.value)

            }

        }
          

        else if (button.textContent == 'c') {
            inputelement.value = ""
        }
        else {
            
            inputelement.value += button.textContent;

        }

    })

})

