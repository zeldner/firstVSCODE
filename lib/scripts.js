// common row
const addRow = (container, content) => {
  const row = `<div class="row">${content}</div>`
  container.insertAdjacentHTML("beforeend", row)
}

// monitor row
const addMonitor = (container, text) => {
  let t = text ?? ""
  const monitor = `<div id="monitor">${t}</div>`
  addRow(container, monitor)
}

// button
const button = (text) => {
  let c = text === "calculate" ? "wide" : ""
  return `<div class="d-btn ${c}">${text}</div>`
}

// buttons
const addButtons = (container, nums) => {
  const closingDiv = '<div style="clear:both"></div>'
  const btnHTML = nums.map((n) => button(n)).join("") + closingDiv
  addRow(container, btnHTML)
}

// button actions
const click = (event) => {
  let monitor = document.getElementById("monitor")
  let bac = monitor.innerText.trim()
  let a = event.target.innerText
  console.log(a)
  if (a === "clear") {
    monitor.innerText = ""
  } else if (a === "calculate") {
    monitor.innerText = bac + "=" + eval(bac)
  } else {
    monitor.innerText += a
  }
}

// render all
const render = (container,labels)=>{
  addMonitor(container)
  addButtons(container,labels)
  document.querySelectorAll('.d-btn').forEach(el => el.addEventListener('click', click))
}

// create
const calcContainer = document.getElementById("app")
const buttonLabels = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '*', '/', '**', 'calculate', 'clear']
render(calcContainer,buttonLabels)