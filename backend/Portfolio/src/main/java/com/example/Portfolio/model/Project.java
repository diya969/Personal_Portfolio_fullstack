package com.example.Portfolio.model;
import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "projects")
@Data
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(columnDefinition = "TEXT")
    private String description;

    private String techStack;
    private String githubUrl;
    private String liveUrl;
    private String imageUrl;

    @Column(updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();
}