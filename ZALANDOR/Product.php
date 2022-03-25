<!--gestione del prodotto-->
<?php
//estendo a Product la classe DBManager, ereditanto tutte le proprietà

class ProductManager extends DBManager {

    public function __construct(){
        parent::__construct();        //richiamo costruttore del padre
        $this->columns = array('id', 'name', 'description', 'price', 'category_id');
        $this->tableName = 'product';
    }
}


?>