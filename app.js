function k()
{
    var tas=document.getElementById("task").value;
    var dat=document.getElementById("date").value;

    var node = document.createElement('li');
    var dlt=document.createElement('button');
    var done=document.createElement('button');
    node.appendChild(document.createTextNode(dat+" "+tas));
    dlt.appendChild(document.createTextNode("Delete"));
    done.appendChild(document.createTextNode("Done"));
    document.querySelector('ul').appendChild(node);
    document.querySelector('ul').appendChild(dlt);
    document.querySelector('ul').appendChild(done);
    dlt.onclick=function()
    {
        node.remove();
        dlt.remove();
        done.remove();
    }
    done.onclick=function()
    {
        node.style.color="green";
        node.style.textDecoration="line-through";

    }
}
document.getElementById("task")
    .addEventListener("keyup", function(event) {
    event.preventDefault();
    if (event.keyCode=== 13) {
        document.getElementById("add").click();
    }
});