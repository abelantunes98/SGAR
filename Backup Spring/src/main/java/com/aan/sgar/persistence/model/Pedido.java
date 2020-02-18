package com.aan.sgar.persistence.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;

public class Pedido implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_ACAO")
    private long id;

    @NotEmpty
    @NotNull
    @Column(name = "DESCRICAO")
    private String descricao;

    @NotEmpty
    @NotNull
    @Column(name = "CPF_ASSOCIADO")
    private String cpfAssociado;

    @NotEmpty
    @NotNull
    @Column(name = "MOTIVO")
    private String motivo;

    @NotEmpty
    @NotNull
    @Column(name = "ID_LOCAL")
    private long idLocal;

    @NotEmpty
    @NotNull
    @Column(name = "DATA")
    private String data;

    @NotEmpty
    @NotNull
    @Column(name = "CPF_RESPONSAVEL")
    private String cpfResponsavel;

    @NotEmpty
    @NotNull
    @Column(name = "REALIZADO")
    private boolean realizado;

    private ArrayList<Number> bensSolicitados;

    public void addBemSolicitado(long id) {
        this.bensSolicitados.add(id);
    }

    public long getId() {
        return this.id;
    }

    public String getDescricao() {
        return this.descricao;
    }

    public String getCpfAssociado() {
        return this.cpfAssociado;
    }

    public String getMotivo() {
        return this.motivo;
    }

    public long getLocalId() {
        return this.idLocal;
    }

    public ArrayList<Number> getIdsBensSolicitados() {
        return this.bensSolicitados;
    }

    public boolean getBemSolicitado(long id) {
        return (this.bensSolicitados.contains(id));
    }

    public String getData() {
        return this.data;
    }

    public String getCpfResponsavel() {
        return this.cpfResponsavel;
    }

    public boolean getRealizado() {
        return this.realizado;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public void setCpfAssociado(String cpf) {
        this.cpfAssociado = cpf;
    }

    public void setMotivo(String motivo) {
        this.motivo = motivo;
    }

    public void setLocalId(long id) {
        this.idLocal = id;
    }

    public void setData(String data) {
        this.data = data;
    }

    public void setCpfResponsavel(String cpf) {
        this.cpfResponsavel = cpf;
    }

    public void setRealizado(boolean realizado) {
        this.realizado = realizado;
    }

}