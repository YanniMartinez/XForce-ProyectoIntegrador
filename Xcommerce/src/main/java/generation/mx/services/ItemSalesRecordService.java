package generation.mx.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import generation.mx.models.ItemSalesRecordModel;
import generation.mx.repositories.ItemSalesRecordRepository;

@Service
public class ItemSalesRecordService {
	
	@Autowired
	ItemSalesRecordRepository ItemSalesRecordRepository;
	
	public ArrayList<ItemSalesRecordModel>getItemSalesRecords(){
		   return(ArrayList<ItemSalesRecordModel>)ItemSalesRecordRepository.findAll();
	}
	
	public ItemSalesRecordModel saveItemSalesRecord(ItemSalesRecordModel ItemSalesRecord) {
		long lot = ItemSalesRecord.getItemSalesRecord();	
	       return ItemSalesRecord;
	}

}
