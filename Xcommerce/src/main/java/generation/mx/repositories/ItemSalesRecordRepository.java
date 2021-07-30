package generation.mx.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import generation.mx.models.ItemSalesRecordModel;

@Repository
public interface ItemSalesRecordRepository extends CrudRepository<ItemSalesRecordModel, Long>{

	//public abstract ArrayList<ItemSalesRecordModel>findById(long id);
}
