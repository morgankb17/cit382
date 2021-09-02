-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema group1
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `group1` ;

-- -----------------------------------------------------
-- Schema group1
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `group1` DEFAULT CHARACTER SET utf8 ;
USE `group1` ;

-- -----------------------------------------------------
-- Table `group1`.`memeVault`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `group1`.`memeVault` (
  `meme_id` INT(11) NOT NULL,
  `username` TEXT NULL DEFAULT NULL,
  `upvotes` INT(11) NULL DEFAULT NULL,
  `downvotes` INT(11) NULL DEFAULT NULL,
  `caption` TEXT NOT NULL,
  `img_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`meme_id`))
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `group1`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `group1`.`user` (
  `username` TEXT NULL DEFAULT NULL,
  `posted` TINYINT(1) NULL DEFAULT NULL)
ENGINE = MyISAM
DEFAULT CHARACTER SET = utf8;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
