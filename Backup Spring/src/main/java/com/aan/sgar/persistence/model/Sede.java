package com.aan.sgar.persistence.model;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Map;
import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
// Import Models
import com.aan.sgar.persistence.model.Acao;
import com.aan.sgar.persistence.model.Gasto;

public class Sede implements Serializable {

    /*
     * Classe que representa um usuario no sistema on-line.
     */

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID_Sede")
    private long id;

    @NotNull
    @NotEmpty
    @Column(name = "NOME")
    private String nome;

    @NotNull
    @NotEmpty
    @Column(name = "LOCAL_ID")
    private long localId;

    @NotNull
    @NotEmpty
    @Column(name = "DATA_CRIACAO")
    private String dataCriacao;

    @NotNull
    @NotEmpty
    @Column(name = "FUNDOS")
    private float fundos;

    @NotNull
    @NotEmpty
    @Column(name = "CPF_RESPONSAVEL")
    private String cpfResponsavel;

    @NotNull
    @NotEmpty
    @Column(name = "FUNCAO")
    private String funcao;

    private ArrayList<Number> idBens;
    private ArrayList<Gasto> gastos;
    private ArrayList<Acao> acoes;
    private Map<String, String> cpfFuncaoRelacionados;

    public void/* boolean */ bemPertence(long id) {
        //
    }

    public void/* boolean */ estaRelacionado(String cpf) {
        //
    }

    public void addGasto(Gasto gasto) {
        this.gastos.add(gasto);
    }

    public void addAcao(Acao acao) {
        this.acoes.add(acao);
    }

    public void addRelacionado(String cpf, String funcao) {
        this.cpfFuncaoRelacionados.put(cpf, funcao);
    }

    public void addIdBem(long id) {
        this.idBens.add(id);
    }

    public long getId() {
        return this.id;
    }

    public String getNome() {
        return this.nome;
    }

    public long getLocalId() {
        return this.localId;
    }

    public String getDataCriacao() {
        return this.dataCriacao;
    }

    public String getCpfResponsavel() {
        return this.cpfResponsavel;
    }

    public String getFuncao() {
        return this.funcao;
    }

    public ArrayList<Number> getIdBens() {
        return this.idBens;
    }

    public float getFundos() {
        return this.fundos;
    }

    public ArrayList<Gasto> getGastos() {
        return this.gastos;
    }

    public ArrayList<Acao> getAcoes() {
        return this.acoes;
    }

    public void/* Acao */ getAcaoById(long id) {
        //
    }

    public void/* ArrayList<Acao> */ getAcoesByData(String Data) {
        //
    }

    public void/* Map<String, String> */ getRelacionados() {
        //
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setLocalId(long localId) {
        this.localId = localId;
    }

    public void setFuncao(String funcao) {
        this.funcao = funcao;
    }

    public void setFundos(float fundos) {
        this.fundos = fundos;
    }

    public void setResponsavelCpf(String responsavelCpf) {
        this.cpfResponsavel = responsavelCpf;
    }

    public void setDataCriacao(String data) {
        this.dataCriacao = data;
    }

}