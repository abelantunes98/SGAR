package com.aan.sgar.persistence.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

public class Gasto implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_GASTO")
    private long id;

    @NotEmpty
    @NotNull
    @Column(name = "NOME")
    private String nome;

    @NotEmpty
    @NotNull
    @Column(name = "VALOR")
    private float valor;

    @NotEmpty
    @NotNull
    @Column(name = "MOTIVO")
    private String motivo;

    @NotEmpty
    @NotNull
    @Column(name = "DATA_ADQUIRIDO")
    private String dataAdquirido;

    @NotEmpty
    @NotNull
    @Column(name = "CPF_RESPONSAVEL")
    private String cpfResponsavel;

    public long getId() {
        return this.id;
    }

    public String getNome() {
        return this.nome;
    }

    public float getValor() {
        return this.valor;
    }

    public String getMotivo() {
        return this.motivo;
    }

    public String getDataAdquirido() {
        return this.dataAdquirido;
    }

    public String getCpfResponsavel() {
        return this.cpfResponsavel;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setValor(float valor) {
        this.valor = valor;
    }

    public void setMotivo(String motivo) {
        this.motivo = motivo;
    }

    public void setDataAdquirido(String data) {
        this.dataAdquirido = data;
    }

    public void setCpfResponsavel(String cpf) {
        this.cpfResponsavel = cpf;
    }
}