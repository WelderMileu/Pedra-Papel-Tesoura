// Função seletora
const $ = e => document.querySelector(e);

// Variaveis dos nossos oponents
const ad1   = $("#adversario1");
const ad2   = $("#adversario2");
const pont1 = $(".points1");
const pont2 = $(".points2");

// Nossos items
const items = [

	{"name" : "http://localhost:3000/img/pedra.png"},
	{"name" : "http://localhost:3000/img/papel.png"},
	{"name" : "http://localhost:3000/img/tesoura.png"}

];

// Dados dos nossos oponents
const user = [

	{ "name": ad1, "points": pont1, "ponto":[] },
	{ "name": ad2, "points": pont2, "ponto":[] }		

];

export { $, items, user, ad1, ad2, pont1, pont2 };

