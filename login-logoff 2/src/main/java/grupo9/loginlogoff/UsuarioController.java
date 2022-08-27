package grupo9.loginlogoff;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
    private List<Usuario> usuarios = new ArrayList<>(List.of(
            new Usuario("Raylane Fernandes","raylanefernandes@doe.com.br", "123456"),
            new Usuario("João Santos", "joaosantos@doe.com.br", "maoamiga")
    ));

    @GetMapping
    public List<Usuario> getUsuarios(){
        return usuarios;
    }

}
