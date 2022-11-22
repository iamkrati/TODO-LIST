const standardTheme = document.querySelector('.standard-theme');
const lightTheme = document.querySelector('.light-theme');
const darkerTheme = document.querySelector('.darker-theme');
const toDoInput = document.querySelector('.todo-input');
const toDoDesc = document.querySelector('.todo-description');
const toDoBtn = document.querySelector('.todo-btn');
const toDoList = document.querySelector('.todo-list');

// Add
standardTheme.addEventListener('click', () => changeTheme('standard'));
lightTheme.addEventListener('click', () => changeTheme('light'));
toDoBtn.addEventListener('click', addToDo);
toDoList.addEventListener('click', deletedrop);
let c='light';
function addToDo(event) {
    event.preventDefault();
    const toDoDiv = document.createElement("div");
    toDoDiv.classList.add('todo',`${c}-todo`);

    toDoDiv.setAttribute("draggable", "true");
    const newToDo = document.createElement('li');
    if (toDoInput.value === '') {
        alert("You must write something!");
    }
    else {
        // newToDo.innerText = "hey";
        newToDo.innerText = toDoInput.value;
        newToDo.classList.add('todo-item');
        toDoDiv.appendChild(newToDo);


        // delete btn;
        const deleted = document.createElement('button');
        deleted.innerHTML = '<i class="fas fa-trash"></i>';
        deleted.classList.add('delete-btn');
        toDoDiv.appendChild(deleted);

        // drop btn;
        const checked = document.createElement('button');
        checked.innerHTML = '<i class="fa-solid fa-bars"></i>';
        checked.classList.add('drop-btn');
        toDoDiv.appendChild(checked);

        // Append to list;
        toDoList.appendChild(toDoDiv);

        // CLearing the input;
        toDoInput.value = '';
    }

}
function deletedrop(event) {
    // console.log(event.target);
    // event.preventDefault();
    const item = event.target;

    // delete
    if (item.classList[0] === 'delete-btn') {
        // item.parentElement.remove();
        // animation
        item.parentElement.classList.add("fall");

        item.parentElement.addEventListener('transitionend', function () {
            item.parentElement.remove();
        })
    }

    // check
    if (item.classList[0] === 'drop-btn') {
        // item.parentElement.classList.toggle("completed");

    }


}

// search

function search_items() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase().split(" ").join("");
    let x = document.getElementsByClassName('todo-item');
    // let ul=document.getElementsByClassName("todo-list")
    for (i = 0; i < x.length; i++) {
        if (!x[i].innerHTML.toLowerCase().split(" ").join("").includes(input)) {
            // x[i].style.display="none";
            let p1 = x[i].parentElement;
            p1.style.display = "none";
            // console.log(p1);
        }
        else {
            let p1 = x[i].parentElement;
            p1.style.display = "flex";
        }
    }
}

// 
// Change theme function:
function changeTheme(color) {

    document.body.className = color;
    document.querySelector('input').className = `${color}-input`;
    // document.querySelector('.todo-input').className = `${color}-input`;
    if(`${color}`=='standard')
       document.querySelector('.todo-input').classList.replace('light-input',`${color}-input`);
    else
        document.querySelector('.todo-input').classList.replace('standard-input',`${color}-input`);
    // c=color;
    document.querySelector('.todo').classList.add(`${color}-todo`);
}
