CREATE SEQUENCE SEQ_CURSO
  INCREMENT 1
  MINVALUE 1
  START 1
;

CREATE SEQUENCE SEQ_ALUNO
  INCREMENT 1
  MINVALUE 1
  START 1
;

CREATE SEQUENCE SEQ_CURSO_ALUNO
  INCREMENT 1
  MINVALUE 1
  START 1
;

CREATE TABLE CURSO
(
	ID_CURSO bigint NOT NULL DEFAULT nextval('SEQ_CURSO'),
	DESCRICAO varchar(50),
	EMENTA text
);

ALTER TABLE CURSO ADD CONSTRAINT PK_CURSO
	PRIMARY KEY (ID_CURSO)
;

CREATE TABLE ALUNO
(
	ID_ALUNO bigint NOT NULL DEFAULT nextval('SEQ_ALUNO'),
	NOME varchar(50)
);

ALTER TABLE ALUNO ADD CONSTRAINT PK_ALUNO
	PRIMARY KEY (ID_ALUNO)
;

CREATE TABLE CURSO_ALUNO
(
	ID_CURSO_ALUNO bigint NOT NULL DEFAULT nextval('SEQ_CURSO_ALUNO'),
	ID_CURSO bigint,
	ID_ALUNO bigint
);

ALTER TABLE CURSO_ALUNO ADD CONSTRAINT PK_CURSO_ALUNO
	PRIMARY KEY (ID_CURSO_ALUNO)
;

ALTER TABLE CURSO_ALUNO ADD CONSTRAINT FK_CURSO
	FOREIGN KEY (ID_CURSO)
	REFERENCES CURSO(ID_CURSO)
;

ALTER TABLE CURSO_ALUNO ADD CONSTRAINT FK_ALUNO
	FOREIGN KEY (ID_ALUNO)
	REFERENCES ALUNO(ID_ALUNO)
;