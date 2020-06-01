const interval = setInterval(() => {
    const button = document.querySelector(".tw-button--success")

    if(button) {
        button.click()
        console.log("Botão clicado e os cellinPoints foram coletados")
    }

    else {
        console.log("Tu ainda não tem bônus para recolher!!")
    }
    
}, 10000)