package com.example.Portfolio.controller;
import com.example.Portfolio.model.Project;
import com.example.Portfolio.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/api/projects")
@CrossOrigin(origins = {"http://localhost:5175", "https://your-frontend.vercel.app"})
public class ProjectController {

    @Autowired
    private ProjectService projectService;   // ← inject Service, not Repository

    @GetMapping
    public List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Project> getProjectById(@PathVariable Long id) {
        return projectService.getProjectById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Project createProject(@RequestBody Project project) {
        return projectService.createProject(project);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Project> updateProject(@PathVariable Long id, @RequestBody Project updated) {
        return projectService.updateProject(id, updated)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProject(@PathVariable Long id) {
        return projectService.deleteProject(id)
                ? ResponseEntity.noContent().build()
                : ResponseEntity.notFound().build();
    }
}