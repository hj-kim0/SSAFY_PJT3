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
    @Autowired
    CoolerService coolerService;
    @Autowired
    TowerService towerService;

    @GetMapping(value = "/cpu")
    public String findCpuData(@RequestParam(value = "code",defaultValue = "all") String code) {
        return cpuService.selectCpu(code);
    }
    @GetMapping(value = "/gpu")
    public String findGpuData(@RequestParam(value = "code",defaultValue = "all") String code) {
        return gpuService.selectGpu(code);
    }
    @GetMapping(value = "/mainboard")
    public String findMainboardData(@RequestParam(value = "code",defaultValue = "all") String code) {
        return mainboardService.selectMainboard(code);
    }
    @GetMapping(value = "/memory")
    public String findMemoryData(@RequestParam(value = "code",defaultValue = "all") String code) {
        return memoryService.selectMemory(code);
    }
    @GetMapping(value = "/power")
    public String findPowerData(@RequestParam(value = "code",defaultValue = "all") String code) {
        return powerService.selectPower(code);
    }
    @GetMapping(value = "/ssd")
    public String findSsdData(@RequestParam(value = "code",defaultValue = "all") String code) {
        return ssdService.selectSsd(code);
    }
    @GetMapping(value = "/cooler")
    public String findCoolerData(@RequestParam(value = "code",defaultValue = "all") String code) {
        return coolerService.selectCooler(code);
    }
    @GetMapping(value = "/tower")
    public String findTowerData(@RequestParam(value = "code",defaultValue = "all") String code) {
        return towerService.selectTower(code);
    }

    public PartsFindController() {
    }
}
