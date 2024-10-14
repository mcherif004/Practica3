if (Modernizr.fullscreen) {
    document.body.innerHTML += '<p>Tu navegador soporta fullscreen<p>'
} else {
    document.body.innerHTML += '<p>Tu navegador no soporta fullscreen<p>'
}

if (Modernizr.gamepads) {
    document.body.innerHTML += '<p>Tu navegador soporta gamepads<p>'
} else {
    document.body.innerHTML += '<p>Tu navegador no soporta gamepads<p>'
}

if (Modernizr.canvas) {
    document.body.innerHTML += '<p>Tu navegador soporta canvas<p>'
} else {
    document.body.innerHTML += '<p>Tu navegador no soporta canvas<p>'
}