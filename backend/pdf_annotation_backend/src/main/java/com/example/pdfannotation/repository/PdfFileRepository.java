package com.example.pdfannotation.repository;

import com.example.pdfannotation.entity.PdfFile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PdfFileRepository extends JpaRepository<PdfFile, Long> {}
