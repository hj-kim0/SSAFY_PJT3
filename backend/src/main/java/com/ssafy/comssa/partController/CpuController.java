package com.ssafy.comssa.partController;

import com.ssafy.comssa.partService.PartService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping(path = "/cpu")
@Controller
public class CpuController {
    @Autowired
    PartService partService;

    @GetMapping(value = "/find")
    public String findUserData() {
        String name = "17913863";
        log.info("HHHHHHHHHHHHHHHHHHHHHHHHHHHH");
        log.info("HHHHHHHHHHHHHHHHHHHHHHHHHHHH");
        log.info("HHHHHHHHHHHHHHHHHHHHHHHHHHHH");
        return partService.selectUser(name);
    }

//    @GetMapping(value = "/save")
//    public String saveUserData(@RequestParam String name, @RequestParam int price) {
//        partService.saveUser(name, price);
//
//        return partService.selectUser(name);
//    }
}
