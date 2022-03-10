//! Linha do item HOME
let item_home = document.querySelector('.home_item');
let line_home = document.querySelector('.home_line');

item_home.addEventListener('mouseover', () => {
    line_home.classList.add('line_hover');
})

item_home.addEventListener('mouseout', () => {
    line_home.classList.remove('line_hover');
})

//! Linha do item SOBRE
let about_item = document.querySelector('.about_item');
let line_about = document.querySelector('.about_line');

about_item.addEventListener('mouseover', () => {
    line_about.classList.add('line_hover');
})

about_item.addEventListener('mouseout', () => {
    line_about.classList.remove('line_hover');
})

//! Linha do item CONTATO
let contact_item = document.querySelector('.contact_item');
let line_contact = document.querySelector('.contact_line');

contact_item.addEventListener('mouseover', () => {
    line_contact.classList.add('line_hover_contact');
})

contact_item.addEventListener('mouseout', () => {
    line_contact.classList.remove('line_hover_contact');
})

//! Atualiza rodapé

let rodape = document.querySelector('[data-rodape]');

let dataAtual = new Date();
let anoAtual = dataAtual.getFullYear();

let textoRodape = `<p>Copyrigth &copy ${anoAtual} - Bernardo Magueta Kowalsky</p>`

rodape.innerHTML = textoRodape;