package club.super_coding.entity;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "category")
public class Category implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", insertable = false, updatable = false)
    private Integer id;

    @Column(name = "category", insertable = false, updatable = false)
    private String category;// 카테고리

    @Builder
    public Category(String category) {
        this.category = category;
    }
}
