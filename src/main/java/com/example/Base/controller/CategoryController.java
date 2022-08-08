package com.example.Base.controller;

import com.example.Base.service.CategoryService;
import com.example.Base.service.CategoryServiceImpl;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/category")
@Log4j2
public class CategoryController {

    private final CategoryServiceImpl categoryService;

    @GetMapping(value = "/{id}")
    public ResponseEntity sendCategoryInfo(@PathVariable Long id){
        return ResponseEntity.ok().body(categoryService.sendInfo(id));
    }

}
