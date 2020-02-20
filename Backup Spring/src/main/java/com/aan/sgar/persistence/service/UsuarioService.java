package com.aan.sgar.persistence.service;

import com.aan.sgar.persistence.dao.UsuarioDAO;
import com.aan.sgar.persistence.model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioDAO dao;

    public Usuario findByEmail(String email) {
        return dao.findByEmail(email);
    }

    public Usuario findByCpf(String cpf) {
        return dao.findByCpf(cpf);
    }

    public void deleteByCpf(String cpf) {
        dao.deleteByCpf(cpf);
    }

    public void save(Usuario usr) {
        dao.save(usr);
    }

    public List<Usuario> list() {
		return this.dao.findAll();
	}
}
