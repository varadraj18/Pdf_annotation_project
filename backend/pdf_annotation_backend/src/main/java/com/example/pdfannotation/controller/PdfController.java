package com.example.pdfannotation.controller;

import com.example.pdfannotation.entity.PdfFile;
import com.example.pdfannotation.repository.PdfFileRepository;
import com.example.pdfannotation.service.FileStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Path;
import java.util.Map;

@CrossOrigin(origins="http://localhost:4200")
@RestController
@RequestMapping("/api/pdf")
public class PdfController {

    @Autowired
    private FileStorageService storageService;

    @Autowired
    private PdfFileRepository pdfRepo;

    @PostMapping("/upload")
    public ResponseEntity<?> uploadPdf(@RequestParam("file") MultipartFile file) throws IOException {
        Path saved = storageService.storeFile(file);

        PdfFile pf = new PdfFile();
        pf.setFileName(file.getOriginalFilename());
        pf.setFilePath(saved.toAbsolutePath().toString()); 

        PdfFile savedFile = pdfRepo.save(pf);
        return ResponseEntity.ok(Map.of("pdf_id", savedFile.getId(), "file_name", savedFile.getFileName()));
    }
}
