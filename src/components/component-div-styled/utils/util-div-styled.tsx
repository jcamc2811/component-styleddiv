import { ColorList } from "../enums/enum-div-styled";
import { ConfigDiv, ConfigText, ConfigTitle } from "../types/types-div-styled";

export function setConfigTitleStyle(props?: ConfigTitle): any {
    let colorTitle = setNaN(props?.colorTitle);
    const vr_colorTitle = searchColor(colorTitle);
    colorTitle = vr_colorTitle ? colorTitle : "";

    let configTitle = {
        "style": {
            "color": colorTitle,
            "fontSize": setNaN(props?.sizeTitle),
            "padding": setNaN(props?.paddingTitle)
        },
        "configTitlePs": colorTitle.includes("ps-")
    };

    configTitle.style.color = configTitle.configTitlePs ? "" : configTitle.style.color;

    return configTitle;
};

export function setConfigTextStyle(props?: ConfigText): any {
    let colorText = setNaN(props?.colorText);
    const vr_colorText = searchColor(colorText);
    colorText = vr_colorText ? colorText : "";

    let configText = {
        "style": {
            "color": colorText,
            "fontSize": setNaN(props?.sizeText),
            "padding": setNaN(props?.paddingText)
        },
        "configTextPs": colorText.includes("ps-")
    };

    configText.style.color = configText.configTextPs ? "" : configText.style.color;

    return configText;
};

export function setConfigDivStyle(props?: ConfigDiv): any {
    let colorDiv = setNaN(props?.colorDiv);
    const vr_colorDiv = searchColor(colorDiv);
    colorDiv = vr_colorDiv ? colorDiv : "";

    let configDiv = {
        "style": {
            "backgroundColor": colorDiv,
            "margin": setNaN(props?.marginDiv),
            "padding": setNaN(props?.paddingDiv),
            "width": setNaN(props?.widthDiv),
            "height": setNaN(props?.heightDiv)
        },
        "configDivPs": colorDiv.includes("ps-back-")
    };

    configDiv.style.backgroundColor = configDiv.configDivPs ? "" : configDiv.style.backgroundColor;

    return configDiv;
};

export function setNaN(value: any): string {
    return value === undefined ? "" : value;
};

export function searchColor(color: string): boolean {
    return ColorList.includes(color);
};

export function includeAllValues(old: any, newList: any): any {
    newList.forEach((x: any) => {
        old.push(x);
    });

    return old;
};

export function includeAllDefaultFonts(old: any, minFont: any = 2, maxFont: any = 100, multiPl: number = 2): any {
    for(let i: number = minFont; i <= maxFont; i += multiPl) 
        old.push(i); 
    
    return old;
};

export function createDynamicClass(name: string, styleCss: any) {
    let element = document.getElementById("divstyled-id");

    if (element === undefined || element === null){
        element = document.createElement("style");
        element.id = "divstyled-id";
        document.getElementsByTagName("head")[0].appendChild(element);
        element = document.getElementById("divstyled-id");        
    };

    let css = "\n." + name;
    css += " {";
    css += "\n    color: "           + setNaN(styleCss.color)            + ";";
    css += "\n    background-color:" + setNaN(styleCss.backgroundColor)  + ";";
    css += "\n    padding:"          + setNaN(styleCss.padding)          + ";";
    css += "\n    margin:"           + setNaN(styleCss.margin)           + ";";
    css += "\n    width:"            + setNaN(styleCss.width)            + ";";
    css += "\n    height:"           + setNaN(styleCss.height)           + ";";
    css += "\n    font-size:"        + setNaN(styleCss.fontSize)         + ";";
    css += "\n }"; 

    if(element !== undefined && element !== null && !element.innerHTML.includes(css))
        element.innerHTML += css;
};