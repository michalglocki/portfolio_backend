package pl.mglocki.portfolio;
import java.util.List;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class GetListService {

	public <E> List<E> getList(E input){
		
		String entityName = input.getClass().getName();
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	
		Configuration config = new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(input.getClass());
		SessionFactory sf = config.buildSessionFactory();
		Session session = sf.openSession();
		
		Transaction tx = session.beginTransaction();
		
		List<E> list = session.createQuery("from " + entityName).list();
		
		tx.commit();
		session.close();
		return list; 
	}
	
	public <E> List<E> getList(E input, int id){
		
		String entityName = input.getClass().getName();
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		}
	
		Configuration config = new Configuration().configure("hibernate.cfg.xml").addAnnotatedClass(input.getClass());
		SessionFactory sf = config.buildSessionFactory();
		Session session = sf.openSession();
		
		Transaction tx = session.beginTransaction();
		
		List<E> list = session.createQuery("from " + entityName + " entity WHERE entity.belongs = " + id).list();
		
		tx.commit();
		session.close();
		return list; 
	}

}
