package com.ssafy.comssa.dto.spec;


import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;


@Document(collection="cpuSpecs")
@Getter
@Setter
@SuppressWarnings("unused")
public class CpuSpec {
    @Id
    private String id;
    private String caches;
    private String clucks;
    private String cores;
    private String manufacturer;
    private String memorySockets;
    private String socket;
    private String specsID;
    private String threads;

    public CpuSpec() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getCaches() {
        return caches;
    }

    public void setCaches(String caches) {
        this.caches = caches;
    }

    public String getClucks() {
        return clucks;
    }

    public void setClucks(String clucks) {
        this.clucks = clucks;
    }

    public String getCores() {
        return cores;
    }

    public void setCores(String cores) {
        this.cores = cores;
    }

    public String getManufacturer() {
        return manufacturer;
    }

    public void setManufacturer(String manufacturer) {
        this.manufacturer = manufacturer;
    }

    public String getMemorySockets() {
        return memorySockets;
    }

    public void setMemorySockets(String memorySockets) {
        this.memorySockets = memorySockets;
    }

    public String getSocket() {
        return socket;
    }

    public void setSocket(String socket) {
        this.socket = socket;
    }

    public String getSpecsID() {
        return specsID;
    }

    public void setSpecsID(String specsID) {
        this.specsID = specsID;
    }

    public String getThreads() {
        return threads;
    }

    public void setThreads(String threads) {
        this.threads = threads;
    }
}
