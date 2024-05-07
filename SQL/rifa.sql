CREATE DATABASE Rifa;
USE Rifa;

CREATE TABLE User (
	idUser INT NOT NULL AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	PRIMARY KEY (idUser)
);

desc User;

CREATE TABLE Rifa (
	idRifa INT NOT NULL AUTO_INCREMENT,
	valor_numero DECIMAL NOT NULL,
	descricao VARCHAR(100) NOT NULL,
	numeros INT NOT NULL,
	data DATE NOT NULL,
	premio VARCHAR(50),
	fk_User INT NOT NULL,
	PRIMARY KEY (idRifa),
	FOREIGN KEY (fk_User) REFERENCES User (idUser)
);

desc Rifa;

CREATE TABLE NumerosVendidos (
	idNumerosVendidos INT NOT NULL AUTO_INCREMENT,
	numero_escolhido INT NOT NULL,
	fk_idRifa INT NOT NULL,
	fk_idUser INT NOT NULL,
	PRIMARY KEY (idNumerosVendidos),
	FOREIGN KEY (fk_idRifa) REFERENCES Rifa (idRifa),
	FOREIGN KEY (fk_idUser) REFERENCES User (idUser)
);

desc NumerosVendidos;