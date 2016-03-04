function validaSubmeter() {
    var nome = document.getElementById("nome");
    var email = document.getElementById("email");
    var dtNasc = document.getElementById("dtNasc");
    var cpf = document.getElementById("cpf");
    var telefone = document.getElementById("telefone");
    var senha = document.getElementById("senha");

    var submete = true;

    var regExpNome = new RegExp('[A-Za-z ]{6,15}$');

    var resultado = regExpNome.test(nome.value);

    if (!resultado) {
        window.alert("Nome deve possuir apenas digitos!");
        submete = false;
    }

    var regExpDtNasc = /(^[\w]{2})+\/([\w]{2})+\/([\w]{4}$)/;

    if (!(dtNasc.value.search(regExpDtNasc) != -1)) {
        window.alert("Data de Nascimento deve ter o formato (XX/XX/XXXX)!");
        submete = false;
    }

    var regExpEmail = /([\w])+@+([\w])+.com.br/;

    if (!(email.value.search(regExpEmail) != -1)) {
        window.alert("E-mail deve ter o formato (.com.br)!");
        submete = false;
    }

    var regExpCpf = /(^[\w]{3})+.([\w]{3})+.([\w]{3})+-([\w]{2}$)/;
    var regExpCnpj = /(^[\w]{2})+.([\w]{3})+.([\w]{3})+\/([\w]{4})+-([\w]{2}$)/;

    if (!(cpf.value.search(regExpCpf) != -1)) {
        if (!(cpf.value.search(regExpCnpj) != -1)) {
            window.alert("CPF/CNPJ invalido!");
            submete = false;
        }
    }

    var regExpTelefone = /(^\([\w]{2}\))+([\w]{4})+-([\w]{4}$)/;
    var regExpTelefone2 = /(^\([\w]{2}\))+([\w]{5})+-([\w]{4}$)/;

    if (!(telefone.value.search(regExpTelefone) != -1)) {
        if (!(telefone.value.search(regExpTelefone2) != -1)) {
            window.alert("Telefone invalido!");
            submete = false;
        }
    }

    var regExpSenha = /(^[a-z]{3})+([\d]{3}$)/;

    if (!(senha.value.search(regExpSenha) != -1)) {
        window.alert("A senha deve ser composta por três letras seguidas de três números!");
        submete = false;
    }

    if (submete) {
        criaCookie(nome);
    }
}

function criaCookie(nome) {
    window.location.href = "tela2.html";

    document.cookie = "nome=" + nome.value + "; expires=Wed, 12 Dec 2017 00:00:00 UTC; path=/";
}

function removeCookie() {
    var cookie = document.cookie.toString();

    window.alert("Existe um cookie " + cookie);

    document.cookie = "nome=; expires=Wed, 01 Jan 1970 00:00:00 UTC; path=/";

    window.alert("Cookie apagado " + document.cookie.toString());
}
