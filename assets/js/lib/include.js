const includeHTML = (cb) => {
  let $tags, elmnt, file, xhttp;
  $tags = document.getElementsByTagName("*");
  //   console.log($tags);

  Array.from($tags).forEach((z) => {
    elmnt = z;
    // console.log(elmnt.innerHTML);
    file = elmnt.getAttribute("include-html");
    // console.log(file);
    // console.log(this);

    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = () => {
        if (this.readyState == 4) {
          //   console.log(this.readyState);
          if (this.status == 200) elmnt.innerHTML = this.responseText;

          if (this.status == 404) elmnt.innerHTML = "Page not found.";

          elmnt.removeAttribute("include-html");

          includeHTML(cb);
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      return;
    }
  });
  //   console.log("done");
};
// includeHTML();
