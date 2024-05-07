CREATE DATABASE Mercado;

USE mercado;

CREATE TABLE Produtos (
	idProdutos INT NOT NULL AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	quantidade INT NOT NULL,
	valor_unitario DECIMAL NOT NULL,
	PRIMARY KEY (idProdutos)
);

desc Produtos;

CREATE TABLE Vendas (
	idVendas INT NOT NULL AUTO_INCREMENT,
	data_venda DATE NOT NULL,
	valor_total DECIMAL NOT NULL,
	PRIMARY KEY (idVendas)
);

CREATE TABLE ItensVendidos (
	idItensVendidos INT NOT NULL AUTO_INCREMENT,
	valor_venda DECIMAL NOT NULL,
	quantidade INT NOT NULL,
	fk_idVendas INT NOT NULL,
	fk_idProdutos INT NOT NULL,
	PRIMARY KEY (idItensVendidos),
	FOREIGN KEY (fk_idVendas) REFERENCES Vendas (idVendas),
	FOREIGN KEY (fk_idProdutos) REFERENCES Produtos (idProdutos)
);

desc ItensVendidos;