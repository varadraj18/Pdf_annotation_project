package com.example.pdfannotation.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="pdf_files")
@Getter @Setter 
@NoArgsConstructor
@AllArgsConstructor
public class PdfFile {
  
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	
	private String fileName;
	
	@Column(columnDefinition="text")
	private String filePath;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getFilePath() {
		return filePath;
	}

	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}

	@Override
	public String toString() {
		return "PdfFile [id=" + id + ", fileName=" + fileName + ", filePath=" + filePath + "]";
	}
}
