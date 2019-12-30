"use strict";

import { $, user } from "./variaveis.js";
import { oponent, validate } from "./jogo.js";

(function(){

	$(".btn").addEventListener("click", function() {
		
		// Sorteando os items para os oponents
		oponent(user[0].name);
		oponent(user[1].name);

		// Função de validação dos items dos oponents
		validate();
	});
	
})();




