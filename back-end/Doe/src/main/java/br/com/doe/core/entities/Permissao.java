package br.com.doe.entities;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;

@Entity
@Getter @Setter
public class Permissao extends BaseEntity {
   @ManyToOne
   @JoinColumn(name = "usuario_id", referencedColumnName = "id")
   private Usuario usuario;

   @Enumerated(EnumType.ORDINAL)
   private TipoPermissao tipo;
   @OneToOne(cascade = CascadeType.PERSIST)
   @JoinColumn(name = "ong_id",referencedColumnName = "id")
   private Ong ong;

}
