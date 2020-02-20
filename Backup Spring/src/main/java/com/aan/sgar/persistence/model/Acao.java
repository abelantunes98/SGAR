package com.aan.sgar.persistence.model;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.ArrayList;

public class Acao implements Serializable {

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
    @Column(name = "VALOR")
    private float valor;

    @NotEmpty
    @NotNull
    @Column(name = "MOTIVO")
    private String motivo;

    @NotEmpty
    @NotNull
    @Column(name = "ID_LOCAL")
    private long idLocal;

    @Column(name = "ID_PEDIDO")
    private long idPedido;

    @NotEmpty
    @NotNull
    @Column(name = "DATA")
    private String data;

    @NotEmpty
    @NotNull
    @Column(name = "CPF_RESPONSAVEL")
    private String cpfResponsavel;

    private ArrayList<Number> bensUsados;

    public void addBemUsado(long id) {
        this.bensUsados.add(id);
    }

    public long getId() {
        return this.id;
    }

    public String getDescricao() {
        return this.descricao;
    }

    public float getValor() {
        return this.valor;
    }

    public String getMotivo() {
        return this.motivo;
    }

    public long getLocalId() {
        return this.idLocal;
    }

    public long getPedidoId() {
        return this.idPedido;
    }

    public ArrayList<Number> getIdsBensUsados() {
        return this.bensUsados;
    }

    public boolean getBemUsado(long id) {
        return (this.bensUsados.contains(id));
    }

    public String getData() {
        return this.data;
    }

    public String getCpfResponsavel() {
        return this.cpfResponsavel;
    }

    public void setDescricao(String descricao) {
        this.descricao = descricao;
    }

    public void setValor(float valor) {
        this.valor = valor;
    }

    public void setMotivo(String motivo) {
        this.motivo = motivo;
    }

    public void setLocalId(long id) {
        this.idLocal = id;
    }

    public void setPedidoId(long id) {
        this.idPedido = id;
    }

    public void setData(String data) {
        this.data = data;
    }

    public void setCpfResponsavel(String cpf) {
        this.cpfResponsavel = cpf;
    }

}