
const artistasAPI = () => {
    return fetch('/api/Artistas.json')
        .then(res => res.json())
        .catch(console.log)
}


const getDatasAPI = async () => {
    const dados = await artistasAPI()

    getInputValue(dados)
    // console.log(dados)
}

const getInputValue = (dados) => {
    const input = document.querySelector('[data-js="search-input"]')
    const cards = [...document.querySelector('[data-js="grid-cards"]').children]
    const sectionCards = document.querySelector('[data-js="cards-section"]')

    input.addEventListener('input', (e) => {
        const typeInput = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1,)

        cards.forEach(item => {
            
            if(typeInput === ''){
                item.classList.add('showCard')
                return
            }

            if(item.classList.contains(`${typeInput}`)) {
                item.classList.add('showCard')
            }
                item.classList.add('hiddenCard')
        })
        
    })

}

getDatasAPI()