package com.interra.example.T54A4Demo.rest.impl;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.Response;

import com.interra.example.T54A4Demo.entities.Hero;

public class HeroResourceImpl implements HeroResource
{
	List<Hero> objs;
	
	public HeroResourceImpl() {
		objs = new ArrayList<Hero>();
		for(int i=0; i<100; i++) {
			Hero obj = new Hero((long) i, "Hero " + i);
			objs.add(obj);
		}
	}

	public Hero[] getAllDomains()
	{
		return (Hero[]) objs.toArray(new Hero[0]);
	}

	public Response post(Hero domainObject)
	{
		objs.add(domainObject);
		return Response.ok().build();
	}

	public Hero getDomainObject(int id)
	{
		Hero domainObject = objs.get(id);
		if (domainObject == null)
		{
			throw new WebApplicationException(Response.Status.NOT_FOUND);
		}
		return domainObject;
	}

}