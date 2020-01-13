package com.aan.sgar.rest.controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.aan.sgar.persistence.model.Usuario;
import com.aan.sgar.persistence.service.UsuarioService;
import com.aan.sgar.rest.exceptions.CpfJaCadastradoException;

@RestController
@RequestMapping(value = "/publico")
public class PublicoController {

    private UsuarioService usuarioService;

    @GetMapping(value = "/usuarios")
    public List<Usuario> getUsuarios() {

        List<Usuario> usuarios = new ArrayList<Usuario>();
        usuarios.add(new Usuario());
        return usuarios;
    }

    
    @PostMapping(value = "/usuario")
    public ResponseEntity<Usuario> addUsuario(@RequestBody ClienteRequest clientRequest) {
        
        Usuario usuarioCadastrado = usuarioService.findByCpf(clientRequest.cpf);
        if (usuarioCadastrado != null) {
            throws new CpfJaCadastradoException();
        }

        novoUsuario = new Usuario(clientRequest);
        usuarioService.save(novoUsuario);
    }

    return new ResponseEntity<Cliente>(novoUsuario, HttpStatus.OK);
}