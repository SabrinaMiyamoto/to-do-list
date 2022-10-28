function add() {
    let li = document.createElement('li');
    let input_value = document.form_main.task.value;
    let input_text = document.createTextNode(input_value);
  
    li.appendChild(input_text);
    document.querySelector('ul').appendChild(li);
    document.form_main.task.value = "";
  
    createCloseButton(li);
  }

function createCloseButton(li) {
    let span = document.createElement("span");
    let txt = document.createTextNode("\u00D7");
  
    span.className = "close";

    span.appendChild(txt);
    li.appendChild(span);
  
    span.onclick = () => span.parentElement.style.display = "none";
  }

  document.querySelectorAll('li').forEach(createCloseButton);

document.querySelector('ul').addEventListener('click', (e) => {
  if (e.target.tagName === 'li')
    e.target.classList.toggle('checked');
});