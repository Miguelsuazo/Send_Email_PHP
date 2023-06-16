//Form
const formu = document.getElementById('form-data');

// Elements and buttons
const txtButtArea = formu.querySelector('span');
const buttonSend = formu.querySelector('button');

formu.onsubmit = (e) => {
    e.preventDefault();// To prevent send the form
    txtButtArea.style.display = 'block';


    let xhr = new XMLHttpRequest();// Creamos obj para obtener la información
    xhr.open('POST', 'php.php', true);

    xhr.onload = () => {
        if (xhr.readyState == 4 && xhr.status == 200) { // 
            let response = xhr.response;

            if (response.indexOf("Debe ingresar un email y escribir su mensaje") != -1 || response.indexOf("Debe ingresar un email valido") != -1 || response.indexOf("Lo sentimos, en estos momentos no podemos enviar tu mensaje") != -1) {
                txtButtArea.style.color = "red";
            } else {
                formu.reset();
                txtButtArea.innerText = 'Enviando..'
                setTimeout(() => {
                    txtButtArea.style.display = "none";
                }, 3000);
            }

            txtButtArea.innerText = xhr.response;
        }
    }
    let formatData = new FormData(formu);
    xhr.send(formatData);//Enviamos los los campos hacia php.
}

buttonSend.addEventListener('click', () => {

})

