document$.subscribe(() => {
  hljs.highlightAll();
});


function expandSubField(btn) {
  const MESSAGES = {
    "message": "child attributes",
    "enum": "enum values"
  }

  const type = btn.getAttribute("data-sub-type");

  if(!type) {
    return;
  }

  const typeMessage = MESSAGES[type];
  
  let expandContainer = btn.parentElement.querySelector(".proto-field-sub-child");
  if(!expandContainer) {
    console.log("Btn has nothing to expand into!");
    return;
  }

  if(expandContainer.classList.contains("hidden")) {
    expandContainer.classList.remove("hidden");
    btn.innerText = "Hide " + typeMessage;
  } else {
    expandContainer.classList.add("hidden");
    btn.innerText = "Show " + typeMessage;
  }
}
