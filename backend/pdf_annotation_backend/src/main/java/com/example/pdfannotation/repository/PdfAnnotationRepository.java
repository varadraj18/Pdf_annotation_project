package com.example.pdfannotation.repository;

import com.example.pdfannotation.entity.PdfAnnotation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface PdfAnnotationRepository extends JpaRepository<PdfAnnotation, Long> {
    List<PdfAnnotation> findByPdfId(Long pdfId);
    List<PdfAnnotation> findByProcessIdAndFormId(Integer processId, Integer formId);
}