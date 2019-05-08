package pl.sda.Zapytaczek.Login;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/page/users")
public class UserController {

    private UserRepository userRepository;


    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @PostMapping
    public User create(@RequestBody User user) {
        return userRepository.save(user);
    }

//    @GetMapping
//    public List<User> getAll() {
//        return userRepository.findAll();
//    }

}
