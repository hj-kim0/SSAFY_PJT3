package com.ssafy.comssa.dto.part;


import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "case")
@Getter
@Setter
public class Tower {
    @Id
    private String id;
    private String imgSrc;
    private String partsID;
    private String size;
    private String title;
    private int price;
    private String boardform;
    private int coolerform;
    private int gpuform;

    public String getBoardform() {
        return boardform;
    }

    public void setBoardform(String boardform) {
        this.boardform = boardform;
    }

    public int getCoolerform() {
        return coolerform;
    }

    public void setCoolerform(int coolerform) {
        this.coolerform = coolerform;
    }

    public int getGpuform() {
        return gpuform;
    }

    public void setGpuform(int gpuform) {
        this.gpuform = gpuform;
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

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
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
