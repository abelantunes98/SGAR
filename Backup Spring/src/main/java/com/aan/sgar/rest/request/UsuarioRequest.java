package com.aan.sgar.rest.request;

import java.io.Serializable;

public class UsuarioRequest implements Serializable {

    /*
    */

private String cpf;
private String nome;
private String funcao;
private String senha;
private String email;

public String getCpf() {
    return this.cpf;
}

public String getNome() {
    return this.nome;
}

public String getEmail(){
    return this.email;
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

public void setCpf(String cpf){
    this.cpf = cpf;
}

public void setEmail(String email){
    this.email = email;
}


}