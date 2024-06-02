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

CREATE TABLE desafios (
	id INT AUTO_INCREMENT,
	desafioCsharp INT DEFAULT 0,
	desafioJava INT DEFAULT 0,
	desafioJavascript INT DEFAULT 0,
	desafioHtml INT DEFAULT 0,
	desafioCss INT DEFAULT 0,
	desafioSql INT DEFAULT 0,
 	fk_usuario INT,
	PRIMARY KEY (id, fk_usuario),
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

SELECT * FROM usuario;
SELECT * FROM dados_linguagem;
SELECT * FROM desafios;







-- CREATE DESAFIO DE SQL
CREATE TABLE Pessoa (
	idPessoa INT PRIMARY KEY,
    nome VARCHAR(45),
    idade INT,
    profissao VARCHAR(20),
    rua VARCHAR(25),
    numeroCasa VARCHAR(15)
);

CREATE TABLE Relacionamento (
	idRelacionamento INT PRIMARY KEY,
    fkPessoa1 INT,
    fkPessoa2 INT,
    tipo VARCHAR(20),
    FOREIGN KEY (fkPessoa1) REFERENCES Pessoa(idPessoa),
    FOREIGN KEY (fkPessoa2) REFERENCES Pessoa(idPessoa)
);

CREATE TABLE Crime (
	idCrime INT PRIMARY KEY,
	dataCrime DATE,
	tipo VARCHAR(30),
	descricao VARCHAR(100),
	cidade VARCHAR(20),
	rua VARCHAR(25),
	numeroCasa VARCHAR(10)
);

CREATE TABLE DeclaracaoTestemunha (
	idDeclaracaoTestemunha INT PRIMARY KEY,
    fkPessoa INT,
    fkCrime INT,
    declaracao VARCHAR(100),
    FOREIGN KEY (fkPessoa) REFERENCES Pessoa(idPessoa),
    FOREIGN KEY (fkCrime) REFERENCES Crime(idCrime)
);

CREATE TABLE Evidencia (
	idEvidencia INT PRIMARY KEY,
    fkCrime INT,
    tipo VARCHAR(20),
    descricao VARCHAR(80),
    FOREIGN KEY (fkCrime) REFERENCES Crime(idCrime)
);

CREATE TABLE Suspeito (
	idSuspeito INT PRIMARY KEY,
    fkPessoa INT,
    fkCrime INT,
    razaoSuspeita VARCHAR(60),
    FOREIGN KEY (fkPessoa) REFERENCES Pessoa(idPessoa),
    FOREIGN KEY (fkCrime) REFERENCES Crime(idCrime)
);

CREATE TABLE Alibi (
	idAlibi INT PRIMARY KEY,
    fkSuspeito INT,
    justificativa VARCHAR(80),
    verificado CHAR(3),
    CHECK (verificado IN ('sim', 'não')),
    FOREIGN KEY (fkSuspeito) REFERENCES Suspeito(idSuspeito)
);

CREATE TABLE Ligacao (
	idLigacao INT PRIMARY KEY,
    fkChamador INT,
    fkReceptor INT,
    dataLigacao DATETIME,
    duracao VARCHAR(10),
    FOREIGN KEY (fkChamador) REFERENCES Pessoa(idPessoa),
    FOREIGN KEY (fkReceptor) REFERENCES Pessoa(idPessoa)
);









-- INSERT DESAFIO SQL
INSERT INTO Pessoa VALUES 
	(1, 'Enzo Ferreira', 28, 'Mecânico', 'Haddock Lobo', '194'),
	(2, 'Vinicius Oliveira', 38, 'Professor', 'Rua Augusta', 'Ap 307'),
	(3, 'Cristina Ferreira', 32, 'Cientista', 'Haddock Lobo', '194'),
	(4, 'Rafael Rodrigues', 43, 'Jornalista', 'Alameda Franca', '739'),
	(5, 'Jefferson Santos', 62, 'Enfermeiro', 'Rua Bela Cintra', '29'),
	(6, 'Carla Pereira', 38, 'Programadora', 'Haddock Lobo', '185'),
	(7, 'Paula Souza', 28, 'Fotógrafa', 'Avenida Rio Branco', 'Ap 903'),
	(8, 'Enzo Fernades', 53, 'Empresário', 'Avenida das Américas', '651'),
	(9, 'Amanda Martinelli', 28, 'Artista', 'Haddock Lobo', '192'),
    (10, 'William Pinheiro', 28, 'Engenheiro', 'Haddock Lobo', '142'),
	(11, 'Gabriela Marques', 28, 'Advogada', 'Haddock Lobo', '207'),
	(12, 'Joel Gomes', 28, 'Desconhecido', 'Rua Peixoto Gomide', '-Ap307'),
	(13, 'Vinicius Cardoso', 28, 'Bombeiro', 'Rua Augusta', '92');

INSERT INTO Relacionamento VALUES
	(1, 1, 3, 'irmãos'),
	(2, 1, 2, 'amigos'),
	(3, 1, 5, 'filho'),
	(4, 1, 9, 'vizinhos');

INSERT INTO Crime VALUES 
	(1, '2024-04-20', 'furto', 'Furto de uma pintura famosa em um leilão de arte contemporânea', 'Mato Grosso', 'Rua dos Girassóis', '98'),
    (2, '2024-01-08', 'assalto', 'Assalto a uma farmácia durante o horário de pico, levando dinheiro e medicamentos', 'Rio de Janeiro', 'Rua dos Girassóis', '123'),
    (3, '2024-02-12', 'roubo', 'Roubo de um laptop em um parque', 'Minas Gerais', 'Avenida das Palmeiras', '4045'),
    (4, '2024-03-18', 'homicídio', 'Homicídio em um restaurante de luxo durante um jantar romântico', 'São Paulo', 'Rua das Acácias', '1146'),
    (5, '2024-04-25', 'sequestro', 'Sequestro de um empresário', 'Bahia', 'Avenida das Rosas', '542'),
    (6, '2024-05-30', 'furto', 'Furto de joias raras durante uma exposição de arte famosa', 'Pernambuco', 'Rua das Orquídeas', '245'),
    (7, '2024-06-07', 'assalto', 'Assalto a uma loja de conveniência com reféns e exigências financeiras', 'Ceará', 'Avenida dos Lírios', '303'),
    (8, '2024-07-14', 'roubo', 'Roubo de um celular em um ônibus', 'Rio Grande do Sul', 'Rua das Violetas', '404'),
    (9, '2024-08-19', 'homicídio', 'Homicídio em uma boate', 'Pará', 'Avenida dos Cravos', '505'),
    (10, '2024-09-23', 'sequestro', 'Sequestro de uma criança em frente à sua escola', 'Santa Catarina', 'Rua dos Jasmins', '605'),
    (11, '2024-10-28', 'furto', 'Furto em uma loja de eletrônicos após arrombamento durante a noite', 'Rio de Janeiro', 'Avenida das Tulipas', '7858'),
    (12, '2024-12-03', 'assalto', 'Assalto a uma residência', 'Minas Gerais', 'Rua das Margaridas', '858'),
    (13, '2024-01-07', 'roubo', 'Roubo de um carro estacionado em um bairro residencial tranquilo', 'São Paulo', 'Avenida dos Crisântemos', '909'),
    (14, '2024-02-11', 'homicídio', 'Homicídio em um posto de gasolina', 'Bahia', 'Rua das Begônias', '1010'),
    (15, '2024-03-17', 'sequestro', 'Sequestro de uma celebridade durante um evento de caridade', 'Rio Grande do Norte', 'Avenida das Hortênsias', '440'),
    (16, '2024-04-23', 'furto', 'Furto em um supermercado após distração dos funcionários', 'Paraná', 'Rua dos Hibiscos', '75'),
    (17, '2024-05-28', 'assalto', 'Assalto a uma joalheria de luxo com armas de fogo e reféns', 'Goiás', 'Avenida dos Narcisos', '661'),
    (18, '2024-06-05', 'roubo', 'Roubo de um relógio em uma praça', 'Espírito Santo', 'Rua das Bromélias', '822'),
    (19, '2024-07-12', 'homicídio', 'Homicídio em uma festa de aniversário', 'Maranhão', 'Avenida das Camélias', '518'),
    (20, '2024-08-18', 'sequestro', 'Sequestro de um político em frente à sua casa', 'Distrito Federal', 'Rua das Azaléias', '5'),
    (21, '2024-09-22', 'furto', 'Furto de eletrônicos em uma loja', 'Mato Grosso', 'Avenida das Dálias', '155'),
    (22, '2024-10-27', 'assalto', 'Assalto a uma farmácia com reféns e ameaças de bomba', 'Alagoas', 'Rua dos Cravos', '445'),
    (23, '2024-12-02', 'roubo', 'Roubo de um celular em uma estação de metrô', 'Tocantins', 'Avenida das Azaleias', '555'),
    (24, '2024-01-06', 'homicídio', 'Homicídio em frente à residência da vítima durante uma discussão', 'São Paulo', 'Haddock Lobo', '194'),
    (25, '2024-02-10', 'sequestro', 'Sequestro de um empresário influente em seu escritório', 'Rondônia', 'Avenida das Bromélias', '5487'),
    (26, '2024-01-29', 'homicídio', 'Homicídio em uma casa abandonada durante uma festa ilegal', 'Amapá', 'Rua das Violetas', '214'),
    (27, '2024-02-03', 'roubo', 'Roubo de um colar de diamantes raros em uma joalheria famosa', 'Roraima', 'Avenida dos Girassóis', '124'),
    (28, '2024-03-11', 'furto', 'Furto de uma obra de arte valiosa em um museu', 'Sergipe', 'Rua das Begônias', '862'),
    (29, '2024-04-18', 'assalto', 'Assalto a um carro-forte transportando dinheiro', 'Amazonas', 'Avenida dos Lírios', '957'),
    (30, '2024-05-24', 'homicídio', 'Homicídio em um beco escuro durante uma briga de gangues', 'Rondônia', 'Rua das Acácias', '531'),
    (31, '2024-06-30', 'roubo', 'Roubo de um quadro famoso em um leilão de arte', 'Tocantins', 'Avenida das Orquídeas', '23'),
    (32, '2024-07-06', 'furto', 'Furto de uma mala de dinheiro em um hotel de luxo', 'Maranhão', 'Rua dos Cravos', '42'),
    (33, '2024-08-12', 'assalto', 'Assalto a uma empresa de segurança transportando valores', 'Alagoas', 'Avenida dos Narcisos', '93'),
    (34, '2024-09-17', 'homicídio', 'Homicídio em uma festa de gala durante um evento beneficente', 'Paraíba', 'Rua das Margaridas', '321'),
    (35, '2024-10-22', 'roubo', 'Roubo de um diamante raro em uma exposição de jóias', 'Acre', 'Avenida das Violetas', '21'),
    (36, '2024-11-28', 'furto', 'Furto de uma coroa real em um museu histórico', 'Mato Grosso', 'Rua dos Girassóis', '321'),
    (37, '2024-12-04', 'assalto', 'Assalto a um centro de distribuição de produtos eletrônicos', 'Roraima', 'Avenida dos Lírios', '123'),
    (38, '2024-01-05', 'homicídio', 'Homicídio em um apartamento de luxo durante uma festa de réveillon', 'Amazonas', 'Rua das Begônias', '46'),
    (39, '2024-02-11', 'roubo', 'Roubo de uma coleção de selos raros em uma feira de antiguidades', 'Sergipe', 'Avenida das Orquídeas', '852'),
    (40, '2024-03-18', 'furto', 'Furto de um cofre de um banco após uma invasão noturna', 'Tocantins', 'Rua dos Cravos', '74'),
    (41, '2024-04-23', 'assalto', 'Assalto a um laboratório farmacêutico em busca de medicamentos caros', 'Maranhão', 'Avenida dos Narcisos', '234'),
    (42, '2024-05-29', 'homicídio', 'Homicídio em um cassino clandestino durante uma briga por dívidas de jogo', 'Paraíba', 'Rua das Margaridas', '325'),
    (43, '2024-06-04', 'roubo', 'Roubo de um livro raro em uma biblioteca especializada', 'Acre', 'Avenida das Violetas', '13'),
    (44, '2024-07-10', 'furto', 'Furto de uma arma antiga de uma coleção particular', 'Mato Grosso', 'Rua dos Girassóis', '482'),
    (45, '2024-08-15', 'assalto', 'Assalto a uma loja de eletrônicos de última geração', 'Roraima', 'Avenida dos Lírios', '50'),
    (46, '2024-09-21', 'homicídio', 'Homicídio em uma festa universitária durante uma discussão acalorada', 'Amazonas', 'Rua das Begônias', '3255'),
    (47, '2024-10-26', 'roubo', 'Roubo de um colar de pérolas em um evento de gala', 'Sergipe', 'Avenida das Orquídeas', '444'),
    (48, '2024-11-30', 'furto', 'Furto de um violino valioso em um concerto de música clássica', 'Tocantins', 'Rua dos Cravos', '12'),
    (49, '2024-01-04', 'assalto', 'Assalto a um museu de história natural em busca de fósseis raros', 'Maranhão', 'Avenida dos Narcisos', '345'),
    (50, '2024-02-09', 'homicídio', 'Homicídio em uma festa de aniversário infantil durante uma discussão entre pais', 'Paraíba', 'Rua das Margaridas', '234');

INSERT INTO DeclaracaoTestemunha VALUES
	(1, 3, 24, 'acho que vi alguém fugindo com o carro na hora do crime'),
	(2, 7, 24, 'estava andando na rua próximo ao horário e ouvi batidas, como se duas pessoas estivessem lutando'),
	(3, 9, 24, 'acho que foi alguém que mora perto, pois vi o criminoso estacionar próximo ao fugir');

INSERT INTO Evidencia VALUES
	(1, 1, 'digitais', 'Impressões digitais na moldura da pintura'),
    (2, 2, 'video', 'Imagens de segurança mostrando o assaltante armado'),
    (3, 2, 'balística', 'Cápsulas de bala encontradas no local do crime'),
    (4, 2, 'dna', 'Amostra de DNA do assaltante em uma seringa deixada para trás'),
    (5, 3, 'testemunho', 'Depoimento de uma testemunha que viu o suspeito correndo'),
    (6, 4, 'arma', 'Faca encontrada na cena do crime com digitais do suspeito'),
    (7, 5, 'telefone', 'Histórico de chamadas revelando contato com sequestradores'),
    (8, 6, 'joias', 'Joias encontradas na casa do suspeito'),
    (9, 6, 'digital', 'Impressões digitais na vitrine quebrada'),
    (10, 6, 'fibra', 'Fibras de roupa no local do crime'),
    (11, 7, 'máscara', 'Máscara de esqui deixada para trás pelo assaltante'),
    (12, 7, 'video', 'Imagens de segurança da loja de conveniência'),
    (13, 7, 'fibra', 'Fibras de máscara do assaltante deixadas no local'),
    (14, 8, 'testemunho', 'Relato de passageiro que viu o roubo do celular'),
    (15, 9, 'sangue', 'Mancha de sangue na pista de dança'),
    (16, 10, 'video', 'Câmera de segurança da escola capturando o momento do sequestro'),
    (17, 11, 'ferramenta', 'Ferramenta de arrombamento deixada na loja'),
    (18, 12, 'pegadas', 'Pegadas de lama dentro da residência'),
    (19, 13, 'video', 'Câmera de segurança mostrando o roubo do carro'),
    (20, 14, 'balística', 'Balística correspondendo à arma do crime'),
    (21, 15, 'bilhete', 'Bilhete de resgate encontrado no local do evento'),
    (22, 16, 'câmera', 'Imagens da câmera de segurança do supermercado'),
    (23, 17, 'testemunho', 'Relato de um refém do assalto à joalheria'),
    (24, 18, 'câmera', 'Câmera de segurança da praça capturando o roubo do relógio'),
    (25, 18, 'video', 'Câmeras de segurança da praça capturando o momento do roubo'),
    (26, 18, 'testemunho', 'Relato de um pedestre que viu o roubo do relógio'),
    (27, 19, 'testemunho', 'Testemunha da festa que viu o suspeito'),
    (28, 20, 'dna', 'Amostra de DNA do sequestrador deixada na casa da vítima'),
    (29, 20, 'video', 'Imagens de segurança da residência capturando o sequestro'),
    (30, 20, 'dna', 'Amostra de DNA dos sequestradores no carro abandonado'),
    (31, 21, 'digital', 'Impressões digitais na vitrine da loja'),
    (32, 22, 'máscara', 'Máscara de gás deixada para trás pelo assaltante'),
    (33, 23, 'pegadas', 'Pegadas na estação de metrô'),
    (34, 23, 'testemunho', 'Relato de um passageiro que viu o roubo'),
    (35, 23, 'video', 'Imagens de câmeras de segurança da estação de metrô'),
    (36, 24, 'arma', 'Taco de beisebol utilizado no crime sem impressões digitais'),
    (37, 24, 'sangue', 'Mancha de sague no chão da calçada'),
    (38, 24, 'digital', 'Impressões digitais na porta da casa da vítima'),
    (39, 25, 'telefone', 'Histórico de chamadas revelando contato com sequestradores'),
    (40, 26, 'droga', 'Resíduos de droga encontrados na casa'),
    (41, 27, 'câmera', 'Imagens da câmera de segurança da joalheria'),
    (42, 27, 'video', 'Imagens de segurança da joalheria capturando o momento do roubo'),
    (43, 27, 'balística', 'Balística correspondente às balas disparadas na joalheria'),
    (44, 28, 'testemunho', 'Depoimento de funcionário do museu sobre o furto'),
    (45, 29, 'arma', 'Arma deixada no local do assalto ao carro-forte'),
    (46, 30, 'sangue', 'Mancha de sangue no beco'),
    (47, 31, 'digital', 'Impressões digitais na moldura do quadro'),
    (48, 31, 'video', 'Imagens de segurança do leilão de arte'),
    (49, 31, 'testemunho', 'Depoimento de um participante do leilão'),
    (50, 32, 'video', 'Imagens de segurança do hotel'),
    (51, 33, 'balística', 'Balística correspondente às balas usadas no assalto'),
    (52, 34, 'sangue', 'Mancha de sangue na festa de gala'),
    (53, 35, 'video', 'Câmera de segurança da exposição'),
    (54, 36, 'testemunho', 'Depoimento de funcionário do museu sobre o furto'),
    (55, 37, 'câmera', 'Imagens de segurança do centro de distribuição'),
    (56, 38, 'arma', 'Arma encontrada no apartamento de luxo'),
    (57, 39, 'video', 'Imagens de segurança da feira de antiguidades'),
    (58, 39, 'pegadas', 'Pegadas deixadas na área de exibição de selos'),
    (59, 39, 'video', 'Imagens de segurança da feira de antiguidades'),
    (60, 40, 'ferramenta', 'Ferramenta de arrombamento deixada no banco'),
    (61, 41, 'droga', 'Medicamentos caros encontrados na casa do suspeito'),
    (62, 42, 'sangue', 'Mancha de sangue no cassino clandestino'),
    (63, 42, 'arma', 'Revolver encontrado no local do crime'),
    (64, 42, 'digitais', 'Impressões digitais no local do homicídio'),
    (65, 43, 'video', 'Imagens de segurança da biblioteca'),
    (66, 43, 'digitais', 'Impressões digitais nas prateleiras da biblioteca'),
    (67, 43, 'fibra', 'Fibras de roupa encontradas no local do roubo'),
    (68, 44, 'arma', 'Arma antiga encontrada na casa do suspeito'),
    (69, 45, 'câmera', 'Imagens de segurança da loja de eletrônicos'),
    (70, 46, 'testemunho', 'Relato de uma testemunha da festa universitária'),
    (71, 47, 'video', 'Imagens de segurança do evento de gala'),
    (72, 47, 'video', 'Imagens de segurança do evento de gala capturando o suspeito'),
    (73, 47, 'digitais', 'Impressões digitais no display do colar'),
    (74, 48, 'instrumento', 'Violino valioso encontrado em uma casa suspeita'),
    (75, 49, 'fóssil', 'Fóssil raro encontrado na casa do suspeito'),
    (76, 50, 'video', 'Imagens de segurança da festa de aniversário infantil');

INSERT INTO Suspeito VALUES 
	(1, 6, 24, 'brigaram recentemente no trabalho'),
	(2, 10, 24, 'emprestou dinheiro para a vítima que ainda não devolveu'),
	(3, 11, 24, 'sofreu uma traição pela vítima um três meses antes do crime'),
	(4, 12, 24, 'já foi preso por tráfico de drogas'),
	(5, 13, 24, 'foi visto discutindo com a vítima uma semana antes');

INSERT INTO Alibi VALUES 
	(1, 1, 'fui ao cinema com amigos, tenho fotos do dia', 'sim'),
	(2, 2, 'estava na academia, tenho o registro de entrada', 'não'),
	(3, 3, 'fiquei em casa jogando videogame online com amigos', 'sim'),
	(4, 4, 'trabalhei até tarde no escritório naquela noite', 'não'),
	(5, 5, 'passei a noite na casa dos meus pais, eles podem confirmar', 'sim');
    
INSERT INTO Ligacao VALUES
	(1, 12, 1, '2024-01-05', '12 min'),
	(2, 5, 1, '2024-01-03', '47 min'),
	(3, 10, 1, '2024-01-02', '10 min'),
	(4, 1, 6, '2024-01-04', '24 min');