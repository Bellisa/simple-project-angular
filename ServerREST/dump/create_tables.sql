
DROP TABLE IF EXISTS `easyInterview`.`answers`;
CREATE TABLE `easyInterview`.`answers` (
  `id_answer` INT NOT NULL AUTO_INCREMENT,
  `id_question` INT NOT NULL,
  `description_ru` mediumtext,
  `description_eng` mediumtext,
  `answer_ru` longtext,
  `answer_eng` longtext,
  PRIMARY KEY (`id_answer`)
) ;


DROP TABLE IF EXISTS `easyInterview`.`categories`;
CREATE TABLE `easyInterview`.`categories` (
  `idcategory` int NOT NULL AUTO_INCREMENT,
  `title` varchar(250) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `description` longtext,
  `id_user` int DEFAULT NULL,
  PRIMARY KEY (`idcategory`)
) ;


DROP TABLE IF EXISTS `easyInterview`.`links`;
CREATE TABLE `easyInterview`.`links` (
  `id_link` int NOT NULL AUTO_INCREMENT,
  `id_type` int NOT NULL,
  `id_res` int DEFAULT NULL,
  `res_url` varchar(45) DEFAULT NULL,
  `descroption` mediumtext,
  `sort_index` int DEFAULT NULL,
  PRIMARY KEY (`id_link`)
) ;

DROP TABLE IF EXISTS `easyInterview`.`questions`;
CREATE TABLE `easyInterview`.`questions` (
  `id_question` int  NOT NULL AUTO_INCREMENT,
  `question_text_ru` mediumtext,
  `sort_index` int  DEFAULT NULL,
  `question_text_eng` mediumtext,
  `id_user` int DEFAULT NULL,
  PRIMARY KEY (`id_question`)
) ;
DROP TABLE IF EXISTS `easyInterview`.`res_types`;
CREATE TABLE `easyInterview`.`res_types` (
  `id_type` int  NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_type`)
);

DROP TABLE IF EXISTS `easyInterview`.`sub_categories`;
CREATE TABLE `easyInterview`.`sub_categories` (
  `id_sub_category` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `description` longtext,
  `sort_index` int DEFAULT NULL,
  `id_category` int  DEFAULT NULL,
  PRIMARY KEY (`id_sub_category`)
);

DROP TABLE IF EXISTS `easyInterview`.`users`;
CREATE TABLE `easyInterview`.`users` (
  `id_user` int NOT NULL AUTO_INCREMENT,
  `login` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `first_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `last_name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `password` varchar(25) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `email` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_user`)
) 
