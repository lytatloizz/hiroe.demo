<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="public/css/bootstrap.css">
  <link rel="stylesheet" href="public/css/style.css">
  <link rel="icon" type="image/x-icon" href="public/img/logo.jpg">
  <title>Henrry Vocabulary</title>
</head>

<body>
  <div class="container-fluid header">
    <div class="row">
      <h2>Welcome</h2>
    </div>
  </div>
  <div class="container content">
    <div class="row">
      <div class="row pt-3 pb-3">
        <div class="col-md-12">
          <h4> Hãy nhập từ vựng của bạn</h4>
        </div>
        <div class="col-md-12 ">
          <form method="POST">
            <span class="text-danger text-notify hidden">Từ vựng trên đã tồn tại</span><br>
            <input type="text" id="vocabulary" class="mb-2" name="vocabularyName" placeholder="Nhập vào đây">
            <!-- <input type="submit" class="btn btn-info btn-add" value="Thêm từ vựng"></input> -->
            <div class="btn btn-info btn-add">Thêm từ vựng</div>
          </form>
        </div>
      </div>
      <div class="row">
        <div class="col-md-4"></div>
        <div class="col-md-4">
          <div class="my-btn btn-random btn btn-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Chọn ngẫu nhiên</div>
        </div>
        <div class="col-md-4"></div>
      </div>
      <div class="row pt-3">
        <div class="col-md-3"></div>
        <div class="col-md-1"></div>
        <div class="col-md-2 pt-2">
          <a class="my-btn btn-edit btn btn-warning">Chọn</a>
        </div>
        <div class="col-md-2 pt-2">
          <button type="button" class="my-btn btn-xoa btn btn-danger" disabled>Xóa</button>
        </div>
        <div class="col-md-1"></div>
        <div class="col-md-3"></div>
      </div>
    </div>
    <div class="row pt-3">
      <form method="POST">
        <div class="col-md-12 content-result"></div>
      </form>
    </div>
  </div>
  <!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5 text-center" id="staticBackdropLabel">Kết quả là:</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h2 class="loading hidden"></h2>
          <form method="POST">
            <div class="random-result"></div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-danger btn-delete-result" data-bs-dismiss="modal">Xóa kết quả này</button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

  <!-- <script src="public/js/app.js"></script> -->
  <script src="public/js/script.js"></script>
  <script src="public/js/bootstrap.js"></script>
</body>

</html>