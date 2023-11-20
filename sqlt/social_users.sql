-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: social
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(200) NOT NULL,
  `name` varchar(45) NOT NULL,
  `coverPic` varchar(600) DEFAULT NULL,
  `profilePic` varchar(600) DEFAULT NULL,
  `city` varchar(45) DEFAULT NULL,
  `website` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'test1','test1@gmail.com','$2a$10$gF5hTqWNF6CAehwQxYS9huJGe4vsHZq181QuUjNdSBe9K5m3b5rmi','vib',NULL,NULL,NULL,NULL),(2,'test2','test2@gmail.com','$2a$10$RfT.7o3Xo7pQJIpD3Zynre732u81VJZntfZyd2XA.p0BtCkwnTWRm','test2',NULL,NULL,NULL,NULL),(3,'vibhor112003','rminocha01@gmail.com','$2a$10$zdzWlWDFkr78a9PEhMQKa.7wQNNs6xY/WzGNd3pOUP.EBkskVVq1S','munchkin','1697706709317003_MoonKnight_KA_R2_JLY_C15_IH_W3.0_ALT_IG_Mech2.jpg','1697706709307olsentoppics1.jpg','usa','www.hivemind.com'),(4,'ranya1611','ranya.kaushik@nift.ac.in','$2a$10$inTyQGS5H3pXWy5URPZgz.DHwk050bL1Mj0jWErwJwkEYNcqGShBe','Ranya','1697705157658SDC10156.JPG','169774498915220220606_151611.jpg',NULL,NULL),(5,'aditya1','aditya@gmail.com','$2a$10$AelhUhkPhi.l8w6kYUtBCehB/1nNDjdATSCWZ3V7pHYEey6CEEvj2','aditya','1697710953615SDC10156.JPG','1697710953602722891_v9_bc.jpg','Mumbai','aditya.dev'),(6,'randi101','randi@gmail.com','$2a$10$tW64Fr/Jzoj2v2EhngmhS.gCogTS4f57r0ecVqyNjPZp071O5LSFC','Lakshit','169773675837020211220_020059.jpg','169773675835220230920_165451.jpg',NULL,NULL),(7,'Vibhor1611','500093004@stu.upes.ac.in','$2a$10$59zRDqDmwXHbyXhWYnvcleNuB03N/aITVyc.7RA/.5ZK.fiYJxvzO','Vibhor11','169781554432620220601_214557.jpg','169781554431220220521_211418.jpg',NULL,NULL),(8,'user1','user@gmail.com','$2a$10$XxCTwLpw0vH.UEqE5tFBu.JkKmZJWH6H6sj0.3BRrRQLhNp8pHAjO','Vibhor Minocha','169781839385020220523_155526.jpg','169781913512420200428_152235.jpg','Mumbai','VIBHOR.DEV'),(9,'bhanu','bhanu@gmail.com','$2a$10$z5jaz3MKiai497z9SYq9ken3G8Cf3yjUgFRxCOj2UiL.Y5/v7Xwai','bhanu',NULL,NULL,NULL,NULL),(10,'HAPPY','happy@gmail.com','$2a$10$Ca2lwBbOsCiZeAu12y757eQq8VQekTJ90/hDhtVgwK1NRbsAdGdya','happy',NULL,NULL,NULL,NULL),(11,'happy1','happy1@gmail.com','$2a$10$08nSlcV1Q97e.v7vNKnnHe9YkjeeYxdGqctVY6Zjdusxm7JMa2qca','happy1',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-20 20:45:29
