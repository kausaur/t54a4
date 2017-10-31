package com.interra.example.T54A4Demo.services;

import org.apache.tapestry5.hibernate.HibernateConfigurer;
import org.apache.tapestry5.hibernate.HibernateTransactionAdvisor;
import org.apache.tapestry5.ioc.MethodAdviceReceiver;
import org.apache.tapestry5.ioc.OrderedConfiguration;
import org.apache.tapestry5.ioc.ServiceBinder;
import org.apache.tapestry5.ioc.annotations.Match;
import org.apache.tapestry5.ioc.annotations.Startup;

import com.interra.example.T54A4Demo.entities.dao.HeroDAO;
import com.interra.example.T54A4Demo.entities.dao.impl.HeroDAOImpl;

/**
 * This module is automatically included as part of the Tapestry IoC Registry, it's a good place to
 * configure and extend Tapestry, or to place your own service definitions.
 */
public class DatabaseModule
{
    public static void bind(ServiceBinder binder)
    {
        binder.bind(HeroDAO.class, HeroDAOImpl.class);
    }

    @Match("*DAO")
    public static void adviseTransactions(HibernateTransactionAdvisor advisor, MethodAdviceReceiver receiver)
    {
        advisor.addTransactionCommitAdvice(receiver);
    }
    
    /*@Startup
    public void contributeHibernateSessionSource(OrderedConfiguration<HibernateConfigurer> conf) {
		conf.add("BCCHibernate", new HibernateConfigurer() {
			public void configure(org.hibernate.cfg.Configuration configuration) {

				// Let the newly created hibernate configuration file be used
				// for the application
				try
				{
					configuration.configure("hibernate.cfg.xml");
				}
				catch (Exception e) 
				{
					e.printStackTrace();
				}
			}
		});
	}*/
}