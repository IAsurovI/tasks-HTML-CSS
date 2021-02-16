function blockView() {

    var uList = document.getElementById("menu_list");

    if(uList.className == "list_inline"||uList.className == "list_new"||uList.className == "list_newtwo")
    {
        uList.className = "list_block";
    }
    console.log("block");
}

function inlineView() {

    var uList = document.getElementById("menu_list");

    if(uList.className == "list_block"||uList.className=="list_new"||uList.className == "list_newtwo")
    {
        uList.className = "list_inline";
    }

    console.log("inline");

}

function newfunc(){
    var uList = document.getElementById("menu_list");
    if(uList.className == "list_block"||uList.className == "list_inline"||uList.className == "list_newtwo")
    {
        uList.className = "list_new";
    }
    console.log("newfunc");
}

function newfunctwo(){
    var uList = document.getElementById("menu_list");
    if(uList.className == "list_block"||uList.className == "list_inline"||uList.className == "list_new")
    {
        uList.className = "list_newtwo";
    }
    console.log("newfunctwo");
}

