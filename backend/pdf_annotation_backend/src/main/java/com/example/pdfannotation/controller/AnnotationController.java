package com.example.pdfannotation.controller;

import com.example.pdfannotation.entity.*;
import com.example.pdfannotation.service.AnnotationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api/pdf-annotation-mappings")
public class AnnotationController {

    @Autowired
    private AnnotationService annotationService;

    @PostMapping("/bulk")
    public ResponseEntity<?> saveBulk(@RequestBody List<PdfAnnotation> annotations) {
        var saved = annotationService.saveAll(annotations);
        return ResponseEntity.ok(Map.of("saved", saved.size()));
    }

    @PostMapping("/fetch")
    public ResponseEntity<?> fetch(@RequestBody Map<String, Object> body) {
        Integer processId = (Integer) body.get("process");
        Integer formId = (Integer) body.get("form_id");

        if (processId == null || formId == null) {
            return ResponseEntity.badRequest().body(Map.of("error", "process and form_id required"));
        }

        var results = annotationService.findByProcessAndForm(processId, formId);
        return ResponseEntity.ok(results);
    }
}
