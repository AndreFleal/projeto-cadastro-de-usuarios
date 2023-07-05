const cadastros = [];

    function cadastrarUsuario() {
        const nomeInput = document.querySelector("#nomeInput");
        const idadeInput = document.querySelector("#idadeInput");
        const emailInput = document.querySelector("#emailInput");
        const senhaInput = document.querySelector("#senhaInput");
      
      const nome = nomeInput.value.trim();
        const idade = idadeInput.value.trim();
        const email = emailInput.value.trim();
        const senha = senhaInput.value.trim();

       
        if ([nome, idade, email, senha].includes("")){
          alert("Complete todos os campos")
          return;
        }

        

      const usuario = {
        nome,
        idade,
        email,
        senha
      };

      cadastros.push(usuario);
      exibirMensagem("Usuário cadastrado com sucesso!");

      nomeInput.value = "";
      idadeInput.value = "";
      emailInput.value = "";
      senhaInput.value = "";
    }

    function exibirCadastros() {
      let mensagem = "Lista de usuários cadastrados:\n\n";

      cadastros.forEach((usuario, indice) => {
        mensagem += `Usuário ${indice + 1}:\n`;
        mensagem += `Nome: ${usuario.nome}\n`;
        mensagem += `Idade: ${usuario.idade}\n`;
        mensagem += `Email: ${usuario.email}\n\n`;
      });

      exibirMensagem(mensagem);
    }

    function exibirMensagem(mensagem) {
      alert(mensagem);
    }