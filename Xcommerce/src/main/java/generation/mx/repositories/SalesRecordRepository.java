package generation.mx.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SalesRecordRepository extends CrudRepository<SalesRecordRepository,
Long>{
	
}