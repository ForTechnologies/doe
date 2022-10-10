package br.com.doe.entities;

import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;

@Entity
@Getter @Setter
public class Permissao extends BaseEntity {
   @ManyToOne
   @JoinColumn(name = "usuario_id")
   private Usuario usuario;

   @Enumerated(EnumType.ORDINAL)
   private TipoPermissao tipo;
   @OneToOne
   @JoinColumn(name = "ong_id",referencedColumnName = "id")
   private Ong ong;

}
