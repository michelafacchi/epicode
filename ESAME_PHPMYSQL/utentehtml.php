

<!DOCTYPE html>    
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
   <link rel ="stylesheet" href="style.css" type="text/css">
    <title>Blog personale</title>
</head>
<body>
    <div>
    <h1>My Blog:</h1>
    <h3>inserisci ID utente</h3>

    <body>
        <form method="POST" action="./save-utente.php">
            <input type="text" id="username" placeholder="Username" name="username" required> 
            <input type="email" id="email" placeholder="Your Email" name="email" required>
            <input type="password" id="password" placeholder="Password" name="password" required>
            <select name="roles" id="roles" placeholder="Roles">
             <option value=" "> </option>
              <option value="admin">Admin</option>
              <option value="moderator">Moderator</option>
              <option value="user">User</option>
            </select>

            <button type="submit" name="register">Login</button>
        </form> 
    </div>
    <?php     // il ciclo foreach analizza, per ogni risultato faccio una riga 
                foreach($queryRes as $row) {     //per ogni elemento di queryRes che chiameremo 'riga', ogni riga avrà delle chiavi che coincidono con i nomi (id, name)
                    echo "
                        <tr>
                            <td>{$row["iusernamed"]}</td>
                            <td>{$row["email"]}</td>
                            <td>{$row["password"]}</td>
                            <td>{$row["roles"]}</td>
                        </tr>
                    ";
                }
            ?>
    </body>

</body>
</html>