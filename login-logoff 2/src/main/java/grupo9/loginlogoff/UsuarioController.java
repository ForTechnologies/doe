package grupo9.loginlogoff;

import jdk.jfr.SettingDefinition;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
    private List<Usuario> usuarios = new ArrayList<>(List.of(
            new Usuario("Raylane Fernandes", "raylanefernandes@doe.com.br", "123456"),
            new Usuario("João Santos", "joaosantos@doe.com.br", "maoamiga")
    ));

    private List<Usuario> usuariosLogado = new ArrayList<>();

    @GetMapping
    public List<Usuario> getUsuarios() {
        return usuarios;
    }

    @PutMapping ("/login")
    public String putLogin(@RequestBody Usuario authUser) {

        String resposta = "não foi possível logar";
        for (Usuario usuario : usuarios
        ) {
            if (usuario.getEmail().equalsIgnoreCase(authUser.getEmail())) {
                if (usuariosLogado.contains(usuario)) {
                    resposta = "você já está autenticado";
                } else {
                    usuariosLogado.add(usuario);
                    resposta = "Logado com sucesso";
                }

            }
        }
        return resposta;
    }

    @DeleteMapping("/logout")
    public String putLogout(@RequestBody Usuario authUser){
        String resposta = "Não foi possível deslogar";


        if (usuariosLogado.contains(authUser)){
            usuariosLogado.remove(authUser);
            resposta = "deslogado com suceso";
        }

        return resposta + usuariosLogado.toString();
    }
}


