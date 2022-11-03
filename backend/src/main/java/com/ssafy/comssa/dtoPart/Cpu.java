package com.ssafy.comssa.dtoPart;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.Map;

@Document(collection="cpu")
@Getter
@Setter
@SuppressWarnings("unused")
public class Cpu {
    @Id
    private String id;
    private Map<String,Object> optional;
    private String partsID;
    private String price;
    private String specsID;
    private String title;


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

    public Cpu() {
    }
}
