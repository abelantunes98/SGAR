package com.aan.sgar.rest.controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.aan.sgar.persistence.model.Usuario;

@RestController
@RequestMapping("/publico")
public class PublicoController {   

    @GetMapping("/")
    public List<Usuario> getUsuarios() {
        
        List<Usuario> usuarios = new ArrayList<Usuario>();
        usuarios.add(new Usuario());
        return usuarios;
    }

}