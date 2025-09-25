package com.example.pdfannotation.entity;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "pdf_annotations")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class PdfAnnotation {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long pdfId;
    private Integer processId;
    private Integer formId;
    private Integer fieldId;
    private String fieldName;
    private String fieldHeader;
    private String fieldType;

    @Column(columnDefinition = "jsonb")
    private String bbox;

    private Integer page;
    private Double scale;

    @Column(columnDefinition = "jsonb")
    private String metadata;

}
