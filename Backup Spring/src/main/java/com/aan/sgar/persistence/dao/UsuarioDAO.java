package com.aan.sgar.persistence.dao;

import com.aan.sgar.persistence.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Modifying;
import javax.transaction.Transactional;
import org.springframework.data.jpa.repository.Query;

@Repository
public interface UsuarioDAO extends JpaRepository<Usuario, String>{
	
    Usuario findByEmail(@Param("email") String email);
    
    Usuario findByCpf(@Param("CPF_USUARIO") String cpf);

    Usuario save(Usuario usuario);

    @Transactional
	@Modifying
	@Query(value="Delete from Usuario u where u.cpf=:cpfA")
	void deleteByCpf(@Param("cpfA") String cpf);

}
