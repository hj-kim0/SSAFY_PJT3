package com.ssafy.comssa.controller.estimate;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.ssafy.comssa.controller.part.PartsFindController;
import com.ssafy.comssa.dto.estimate.UserEstimate;
import com.ssafy.comssa.service.estimate.EstimateService;
import com.ssafy.comssa.service.estimate.UserEstimateService;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;


@Slf4j
@RestController
@RequestMapping(path = "/userestimate")
@Controller
public class UserEstimateController extends PartsFindController {
    @Autowired
    UserEstimateService userEstimateService;

    @PostMapping(value = "/find")
//    @GetMapping(value = "/default")
    public ArrayList<JSONObject> findUserEstimateData(
            @RequestBody JSONObject body
    ) throws ParseException, JsonProcessingException {
        JSONParser parser = new JSONParser();

        String inputUserID = body.get("userID").toString();
        log.info("============userID===========");
        log.info(inputUserID);
        String forReturnString = userEstimateService.select(inputUserID);
        log.info("c=========lear");

        log.info(forReturnString);
        log.info("c=========lear");
        ArrayList<JSONObject> returnArrayList = (JSONArray) parser.parse(forReturnString);
        log.info("============arraylistk return");
        log.info(returnArrayList.toString());

        ArrayList<JSONObject> returnJsonList = new ArrayList<JSONObject>();
        int count =0;
        for (JSONObject j:returnArrayList) {
            JSONObject inputJson = new JSONObject();
            ArrayList<String> partsString = (ArrayList<String>) j.get("parts");
            inputJson.put("userID",j.get("userID"));
            inputJson.put("estimateName",j.get("estimateName"));
            inputJson.put("idx",count++);

            String cpuFind;
            if (partsString.get(0) ==null)
                cpuFind ="none";
            else
                cpuFind = findCpuData(partsString.get(0));

            String gpuFind;
            if (partsString.get(3) ==null)
                gpuFind ="none";
            else
                gpuFind = findGpuData(partsString.get(3));

            String mainboardFind;
            if (partsString.get(1) ==null)
                mainboardFind ="none";
            else
                mainboardFind = findMainboardData(partsString.get(1));

            String memoryFind;
            if (partsString.get(2) ==null)
                memoryFind ="none";
            else
                memoryFind = findMainboardData(partsString.get(2));

            String ssdFind;
            if (partsString.get(4) ==null)
                ssdFind ="none";
            else
                ssdFind = findSsdData(partsString.get(4));

            String powerFind;
            if (partsString.get(5) ==null)
                powerFind ="none";
            else
                powerFind = findPowerData(partsString.get(5));

            String coolerFind;
            if (partsString.get(6) ==null)
                coolerFind ="none";
            else
                coolerFind = findCoolerData(partsString.get(6));

            String towerFind;
            if (partsString.get(7) ==null)
                towerFind ="none";
            else
                towerFind = findCoolerData(partsString.get(7));

            JSONObject cpuJsonObject = (cpuFind.equals("none")) ? null : (JSONObject) parser.parse(cpuFind);
            JSONObject gpuJsonObject = (gpuFind.equals("none")) ? null : (JSONObject) parser.parse(gpuFind);
            JSONObject mainboardJsonObject = (mainboardFind.equals("none"))  ? null : (JSONObject) parser.parse(mainboardFind);
            JSONObject memoryJsonObject = (memoryFind.equals("none"))  ? null : (JSONObject) parser.parse(memoryFind);
            JSONObject powerJsonObject = (powerFind.equals("none"))  ? null : (JSONObject) parser.parse(powerFind);
            JSONObject ssdJsonObject = (ssdFind.equals("none"))  ? null : (JSONObject) parser.parse(ssdFind);
            JSONObject towerJsonObject = (towerFind.equals("none")) ? null : (JSONObject) parser.parse(towerFind);
            JSONObject coolerJsonObject = (coolerFind.equals("none")) ? null : (JSONObject) parser.parse(coolerFind);

            ArrayList<JSONObject> returnArray = new ArrayList<>();
            JSONObject jsonObject0 = new JSONObject();
            jsonObject0.put("idx", 0);
            jsonObject0.put("Detail", cpuJsonObject);
            returnArray.add(jsonObject0);
            JSONObject jsonObject1 = new JSONObject();
            jsonObject1.put("idx", 1);
            jsonObject1.put("Detail", mainboardJsonObject);
            returnArray.add(jsonObject1);
            JSONObject jsonObject2 = new JSONObject();
            jsonObject2.put("idx", 2);
            jsonObject2.put("Detail", memoryJsonObject);
            returnArray.add(jsonObject2);
            JSONObject jsonObject3 = new JSONObject();
            jsonObject3.put("idx", 3);
            jsonObject3.put("Detail", gpuJsonObject);
            returnArray.add(jsonObject3);
            JSONObject jsonObject4 = new JSONObject();
            jsonObject4.put("idx", 4);
            jsonObject4.put("Detail", ssdJsonObject);
            returnArray.add(jsonObject4);
            JSONObject jsonObject5 = new JSONObject();
            jsonObject5.put("idx", 5);
            jsonObject5.put("Detail", powerJsonObject);
            returnArray.add(jsonObject5);
            JSONObject jsonObject6 = new JSONObject();
            jsonObject6.put("idx", 6);
            jsonObject6.put("Detail", coolerJsonObject);
            returnArray.add(jsonObject6);
            JSONObject jsonObject7 = new JSONObject();
            jsonObject7.put("idx", 7);
            jsonObject7.put("Detail", towerJsonObject);
            returnArray.add(jsonObject7);

            inputJson.put("parts",returnArray);
            returnJsonList.add(inputJson);
        }
//        JSONObject jsonObject = (JSONObject) parser.parse(forReturnString);

//        log.info(jsonObject.toString());


//        ArrayList<JSONObject> returnArrayList = new ArrayList<>();

        return returnJsonList;
    }

    @PutMapping(value = "/put")
    public String putUserEstimateData(
            @RequestBody JSONObject body
    ) throws ParseException {
        JSONParser parser = new JSONParser();

        String inputUserID = body.get("userID").toString();
//        int inputIdx = Integer.parseInt(body.get("idx").toString());
        String inputPartsString = body.get("parts").toString();
        ArrayList<String> inputParts = (ArrayList<String>) body.get("parts");
        log.info("clear");
        String inputEstimateNAme = body.get("estimateName").toString();
        UserEstimate userEstimate = new UserEstimate(inputUserID,inputEstimateNAme,inputParts);
        userEstimateService.insert(userEstimate);

        return "hello Fucking Put world";
    }

}
