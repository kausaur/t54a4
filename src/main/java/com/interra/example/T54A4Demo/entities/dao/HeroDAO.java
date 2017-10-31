package com.interra.example.T54A4Demo.entities.dao;

import java.util.List;

import org.apache.tapestry5.hibernate.annotations.CommitAfter;

import com.interra.example.T54A4Demo.entities.Hero;

public interface HeroDAO {

	Hero get(Long id);

	List<Hero> getAll();
	
	@CommitAfter
	void saveOrUpdate(Hero hero);
	
	@CommitAfter
	boolean delete(Long id);

	/**
	 * @param name
	 */
	@CommitAfter
	void save(String name);
}
