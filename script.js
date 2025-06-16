function minifyJS() {
  let input = document.getElementById("input").value;
  // Remove comments, whitespace, and line breaks
  let minified = input
    .replace(/\/\/.*|\/\*[\s\S]*?\*\//g, "") // Remove karenge comments
    .replace(/\s+/g, " ")                    // Collapse sara whitespace
    .replace(/\s*([{};:,])\s*/g, "$1");      // Trim  symbols

  document.getElementById("output").value = minified.trim();
}

function minifyCSS() {
  let input = document.getElementById("input").value;//READIng the vlue from text area input 
  // Remove comments, whitespace, and line breaks
  let minified = input
    .replace(/\/\*[\s\S]*?\*\//g, "")       // Remove CSS comments
    .replace(/\s+/g, " ")                   // Collapse whitespace
    .replace(/\s*([{};:,])\s*/g, "$1");     // Trim around symbols

  document.getElementById("output").value = minified.trim();//setting the value of textarea output to minified trim
}

function copyOutput() {
  const output = document.getElementById("output");
  output.select();// selects the text inside output vala textarea
  output.setSelectionRange(0, 99999); // Mobile support
  document.execCommand("copy");
  alert("Copied to clipboard!");
}


if ('serviceWorker' in navigator) {
  window.addEventListener('load', function () {
    navigator.serviceWorker.register('service-worker.js').then(function (registration) {
      console.log('ServiceWorker registered with scope:', registration.scope);
    }, function (err) {
      console.log('ServiceWorker registration failed:', err);
    });
  });
}

