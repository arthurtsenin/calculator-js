export default function changeTheme() {
  const togglerElement = document.querySelector("input");
  const bodeElement = document.querySelector("body");

  togglerElement.addEventListener("click", (event) => {
    if (event.target.checked) {
      bodeElement.classList.add("light");
    }

    if (!event.target.checked) {
      bodeElement.classList.remove("light");
    }
  });
}
