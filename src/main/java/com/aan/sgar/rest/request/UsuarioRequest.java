package com.aan.sgar.rest.request;

import java.io.Serializable;

public class UsuarioRequest implements Serializable {

    /*
    */

private String cpf;
private String nome;
private String funcao;
private String senha;

public String getId() {
    return this.cpf;
}

public String getNome() {
    return this.nome;
}

public String getFuncao() {
    return this.funcao;
}

public String getSenha() {
    return this.senha;
}

public void setNome(String nome) {
    this.nome = nome;
}

public void setFuncao(String funcao) {
    this.funcao = funcao;
}

public void setSenha(String senha) {
    this.senha = senha;
}


}