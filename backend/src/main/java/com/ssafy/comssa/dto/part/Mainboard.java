package com.ssafy.comssa.dto.part;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Map;
@Document(collection="mainboard")
@Getter
@Setter
@SuppressWarnings("unused")
public class Mainboard {
    @Id
    private String id;
    private Map<String,Object> optional;
    private String partsID;
    private String price;
    private String specsID;
    private String title;
    private String imgSrc;

    private ArrayList<String> PCIeCpu;
    private String PCIeGpu;
    private boolean canWifi;
    private boolean canBluetooth;
    private String formfactor;
    private boolean heatsink;
    private String memorySocket;
    private int memoryCount;

    public ArrayList<String> getPCIeCpu() {
        return PCIeCpu;
    }

    public void setPCIeCpu(ArrayList<String> PCIeCpu) {
        this.PCIeCpu = PCIeCpu;
    }

    public String getPCIeGpu() {
        return PCIeGpu;
    }

    public void setPCIeGpu(String PCIeGpu) {
        this.PCIeGpu = PCIeGpu;
    }

    public boolean isCanWifi() {
        return canWifi;
    }

    public void setCanWifi(boolean canWifi) {
        this.canWifi = canWifi;
    }

    public boolean isCanBluetooth() {
        return canBluetooth;
    }

    public void setCanBluetooth(boolean canBluetooth) {
        this.canBluetooth = canBluetooth;
    }

    public String getFormfactor() {
        return formfactor;
    }

    public void setFormfactor(String formfactor) {
        this.formfactor = formfactor;
    }

    public boolean isHeatsink() {
        return heatsink;
    }

    public void setHeatsink(boolean heatsink) {
        this.heatsink = heatsink;
    }

    public String getMemorySocket() {
        return memorySocket;
    }

    public void setMemorySocket(String memorySocket) {
        this.memorySocket = memorySocket;
    }

    public int getMemoryCount() {
        return memoryCount;
    }

    public void setMemoryCount(int memoryCount) {
        this.memoryCount = memoryCount;
    }

    public String getImgSrc() {
        return imgSrc;
    }

    public void setImgSrc(String imgSrc) {
        this.imgSrc = imgSrc;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public Map<String, Object> getOptional() {
        return optional;
    }

    public void setOptional(Map<String, Object> optional) {
        this.optional = optional;
    }

    public String getPartsID() {
        return partsID;
    }

    public void setPartsID(String partsID) {
        this.partsID = partsID;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getSpecsID() {
        return specsID;
    }

    public void setSpecsID(String specsID) {
        this.specsID = specsID;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }
}
