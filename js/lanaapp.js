let app;
let lana;
let keys = {};
let keysDiv;
window.onload = () => {
    app = new PIXI.Application(
        {
            width: 1280,
            height: 720,
            transparent: true
        }
    );
    document.body.appendChild(app.view);
    app.loader
        .add('lana', 'assets/pixi.sprites/lana.png');
    app.loader.onProgress.add(showProgress);
    app.loader.onComplete.add(onLoading);
    app.loader.onError.add(showError);
    app.loader.load();
    // keyboard thingies
    window.addEventListener('keyup', keyTrue);
    window.addEventListener('keydown', keyFalse);
    app.ticker.add(KEYBOARD);
    keysDiv = document.querySelector("#keys");
}
showProgress = (l) => {
    console.log(l.progress);
}
onLoading = (l) => {
    console.log('Heyyyyy :3');
    // lana the protogen object
    lana = new PIXI.Sprite.from(app.loader.resources.lana.texture);
    lana.x = app.view.width / 2;
    lana.y = app.view.height / 2;
    lana.anchor.set(0.5);
    app.stage.addChild(lana);
}
showError = (l) => {
    console.error("Oh noo QwQ: " + l.message);
}
keyTrue = (l) => {
    console.log(l.keyCode);
    keys[l.keyCode] = false
}
keyFalse = (l) => {
    console.log(l.keyCode);
    keys[l.keyCode] = true
}
KEYBOARD = () => {
    keysDiv.innerHTML = JSON.stringify(keys);
    // W key //
    if (keys['87']) {
        lana.y -= 5;
    }
    // S key //
    if (keys['83']) {
        lana.y += 5;
    }
    // A key //
    if (keys['65']) {
        lana.x -= 5;
    }
    // D key //
    if (keys['68']) {
        lana.x += 5;
    }
}
