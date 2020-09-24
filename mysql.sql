CREATE TABLE `pagamentos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `forma_de_pagamento` varchar(30) DEFAULT NULL,
  `valor` decimal(10,2) DEFAULT NULL,
  `moeda` varchar(3) DEFAULT NULL,
  `status` varchar(30) DEFAULT NULL,
  `data` date DEFAULT NULL,
  `descricao` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci