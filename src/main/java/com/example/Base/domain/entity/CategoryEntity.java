package com.example.Base.domain.entity;

import com.example.Base.domain.dto.CategoryDTO;
import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@ToString
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "category")
public class CategoryEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private Double count1;

    private Integer count2;

    private Integer count3;

    private Integer count4;

    private String image;

    public CategoryDTO toDTO() {
        CategoryDTO categoryDTO = CategoryDTO.builder()
                .id(id)
                .name(name)
                .count1(count1)
                .count2(count2)
                .count3(count3)
                .count4(count4)
                .image(image).build();
        return categoryDTO;
    }
}
