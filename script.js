function ligarVermelho() {
    resetLights();
    document.getElementById('vermelho').style.opacity = '1';
}

function ligarAmarelo() {
    resetLights();
    document.getElementById('amarelo').style.opacity = '1';
}

function ligarVerde() {
    resetLights();
    document.getElementById('verde').style.opacity = '1';
}

function desligar() {
    resetLights();
}

function resetLights() {
    document.querySelectorAll('.luz').forEach(light => {
        light.style.opacity = '0';
    });
}