package com.interra.example.T54A4Demo.entities;
import javax.xml.bind.annotation.XmlElement;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
 
import org.apache.tapestry5.beaneditor.NonVisual;
import org.apache.tapestry5.beaneditor.Validate;

@Entity
public class Hero
{
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@Validate("required")
	private String name;

	public Hero() {
		super();
	}

	public Hero(Long id, String name) {
		this();
		this.id = id;
		this.name = name;
	}

	@XmlElement
    public Long getId()
	{
		return id;
	}

	public void setId(Long id)
	{
		this.id = id;
	}

	@XmlElement
    public String getName()
	{
		return name;
	}

	public void setName(String name)
	{
		this.name = name;
	}

	public boolean equals(Object o)
	{
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;

		Hero that = (Hero) o;

		return getId() != null ? getId().equals(that.getId()) : that.getId() == null;
	}

	public int hashCode()
	{
		return (getId() != null ? getId().hashCode() : 0);
	}

	public String toString()
	{
		return getName();
	}
}