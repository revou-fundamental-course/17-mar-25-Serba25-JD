document.addEventListener("DOMContentLoaded", function() {

    const clearResults = () => {
        // Reset Value Persegi
        lsp.value = '';
        resultlsp.innerHTML = '';
        kl.value = '';
        resultkl.innerHTML = '';
        // Reset Value Persegi Panjang
        lsppp.value = '';
        lsppl.value = '';
        resultlspp.innerHTML = '';
        klpp.value = '';
        klpl.value = '';
        resultklp.innerHTML = '';
    };

    // Function Persegi
    const choosep = document.getElementById('choose-p');
    const pElement = document.getElementById('content-p');
    choosep.addEventListener('change', function() {
        const selectP = choosep.value;
        pElement.innerHTML = '';
        if (selectP === "luasp") {
            pElement.innerHTML = `
            <input type="text" id="txt-lsp" placeholder="Masukkan angka disini...">
            <button id="btn-lsp"> Hitung </button>
            <div class="row-content" id="results-lsp">
            `;
            const lsp = document.getElementById('txt-lsp');
            const btnlsp = document.getElementById('btn-lsp');
            const resultlsp = document.getElementById('results-lsp');
            const luasp = () => {
                resultlsp.innerHTML = '';
                const sisi = parseFloat(lsp.value);
                if (isNaN(sisi) || sisi <= 0) {
                    resultlsp.innerHTML = `
                    <p class="ubuntu-reguler"> Silahkan Masukkan Panjang Sisi Yang Valid </p>
                    `;
                } else {
                    const lsprumus = sisi * sisi;
                    resultlsp.innerHTML = `
                    <p class="ubuntu-reguler"> Rumus : Sisi x Sisi </p>
                    <p class="ubuntu-reguler"> Maka Luas : ${lsp.value} x ${lsp.value} = ${lsprumus}</p>
                    `;
                    setTimeout(() => {
                        clearResults();
                    }, 300000);
                }
            };
            btnlsp.onclick = luasp;
            lsp.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    luasp();
                }
            });
        } else 
        if (selectP === "kelilingp") {
            pElement.innerHTML = `
            <input type="text" id="txt-klp" placeholder="Masukkan angka disini...">
            <button id="btn-klp"> Hitung </button>
            <div class="row-content" id="results-klp">
            `;
            const kl = document.getElementById('txt-klp');
            const btnkl = document.getElementById('btn-klp');
            const resultkl = document.getElementById('results-klp');
            const kelilingp = () => {
                resultkl.innerHTML = '';
                const klp = parseFloat(kl.value);
                if (isNaN(klp) || klp <= 0) {
                    resultkl.innerHTML = `
                    <p class="ubuntu-reguler"> Silahkan Masukkan Panjang Sisi Yang Valid </p>
                    `;
                } else {
                    const klrumus = 4 * klp;
                    resultkl.innerHTML = `
                    <p class="ubuntu-reguler"> Rumus : 4 x Sisi </p>
                    <p class="ubuntu-reguler"> Maka Keliling : 4 x ${kl.value} = ${klrumus} </p>
                    `;
                    setTimeout(() => {
                        clearResults();
                    }, 300000);
                }
            };
            btnkl.onclick = kelilingp;
            kl.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    kelilingp();
                }
            });
        }
    })

    // Function Persegi Panjang
    const choosepp = document.getElementById('choose-pp');
    const ppElement = document.getElementById('content-pp');
    choosepp.addEventListener('change', function() {
        const selectPp = choosepp.value;
        ppElement.innerHTML = '';
        if (selectPp === "luaspp") {
            ppElement.innerHTML = `
            <input type="text" id="txt-lspp-p" placeholder="Masukkan panjang disini...">
            <input type="text" id="txt-lspp-l" placeholder="Masukkan lebar disini...">
            <button id="btn-lspp"> Hitung </button>
            <div class="row-content" id="results-lspp">
            `;
            const lsppp = document.getElementById('txt-lspp-p');
            const lsppl = document.getElementById('txt-lspp-l');
            const btnlspp = document.getElementById('btn-lspp');
            const resultlspp = document.getElementById('results-lspp');
            const luaspp = () => {
                resultlspp.innerHTML = '';
                const lsPPpanjang = parseFloat(lsppp.value);
                const lsPPlebar = parseFloat(lsppl.value);
                if (isNaN(lsPPpanjang) || lsPPpanjang <= 0 || isNaN(lsPPlebar) || lsPPlebar <= 0 ) {
                    resultlspp.innerHTML = `
                    <p class="ubuntu-reguler"> Silahkan Masukkan Panjang dan Lebar Sisi Yang Valid </p>
                    `;
                } else {
                    const lspplrumus = lsPPpanjang * lsPPlebar;
                    resultlspp.innerHTML = `
                    <p class="ubuntu-reguler"> Rumus : Panjang x Lebar </p>
                    <p class="ubuntu-reguler"> Maka Luas : ${lsppp.value} x ${lsppl.value} = ${lspplrumus}</p>
                    `;
                    setTimeout(() => {
                        clearResults();
                    }, 300000);
                }
            };
            btnlspp.onclick = luaspp;
            lsppp.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    luaspp();
                }
            });
            lsppl.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    luaspp();
                }
            });
        } else 
        if (selectPp === "kelilingpp") {
            ppElement.innerHTML = `
            <input type="text" id="txt-klpp-p" placeholder="Masukkan panjang disini...">
            <input type="text" id="txt-klpp-l" placeholder="Masukkan lebar disini...">
            <button id="btn-klpp"> Hitung </button>
            <div class="row-content" id="results-klpp">
            `;
            const klpp = document.getElementById('txt-klpp-p');
            const klpl = document.getElementById('txt-klpp-l');
            const btnklp = document.getElementById('btn-klpp');
            const resultklp = document.getElementById('results-klpp');
            const kelilingpp = () => {
                resultklp.innerHTML = '';
                const klPPpanjang = parseFloat(klpp.value);
                const klPPlebar = parseFloat(klpl.value);
                if (isNaN(klPPpanjang) || klPPpanjang <= 0 || isNaN(klPPlebar) || klPPlebar <= 0 ) {
                    resultklp.innerHTML = `
                    <p class="ubuntu-reguler"> Silahkan Masukkan Panjang dan Lebar Sisi Yang Valid </p>
                    `;
                } else {
                    const klplrumus = 2 * (klPPpanjang + klPPlebar);
                    resultklp.innerHTML = `
                    <p class="ubuntu-reguler"> Rumus : 2 x (Panjang + Lebar) </p>
                    <p class="ubuntu-reguler"> Maka Keliling : 2 x (${klpp.value} + ${klpl.value}) = ${klplrumus} </p>
                    `;
                    setTimeout(() => {
                        clearResults();
                    }, 300000);
                }
            };
            btnklp.onclick = kelilingpp;
            klpp.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    kelilingpp();
                }
            });
            klpl.addEventListener('keydown', function(event) {
                if (event.key === 'Enter') {
                    kelilingpp();
                }
            });
        }
    });
})