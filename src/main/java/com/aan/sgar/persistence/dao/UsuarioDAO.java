package com.aan.sgar.persistence.dao;

import com.aan.sgar.persistence.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface UsuarioDAO extends JpaRepository<Usuario, String>{
	
    Usuario findByEmail(@Param("email") String email);
    
    Usuario findByCpf(@Param("CPF_USUARIO") String cpf);

}
