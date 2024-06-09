const pics = [1, 2, 3, 4, 5, 6]
const thumb = document.getElementById("thumbnails")
let selectedIndex = 0

const select = (n) => {
  selectedIndex = n
  document.querySelectorAll("#thumbnails img").forEach((el, i) => {
    if (i == selectedIndex) {
      el.className = "selectedCar"
      document.getElementById("selectedImage").src = el.src
    } else {
      el.classList.remove("selectedCar")
    }
  })
}

pics.forEach((p, i) => {
  let img = new Image()
  img.src = `images/${p}.jpg`
  img.addEventListener("click", () => {
    select(i)
  })
  thumb.appendChild(img)
})

select(0)

setInterval(() => {
  let m = selectedIndex === pics.length - 1 ? 0 : selectedIndex + 1
  select(m)
}, 2000)
