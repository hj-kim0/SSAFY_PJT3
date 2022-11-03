package com.ssafy.comssa.partController;

import com.ssafy.comssa.partService.PartsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping(path = "/find")
@Controller
public class PartsFindController {
    @Autowired
    PartsService partsService;

    @GetMapping(value = "/cpu")
    public String findCpuData() {
        String name = "17913863";
        return partsService.selectCpu(name);
    }
    @GetMapping(value = "/gpu")
    public String findGpuData() {
        String name = "17913863";
        return partsService.selectGpu(name);
    }

//    @GetMapping(value = "/save")
//    public String saveUserData(@RequestParam String name, @RequestParam int price) {
//        partService.saveUser(name, price);
//
//        return partService.selectUser(name);
//    }
}
