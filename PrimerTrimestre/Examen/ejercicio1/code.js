class Vista{
    constructor(control){
        this.control = control;

    }
    crearTabla(t1,t2,f1,f2){
        body.innerHTML +=
            '<table>' +
            '<tr>'+ t1 +'</tr>' +
            '<td>'+ f1 +'</td>' +
            '<tr>'+ t2 +'</tr>' +
            '<td>'+ f3 +'</td>' +
            '</table>'
    }
}
class Modelo{
    constructor(control){
        this.control = control;
    }
    cargarXML(){
        var xhttp = new XMLHttpRequest();
        let classThis = this.control;
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                classThis.maquetarXML(this.responseText);
            }
        };
        xhttp.open("GET", "datos.xml", true);
        xhttp.send();
    }

}
class Controlador{
    constructor(){
        this.modelo = new Modelo(this);
        this.vista = new Vista(this);
    }
    maquetarXML(xml){
        this.crearTabla(xml.GetValue())

    }
}
window.onload = ()=>{
    var control = new Controlador();
    setTimeout(()=>{
        control.modelo.cargarXML();
    })

}