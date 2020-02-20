package com.aan.sgar;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

/*
* Esta linha faz com que pacotes que não estavam sendo encontrados pelo sistema
* sejam localizados a partir de um scan. Isso foi necessário para o Controller funcionar.
*/
@ComponentScan({ "com.aan.sgar.rest.controller", "com.aan.sgar.persistence"})
@EnableJpaRepositories({"com.aan.sgar.persistence.dao"})
@EntityScan({"com.aan.sgar.persistence.model"})
@SpringBootApplication
public class SgarApplication {

	public static void main(String[] args) {
		SpringApplication.run(SgarApplication.class, args);

	}

	@Bean
	public void inicializandoPropriedades() {
		try {
			Properties properties = new Properties();
			String path = new File("").getAbsolutePath() + File.separator + "src" + File.separator + "main"
					+ File.separator + "resources" + File.separator + "application.properties";
			FileInputStream stream = new FileInputStream(path);

			properties.load(stream);

			String hostname = properties.getProperty("api.hostname");
			System.setProperty("api.hostname", hostname);
			
		} catch (IOException e) {
			e.printStackTrace();
		}

	}

}
