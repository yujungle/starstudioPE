<?php
    $filename = $_FILES['file']['name'];
    $fileTmp = $_FILES['file']['tmp_name'];
    $res = move_uploaded_file($fileTmp,'./files/'.$filename);
    echo $res
    ?>