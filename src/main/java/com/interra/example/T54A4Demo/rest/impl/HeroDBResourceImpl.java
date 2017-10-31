package com.interra.example.T54A4Demo.rest.impl;

import java.util.List;

import javax.ws.rs.core.Response;

import org.apache.tapestry5.ioc.annotations.Inject;

import com.interra.example.T54A4Demo.entities.Hero;
import com.interra.example.T54A4Demo.entities.dao.HeroDAO;

public class HeroDBResourceImpl implements HeroDBResource
{
	
	@Inject
	HeroDAO heroDao;
	
	/*public HeroDBResourceImpl() {
		for(int i=0; i<100; i++) {
			Hero obj = new Hero((long) i, "Hero " + i);
			heroDao.saveOrUpdate(obj);
		}
	}*/
	
	private void _createDefault() {
		for(int i=0; i<10; i++) {
			Hero obj = new Hero((long) i, "Hero " + i);
			heroDao.saveOrUpdate(obj);
		}
	}

	public List<Hero> getAllDomains()
	{
		 List<Hero> heroes = heroDao.getAll();
		 if(heroes.size() == 0) {
			 this._createDefault();

			 heroes = heroDao.getAll();
		 }
		 return heroes;
	}

	public Response post(Hero domainObject)
	{
		heroDao.saveOrUpdate(domainObject);
		return Response.ok().build();
	}

	public Hero getDomainObject(int id)
	{
		return heroDao.get((long) id);
	}

}