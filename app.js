function k()
{
    var tas=document.getElementById("task").value;
    var dat=document.getElementById("date").value;

    var node = document.createElement('li');
    var dlt=document.createElement('button');
    var done=document.createElement('button');
    node.appendChild(document.createTextNode(dat+"               "+tas));
    dlt.appendChild(document.createTextNode("Delete"));
    // dlt.style.margin="5px";
    done.appendChild(document.createTextNode("Done"));
    document.querySelector('ul').appendChild(node);
    document.querySelector('ul').appendChild(dlt);
    document.querySelector('ul').appendChild(done);
    dlt.onclick=function()
    {
        node.remove();
        dlt.remove();
        done.remove();
        // this.parentElement.removeChild(this);
    }
    done.onclick=function()
    {
        node.style.color="green";
        node.style.textDecoration="line-through";

    }
}
