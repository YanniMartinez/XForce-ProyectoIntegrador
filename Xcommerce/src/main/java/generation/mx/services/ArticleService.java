package generation.mx.services;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import generation.mx.models.ArticleModel;
import generation.mx.repositories.ArticleRepository;

@Service
public class ArticleService {
	
	@Autowired
	ArticleRepository articleRepository;
	
	/**
	 * Return all Articles in the DataBase
	 * @return ArrayList<ArticleModel> is a list of articleModels
	 * */
	public ArrayList<ArticleModel> getArticles(){
		return (ArrayList<ArticleModel>) articleRepository.findAll();
	}
	
	/**
	 * Save an Article with all of it components
	 * @param article is an Article instance.
	 * @return article/articleRepository if the Article are saved or article if not.
	 * */
	public ArticleModel saveArticle(ArticleModel article) {
		String name = article.getName();
		Float price = article.getPrice();
		String category = article.getCategory();
		String tag = article.getTag();
		String description = article.getDescription();
		String img = article.getImg();
		Integer stock = article.getStock();
		
		/*Comprobe if all is ok*/
		if(name!=null && price !=null && category!=null && tag!=null 
			&& description!=null && img!=null && stock!=null) {
			return articleRepository.save(article);
		}
		
		return article;
	}
	
	/**
	 * Search by id
	 * @param id is de id of the article
	 * @return article is the result of the search, if not contain return a null
	 * */
	public Optional<ArticleModel> getArticleById(Long id) {
		return articleRepository.findById(id);
	}
	
	/**
	 * Delete an Article by id
	 * @param id Is the id of Article that we could delete.
	 * @return boolean Is a Flag is the Elemente delete is Success or not.
	 * */
	public boolean deleteArticle(Long id) {
		//Try if the operation is success
		try {
			articleRepository.deleteById(id); //if delete is succes return true
			return true;
		}catch(Exception error) { //return false
			return false;
		}
	}
	
	/**
	 * Get all articles by Name
	 * @param name It is the name that will be used in the query 
	 * @return ArrayList<ArticleModel> Is all of Articles obtains in the query
	 * */
	public ArrayList<ArticleModel> getArticlesByName(String name) {
		return articleRepository.findByNameContaining(name);
	}
	
	/**
	 * Get all articles by Tag
	 * @param Tag It is the Tag that will be used in the query 
	 * @return ArrayList<ArticleModel> Is all of Articles obtains in the query
	 * */
	public ArrayList<ArticleModel> getArticlesByTag(String tag) {
		return articleRepository.findByTag(tag);
	}
	
	/**
	 * Get all articles by Category
	 * @param Category It is the Category that will be used in the query 
	 * @return ArrayList<ArticleModel> Is all of Articles obtains in the query
	 * */
	public ArrayList<ArticleModel> getArticlesByCategory(String category) {
		return articleRepository.findByCategory(category);
	}
}
