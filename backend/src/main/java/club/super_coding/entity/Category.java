package club.super_coding.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

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
    @Column(name = "id")
    private int id;// 카테고리 id

    @JoinColumn(name = "category_num")
    @ManyToOne(fetch = FetchType.LAZY)
    private Club categoryNum;

    @Column(name = "category")
    private String category;// 카테고리


}
