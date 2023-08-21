<?php
$input = json_decode(file_get_contents('php://input'), true);
$vocabularyName = $input['vocabularyName'];

require_once './config/database.php';
require_once './config/config.php';
spl_autoload_register(function ($className) {
    require './app/models/' . $className . '.php';
});

$productModel = new ProductModel();
$item = $productModel->addVocabulary($vocabularyName);

echo json_encode($item);