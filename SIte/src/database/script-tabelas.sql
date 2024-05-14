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

insert into usuario values 
(default, 'Murilo', 'Henrique', 'murilohenrique@gmail.com', '123456'),
(default, 'Muri', 'Henrique', 'murilohenriqu@gmail.com', '123456'),
(default, 'Muril', 'Henrique', 'murilohenriq@gmail.com', '123456'),
(default, 'Mur', 'Henrique', 'murilohenriue@gmail.com', '123456'),
(default, 'Murillo', 'Henrique', 'muriloenrique@gmail.com', '123456'),
(default, 'Murilho', 'Henrique', 'murilohnrique@gmail.com', '123456'),
(default, 'Muriilo', 'Henrique', 'murilohenique@gmail.com', '123456'),
(default, 'Muriloo', 'Henrique', 'murilohenrque@gmail.com', '123456');

insert into dados_linguagem values 
(default, 3, 7, 'csharp', default, 5),
(default, 6, 1, 'csharp', default, 6),
(default, 4, 4, 'csharp', default, 7),
(default, 6, 7, 'csharp', default, 8),
(default, 2, 4, 'csharp', default, 9),
(default, 8, 8, 'csharp', default, 10),
(default, 1, 3, 'csharp', default, 11),
(default, 8, 10, 'csharp', default, 12);