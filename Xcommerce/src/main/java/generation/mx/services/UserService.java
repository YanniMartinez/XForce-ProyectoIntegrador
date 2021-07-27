package generation.mx.services;

import java.sql.Date;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import generation.mx.models.UserModel;
import generation.mx.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
	UserRepository userRepository;
	
	public ArrayList<UserModel> getUsers(){
		return (ArrayList<UserModel>) userRepository.findAll();
	}
	
	public UserModel saveUser(UserModel user) {
		String name = user.getName();
		Date birthdate = user.getBirthdate();
		String address = user.getAddress();
		String email = user.getEmail();
		String password = user.getPassword();
		if(name != null && birthdate != null && address != null && email != null && password != null) {
			return userRepository.save(user);
		}
		return user;
	}
	
}
