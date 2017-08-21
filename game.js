	//variavel para controlar se alguem ja ganhou
	var gnd = 0;

	//variavel para os marcadores 
	var mk1 = 'X';
	var mk2 = 'O';

	//variavel para as cores dos marcadores 
	var mk1Color = '#FF0';
	var mk2Color = '#F0F';

	//configura cores iniciais
	changeColor();

	var r = Math.floor((Math.random() * 250) + 1);
	var g = Math.floor((Math.random() * 250) + 1);
	var b = Math.floor((Math.random() * 250) + 1);
	var st = 'rgb('+r+','+g+','+b+')';
	console.log(st);

	$('h3 , .btn-reset').css('color', st);

	// colocar na tela a escolha dos usuarios
	var a = 1; $('#jogador').text(mk1);
	$('td').click(function(){
		if(gnd == 0){
			if(a == 1){
				if($(this).text() == ''){
					$(this).text(mk1);
					$(this).addClass('animated rotateIn');
					a = 2; 
					$(this).css("color",mk1Color);
					$('#jogador').text(mk2);
				}			
			}else{
				if($(this).text() == ''){
					$(this).text(mk2);
					$(this).addClass('animated zoomIn');
					a = 1; 
					$(this).css("color",mk2Color);
					$('#jogador').text(mk1);
				}
			}
			pt();
		}else{
			limpar();
		}
	});	

	//computar a pontuação caso haja um ganhador
	function pt(){
		var j = verificar();
		if(j == 1){
			var k = $('#ptx').text();
			k = 1 + Number(k);
			console.log(k);
			$('#ptx').text(k);
			gnd = 1;
		}else if(j == 2){
			var k = $('#pto').text();
			k = 1 + Number(k);
			console.log(k);
			$('#pto').text(k);
			gnd = 1;
		}
	}

	//verificar se há um ganhador
	function verificar(){
		//linhas
		if($('#a1').text() == mk1 && $('#a2').text() == mk1 && $('#a3').text() == mk1){
			$('#vencedor').text('X Ganhou'); return 1;
		}else if($('#b1').text() == mk1 && $('#b2').text() == mk1 && $('#b3').text() == mk1){
			$('#vencedor').text('X Ganhou'); return 1;
		}
		else if($('#c1').text() == mk1 && $('#c2').text() == mk1 && $('#c3').text() == mk1){
			$('#vencedor').text('X Ganhou'); return 1;
		}

		//colunas
		else if($('#a1').text() == mk1 && $('#b1').text() == mk1 && $('#c1').text() == mk1){
			$('#vencedor').text('X Ganhou'); return 1;
		}else if($('#a2').text() == mk1 && $('#b2').text() == mk1 && $('#c2').text() == mk1){
			$('#vencedor').text('X Ganhou'); return 1;
		}
		else if($('#a3').text() == mk1 && $('#b3').text() == mk1 && $('#c3').text() == mk1){
			$('#vencedor').text('X Ganhou'); return 1;
		}

		//diagonal
		else if($('#a1').text() == mk1 && $('#b2').text() == mk1 && $('#c3').text() == mk1){
			$('#vencedor').text('X Ganhou'); return 1;
		}else if($('#a3').text() == mk1 && $('#b2').text() == mk1 && $('#c1').text() == mk1){
			$('#vencedor').text('X Ganhou'); return 1; 
		}


		//linhas == jogador O
		else if($('#a1').text() == mk2 && $('#a2').text() == mk2 && $('#a3').text() == mk2){
			$('#vencedor').text('O Ganhou'); return 2;
		}else if($('#b1').text() == mk2 && $('#b2').text() == mk2 && $('#b3').text() == mk2){
			$('#vencedor').text('O Ganhou'); return 2;
		}
		else if($('#c1').text() == mk2 && $('#c2').text() == mk2 && $('#c3').text() == mk2){
			$('#vencedor').text('O Ganhou'); return 2;
		}

		//colunas
		else if($('#a1').text() == mk2 && $('#b1').text() == mk2 && $('#c1').text() == mk2){
			$('#vencedor').text('O Ganhou'); return 2;
		}else if($('#a2').text() == mk2 && $('#b2').text() == mk2 && $('#c2').text() == mk2){
			$('#vencedor').text('O Ganhou'); return 2;
		}
		else if($('#a3').text() == mk2 && $('#b3').text() == mk2 && $('#c3').text() == mk2){
			$('#vencedor').text('O Ganhou'); return 2;
		}

		//diagonal
		else if($('#a1').text() == mk2 && $('#b2').text() == mk2 && $('#c3').text() == mk2){
			$('#vencedor').text('O Ganhou'); return 2;
		}else if($('#a3').text() == mk2 && $('#b2').text() == mk2 && $('#c1').text() == mk2){
			$('#vencedor').text('O Ganhou'); return 2;
		}else{ 
			$('#vencedor').text('Ninguem Ganhou'); return 3;
		}
	}	

	//btn reiniciar
	function limpar(){
		$('td').each(function(){
			$(this).text('');
			$(this).removeClass('animated rotateIn zoomIn')
		});
		$('#vencedor').text('');
		gnd = 0;


	}

	$('#btnLimpar').click(function(){
		limpar();
	});

	$('#btn-zerar').click(function(){
		$('#ptx').text('0');
		$('#pto').text('0');
	});

	//escolha de cores
	$('.az').click(function(){
		if($(this).text() == mk1){
			mk1Color = '#00f';
			changeColor();
		}else if($(this).text() == mk2){
			mk2Color = '#00f';
			changeColor();
		}	
	});	

	$('.am').click(function(){
		if($(this).text() == mk1){
			mk1Color = '#ff0';
			changeColor();
		}else if($(this).text() == mk2){
			mk2Color = '#ff0';
			changeColor();
		}
	});	

	$('.vm').click(function(){
		if($(this).text() == mk1){
			mk1Color = '#f00';
			changeColor();
		}else if($(this).text() == mk2){
			mk2Color = '#f00';
			changeColor();
		}
	});	

	$('.rs').click(function(){
		if($(this).text() == mk1){
			mk1Color = '#f0f';
			changeColor();
		}else if($(this).text() == mk2){
			mk2Color = '#f0f';
			changeColor();
		}
	});	

	function changeColor(){
		$('#jg1').css('color', mk1Color);
		$('#jg2').css('color', mk2Color);
	}