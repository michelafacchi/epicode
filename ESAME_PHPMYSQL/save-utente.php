<?php
require_once('config.php');

$username = $connessione->real_escape_string($_POST['username']);
$mail = $connessione->real_escape_string($_POST['mail']);
$password = $connessione->real_escape_string($_POST['password']);
$role = $connessione->real_escape_string($_POST['role']);

$sql = "INSERT INTO utenti (username, mail, password, role) VALUES 
('$username', '$mail', '$password', '$role')";

if ($connessione->query($sql) === true){
    echo "Registrazione effettuata!";
} else {
    echo "Errore nella registrazione utente $sql. "  .$connessione->error;
}

?>






<!--INSERT INTO posts (title, content, user_id) VALUES
('titolo del post', 'contenuto del post', $_POST['user']) 

<select>
    <option value="{$user['id']}">{$user['username']} </option>
</select>

$_POST -->
