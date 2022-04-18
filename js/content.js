function showColor(val){
    var child1=document.getElementById("select_box1");
    var child2=document.getElementById("select_box2");
    var child3=document.getElementById("select_box3");
    child1.style.border="none";
    child2.style.border="none";
    child3.style.border="none";
    var box=document.getElementById(val);
    box.style.borderTop="1px solid rgb(38,38,38)";
}
function showpopup(){
    var show=document.getElementById("popup_layer");
    show.style.display="block";
    upload();

}
function hidepopup(){
    var hide=document.getElementById("popup_layer");
    hide.style.display="none";
}
/* 이미지 업로드 */
function upload(){
    var uploadimg=document.getElementById("popup_box");
    uploadimg.addEventListener('dragenter', function(e){
    });
    uploadimg.addEventListener('dragover',function(e){
        e.preventDefault();
    })
    uploadimg.addEventListener('dragleave',function(e){
    })
    uploadimg.addEventListener('drop',function(e){
        e.preventDefault();

        var image = e.dataTransfer.files;
        console.dir(image);
    });
}

