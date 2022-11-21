package com.ssafy.comssa.controller.part;

import com.ssafy.comssa.service.part.*;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Optional;

@Slf4j
@RestController
@RequestMapping(path = "/find")
@Controller
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

    @PostMapping(value = "/cpu")
    public String findCpuData(@RequestParam(value = "code",defaultValue = "all") String code) throws ParseException {
        JSONParser parser = new JSONParser();
        JSONArray searchArray = (JSONArray) parser.parse(cpuService.selectCpu(code));
        JSONArray returnArray = new JSONArray();
        for (Object json:searchArray ) {

            JSONObject inputjson = (JSONObject) json;
            ArrayList<String> specString= new ArrayList<>();
            String memory = "메모리 규격 : ";
            for (String a: (ArrayList<String>)inputjson.get("memorySocket")  ) {
                memory = memory + a + " ";
            }
            specString.add(memory);

            String pcie = "PCIe : ";
            for (String a: (ArrayList<String>)inputjson.get("pcieSocket")  ) {
                pcie = pcie + a + " ";
            }
            specString.add(pcie);
            specString.add("CPU 소켓 : "+inputjson.get("socket").toString());


            inputjson.put("specString",specString);
            returnArray.add(inputjson);
        }
        return returnArray.get(0).toString();
    }



    @PostMapping(value = "/gpu")
    public String findGpuData(@RequestParam(value = "code",defaultValue = "all") String code) throws ParseException {
        JSONParser parser = new JSONParser();
        JSONArray searchArray = (JSONArray) parser.parse(gpuService.selectGpu(code));
        JSONArray returnArray = new JSONArray();
        for (Object json:searchArray ) {

            JSONObject inputjson = (JSONObject) json;
            ArrayList<String> specString= new ArrayList<>();


            String pcie = "PCIe : " +inputjson.get("pcieSocket");
;
            specString.add(pcie);
            specString.add("그래픽 카드 : "+inputjson.get("specsID").toString());

            specString.add("요구 전력 : "+inputjson.get("powerNeed").toString()+"W");

            inputjson.put("specString",specString);
            returnArray.add(inputjson);
        }
        return returnArray.get(0).toString();
    }
    @PostMapping(value = "/mainboard")
    public String findMainboardData(@RequestParam(value = "code",defaultValue = "all") String code) throws ParseException {
        return mainboardService.selectMainboard(code);
    }
    @PostMapping(value = "/memory")
    public String findMemoryData(@RequestParam(value = "code",defaultValue = "all") String code) {
        return memoryService.selectMemory(code);
    }
    @PostMapping(value = "/power")
    public String findPowerData(@RequestParam(value = "code",defaultValue = "all") String code) {
        return powerService.selectPower(code);
    }
    @PostMapping(value = "/ssd")
    public String findSsdData(@RequestParam(value = "code",defaultValue = "all") String code) {
        return ssdService.selectSsd(code);
    }
    @PostMapping(value = "/cooler")
    public String findCoolerData(@RequestParam(value = "code",defaultValue = "all") String code) {
        return coolerService.selectCooler(code);
    }
    @PostMapping(value = "/tower")
    public String findTowerData(@RequestParam(value = "code",defaultValue = "all") String code) {
        return towerService.selectTower(code);
    }

    public PartsFindController() {
    }
}
