CREATE DATABASE barbearia;

use barbearia;

CREATE TABLE Cliente (
	idCliente INT NOT NULL AUTO_INCREMENT,
	nome VARCHAR(45) NOT NULL,
	dataNascimento DATE NOT NULL,
	whatsapp DECIMAL(9) NOT NULL,
	PRIMARY KEY(idCliente)
);


CREATE TABLE Servico (
	idServico INT NOT NULL AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	valor FLOAT NOT NULL,
	descricao VARCHAR(100),
	PRIMARY KEY(idServico)
);	

CREATE TABLE Agenda (
	idAgenda INT NOT NULL AUTO_INCREMENT,
	data DATETIME NOT NULL,
	dia DATE NOT NULL,
	hora TIME NOT NULL,
	pago CHAR(1) NOT NULL,
	fk_idCliente INT NOT NULL,
	fk_idServico INT NOT NULL,
	PRIMARY KEY (idAgenda),
	FOREIGN KEY (fk_idCliente) REFERENCES Cliente (idCliente),
	FOREIGN KEY (fk_idServico) REFERENCES Servico (idServico)
);