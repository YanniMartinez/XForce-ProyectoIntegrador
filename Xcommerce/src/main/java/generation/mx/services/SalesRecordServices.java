package generation.mx.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import generation.mx.models.SalesRecordModel;
import generation.mx.repositories.SalesRecordRepository;

@Service
public class SalesRecordServices {
	
	@Autowired
	SalesRecordRepository salesRescordRepository;
	
	public ArrayList<SalesRecordModel> getSalesRecordModels(){
		return 
	}

}
