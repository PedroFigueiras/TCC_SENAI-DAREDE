USE DAREDE
GO

--USUARIO
INSERT INTO USUARIO (email,senha,statusUsuario)
VALUES
('adm@darede.com','adm123','Ativo'),
('pedro.figueira@darede.com','pedro123','Ativo'),
('marcelo.makoto@BURGUERKING.com','marcelo123','Ativo');
GO

select * from USUARIO


--ADMINISTRADOR
INSERT INTO ADMINISTRADOR(idUsuario,imgADM,cnpjADM,enderecoADM,estadoADM,cidadeADM,numeroTelADM)
VALUES
('1','123456789','17.961.034/0001-45','Alameda Araguaia, 2044 - Bloco 1', 'São Paulo', 'Barueri', '(11)3900-1010' );

GO

select * from ADMINISTRADOR


--FUNCIONARIO
INSERT INTO FUNCIONARIO(idUsuario,imgF,nomeF,cpfF,rgF,dataNascimentoF,enderecoF,estadoF,cidadeF,numeroTelF,numeroCelF,situacaoFuncionario)
VALUES
('2','12345678','Pedro Henrique Fgigueira','123.456.765-76','21.412.768-0', '14/03/2003','Rua da Concordia, 25', 'São Paulo', 'São Paulo','11 2765-1233','119776-54780','ATIVO');
GO

select * from FUNCIONARIO


--EMPRESA
INSERT INTO EMPRESA (idUsuario,idFuncionario,imgE,nomeE,cnpjE,enderecoE,estadoE,cidadeE,numeroTelE,numeroCelE)
VALUES
('3','1','12345678','Burguer King','19.531.015/0001-23', 'Avenida das Nações, 2098', 'São Paulo','Santo André', '11 2756-3211','11 98876-8766');
GO

select * from EMPRESA

--SITUACAO_EQUIPAMENTO
INSERT INTO SITUACAO_EQUIPAMENTO (situacaoEquipamento)
VALUES
('Utilizando'),
('Pausado');
GO

select * from SITUACAO_EQUIPAMENTO

--EQUIPAMENTO
INSERT INTO EQUIPAMENTO (idEmpresa,idSituacaoEquipamento,nomeEquipamento)
VALUES
('1','1','VPC'),
('1','2','EC2');
GO

select * from EQUIPAMENTO





--VPC
INSERT INTO VPC(idEquipamento,tagNome,blocoCIDR,zonaDisponibilidade,subRedesPublica,blocoCIDRpublica,nsubRedesPrivada,blocoCIDprivada,gateway,endpointVPC)
VALUES

GO

--EC2
INSERT INTO EC2(idVPC,SO,tipoInstancia,quantidadeInstancia, rede, subRede, ipPublico, armazenamento, chave, valor, numeroGSeguranca, descricaoGrupo,tipoRegra,protocolo, parChaves,statusEC2)
VALUES

GO