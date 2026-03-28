<html>
<head>
    
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <title>Podaci o upitu</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
</head>
    
<body class="contact">
     <nav class="navbar">
        <div class="wrapper">
            <div class="logo"><h1><a href="index.php">Portfo<span>lio.</span></a></h1></div>
        </div>
    </nav>
    
    
    
    <div class="contact-info">
        <div class="contact-heading">
                <i class="fa fa-code"></i>
            <h2>Hvala Vam na upitu. <br/>Odgovort ćemo Vam u najkraćem mogućem roku.</h2>
        </div>
    
<?php
    $ime = $_POST['ime'];
    $email = $_POST['email'];
    $naslov = $_POST['naslov'];
    $adresa = $_POST['adresa'];
    
    echo "Vaše ime: $ime <br/><br/>";
    echo "Vaš Email: $email <br/><br/>";
    echo "Naslov poruke: $naslov <br/><br/>";
    echo "Vaša poruka: $adresa <br/><br/>";
    
?>
    </div>
    
</body>
</html>