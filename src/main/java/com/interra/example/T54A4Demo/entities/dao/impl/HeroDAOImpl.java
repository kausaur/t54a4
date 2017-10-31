package com.interra.example.T54A4Demo.entities.dao.impl;

import java.util.List;

import org.apache.tapestry5.hibernate.annotations.CommitAfter;
import org.apache.tapestry5.ioc.annotations.Inject;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;

import com.interra.example.T54A4Demo.entities.Hero;
import com.interra.example.T54A4Demo.entities.dao.HeroDAO;

public class HeroDAOImpl implements HeroDAO {
	/**
	 * Hibernate Sessions.
	 */
	@Inject
	private Session session;
	
	/*public HeroDAOImpl() {
		for(int i=0; i<100; i++) {
			Hero obj = new Hero((long) i, "Hero " + i);
			this.saveOrUpdate(obj);
		}
	}*/

	
	@Override
	public Hero get(Long id) {

		Criteria criteria = session.createCriteria(Hero.class);
		criteria.add(Restrictions.eq("id", id));
		Hero hero = (Hero) criteria.uniqueResult();
		return hero;
		
	}

	@Override
	@CommitAfter
	public void saveOrUpdate(Hero hero) {
		session.save(hero);
	}

	@Override
	public boolean delete(Long id) {
		Hero hero = this.get(id);
		session.delete(hero);
		return true;
	}

	@Override
	public void save(String name) {
		Hero hero = new Hero();
		hero.setName(name);
		this.saveOrUpdate(hero);
	}

	@Override
	public List<Hero> getAll() {
		Criteria criteria = session.createCriteria(Hero.class);
		List<Hero> heroes = criteria.list();
		return heroes;
	}

	
}
