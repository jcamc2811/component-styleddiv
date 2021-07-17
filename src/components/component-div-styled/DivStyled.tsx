import React from "react";
import { DivProps } from "./interfaces/interface-div-styled";
import { createDynamicClass, setConfigDivStyle, setConfigTextStyle, setConfigTitleStyle, setNaN } from "./utils/util-div-styled";

const DivStyled: React.FC<DivProps> = (props) => {
    const configTitle = setConfigTitleStyle(props.configTitle);
    const colorTitlePs = configTitle.configTitlePs ? setNaN(props.configTitle?.colorTitle) + ";" : "";

    const configText = setConfigTextStyle(props.configText);
    const colorTextPs = configText.configTextPs ? setNaN(props.configText?.colorText) + ";" : "";

    const configDiv = setConfigDivStyle(props.configDiv);
    const colorDivPs = configDiv.configDivPs ? setNaN(props.configDiv?.colorDiv) + ";" : "";

    createDynamicClass(setNaN(props.configTitle?.tagTitle) === "" ? "cssConfigTitle" : "cssConfigTitle " + props.configTitle?.tagTitle, configTitle.style);
    createDynamicClass(setNaN(props.configText?.tagText) === "" ? "cssConfigText" : "cssConfigText " + props.configText?.tagText, configText.style);
    createDynamicClass("cssConfigDiv", configDiv.style);

    let cssDiv = "flex flex-column ";
    cssDiv += (colorTitlePs + colorTextPs + colorDivPs).replace(";", "");
    cssDiv += "cssConfigTitle cssConfigText cssConfigDiv";

    return (
        <div data-testid="div-test" className={cssDiv}>
            {props?.children}
        </div>
    );
};

export default DivStyled;