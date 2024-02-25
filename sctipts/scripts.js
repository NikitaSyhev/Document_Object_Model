console.log(getChild(document.body));


function getChild(element, tabs = 0) {
    let result = '';
    for(let child of element.children) { //возвращает элементы ( for in индексы)
        result += '  '.repeat(tabs) + child.nodeName + '\n'; //repeat метод повторяет строку tabs раз
    if(child.hasChildNodes())
    result += getChild(child, tabs + 1);
    }
    return result;
}


// кнопка - считали кнопку по селектору
const addBlock = document.querySelector('#add-block');
// слушатель
addBlock.addEventListener('click',() => {
    //локально создали элемент, на страницу нужно его добавить дальше
    let newBlock = document.createElement('div');
    newBlock.addEventListener('click', e => {
        e.target.remove(); //удаление элементов
    });
    newBlock.className = 'block';
    newBlock.style.backgroundColor = `rgb(
        ${Math.round(Math.random() * 255)},
        ${Math.round(Math.random() * 255)},
        ${Math.round(Math.random() * 255)}
    )`;
    //добавили на страницу элементяя
        container.appendChild(newBlock);
});