//alert()

let nombre = prompt("ingresa tu nombre")
alert("Hola: " + nombre + "!!")
alert(nombre +" " + "me llamo el señor X y hoy me presento a vos para que conmigo volemos la imaginacion juntos , ya como te podras imaginar supongo que sabes de que se trata esto , pero si no te explico , a lo largo de nuestra vida o en algun momento nos preguntamos si exsistia HOGWARTS y que pasaria si cursariamos ahi ( ya en hogwarts mi primer pregunta seria si JS seria mas facil con magia jaja), asi que hoy te invito a que vivamos esta pequeña experiencia y antes de empezar te voy dar el primer regalo")
;
let varita = parseFloat(prompt("ingresa tu año de nacimiento"));
if((varita >= 1980)&& (varita <=1990)){
    alert("tu varita es la de sauco felicidades!!!!!!")
}else if((varita >=1990)&&(varita <=2000)){
    alert("tu varita es de fenix felicidades!!!!!")
}else if((varita >= 2000)&& ( varita <=2010)){
    alert("tu varita es de cristal felicidades!!!!!")
}else{
    alert("tu varita es de madera felicidades!!!!!")
}

alert("ya que tuviste tu primer regalo ahora te invito a que viajemos juntos, asi que prepara tu mochila , la varita y dejate llevar")

let continuar =prompt("estas listo ??(si estoy listo / todavia no)");
let preparado = "si estoy listo";
if (continuar == preparado) {
    alert ("VAMOS!!!!");
} else{
    alert ("segui preparandote");

}
continuar =prompt("estas listo ??(si estoy listo / todavia no)");


alert("BIENVENIDOS A HOGWARTS")
alert("llego el momento de saber cual es nuestra casa")
let casa = Math.ceil(Math.random()*4);
    switch(casa) {
    case 1:
        alert("tu casa es : Gryffindor");
        alert("Gryffindor es una de las cuatro casas del Colegio Hogwarts de Magia y Hechicería, fundada por Godric Gryffindor. Su animal emblemático es el león y sus colores son el rojo escarlata y el dorado. Las principales características de los Gryffindor son el coraje y la caballerosidad.")
        break;

    case 2:
        alert("tu casa es :Slytherin");
        alert("Es una de las cuatro casas del Colegio Hogwarts de Magia y Hechicería, fundada por Salazar Slytherin. Al establecer la casa, Salazar instruyó al Sombrero Seleccionador para que seleccionara a los estudiantes que tenían las características particulares que él valoraba más. Esas características incluyen: astucia, ingenio y ambición.")
        break;

    case 3:
        alert("tu casa es : Hufflepuff");
        alert(" es una de las cuatro casas del Colegio Hogwarts de Magia y Hechicería. Su fundadora es la bruja medieval Helga Hufflepuff.Hufflepuff es la más inclusiva de las cuatro casas; el trabajo duro, la paciencia, la amistad y la honestidad son sumamente necesarias para ser miembros. Su animal emblemático es el tejón[3] y sus colores son el amarillo y negro.")
        break;
     
    case 4 :
        alert("tu casa es Ravenclaw");
        alert("es una de las cuatro casas que componen el Colegio Hogwarts de Magia y Hechicería, fundada por Rowena Ravenclaw. Los miembros de esta casa se caracterizan por su ingenio, aprendizaje y sabiduría. El símbolo animal emblemático es el águila, y el azul y el bronce son sus colores.")
        break;  
}

alert("dado que ya sabes cual es tu casa que te parece, ir a recorrer la escuela")

let recorrido = prompt("tenemos 3 lugares posibles:sauce boxeador, salon de clases,ver practica de un partido de quiddick. Donde queres ir?(vamos al sauce/vamos a aprender un poco/vamos a practicar)");
let sauce = "vamos al sauce"
let salon = "vamos a aprender un poco"
let partido = "vamos a practicar"
    switch(recorrido){
    case sauce:
        alert("lamentablemente el sauce estaba agresivo y nos mando al hospital");
        break;
    case salon:
        alert("vamos a aprender algunos hechizos");
        alert("aprendiste hechizos como: abada kadabra y otros mas....");
        let salon2 = prompt("queres praticar lo aprendido?(a practicar/ todavia no estoy listo)");
        let practiquemos="a practicar";
        if(salon2==practiquemos){
            alert("asi se habla");
        }else {
            alert("segui aprendiendo")
        }
        break;
     case partido:("por no saber usar una escoba sales lastimado");
     break;
     default:
         alert("vamos decidite");
         recorrido = prompt("tenemos 3 lugares posibles:sauce boxeador, salon de clases,ver practica de un partido de quiddick. Donde queres ir?(vamos al sauce/vamos a aprender un poco/vamos a practicar)");
         break;      
}





