CREATE DATABASE projeto_individual_lp;

USE projeto_individual_lp;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(80),
	sobrenome VARCHAR(80),
	email VARCHAR(80),
	senha VARCHAR(20)
);

CREATE TABLE dados_linguagem (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nota_aprecia INT,
	nota_dificuldade INT,
	linguagem VARCHAR(15),
	momento DATETIME DEFAULT CURRENT_TIMESTAMP,
 	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

SELECT * from usuario;
SELECT * from dados_linguagem;