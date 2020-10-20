<?php
    $name = $_POST["name"];
    $schoolId = $_POST["schoolId"];
    $tel = $_POST["tel"];
    $email = $_POST["email"];
    $group = $_POST["group"];
    $remark = $_POST["remark"];
    $mfile = $_FILES["mfile"];
    $mfilename = $mfile['name'];
    $mfilepath = $mfile['tmp_name'];
    echo $mfile;
    echo "<br>";
    echo $mfilepath;
    move_uploaded_file($mfilename,"./source/".$mfilename);
    $fHandel = fopen($filename, 'r');
    $res = fopen("result.txt",'a');
    $text = $name. ','. $schoolId. ','. $tel. ','. $email. ','. $group. ','. $remark. '\r\n';
    fwrite($res,$text);
    fclose($res);
    echo 1;
    ?>