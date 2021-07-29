package generation.mx.controllers;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import generation.mx.models.ItemSalesRecordModel;
import generation.mx.services.ItemSalesRecordService;

@RestController
@RequestMapping("/ItemSalesRecord")
public class ItemSalesRecordController {
	
	@Autowired
	ItemSalesRecordService itemSalesRecordService;
	
	@GetMapping
	public ArrayList<ItemSalesRecordModel> getItemSalesRecords(){
		return itemSalesRecordService.getItemSalesRecords();
	}
	
	@PostMapping
	public ItemSalesRecordModel saveItemSalesRecord(@RequestBody ItemSalesRecordModel ItemSalesRecord) {
		return itemSalesRecordService.saveItemSalesRecord(ItemSalesRecord);
	}

}
