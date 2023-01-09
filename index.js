<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <title>water marker</title>
  <style>
    .watermark {
      position: absolute;
      top: 0;
      left: 0;
      font-size: 36px;
      color: #ccc;
      animation: move 10s linear infinite;
    }

    @keyframes move {
      0% {
        transform: translate(0, 0);
      }

      50% {
        transform: translate(calc(100vw - 36px), calc(100vh - 36px));
      }

      100% {
        transform: translate(0, 0);
      }
    }


    .container {
      height: 100%;
      width: 100%;
    }
  </style>
</head>

<body>
  <div class="container">
    <div class="watermark">Watermark</div>
  </div>

</body>

</html>
