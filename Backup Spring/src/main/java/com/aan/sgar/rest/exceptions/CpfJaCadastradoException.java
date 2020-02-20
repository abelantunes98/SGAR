package com.aan.sgar.rest.exceptions;

public class CpfJaCadastradoException extends GenericException{

	public CpfJaCadastradoException() {
		super("O cpf já esta em uso.");
	}

}