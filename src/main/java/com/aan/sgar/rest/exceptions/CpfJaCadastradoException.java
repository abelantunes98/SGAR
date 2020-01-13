package com.aan.sgar.rest.exception.usuario;

public class EmailJaCadastradoException extends GenericException{

	public EmailJaCadastradoException() {
		super("O cpf já esta em uso.");
	}

}