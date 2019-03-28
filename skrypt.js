//alert("Hej, Zagrajmy w chinczyka");
function dragstart_handler(ev) {
    ev.dataTransfer.setData("text/plain", ev.target.id);
    ev.dataTransfer.dropEffect = "move";
}
function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move"
}
function drop_handler(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text/plain");
    ev.target.appendChild(document.getElementById(data));
}
function kostka()
{
    obrazki= new Array ("kostkazdj/wyn1.jpg" , "kostkazdj/wyn2.jpg" , "kostkazdj/wyn3.jpg" , "kostkazdj/wyn4.jpg", "kostkazdj/wyn5.jpg", "kostkazdj/wyn6.jpg")
    rzuty = obrazki.length
    losowanie=Math.floor(Math.random() * rzuty)
    document.obra.src=obrazki[losowanie]
}