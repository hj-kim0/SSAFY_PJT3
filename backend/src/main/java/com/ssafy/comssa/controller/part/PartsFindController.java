package com.ssafy.comssa.controller.part;

import com.ssafy.comssa.service.part.*;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@Slf4j
@RestController
@RequestMapping(path = "/find")
@Controller
@CrossOrigin(origins="*")
public class PartsFindController {
    @Autowired
    CpuService cpuService;
    @Autowired
    GpuService gpuService;

    @Autowired
    MainboardService mainboardService;

    @Autowired
    MemoryService memoryService;

    @Autowired
    PowerService powerService;

    @Autowired
    SsdService ssdService;

    @GetMapping(value = "/cpu")
    public String findCpuData(@RequestParam(value = "code",defaultValue = "all") String code) {
        log.info("hello========================================");
        return cpuService.selectCpu(code);
    }
    @GetMapping(value = "/gpu")
    public String findGpuData(String code) {
        return gpuService.selectGpu(code);
    }
    @GetMapping(value = "/mainboard")
    public String findMainboardData(String code) {
        return mainboardService.selectMainboard(code);
    }
    @GetMapping(value = "/memory")
    public String findMemoryData(String code) {
        return memoryService.selectMemory(code);
    }
    @GetMapping(value = "/power")
    public String findPowerData(String code) {
        return powerService.selectPower(code);
    }
    @GetMapping(value = "/ssd")
    public String findSsdData(String code) {
        return ssdService.selectSsd(code);
    }

    public PartsFindController() {
    }
}
