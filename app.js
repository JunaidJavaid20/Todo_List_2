let inputvalue = document.getElementById('inputvalue');
let addBtn = document.getElementById('addBtn');
let listName = document.querySelector('.listName');
let li = document.querySelector('li');
let screen1 = document.querySelector('.screen1');

addBtn.addEventListener('click', () => {
    if (inputvalue.value == '') {
        alert('Enter some value')
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputvalue.value;
        listName.appendChild(li).className = ' lisingleValue'
        let span = document.createElement('span');
        li.appendChild(span)
        span.appendChild(li.firstChild)
        console.log(li)
        let delet = document.createElement('button');
        delet.innerText = 'delet';
        li.appendChild(delet).className = ' dBtn';
        delet.className += ' same'
        delet.addEventListener('click', () => {
            li.innerText = ''
        })
        let edit = document.createElement('button');
        edit.innerText = 'Edit';
        li.appendChild(edit).className = ' eBtn'
        edit.className += ' same'
        edit.addEventListener('click', () => {
            inputvalue.value = span.innerText;
            li.innerHTML = ""
        })
    }

    inputvalue.value = ''
})