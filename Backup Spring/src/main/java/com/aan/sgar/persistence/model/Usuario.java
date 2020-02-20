package com.aan.sgar.persistence.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Entity;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

import com.aan.sgar.rest.request.UsuarioRequest;

@Entity
public class Usuario implements Serializable {

    /*
     * Classe que representa um usuario no sistema on-line.
     */

    public Usuario(UsuarioRequest request){
        setEmail(request.getEmail());
        setFuncao(request.getFuncao());
        setNome(request.getNome());
        setSenha(request.getSenha());
        setCpf(request.getCpf());
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_USUARIO")
    private long id;

    @NotNull
    @NotEmpty
    @Column(name = "CPF_USUARIO", updatable = false, unique = true)
    private String cpf;

    @NotNull
    @NotEmpty
    @Column(name = "NOME")
    private String nome;

    @NotNull
    @NotEmpty
    @Column(name = "FUNCAO")
    private String funcao;

    @NotNull
    @NotEmpty
    @Column(name = "EMAIL", updatable = false, unique = true)
    private String email;

    @NotNull
    @NotEmpty
    @Column(name = "SENHA")
    private String senha;

    public long getId() {
        return this.id;
    }

    public String getCpf() {
        return this.cpf;
    }

    public String getNome() {
        return this.nome;
    }

    public String getFuncao() {
        return this.funcao;
    }

    public String getEmail() {
        return this.email;
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

    public void setEmail(String email) {
        this.email = email;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public void setCpf(String cpf) {
        this.cpf = cpf;
    }

}