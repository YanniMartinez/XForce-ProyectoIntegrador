package generation.mx.repositories;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import generation.mx.models.UserModel;

@Repository
public interface UserRepository extends CrudRepository<UserModel, Long> {

}
