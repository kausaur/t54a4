package com.interra.example.T54A4Demo.services;

import org.apache.tapestry5.ioc.Configuration;
import org.apache.tapestry5.ioc.ServiceBinder;
import org.apache.tapestry5.ioc.annotations.Contribute;

import com.interra.example.T54A4Demo.rest.impl.HeroDBResource;
import com.interra.example.T54A4Demo.rest.impl.HeroDBResourceImpl;
import com.interra.example.T54A4Demo.rest.impl.HeroResource;
import com.interra.example.T54A4Demo.rest.impl.HeroResourceImpl;

public class WebModule
{
    public static void bind(ServiceBinder binder)
    {
        binder.bind(HeroResource.class, HeroResourceImpl.class);
        binder.bind(HeroDBResource.class, HeroDBResourceImpl.class);
    }
    
    /**
     * Contributions to the RESTeasy main Application, insert all your RESTeasy singletons services here.
     */
    @Contribute(javax.ws.rs.core.Application.class)
    public static void configureRestResources(Configuration<Object> singletons, HeroResource myDomainObjectResource
    		, HeroDBResource heroDBResource)
    {
    	singletons.add(myDomainObjectResource);
    	singletons.add(heroDBResource);
    }
}