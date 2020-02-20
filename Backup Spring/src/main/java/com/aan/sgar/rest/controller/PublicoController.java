package com.aan.sgar.rest.controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import com.aan.sgar.persistence.model.Usuario;
import com.aan.sgar.persistence.service.UsuarioService;
import com.aan.sgar.rest.exceptions.CpfJaCadastradoException;
import com.aan.sgar.rest.request.UsuarioRequest;

@RestController
@RequestMapping(value = "/publico")
public class PublicoController {

    @Autowired
    private UsuarioService usuarioService;

    @GetMapping(value = "/usuarios")
    public ResponseEntity<List<Usuario>> getUsuarios() {
        
        return new ResponseEntity<List<Usuario>> (usuarioService.list(), HttpStatus.OK);
    }

    
    @PostMapping(value = "/usuario")
    public ResponseEntity<Usuario> addUsuario(@RequestBody UsuarioRequest clientRequest) {
        
        Usuario usuarioCadastrado = usuarioService.findByCpf(clientRequest.getCpf());
        if (usuarioCadastrado != null) {
            throw new CpfJaCadastradoException();
        }

        Usuario novoUsuario = new Usuario(clientRequest);
        usuarioService.save(novoUsuario);
        return new ResponseEntity<Usuario>(novoUsuario, HttpStatus.OK);
    }
}