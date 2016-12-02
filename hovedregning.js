var tal1;
var tal2;
function nyeTal() // Genererer de nye tal, og ligger dem ind i tekst felterne
{
	tal1= Math.floor((Math.random()*10)+1); // Genererer et tal fra 0 til 10
	tal2 = Math.floor((Math.random()*10)+1);
	document.test.regnestykke.value = tal1 +" * " +tal2;
	document.test.facit.value ="";
}

var rigtige = localStorage.getItem("rigtige_gemt"); // Sætter en variabel der har tallet med de rigtige som er gemte
var forkerte = localStorage.getItem("forkerte_gemt"); // Samme som ovenstående, men bare med forkerte

function tjek() 
{
	var svar = parseInt(document.test.facit.value); // Laver var med hvad brugeren indtaster
	if(svar == tal1*tal2) // Tjekker om svaret er rigtigt
	{
		document.test.kommentar.value = "rigtigt";
		rigtige++; // Tæller var'en rigtige op
		
		
	}  
	else 
	{ 
		document.test.kommentar.value = "forkert";
	}
	nyeTal(); // Genererer nye tal
	//score();
	//var reset_status = window.setTimeout("status_reset()", 5000);	// Laver en timer, så efter 5 sekunder tømmer den kommentarfeltet
}

function status_reset()
{
	document.getElementById("kommentar").innerHTML = ""; // Sletter kommentaren
}

function gemte_sager() // Bliver kørt onLoad sammen med nytal(), for at tjekke om der er nogle gemte rigtige og forkerte
{
	document.getElementById("rigtige").innerHTML = localStorage.getItem("rigtige_gemt");
	document.getElementById("forkerte").innerHTML = localStorage.getItem("forkerte_gemt");

}

function reset_gemt() // Resetter de gemt værdier
{
	localStorage.removeItem("rigtige_gemt"); // Fjerner alle gemte rigtige
	localStorage.removeItem("forkerte_gemt"); // Fjerner alle gemte forkerte
	
	location.reload(); // Reloader hjemmesiden, for ellers kan den ikke helt fjerne det
}

function score()
{	
	document.getElementById("score").value = rigtige - forkerte; // Laver en score ud fra rigtige minus forkerte.
}