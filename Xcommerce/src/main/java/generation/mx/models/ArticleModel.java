package generation.mx.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "articles")
public class ArticleModel {
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
	private long id;

	@Column(nullable = false, length = 100, name = "name")
	private String name;
	
	@Column(nullable = false, length = 10, name = "price")
	private Float price;
	
	@Column(nullable = false, length = 50, name = "category")
	private String category;
	
	@Column(nullable = false, length = 50, name = "tag")
	private String tag;
	
	/*Puede alcanzar hasta 300 characters*/
	@Column(nullable = false, length = 300, name = "description")
	private String description;
	
	/*Las url no suelen exceder los 200 caracteres, pero es mejor dar mayor margen*/
	@Column(nullable = false, length = 250, name = "img")
	private String img;

	/*Es muy probable que no exceda los 10k elementos*/
	@Column(nullable = false, length = 4, name = "stock")
	private Integer stock;
	
	/**
	 * @return the id
	 */
	public long getId() {
		return id;
	}

	/**
	 * Set the id in the table
	 * */
	public void setId(long id) {
		this.id = id;
	}

	/**
	 * @return the name
	 */
	public String getName() {
		return name;
	}
	
	/**
	 * Set the name in the table
	 * */
	public void setName(String name) {
		this.name = name;
	}

	/**
	 * @return the price
	 */
	public Float getPrice() {
		return price;
	}

	/**
	 * Set the price in the table
	 * */
	public void setPrice(Float price) {
		this.price = price;
	}

	/**
	 * @return the category
	 */
	public String getCategory() {
		return category;
	}

	/**
	 * Set the category in the table
	 * */
	public void setCategory(String category) {
		this.category = category;
	}

	/**
	 * @return the Tag
	 */
	public String getTag() {
		return tag;
	}

	/**
	 * Set the tag in the table
	 * */
	public void setTag(String tag) {
		this.tag = tag;
	}

	/**
	 * @return the description
	 */
	public String getDescription() {
		return description;
	}

	/**
	 * Set the description in the table
	 * */
	public void setDescription(String description) {
		this.description = description;
	}

	/**
	 * @return the url of img
	 */
	public String getImg() {
		return img;
	}

	/**
	 * Set the img in the table
	 * */
	public void setImg(String img) {
		this.img = img;
	}

	/**
	 * @return the stock
	 */
	public Integer getStock() {
		return stock;
	}

	/**
	 * Set the stock in the table
	 * */
	public void setStock(Integer stock) {
		this.stock = stock;
	}
}
