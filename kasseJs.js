var h;
var b;
var l;

function konverter(){
	
	h = parseFloat(document.kasse.hoejde.value); //overs�t det indtastede til tal
	b = parseFloat(document.kasse.bredde.value); //overs�t det indtastede til tal
	l = parseFloat(document.kasse.laengde.value); //overs�t det indtastede til tal
   var enhed= document.kasse.enhedHoejde.value;
	if(enhed=="cm") //cm
		h=h*0.01;
	if (enhed=="mm") //mm	
		h=h*0.001;	
}

function areal() {
	konverter();
	var oAreal=2*(h*b +b*l+h*l);
	document.kasse.overfladeAreal.value= oAreal;
}

function volume(){
	konverter();	
	var vol = h*b*l;
	document.kasse.volumen.value =vol;
}	