//Modo escuro ou claro
const body = document.querySelector('body');
const botaoAlterarModo = document.getElementById('btn-alterar-modo');
const ImgAlterarModo = document.getElementById('AlterarModo');
const imgConversor = document.getElementById('img-conversor');
const modoSalvo = localStorage.getItem('tema');

if (modoSalvo === 'modo-escuro') {
    body.classList.add('modo-escuro');

    ImgAlterarModo.src = 'img/modoclaro.png';
    ImgAlterarModo.alt = 'Icone do modo claro';

    imgConversor.src = 'img/img-conversor-modo-escuro.png';
    imgConversor.alt = 'imagem de conversão de moedas no modo escuro';
}

botaoAlterarModo.addEventListener('click', () => {
    body.classList.toggle('modo-escuro');
    if (body.classList.contains('modo-escuro')) {
        localStorage.setItem('tema', 'modo-escuro');
        ImgAlterarModo.src = 'img/modoclaro.png';
        ImgAlterarModo.alt = 'Icone do modo claro';
        imgConversor.src = 'img/img-conversor-modo-escuro.png';
        imgConversor.alt = 'imagem de conversão de moedas no modo escuro';
    } else {
        localStorage.setItem('tema', 'modo-claro');
        ImgAlterarModo.src = 'img/mododark.png';
        ImgAlterarModo.alt = 'Icone do modo escuro';
        imgConversor.src = 'img/img-conversor-modo-claro.png';
        imgConversor.alt = 'imagem de conversão de moedas no modo claro';
    }
});

//Alterar bandeiras

const converteDe = document.getElementById('convt-de');
const convertePara = document.getElementById('convt-para');
const iconeBandeiraDe = document.querySelector('.icone-bandeira-de');
const iconeBandeiraPara = document.querySelector('.icone-bandeira-para');
const bandeiras = {
    'BRL': {
        src: 'img/bandeira-brasil.png',
        alt: 'Bandeira do Brasil'
    },
    'USD': {
        src: 'img/bandeira-eua.png',
        alt: 'Bandeira dos Estados Unidos'
    },
    'EUR': {
        src: 'img/bandeira-espanha.png',
        alt: 'Bandeira da Espanha'
    },
    'GBP': {
        src: 'img/bandeira-reino-unido.png',
        alt: 'Bandeira do Reino Unido'
    }
};

converteDe.addEventListener('change', () => {
    const valorSelecionado = converteDe.value;
    if (valorSelecionado === 'BRL') {
        iconeBandeiraDe.src = bandeiras['BRL'].src;
        iconeBandeiraDe.alt = bandeiras['BRL'].alt;
    }
    else if (valorSelecionado === 'USD') {
        iconeBandeiraDe.src = bandeiras['USD'].src;
        iconeBandeiraDe.alt = bandeiras['USD'].alt;
    }
    else if (valorSelecionado === 'EUR') {
        iconeBandeiraDe.src = bandeiras['EUR'].src;
        iconeBandeiraDe.alt = bandeiras['EUR'].alt;
    }
    else if (valorSelecionado === 'GBP') {
        iconeBandeiraDe.src = bandeiras['GBP'].src;
        iconeBandeiraDe.alt = bandeiras['GBP'].alt;
    }
    else if (valorSelecionado === '') {
        iconeBandeiraDe.src = 'img/escolher-bandeira.png';
        iconeBandeiraDe.alt = 'Icone de escolher bandeira';
    }
});

convertePara.addEventListener('change', () => {
    const valorSelecionado = convertePara.value;
    if (valorSelecionado === 'BRL') {
        iconeBandeiraPara.src = bandeiras['BRL'].src;
        iconeBandeiraPara.alt = bandeiras['BRL'].alt;
    }
    else if (valorSelecionado === 'USD') {
        iconeBandeiraPara.src = bandeiras['USD'].src;
        iconeBandeiraPara.alt = bandeiras['USD'].alt;
    }
    else if (valorSelecionado === 'EUR') {
        iconeBandeiraPara.src = bandeiras['EUR'].src;
        iconeBandeiraPara.alt = bandeiras['EUR'].alt;
    }
    else if (valorSelecionado === 'GBP') {
        iconeBandeiraPara.src = bandeiras['GBP'].src;
        iconeBandeiraPara.alt = bandeiras['GBP'].alt;
    }
    else if (valorSelecionado === '') {
        iconeBandeiraPara.src = 'img/escolher-bandeira.png';
        iconeBandeiraPara.alt = 'Icone de escolher bandeira';
    }
});

//Api de conversão de moedas - https://www.exchangerate-api.com/ 
//conversão de moedas

async function carregarMoedas() {
    const valor = document.getElementById("valor").value;
    const de = document.getElementById("convt-de").value;
    const para = document.getElementById("convt-para").value;
    const BandeiraDe = document.querySelector('.bandeira-de');
    const BandeiraPara = document.querySelector('.bandeira-para'); 
    if (!de || !para) {
        alert("Por favor, selecione as moedas para conversão.");
        return;
    }
    else if (de === para) {
        alert("Por favor, selecione moedas diferentes para conversão.");
        return;
    }
    else if (!valor || valor <= 0) {
        alert("Por favor, insira um valor válido para conversão.");
        return;
    }

    const response = await fetch(`https://economia.awesomeapi.com.br/json/last/${de}-${para}`);
    const data = await response.json();
    const taxa = data[`${de}${para}`].bid;

    const resultado = valor * taxa;

    document.getElementById("valorInserido").innerText = `$${valor} ${de}`;
    BandeiraDe.src = bandeiras[de].src;
    BandeiraDe.alt = bandeiras[de].alt;
    document.getElementById("valorConvertido").innerText = `$${resultado.toFixed(2)} ${para}`;
    BandeiraPara.src = bandeiras[para].src;
    BandeiraPara.alt = bandeiras[para].alt;

    const mostrar = document.querySelectorAll('.resultado');
    mostrar.forEach(section => {
        section.classList.add("ativo");
    });
}

const btnConverter = document.getElementById('btn-converter');
btnConverter.addEventListener('click', carregarMoedas);


//Limpar campos

function Limpar() {
    document.getElementById("valor").value = "";
    document.getElementById("convt-de").value = "";
    document.getElementById("convt-para").value = "";
    iconeBandeiraDe.src = 'img/escolher-bandeira.png';
    iconeBandeiraDe.alt = 'Icone de escolher bandeira';
    iconeBandeiraPara.src = 'img/escolher-bandeira.png';
    iconeBandeiraPara.alt = 'Icone de escolher bandeira';
    const mostrar = document.querySelectorAll('.resultado');
    mostrar.forEach(section => {
        section.classList.remove("ativo");
    });
}

const btnLimpar = document.getElementById('btn-limpar');
btnLimpar.addEventListener('click', Limpar);