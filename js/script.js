document.addEventListener("DOMContentLoaded", function() {

    const clearResults = () => {
        ls.value = '';
        resultls.innerHTML = '';
        kl.value = '';
        resultkl.innerHTML = '';
    };

    const ls = document.getElementById('txt-ls');
    const btnls = document.getElementById('btn-ls');
    const resultls = document.getElementById('results-ls');

    const luas = () => {
        resultls.innerHTML = '';
        const sisi = parseFloat(ls.value);
        if (isNaN(sisi) || sisi <= 0) {
            resultls.innerHTML = `
            <p> Silahkan Masukkan Panjang Sisi Yang Valid </p>
            `;
        } else {
            const lsrumus = sisi * sisi;
            resultls.innerHTML = `
            <p> Rumus Luas Persegi Adalah : <strong> Sisi x Sisi </strong> </p>
            <p> Maka Luas Persegi : <strong> ${ls.value} </strong> x <strong> ${ls.value} </strong> = <strong> ${lsrumus} </strong></p>
            `;
            setTimeout(() => {
                clearResults();
            }, 300000);
        }
    };

    const kl = document.getElementById('txt-kl');
    const btnkl = document.getElementById('btn-kl');
    const resultkl = document.getElementById('results-kl');
    const keliling = () => {
        resultkl.innerHTML = '';
        const klp = parseFloat(kl.value);
        if (isNaN(klp) || klp <= 0) {
            resultkl.innerHTML = `
            <p> Silahkan Masukkan Panjang Sisi Yang Valid </p>
            `;
        } else {
            const klrumus = 4 * klp;
            resultkl.innerHTML = `
            <p> Rumus Keliling Persegi Adalah : <strong> 4 x Sisi </strong> </p>
            <p> Maka Keliling Persegi : <strong> 4 </strong> x <strong> ${kl.value} </strong> = <strong> ${klrumus} </strong> </p>
            `;
            setTimeout(() => {
                clearResults();
            }, 300000);
        }
    };
    btnls.onclick = luas;
    btnkl.onclick = keliling;
    ls.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            luas();
        }
    });
    kl.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            keliling();
        }
    });
})