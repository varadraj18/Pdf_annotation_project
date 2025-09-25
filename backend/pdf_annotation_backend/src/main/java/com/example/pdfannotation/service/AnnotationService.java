package com.example.pdfannotation.service;

import com.example.pdfannotation.entity.PdfAnnotation;
import com.example.pdfannotation.repository.PdfAnnotationRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnnotationService {
    private final PdfAnnotationRepository repo;

    public AnnotationService(PdfAnnotationRepository repo) {
        this.repo = repo;
    }

    public List<PdfAnnotation> saveAll(List<PdfAnnotation> annotations) {
        return repo.saveAll(annotations);
    }

    public List<PdfAnnotation> findByProcessAndForm(Integer processId, Integer formId) {
        return repo.findByProcessIdAndFormId(processId, formId);
    }
}