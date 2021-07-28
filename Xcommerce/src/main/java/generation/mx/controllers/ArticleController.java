package generation.mx.controllers;

import java.util.ArrayList;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import generation.mx.models.ArticleModel;
import generation.mx.services.ArticleService;

@RestController
@RequestMapping(path="/article")
public class ArticleController {
	
	@Autowired
	ArticleService articleService;
	
	/**
	 * Catch the content of Protocol GET
	 * @return Articles all articles obtains in the query
	 * */
	@GetMapping
	public ArrayList<ArticleModel> getArticle(){
		return articleService.getArticles();
	}
	
	/**
	 * Catch the protocol POST to save an article in the DB
	 * @param article is an Article that could save.
	 * @return article saved.
	 * */
	@PostMapping
	public ArticleModel saveUser(@RequestBody ArticleModel article) {
		return articleService.saveArticle(article);
	}
	
	/**
	 * Catch the content of Protocol GET
	 * @param id is the param to search with the query
	 * @return Articles all articles obtains in the query
	 * */
	@GetMapping(path="/{id}")
	public Optional<ArticleModel> getArticleById(@PathVariable("id") Long id){
		return articleService.getArticleById(id);
	}
	
	
	/**
	 * Can delete an Article in the DataBase
	 * @param id to delete an article.
	 * @return boolean if the service can delete or not.
	 * */
	@DeleteMapping(path="/{id}")
	public String deleteArticle(@PathVariable("id") Long id) {
		boolean ok = articleService.deleteArticle(id);
		if(ok) {
			return  "the item was successfully removed ";
		}
		else {
			return "the item was'nt removed ";
		}
	}
	
	/**
	 * Catch the content of Protocol GET
	 * @param id is the param to search with the query
	 * @return Articles all articles obtains in the query
	 * */
	@GetMapping(path="/query")
	public ArrayList<ArticleModel> getArticlesByName( @RequestParam(value = "name" , defaultValue="") String name){
		return articleService.getArticlesByName(name);
	}
	
	/**
	 * Catch the content of Protocol GET
	 * @param tag is the param to search with the query
	 * @return Articles all articles obtains in the query
	 * */
	@GetMapping(path="/query")
	public ArrayList<ArticleModel> getArticlesByTag( @RequestParam(value = "tag" , defaultValue="") String tag){
		return articleService.getArticlesByTag(tag);
	}
	
	/**
	 * Catch the content of Protocol GET
	 * @param category is the param to search with the query
	 * @return Articles all articles obtains in the query
	 * */
	@GetMapping(path="/query")
	public ArrayList<ArticleModel> getArticlesByCategory( @RequestParam(value = "tag" , defaultValue="") String Category){
		return articleService.getArticlesByCategory(Category);
	}
	
}
