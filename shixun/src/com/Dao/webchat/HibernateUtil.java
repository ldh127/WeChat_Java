package com.Dao.webchat;

import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.service.ServiceRegistryBuilder;


public class HibernateUtil {
	public static final SessionFactory sessionFactory;

	static {
		try {
	         Configuration config = new Configuration();
	         config.configure();
	         ServiceRegistry serviceRegistry = new ServiceRegistryBuilder().applySettings(config.getProperties()).buildServiceRegistry();
	          sessionFactory = config.buildSessionFactory(serviceRegistry);
		} catch (Throwable ex) {
			System.err.println("Initial SessionFactory creation failed." + ex);
			throw new ExceptionInInitializerError(ex);
		}
	}

	// ThreadLocal可以隔离多个线程的数据共享，因此不再需要对线程同步
	public static final ThreadLocal<Session> session = new ThreadLocal<Session>();

	public static Session currentSession() throws HibernateException {
		Session s = session.get();
		// 如果该线程还没有Session,则创建一个新的Session
		if (s == null) {
			s = sessionFactory.openSession();
			// 将获得的Session变量存储在ThreadLocal变量session里
			session.set(s);
		}
		return s;
	}

	public static void closeSession() throws HibernateException {
		Session s = session.get();
		if (s != null)
			s.close();
		session.set(null);
	}
}