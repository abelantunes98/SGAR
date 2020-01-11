package com.aan.sgar;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/*
* Esta linha faz com que pacotes que não estavam sendo encontrados pelo sistema
* sejam localizados a partir de um scan. Isso foi necessário para o Controller funcionar.
*/
@ComponentScan({ "com.aan.sgar.rest.controller" })
@EntityScan("com.delivery.domain")
@EnableJpaRepositories("com.delivery.repository")
@SpringBootApplication
public class SgarApplication {

	public static void main(String[] args) {
		SpringApplication.run(SgarApplication.class, args);

	}

}
