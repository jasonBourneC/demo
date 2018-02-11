/**
 * Created by jasonbourne on 2017/12/12.
 */
//封装一个代替getElementById()的方法
function byId(id) {
    return typeof(id)==="string"?document.getElementById(id):id;

}


var index=0,
    timer=null,
    pics=byId("banner").getElementsByTagName("div"),
    dots=byId("dots").getElementsByTagName("span"),
    prev=byId("prev"),
    next=byId("next"),
    len=pics.length;
var menu=document.getElementsByClassName("menu-item");
var submenu=byId("hide");
var innerBox=document.getElementsByClassName("inner-box");
var menuContent=byId("menu-content");


function slideImg() {
    var main=byId("main");
    //鼠标滑过清楚定时器，离开继续
    main.onmouseover=function () {
        //清楚定时器
        if(timer) clearInterval(timer);
    };
    main.onmouseout=function () {
        timer=setInterval(function () {
            index++;
            if(index>=len){
                index=0;
            }
            //切换图片
            changeImg();
        },2000);
    };

    //自动触发鼠标离开的时间
    main.onmouseout();


    //原点切换图片
    for(var j=0;j<len;j++){
        dots[j].id=j;
        dots[j].onclick=function () {
            index=this.id;
            changeImg();
        }
    }
    //按钮切换图片
    next.onclick=function () {
        index++;
        if(index>=len) index=0;
        changeImg();
    };
    prev.onclick=function () {
        index--;
        if(index<0 ) index=len-1;
        changeImg();
    };


    //导航菜单
    for(var m=0;m<menu.length;m++){
        menu[m].setAttribute("data-index",m);
        innerBox[m].style.display="none";
        menu[m].onmouseover=function () {
            var idx=this.getAttribute("data-index");
            for(var n=0;n<innerBox.length;n++){
                innerBox[n].style.display="none"
            }
            submenu.className="sub-menu";
            innerBox[idx].style.display="block"
        };
        menuContent.onmouseout=function () {
            submenu.className="sub-menu hide";
        };
        submenu.onmouseover=function () {
            submenu.className="sub-menu";
        };
        submenu.onmouseout=function () {
            submenu.className="sub-menu hide";
        };
    }


}

function changeImg() {
    for(var i=0;i<len;i++){
        pics[i].style.display="none";
        dots[i].className="";
    }
    pics[index].style.display="block";
    dots[index].className="active";

}
slideImg();










