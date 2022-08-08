package com.example.Base.service;

import com.example.Base.domain.entity.CategoryEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public interface CategoryService {
    CategoryEntity sendInfo(Long id);

    CategoryEntity create(CategoryEntity categoryEntity);
}
