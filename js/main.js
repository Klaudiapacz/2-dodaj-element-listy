let addBtn = document.getElementById('add-btn');
let list = document.getElementById('items');
let li = document.getElementsByClassName('item');


const addToList = (event) => {

    let liElement = document.createElement('li');
    liElement.setAttribute("class", "item");
    liElement.innerText = 'Item ' + [list.childElementCount + 1];
    list.lastElementChild.insertAdjacentElement('afterend', liElement);
    document.body.appendChild(list);
}



addBtn.addEventListener('click', addToList);

