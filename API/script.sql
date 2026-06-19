CREATE TABLE professores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);

CREATE TABLE turmas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    professor_id INT NOT NULL,

    FOREIGN KEY (professor_id)
    REFERENCES professores(id)
);

CREATE TABLE atividades (
    id INT AUTO_INCREMENT PRIMARY KEY,
    descricao TEXT NOT NULL,
    turma_id INT NOT NULL,

    FOREIGN KEY (turma_id)
    REFERENCES turmas(id)
);

INSERT INTO professores(nome,email,senha) VALUES
('João Silva','joao@email.com','123456'),
('Maria Souza','maria@email.com','123456'),
('Carlos Lima','carlos@email.com','123456');

INSERT INTO turmas(nome,professor_id) VALUES
('3º Ano A',1),
('2º Ano B',1),
('1º Ano C',2);

INSERT INTO atividades(descricao,turma_id) VALUES
('Prova de Matemática',1),
('Trabalho de História',1),
('Lista de Exercícios',2);