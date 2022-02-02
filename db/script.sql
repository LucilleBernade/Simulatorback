DROP TABLE IF EXISTS `articles`;
DROP TABLE IF EXISTS `users`;
DROP TABLE IF EXISTS `vehicles`;
DROP TABLE IF EXISTS `regions`;
DROP TABLE IF EXISTS `countries`;

CREATE TABLE `articles` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `text` TEXT NOT NULL,
    `image` VARCHAR(255) NOT NULL,
    `date` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE `countries` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL
);

CREATE TABLE `regions` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `id_countries` INT NULL,
     FOREIGN KEY (id_countries) REFERENCES countries(id)
);

CREATE TABLE `vehicles` (
    `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `type` VARCHAR(255) NOT NULL,
    `price` INT NOT NULL,
    `id_regions` INT NULL,
     FOREIGN KEY (id_regions) REFERENCES regions(id)
);

CREATE TABLE `users` (
    `id` int NOT NULL AUTO_INCREMENT,
    `firstname` varchar(255) NOT NULL,
    `lastname` varchar(255) NOT NULL,
    `email` varchar(255) UNIQUE NOT NULL,
    `city` varchar(255) DEFAULT NULL,
    `language` varchar(255) DEFAULT NULL,
    `hashedPassword` varchar(255) NOT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE = InnoDB AUTO_INCREMENT = 7 DEFAULT CHARSET = utf8;

INSERT INTO `articles` (`name`, `text`,`image`) VALUES ('test1','What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of','myImg2.jpg'),
('test2','What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of','myImg3.jpg'),
 ('test3','What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of','myImg4.jpg'),
('test4','What is Lorem Ipsum?Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of','myImg5.jpg');

INSERT INTO `countries` (`name`) VALUES ('France'), ('Spain');

INSERT INTO `regions` (`name`, `id_countries`) VALUES ('Aquitaine', '1'), ('Auvergne', '1'), ('Andalousie', '2'), ('Galice', '2');

INSERT INTO `vehicles` (`type`, `price`, `id_regions`) VALUES ('Capucine', '10', '1'), ('Fourgon', '11', '1'), ('Integral', '12', '1'), ('Profile', '13', '1'), ('Van', '14', '1'), ('Capucine', '20', '2'), ('Fourgon', '21', '2'), ('Integral', '22', '2'), ('Profile', '23', '2'), ('Van', '24', '2'), ('Capucine', '30', '3'), ('Fourgon', '31', '3'), ('Integral', '32', '3'), ('Profile', '33', '3'), ('Van', '34', '3'), ('Capucine', '40', '4'), ('Fourgon', '41', '4'), ('Integral', '42', '4'), ('Profile', '43', '4'), ('Van', '44', '4');

INSERT INTO
  `users`
VALUES
  (
    1,
    'John',
    'Doe',
    'john.doe@example.com',
    'Paris',
    'English',
    "$argon2id$v=19$m=16,t=2,p=1$emVmZXpmemZlemVmZWR6ZXplZg$rqZkhxu5YbqCGHPNrjJZpQ"
  );

  