package com.stackroute.spring.mvc.orm.config;

import java.io.IOException;
import java.util.Properties;

import javax.sql.DataSource;

import org.apache.commons.dbcp.BasicDataSource;
import org.hibernate.SessionFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.stackroute.spring.mvc.orm.model.Note;


@Configuration
@EnableTransactionManagement
public class ApplicationConfig 
{
	@Bean
	public DataSource GetDataSource() {
		BasicDataSource datasource = new BasicDataSource();

		datasource.setDriverClassName("com.mysql.jdbc.Driver");
//		datasource.setDriverClassName("com.mysql.cj.jdbc.Driver");
		datasource.setUrl("jdbc:mysql://localhost:3306/newsdb");
		datasource.setUsername("root");
		datasource.setPassword("mysql@2020");

		return datasource;
	}

	@Bean
	public LocalSessionFactoryBean getSessionFactory(DataSource datasource) throws IOException {
		LocalSessionFactoryBean sessionFactoryBean = new LocalSessionFactoryBean();

		sessionFactoryBean.setDataSource(datasource);

		Properties properties = new Properties();

		properties.put("hibernate.show_sql", "true");
		properties.put("hibernate.dialect", "org.hibernate.dialect.MySQL5Dialect");
		properties.put("hibernate.hbm2ddl.auto", "update");

		sessionFactoryBean.setHibernateProperties(properties);
		sessionFactoryBean.setAnnotatedClasses(Note.class);
		sessionFactoryBean.afterPropertiesSet();

		return sessionFactoryBean;
	}

	@Bean
	public HibernateTransactionManager getTransactionManager(SessionFactory sessionFactory) {
		HibernateTransactionManager transactionManager = new HibernateTransactionManager();
		transactionManager.setSessionFactory(sessionFactory);
		return transactionManager;
	}
}