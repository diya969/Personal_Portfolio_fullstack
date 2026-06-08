package com.example.Portfolio.service;
import com.example.Portfolio.model.Project;
import com.example.Portfolio.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    public List<Project> getAllProjects() {
        return projectRepository.findAllByOrderByCreatedAtDesc();
    }

    public Optional<Project> getProjectById(Long id) {
        return projectRepository.findById(id);
    }

    public Project createProject(Project project) {
        return projectRepository.save(project);
    }

    public Optional<Project> updateProject(Long id, Project updated) {
        return projectRepository.findById(id).map(project -> {
            project.setTitle(updated.getTitle());
            project.setDescription(updated.getDescription());
            project.setTechStack(updated.getTechStack());
            project.setGithubUrl(updated.getGithubUrl());
            project.setLiveUrl(updated.getLiveUrl());
            project.setImageUrl(updated.getImageUrl());
            return projectRepository.save(project);
        });
    }

    public boolean deleteProject(Long id) {
        if (projectRepository.existsById(id)) {
            projectRepository.deleteById(id);
            return true;
        }
        return false;
    }
}