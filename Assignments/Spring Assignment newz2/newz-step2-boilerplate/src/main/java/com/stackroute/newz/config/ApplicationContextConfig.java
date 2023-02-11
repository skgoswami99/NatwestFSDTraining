package com.stackroute.newz.config;

import java.util.Properties;

import javax.sql.DataSource;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;
import org.springframework.jdbc.datasource.DriverManagerDataSource;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

/*This class will contain the application-context for the application. 
 * Define the following annotations:
 * @Configuration - Annotating a class with the @Configuration indicates that the 
 *                  class can be used by the Spring IoC container as a source of 
 *                  bean definitions
 * @EnableTransactionManagement - Enables Spring's annotation-driven transaction management capability.
 *                  
 * */
@Configuration
@EnableTransactionManagement
public class ApplicationContextConfig {
	
	/*
	 * Define the bean for DataSource. In our application, we are using MySQL as the
	 * dataSource. To create the DataSource bean, we need to know: 1. Driver class
	 * name 2. Database URL 3. UserName 4. Password
	 */
	
/*
        Use this configuration while submitting solution in hobbes.
		dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
		dataSource.setUrl("jdbc:mysql://" + System.getenv("MYSQL_HOST") + ":3306/" + System.getenv("MYSQL_DATABASE")
				+"?verifyServerCertificate=false&useSSL=false&requireSSL=false");
		dataSource.setUsername(System.getenv("MYSQL_USER"));
		dataSource.setPassword(System.getenv("MYSQL_PASSWORD")); */

	
	/*
	 * Define the bean for SessionFactory. Hibernate SessionFactory is the factory
	 * class through which we get sessions and perform database operations.
	 */
	@Bean
	public LocalSessionFactoryBean sessionFactory() {
		LocalSessionFactoryBean sessionFactory = new LocalSessionFactoryBean();
		sessionFactory.setDataSource(getDataSource());
		sessionFactory.setPackagesToScan(new String[] {"com.stackroute.newz.model"});
		sessionFactory.setHibernateProperties(hibernateProperties());
		return sessionFactory;
	}

	/*
	 * Define the bean for Transaction Manager. HibernateTransactionManager handles
	 * transaction in Spring. The application that uses single hibernate session
	 * factory for database transaction has good choice to use
	 * HibernateTransactionManager. HibernateTransactionManager can work with plain
	 * JDBC too. HibernateTransactionManager allows bulk update and bulk insert and
	 * ensures data integrity.
	 */
	@Bean
	public DataSource getDataSource() {
		DriverManagerDataSource dataSource = new DriverManagerDataSource();
		dataSource.setDriverClassName("com.mysql.cj.jdbc.Driver");
		dataSource.setUrl("jdbc:mysql://" + System.getenv("MYSQL_HOST") + ":3306/" + System.getenv("MYSQL_DATABASE")
				+"?verifyServerCertificate=false&useSSL=false&requireSSL=false");
		dataSource.setUsername(System.getenv("MYSQL_USER"));
		dataSource.setPassword(System.getenv("MYSQL_PASSWORD"));
//		dataSource.setUrl("jdbc:mysql://localhost:3306/stackRoute_Ass2?verifyServerCertificate=false&useSSL=false&requireSSL=false");
//		dataSource.setUsername("root");
//		dataSource.setPassword("Nanhi1@1");
		return dataSource;
	}
	
	private Properties hibernateProperties() {
		Properties properties = new Properties();
		properties.setProperty("hibernate.dialect", "org.hibernate.dialect.MySQL5Dialect");
		properties.setProperty("hibernate.show_sql", "true");
		properties.setProperty("hibernate.hbm2ddl.auto", "update");
		return properties;
	}
	
	@Autowired
	@Bean("txManager")
	public HibernateTransactionManager transactionManager(SessionFactory sessionFactory) {
		HibernateTransactionManager txManager = new HibernateTransactionManager();
		txManager.setSessionFactory(sessionFactory);
		return txManager;
	}
	
	@Bean public PlatformTransactionManager txManager() {
		return new DataSourceTransactionManager(getDataSource()); 
		}
}
