
function receber_dados(){
	// nome
	var nome = document.getElementById('nome').value;
	document.getElementById('destino_nome').innerHTML = nome;
	document.getElementById('footer_nome').innerHTML = nome;

	// email
	var email = document.getElementById('email').value;
	document.getElementById('destino_email').innerHTML = email;
	document.getElementById('footer_email').innerHTML = email;

	// nascimento
	var nascimento = document.getElementById('nascimento').value;
	document.getElementById('destino_nascimento').innerHTML = nascimento;
	document.getElementById('footer_nascimento').innerHTML = nascimento;

	// telefone
	var telefone = document.getElementById('telefone').value;
	document.getElementById('destino_telefone').innerHTML = telefone;
	document.getElementById('footer_telefone').innerHTML = telefone;
}