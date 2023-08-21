<?php
require_once './config/database.php';
require_once './config/config.php';
spl_autoload_register(function ($className) {
    require './app/models/' . $className . '.php';
});

$productModel = new ProductModel();
$vocabularyTotal = $productModel->getTotalVocabulary();

echo json_encode($vocabularyTotal);