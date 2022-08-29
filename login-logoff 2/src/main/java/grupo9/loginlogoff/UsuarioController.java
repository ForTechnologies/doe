package grupo9.loginlogoff;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

import static java.util.List.*;

@RestController
@RequestMapping("/usuarios")
public class UsuarioController {
    public List<Usuario> usuarios = new ArrayList<>(of(
            new Usuario("Raylane Fernandes", "raylanefernandes@doe.com.br", "123456"),
            new Usuario("João Santos", "joaosantos@doe.com.br", "maoamiga")
    ));


    @GetMapping
    public List<Usuario> getUsuarios() {
        return usuarios;
    }

    @PostMapping("/login")
    public ResponseEntity<String> postLogin(@RequestBody Usuario authUser) {
        try {
            var user = usuarios.stream()
                    .filter(u -> u.equals(authUser))
                    .findFirst()
                    .orElseThrow(Exception::new);
            user.setIsActive(true);
            return new ResponseEntity<String>("Usuário logado", HttpStatus.CREATED);

        } catch (Exception e) {
            return new ResponseEntity<String>("Deu ruim :( \n Email ou senha inválido", HttpStatus.UNAUTHORIZED);
        }
    }

    @DeleteMapping("/logout")
    public ResponseEntity<String> deleteLogout(@RequestBody Usuario authUser) {
        try {
            var user = usuarios.stream()
                    .filter(u -> u.equals(authUser) && u.getIsActive())
                    .findFirst()
                    .orElseThrow(Exception::new);
            user.setIsActive(false);

            ResponseEntity.status(202);
            return new ResponseEntity<String>("Usuário deslogado", HttpStatus.OK);

        } catch (Exception e) {
            return new ResponseEntity<String>("Deu ruim :(", HttpStatus.BAD_REQUEST);
        }
    }
}


