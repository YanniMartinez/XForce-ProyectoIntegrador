package generation.mx.repositories;

import java.util.ArrayList;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import generation.mx.models.ArticleModel;

@Repository
public interface ArticleRepository extends CrudRepository<ArticleModel , Long>{
	public abstract ArrayList<ArticleModel> findArticleByName(String name);
	public abstract ArrayList<ArticleModel> findArticleByTag(String tag);
	public abstract ArrayList<ArticleModel> findArticleByCategory(String category);
}
 