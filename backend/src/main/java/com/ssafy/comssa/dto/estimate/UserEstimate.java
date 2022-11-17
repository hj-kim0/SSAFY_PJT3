package com.ssafy.comssa.dto.estimate;

import lombok.Getter;
import lombok.Setter;
import org.json.simple.JSONObject;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;

@Document("userEstimate")
@Getter
@Setter
public class UserEstimate {
    @Id
    private String id;
    private ArrayList<JSONObject> parts;
    private int idx;
    private String userID;
    private String estimateName;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public ArrayList<JSONObject> getParts() {
        return parts;
    }

    public void setParts(ArrayList<JSONObject> parts) {
        this.parts = parts;
    }

    public int getIdx() {
        return idx;
    }

    public void setIdx(int idx) {
        this.idx = idx;
    }

    public String getUserID() {
        return userID;
    }

    public void setUserID(String userID) {
        this.userID = userID;
    }

    public String getEstimateName() {
        return estimateName;
    }

    public void setEstimateName(String estimateName) {
        this.estimateName = estimateName;
    }
}
