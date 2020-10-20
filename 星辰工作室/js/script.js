"use strict";
$(function() {
  var $menubtn = $(".btn"); //菜单按钮
  var $drop = $(".menu"); //菜单列表
  var $cont = $(".content");
  var $foot = $("footer");
  var $h = $(window).height();
  // console.log($h);
  var $oh = $h - 16 * 14;
  // console.log($oh)
  $cont.css("height", $oh); //内容区的高度

  /*轮播图设计*/
  var $cont_inner = $(".carousel-item");
  console.log($cont_inner);
  $cont_inner.css("height", $oh - $(".content>h2").height());
  var $carou_cap = $(".carousel-caption");
  $carou_cap.css("top", $(".carousel-item>img").height());
  var $ols = $(".carousel-indicators");
  $ols.css("top", $(".carousel-item>img").height() - 10);
  var $arrows = $(".carousel-control-next, .carousel-control-prev");
  $arrows.css("top", -$(".carousel-item>img").height());
  var $op = $(".carousel-caption>p");
  $op.css(
    "height",
    $(".carousel-caption").height() - $(".carousel-caption>h5").height()
  );

  //组别介绍

  var $spans = $("#group li span");
  var $ched = $("#group li .checked");
  var $detail = $(".groupsDetail");
  var $deH5 = $("#group h5");
  var $deP = $(".groupsDetail p");
  var $deI = $(".groupsDetail img");
  // console.log("height",$cont.height()-96)
  $detail.css("height", $cont.height() - 96);
  $deH5.text("前端组");
  $deP.text(
    "利用各种前端技术将设计图从图纸还原成具有交互能力的网页。同时通过Ajax实现与后端的数据联动。除此之外还要在交互细节上尽可能的提升用户体验，因为我们式离用户最近的工程师"
  );
  $deI.attr("src", "images/1.jpg");

  var $detailText = {
    前端: [
      "利用各种前端技术将设计图从图纸还原成具有交互能力的网页。同时通过Ajax实现与后端的数据联动。除此之外还要在交互细节上尽可能的提升用户体验，因为我们式离用户最近的工程师",
      "images/1.jpg"
    ],
    后端: [
      "运用编程语言，工具和严谨的思维操纵数据，实现缜密的逻辑和功能。根据客户需求开发产品，严谨地控制网站数据的流入流出，为用户提供安全、可靠、丰富的功能",
      "images/2.jpg"
    ],
    产品: [
      "产品调研，市场分析，与技术人员进行沟通也要组织活动带领大家一起浪。围绕学生工作设计开发面向学生的服务休闲功能运营成电学工的微服务平台、清水河畔及其他相关平台",
      "images/3.jpg"
    ],
    设计: [
      "不局限于设计Web应用、App界面、工作室海报和周边产品。大到构图，小到微互动，一切都在你的想象力之中，所以你需要沟通理解和创造力",
      "images/4.jpg"
    ],
    IOS: [
      "iOS 是由苹果公司开发的移动操作系统。针对手机、平板等移动设备进行应用开发。主要做IOS方面的app开发。主要工作是开发工作室项目、做外包项目等",
      "images/5.jpg"
    ],
    DevOps: [
      "和服务器打交道的命令行脑残粉，性能优化与调研-部署/监控-DEBUG-脑洞大开的开发工作（包括但不限于后台/前端/虚拟化/分布式）",
      "images/6.jpg"
    ],
    安卓: [
      "针对手机、平板等移动设备进行应用开发。主要负责Android方面的app开发。主要工作是开发工作室项目。做外包项目，闲暇之余可以把自己好玩的想法转换成app",
      "images/7.jpg"
    ]
  };
  $spans.on("click", function() {
    console.log("点击？");
    $(this).addClass("checked");
    $ched.removeClass("checked");
    $ched = $(this);
    $deH5 = $(this).text() + "组";
    console.log($detailText[$(this).text()]);
    $deP.text($detailText[$(this).text()][0]);
    $deI.attr("src", $detailText[$(this).text()][1]);
  });

  //专门设置第一页的下拉菜单。
  var $cont_index = $("#index .content");
  var $drop_index = $("#index .menu");
  var $menubtn_index = $("#index .btn");
  $menubtn_index.click(function() {
    $drop_index.css("transform", "translateY(0)");
    $cont_index.css("top", "11rem");
  });
  $cont_index.click(function() {
    $drop_index.css("transform", "translateY(-100%)");
    $cont_index.css("top", "8rem");
  });
  //设置其他页的下拉菜单
  $menubtn.splice(0, 1); //删除第一页的按钮
  $cont.splice(0, 1); //删除第一页的内容区
  $drop.splice(0, 1); //删除第一页的菜单
  $menubtn.click(function() {
    $(this)
      .next()
      .css("transform", "translateY(0) translateX(0)");
    console.log($(this));
  });
  function hiddenMenu() {
    // console.log("menu")
    $drop.css("transform", "translateX(-100%)");
  }
  $cont.click(function() {
    hiddenMenu();
    // $cont.eq(0).css("top", "8rem");
    // console.log($(this))
  });
  $drop.click(hiddenMenu);

  var set = 0;
  setInterval(function() {
    if (!set) {
      $foot.css("bottom", "2rem");
      set = 1;
    } else {
      $foot.css("bottom", "3rem");
      set = 0;
    }
  }, 700);

  //表单验证
  var $sm = $(".submit");
  var $inps = $("form input");
  $inps.splice(4, 2);
  console.log($inps);
  var reg = {
    name: /[\u4e00-\u9fa5a-zA-Z]+/,
    schoolId: /^[0-9]{12,13}$/,
    tel: /^1[34578]\d{9}$/,
    email: /[0-9a-zA-Z_-]+@[a-zA-Z0-9]+(\.[a-zA-Z0-9_-]+)+/,
    mfile: /[\w\W]+(\.(pdf|docx|zip|rar))$/
  };
  $inps.blur(function() {
    console.log($(this)[0].name, $(this).val());
    if ($(this).val()) {
      if (reg[$(this)[0].name].test($(this).val())) {
        $(this)
          .next()
          .next()
          .css("display", "none");
        $(this).next("input").focus;
      } else {
        $(this)
          .next()
          .next()
          .css("display", "block");
        // console.log($(this).name,$(this).val())
        $(this).focus();
      }
    }
  });

  // console.log("匹配",reg.mfile.test("2021.docx"));
  // console.log($("#mfile").next(".warn"))

  $("#mfile").change(function() {
    var $flabel = $("label[for=mfile]");
    var file = $("#mfile").val();
    console.log(file);
    var filename = file.split("\\").pop();
    // console.log(filename);
    // console.log(reg[$("#mfile")[0].name]);
    // console.log($("#mfile")[0].files);
    var files = $("#mfile")[0].files;
    // console.log(files[0]);
    var fdata = new FormData();
    fdata.append("file", files[0]);
    if (reg[$("#mfile")[0].name].test(filename)) {
      $flabel.text(filename);
      $("#mfile")
        .next()
        .next()
        .css("display", "none");
      var uploading = false;
      if(uploading){
        alert("上传文件中");
        return false;
      }
      $.ajax({
        url: "./api/file.php",
        type: "POST",
        cache: false,
        data: fdata,
        processData: false,
        contentType: false,
        dataType: "json",
        beforeSend: function() {
          uploading = true;
        },
        success: function(data) {
          if (data == 1) {
            $("#mfile")
              .next()
              .next()
              .text("上传成功")
              .css({"color": "green","display":"block"});
          } else {
            showError(data.msg);
          }
          uploading = false;
        }
      });
    } else {
      $("#mfile")
        .next()
        .next()
        .css("display", "block");
    }
  });
  // $("select").change(function() {
  //   console.log($("option:selected").text());
  // });
  $sm.click(function() {
    var temp = 1;
    $.each($inps, function(index, value) {
      if (value.name != "mfile" && value.value == "") {
        alert("请输入" + value.name);
        temp = 0;
        return false;
      }
    });
    console.log(temp);
    if (temp) {
      $.post(
        "./api/submit.php",
        {
          name: $("input[id=name]").val(),
          schoolId: $("input[id=schoolId]").val(),
          tel: $("input[id=tel]").val(),
          email: $("input[id=email]").val(),
          group: $("option:selected").text(),
          remark: $("form textarea").text()
        },
        function(data) {
          if (data == 1) {
            alert("提交成功");
          } else alert("提交失败");
        }
      );
    }
  });
});
