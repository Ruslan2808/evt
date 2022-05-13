<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>759 Карат</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Philosopher&display=swap" rel="stylesheet">
    <link href="styles/index.css" rel="stylesheet">
</head>
<body>
    <header>
        <div class="wrapper-title">
            <div class="info">
                <a href="tel:+375000000000">+375 (00) 000-00-00</a>
                <p>ПН - ВС: 10:00-21:30</p>
            </div>
            <div class="title">
                <a href="index.php"><h1>759 КАРАТ</h1></a>
                <h2>ювелирный магазин</h2>
            </div>
            <div class="actions">
                <a href=""><img src="images/actions/likes.png" width="48" height="48" alt="likes"></a>
                <a href=""><img src="images/actions/personal_area.png" width="48" height="48" alt="personal_area"></a>
                <a href=""><img src="images/actions/basket.png" width="38" height="48" alt="basket"></a>
            </div>
        </div>
        <div class = "lines">
            <div class="hamburger-menu">
                <input id="menu__toggle" type="checkbox" />
                <label class="menu__btn" for="menu__toggle">
                    <span></span>
                </label>
                <nav class="nav-links">
                    <a href="">ЧАСЫ</a>
                    <a href="">УКРАШЕНИЯ</a>
                    <a href="">БРЕНДЫ</a>
                    <a href="">АКЦИИ И НОВОСТИ</a>
                    <a href="">МАГАЗИНЫ</a>
                    <a href="">СЕРТИФИКАТЫ</a>
                </nav>
            </div>
        </div>
    </header>
    <main>
    </main>
    <footer>
        <div class="footer-info">
            <div class="about-us">
                <h3>Информация о нас</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde distinctio iure, quaerat aperiam consectetur
                    possimus deleniti, iste, pariatur fugiat voluptatem autem temporibus ut? Nisi perspiciatis labore odio
                    tempora, eos minus! possimus deleniti, iste, pariatur fugiat voluptatem autem temporibus ut? Nisi perspiciatis
                    labore odio tempora, eos minus!</p>
            </div>
            <div class="social-networks">
                <h3>Социальные сети</h3>
                <div class="social-images">
                    <a href=""><img src="./images/social-networks/instagram.png" width="54" height="52" alt="instagram"></a>
                    <a href=""><img src="./images/social-networks/telegram.png" width="55" height="55" alt="telegram"></a>
                    <a href=""><img src="./images/social-networks/vk.png" width="65" height="65" alt="vk"></a>
                </div>
            </div>
        </div>
        <div class="feedback">
            <h3>Свяжитесь с нами</h3>
            <?php
            if($_POST != null) {
                $domains = ["com" => "Hello",
                            "by" => "Добры дзень",
                            "ru" => "Привет"];
                $name = trim($_POST["name"]);
                $email = trim($_POST["email"]);
                $domain = substr($email, strripos($email,'.')+1, strlen($email)-1);
                if ($name != '' && $email != '') {
                    $text = $email ." ". $domains[$domain]. " - " . $name;
                    file_put_contents('file.txt', $text . PHP_EOL, FILE_APPEND);
                }
            }
            ?>
            <form method="POST">
                <input name="name" type="text" placeholder="Введите ваше имя" required>
                <input name="email" placeholder="Введите ваш email" required pattern="^(\S+)@(\S+)\.(\S+)$" oninvalid="this.setCustomValidity('Email должен содержать \'@\' и \'.\'')">
                <textarea name="message" placeholder="Введите сообщение"></textarea>
                <button type="submit">Отправить</button>
            </form>
        </div>
    </footer>
    <script src="js/data.js"></script>
    <script src="js/jewelry.js"></script>
</body>
</html>