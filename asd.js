var delay = 0;
const elements = document.getElementsByClassName("ui_actions_menu_item");
for (const element of elements) {
  if (String(element.getAttribute('onclick')).includes("Bookmarks.removeBookmark")) {
    setTimeout(function(){ 
      element.onclick();
      console.log("removed a bookmark");
    }, delay);
    delay = delay + 500;
  }
}