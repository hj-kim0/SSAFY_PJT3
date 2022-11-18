package com.ssafy.comssa.dto.part;


import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.Map;
@Document(collection = "cooler")
@Getter
@Setter
public class Cooler {
    @Id
    private String id;
    private String imgSrc;
    private String partsID;
    private String title;
    private int price;
    private ArrayList<String> cpusocket;
    private String tdp;

    public ArrayList<String> getCpusocket() {
        return cpusocket;
    }

    public void setCpusocket(ArrayList<String> cpusocket) {
        this.cpusocket = cpusocket;
    }

    public String getTdp() {
        return tdp;
    }

    public void setTdp(String tdp) {
        this.tdp = tdp;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }
}
