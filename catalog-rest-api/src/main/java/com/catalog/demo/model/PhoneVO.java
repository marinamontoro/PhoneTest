package com.catalog.demo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class PhoneVO {
    private int id;
    private String name;
    private String manufacturer;
    private String description;
    private String color;
    private String price;
    private String imageFileName;
    private String screen;
    private String processor;
    private String ram;

}
