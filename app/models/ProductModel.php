<?php
class ProductModel extends Db
{
    // Lấy tát cả vocabulary theo trang
    public function getVocabularyListPage($perPage, $page)
    {
        $start = ($page - 1) * $perPage;
        // Bước 2: Tạo câu query
        $sql = parent::$connection->prepare("SELECT * FROM vocabulary LIMIT $start, $perPage");
        return parent::select($sql);
    }

    // Lấy tất cả vocabulary
    public function getVocabularys()
    {
        // Bước 2: Tạo câu query
        $sql = parent::$connection->prepare("SELECT * FROM vocabulary");
        return parent::select($sql);
    }

    //Thêm vocabulary
    public function addVocabulary($vocabularyName)
    {
        $sql = parent::$connection->prepare('INSERT INTO `vocabulary` (`vocabulary_name`) VALUES (?)');
        $sql->bind_param('s', $vocabularyName);
        return $sql->execute();
    }

    //Xoa vocabulary
    public function deleteVocabulary($vocabularyId)
    {
        $sql = parent::$connection->prepare('DELETE FROM `vocabulary` WHERE `vocabulary`.`id` = ?');
        $sql->bind_param('i', $vocabularyId);
        return $sql->execute();
    }

    // Lấy tổng vocabulary
    public function getTotalVocabulary()
    {
        $sql = parent::$connection->prepare("SELECT COUNT(id) FROM vocabulary");
        return parent::select($sql)[0]['COUNT(id)'];
    }

    //Lấy vocabulary theo ID
    public function getVocabularyById()
    {
        $sql = parent::$connection->prepare('SELECT * FROM vocabulary ORDER BY RAND() LIMIT 1');
        return parent::select($sql);
    }

    //Láy vocabulary theo từ khóa
    public function searchVocabulary($keyword)
    {
        $sql = parent::$connection->prepare('SELECT * FROM vocabulary WHERE vocabulary_name LIKE ?');
        $sql->bind_param('s', $keyword);
        return parent::select($sql);
    }

    //Xoa vocabulary theo nhieu danh mục
    public function deleteVocabularys($vocabularyId)
    {
        $prepare = str_repeat('?, ', count($vocabularyId) - 1) . '?';
        $bindI = str_repeat('i', count($vocabularyId));

        $sql = parent::$connection->prepare("DELETE FROM vocabulary WHERE `vocabulary`.`id` IN ($prepare);");
        $sql->bind_param($bindI, ...$vocabularyId);
        return parent::select($sql);
    }
}
