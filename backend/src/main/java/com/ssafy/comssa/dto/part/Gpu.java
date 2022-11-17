package com.ssafy.comssa.dto.part;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Map;

@Document(collection="gpu")
@Getter
@Setter
@SuppressWarnings("unused")
public class Gpu {
    @Id
    private String id;

    private String partsID;
    private String price;
    private String specsID;
    private String title;

    private String imgSrc;
    private int score;
    private String PCIeSocket;
    private int length;
    private int powerNeed;

    public String getPCIeSocket() {
        return PCIeSocket;
    }

    public void setPCIeSocket(String PCIeSocket) {
        this.PCIeSocket = PCIeSocket;
    }

    public int getLength() {
        return length;
    }

    public void setLength(int length) {
        this.length = length;
    }

    public int getPowerNeed() {
        return powerNeed;
    }

    public void setPowerNeed(int powerNeed) {
        this.powerNeed = powerNeed;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public String getImgSrc() {
        return imgSrc;
    }

    public void setImgSrc(String imgSrc) {
        this.imgSrc = imgSrc;
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


    public Gpu() {
    }
}
