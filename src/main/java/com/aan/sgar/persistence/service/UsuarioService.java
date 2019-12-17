package com.aan.sgar.persistence.service;


import com.aan.sgar.persistence.dao.UsuarioDAO;
import com.aan.sgar.persistence.model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UsuarioService extends GenericService<Usuario>{
	
	@Autowired
	private UsuarioDAO dao;
	
	public Usuario findByEmail(String email) {
		return dao.findByEmail(email);
    }
    
    public Usuario findByCpf(String cpf) {
        return dao.findByCpf(cpf);
    }
}
