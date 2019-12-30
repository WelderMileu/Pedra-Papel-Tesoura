import { $, items, user, ad1, ad2, pont1, pont2 } from "./variaveis.js";

// Sorteando os items para os oponents
const oponent =  event  => {

	const limited = items.length;
	const sorteio = Math.floor(Math.random() * limited);
	event.src = items[sorteio].name;

};

// Comparando os items
const compare = ({ img1, item1, img2, item2, usuario, pontos }) => {
	if (img1 ===  item1 && img2 === item2 ) {

		usuario.ponto.push(1);

		if (usuario.ponto.length < 10) {
			pontos.innerHTML = "0" + usuario.ponto.length;
		} else {
			pontos.innerHTML = usuario.ponto.length;
		}

	}
}

// Validadando os items dos oponents
const validate = () => {
	const pedra   = items[0].name;
	const papel   = items[1].name;
	const tesoura = items[2].name; 	

	// Oponent 1
	compare({
		img1: ad1.src,
		item1: pedra,
		img2: ad2.src,
		item2: tesoura,
		usuario: user[0],
		pontos: pont1
	});

	compare({
		img1: ad1.src,
		item1: papel,
		img2: ad2.src,
		item2: pedra,
		usuario: user[0],
		pontos: pont1
	});

	compare({
		img1: ad1.src,
		item1: tesoura,
		img2: ad2.src,
		item2: papel,
		usuario: user[0],
		pontos: pont1
	});

	// Oponent 2
	compare({
		img1: ad2.src,
		item1: pedra,
		img2: ad1.src,
		item2: tesoura,
		usuario: user[1],
		pontos: pont2
	});

	compare({
		img1: ad2.src,
		item1: papel,
		img2: ad1.src,
		item2: pedra,
		usuario: user[1],
		pontos: pont2
	});

	compare({
		img1: ad2.src,
		item1: tesoura,
		img2: ad1.src,
		item2: papel,
		usuario: user[1],
		pontos: pont2
	});

	// Teste
	console.log(ad1.src === "http://localhost:3000/img/pedra.png");
}

export { oponent, validate };
