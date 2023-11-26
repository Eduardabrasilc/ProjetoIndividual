create database Homeow;
use Homeow;

create table usuario (
idUsuario int primary key auto_increment,
nomeUsuario varchar(45),
emailUsuario varchar(45),
senhaUsuario varchar(45),
fkSupor int,
fkIndicado int,
    constraint fkIndic foreign key 
    (fkIndicado) references usuario(idUsuario));
    
    alter table usuario add constraint fkSuporte foreign key
    (fkSupor) references suporte(idSuporte);
    
    describe usuario;
    
create table quiz (
idQuiz int primary key auto_increment,
FkUsuario int,
idNumQuestões int,
NumAcertos varchar(45),
NumErros varchar(45),
constraint fkUser foreign key 
(fkUsuario) references usuario(idUsuario));

create table suporte (
idSuporte int,
fkUsuario int,
primary key (idSuporte, fkUsuario),
numeroChamado int,
dataChamado date,
tipoChamado varchar(45));


