<?php
session_start();
if(isset($_GET['data'])){
    $data=$_GET['data'];
}

if(isset($data)){
    $_SESSION['data']=$data;
}
else{
    if(isset($_SESSION['data'])){
        echo $_SESSION['data'];
    }
}


?>