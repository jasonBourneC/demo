window.onload=function () {
    var index=0,
        timer=null,
        main=document.getElementById("main"),
        img=document.getElementsByClassName("banner-slide"),
        menus=document.getElementsByClassName("menu-item");




    function slideImg() {
        main.onmouseover = function () {
            if(timer) clearInterval(timer);
        };
        main.onmouseout= function () {
            timer=setInterval(function () {
                index++;
                if(index>=img.length){
                    index=0
                }
                changeImg()
            },1000);

        };
        main.onmouseout();

        for(var j=0;j<img.length;j++){
            menus[j].id=j;
            menus[j].onclick=function () {
                index=this.id;
                changeImg();
            }
        }
    }
    slideImg();

    function changeImg() {
        for(var i=0;i<img.length;i++){
            img[i].style.display="none";
            menus[i].className="menu-item";
        }
        img[index].style.display="block";
        menus[index].className="menu-item menu-item-active";
    }
};

