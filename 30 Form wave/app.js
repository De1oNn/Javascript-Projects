const allLables = document.querySelectorAll('.form-control label')

allLables.forEach((Label) => {
    Label.innerHTML = Label.innerHTML
    .split("")
    .map
        ((Letter, index) => 
            `<span style ="transition-delay:${index * 50}ms">${Letter}</span>`
    )
    .join("");
})