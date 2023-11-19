const input = document.getElementById('input')
const list = document.querySelector('.list')

function add(){
  if(input.value === ''){
    alert('Write the text')
  }else{
    let li = document.createElement('Li')
    li.innerHTML = input.value
    list.appendChild(li)
    let span = document.createElement('span')
    span.innerHTML = "\u00d7"
    li.appendChild(span)
    input.value = ''
  }
  save()
}

list.addEventListener('click', function(e){
  if(e.target.tagName === "LI"){
    e.target.classList.toggle('checked')
    save()
  }else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove()
    save()
  }
})

function save(){
  localStorage.setItem("data", ul.innerHTML)
}

function show(){
  ul.innerHTML = localStorage.getItem("data")
}
show()