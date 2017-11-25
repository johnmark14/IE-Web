<?php
$servername = "localhost";
$username = "root";
$password = "";

    // Create connection
    $conn = new mysqli($servername, $username, $password);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } else {
        echo '<script language="javascript">';
        echo 'alert("Connected successfully")';
        echo '</script>';
    }

?> 