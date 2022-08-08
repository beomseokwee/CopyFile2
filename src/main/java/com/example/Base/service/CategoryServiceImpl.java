package com.example.Base.service;

import com.example.Base.domain.entity.CategoryEntity;
import com.example.Base.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@Log4j2
public class CategoryServiceImpl implements CategoryService{
    private CategoryRepository categoryRepository;

    public CategoryServiceImpl(CategoryRepository categoryRepository){
        this.categoryRepository = categoryRepository;
    }


    @Override
    public CategoryEntity sendInfo(Long id) {
        return categoryRepository.findById(id).get();
    }

    @Override
    public CategoryEntity create(CategoryEntity categoryEntity){
        return categoryRepository.save(categoryEntity);
    }
}
