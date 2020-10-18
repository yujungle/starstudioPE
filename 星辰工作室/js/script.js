'use strict'
$(function(){
    var $menubtn=$(".btn");          //菜单按钮
    var $drop=$(".menu");            //菜单列表
    var $cont=$(".content");        
    var $foot=$("footer");
    var $h=$(window).height();       
    // console.log($h);
    var $oh=$h-16*14;
    // console.log($oh)
    $cont.css("height",$oh)         //内容区的高度
    /*轮播图设计*/
    var $cont_inner=$(".carousel-item");
    console.log($cont_inner)
    $cont_inner.css("height",$oh-$(".content>h2").height());
    var $carou_cap=$(".carousel-caption");
    $carou_cap.css("top",$(".carousel-item>img").height());
    var $ols=$(".carousel-indicators");
    $ols.css("top",$(".carousel-item>img").height()-10);
    var $arrows=$(".carousel-control-next, .carousel-control-prev");
    $arrows.css("top",-$(".carousel-item>img").height())
    var $op=$(".carousel-caption>p");
    $op.css("height",$(".carousel-caption").height()-$(".carousel-caption>h5").height())










    //专门设置第一页的下拉菜单。
    var $cont_index=$("#index .content");
    var $drop_index=$("#index .menu");
    var $menubtn_index=$("#index .btn");
    $menubtn_index.click(function(){
        $drop_index.css("transform","translateY(0)");
    })
    $cont_index.click(function(){
        $drop_index.css("transform","translateY(-100%)");
    })
    //设置其他页的下拉菜单
    $menubtn.splice(0,1)      //删除第一页的按钮
    $cont.splice(0,1)          //删除第一页的内容区
    $drop.splice(0,1)           //删除第一页的菜单
    $menubtn.click(function(){
        $(this).next().css("transform","translateY(0) translateX(0)")
    })
    function hiddenMenu(){
        // console.log("menu")
        $drop.css("transform","translateX(-100%)");
    }
    $cont.click(function(){
        hiddenMenu()
        $cont.eq(0).css("top","8rem");
        // console.log($(this))
    })
    $drop.click(hiddenMenu)



    var $pos={
        "px":"0px",
        "py":"0px"
    }
    var $res={
        "px":"0px",
        "py":"0px"
    }
    var $offsetY=50;
    $("body").on("touchstart",function(e){
        // console.log(e)
        $pos.px=e.originalEvent.touches[0].clientX;
        $pos.py=e.originalEvent.touches[0].clientY;
        // console.log($pos)
    })
    $("body").on("touchmove",function(e){
        // console.log(e)
        $res.px=e.originalEvent.touches[0].clientX;
        $res.py=e.originalEvent.touches[0].clientY;
        // console.log($res)
    })
    $("body").on("touchend",function(e){
        // console.log(e)
        var $dx=$res.px-$pos.px,
            $dy=$pos.py-$res.py;
        // console.log($dx,$dy)
        if ($dy>$offsetY){
            console.log("该换页啦")
        }
    })

    // $(document).mousedown(function(e){
    //     console.log("dianjidianjidianji")
    //     $pos.px=e.pageX;
    //     $pos.py=e.pageY;
    //     console.log($pos);

    // })
    // $(document).mouseup(function(e){
    //     console.log("dianjidianjidianji")
    //     $pos.px=e.pageX;
    //     $pos.py=e.pageY;
    //     console.log($pos);

    // })

    console.log($("#about").offset().top)
})