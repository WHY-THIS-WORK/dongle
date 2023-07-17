package club.super_coding.entity;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;


@Entity
//이 클래스가 엔티티임을 알림
@AllArgsConstructor
//선언된 모든 필드를 파라미터로 갖는 생성자를 자동생성
@NoArgsConstructor
//파라미터가 아예없는 기본생성자를 자동생성
@Getter
//getter를 자동생성

@ToString
//해당 클래스에 선언된 필드들을 모두 출력할 수 있는 toString 메서드를 자동생성
@Table(name = "test_db")
public class Test_db {
    @Id
    @Column(name = "idx")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer idx;

    @Column(name = "title")
    private String title;
    // 게시글 제목
    @Column(name = "memo")
    private String memo;
    // 게시글 내용
}

//@Id, @GeneratedValue : 해당 엔티티의 주요 키(Primary Key, PK)가 될 값을 지정해주는 것이 @Id 이다. @GeneratedValue는 이 PK가 자동으로 1씩 증가하는 형태로 생성될지 등을 결정해주는 어노테이션이다.
//@ManyToOne : 해당 엔티티와 다른 엔티티를 관계짓고 싶을 때 쓰는 어노테이션이다. ManyToOne이라고 부르는 이유는 Writer 입장에서 Board는 여러 개가 될 수 있기 때문에 Writer : Board = 1 : N 관계가 되기 때문이다.
//@Builder : 해당 클래스에 해당하는 엔티티 객체를 만들 때 빌더 패턴을 이용해서 만들 수 있도록 지정해주는 어노테이션이다. 이렇게 선언해놓으면 나중에 다른 곳에서 Board.builder(). {여러가지 필드의 초기값 선언 }. build() 형태로 객체를 만들 수 있다.


