package com.example.Base.domain.dto;

import com.example.Base.domain.entity.CategoryEntity;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class CategoryDTO {
    private Long id;

    private String name;

    private Double count1;

    private Integer count2;

    private Integer count3;

    private Integer count4;

    private String image;

    public CategoryEntity toEntity(){
        CategoryEntity categoryEntity = CategoryEntity.builder()
                .id(id)
                .name(name)
                .count1(count1)
                .count2(count2)
                .count3(count3)
                .count4(count4)
                .image(image).build();
        return categoryEntity;
    }
}
