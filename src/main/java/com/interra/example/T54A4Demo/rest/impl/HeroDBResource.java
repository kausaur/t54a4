package com.interra.example.T54A4Demo.rest.impl;

import java.util.List;

import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.Response;

import com.interra.example.T54A4Demo.entities.Hero;

@Path("/dbheroes")
public interface HeroDBResource
{
	@GET
	@Produces({"application/json"})
	public List<Hero> getAllDomains();

	@POST
	@Produces({"application/json"})
	public Response post(Hero domainObject);

	@GET
	@Path("{id}")
	@Produces({"application/json"})
	public Hero getDomainObject(@PathParam("id") int id);

}