let timeout;

function myFunction() {
  timeout = setTimeout(alertFunc, 1000);
}

function alertFunc() {
  alert("Hello!");
}
