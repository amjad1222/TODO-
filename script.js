
let input = document.getElementById("exampleFormControlInput1");
let taskList = document.getElementById("taskList");


let count = 6;


document.querySelectorAll(".form-check-input").forEach((checkbox) => {

 
  checkbox.addEventListener("change", function () {
    if (this.checked) {
      this.nextElementSibling.style.textDecoration = "line-through";
    } else {
      this.nextElementSibling.style.textDecoration = "none";
    }
  });
});

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter" && input.value.trim() !== "") {
    
    let div = document.createElement("div");
    div.className = "form-check mt-2";

    
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "form-check-input";
    checkbox.id = "check" + count;

    let label = document.createElement("label");
    label.className = "form-check-label";
    label.setAttribute("for", checkbox.id);
    label.innerText = input.value;

    checkbox.addEventListener("change", function () {
      if (this.checked) {
        label.style.textDecoration = "line-through";
      } else {
        label.style.textDecoration = "none";
      }
    });

   
    div.appendChild(checkbox);
    div.appendChild(label);

    taskList.appendChild(div);

    
    input.value = "";

    count++;
  }
});