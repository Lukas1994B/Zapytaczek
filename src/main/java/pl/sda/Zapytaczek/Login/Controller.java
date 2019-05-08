package pl.sda.Zapytaczek.Login;

import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.security.access.annotation.Secured;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;

@RestController
public class Controller {
    @GetMapping("/admin/abc")
    public String adminRoleExample() {
        return "OK!";
    }

    @Secured("ROLE_ADMIN")
    @GetMapping("/some-secured-path")
    public String adminRoleExample2() {
        return "OK!";
    }

    @GetMapping("/user-details")
    public Principal userDetails(Principal principal) {
        return principal;
    }

    @GetMapping("/user-details2")
    public Authentication userDetails2() {
        return SecurityContextHolder.getContext()
                .getAuthentication();
    }

    @GetMapping("/unauthorized/abc")
    public String unauthorizedExample() {
        return "OK!";
    }
}
