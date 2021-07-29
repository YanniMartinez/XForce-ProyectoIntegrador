package generation.mx.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="ItemSalesRecords")

public class ItemSalesRecordModel {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(nullable = false)
	private long id;
	
    @OneToMany
	@Column(nullable=false, name="sales_record_id")
	private long salesRecordId;
	
	@Column(nullable=false,length=100,name="lot")
	private long lot;
    
	@OneToMany
	@Column(nullable=false, name="article_id")
	private long articleId;

	public long getSalesRecordId() {
		return salesRecordId;
	}

	public void setSalesRecordId(long salesRecordId) {
		this.salesRecordId = salesRecordId;
	}

	public long getLot() {
		return lot;
	}

	public void setLot(long lot) {
		this.lot = lot;
	}

	public long getArticleId() {
		return articleId;
	}

	public void setArticleId(long articleId) {
		this.articleId = articleId;
	}
	
}
