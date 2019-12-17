package com.aan.sgar.persistence.service;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.JpaRepository;


@Primary
public class GenericService<T> {
	
	@Autowired
	private JpaRepository<T, Long> dao;
	
	public T salvar(T entity) {
		return dao.save(entity);
	}
	
	public T atualizar(T entity) {
		return dao.save(entity);
	}

	public void deletar(T entity) {
		dao.delete(entity);
	}
	
	public T findById(Long id) {
		T retorno = null;
		Optional<T> op= dao.findById(id);
		if(op.isPresent()) retorno = op.get();
		return retorno;
	}
	
	public List<T> findAll() {
		return dao.findAll();
	}
	
	public void deleteAll(){
		dao.deleteAll();
	}
}
