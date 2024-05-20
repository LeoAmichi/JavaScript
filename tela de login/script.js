function final() {
    var senha = document.getElementById("senha");
    var ver = document.getElementById("hidden");
    if (senha.type == "password") {
      senha.type = "text";
      ver.textContent = "Esconder";
    } else {
      senha.type = "password";
      ver.textContent = "Mostrar";
    }
  }
  
  function dados() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    if (senha === "" || email === ""){
      window.alert ('Insira seus dados corretamente');
    }
    else {
      window.alert(`SEUS DADOS \nEmail: ${email} \nSenha: ${senha}`);
    }
  }
  
  function dados2() {
    var email2 = document.getElementById("email").value;
    var senha2 = document.getElementById("senha").value;
    var nome2 = document.getElementById("nome").value;
    var data2 = document.getElementById("data").value;
    if (senha2 === "" || email2 === "" || nome2 === "" || data2 === ""){
      window.alert ('Insira seus dados corretamente');
    }
    else {
      window.alert(`SEUS DADOS CADASTRADOS \nNome: ${nome2} \nData de nascimento: ${data2} \nEmail: ${email2} \nSenha: ${senha2}`);
    }
  }
  
  document.getElementById("clique").onclick = function() {
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    if (senha === "" || email === ""){
      window.alert ('Insira seus dados corretamente');
    }
    else {
      window.alert(`SEUS DADOS \nEmail: ${email} \nSenha: ${senha}`);
    }
  };
  
  
