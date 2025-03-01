import React from "react";

import InfoSectionFooter from "./InfoSectionFooter";
import ScaleSlider from "./sliders/ScaleSlider";

import "./footer.css";

export default function Footer() {
    return (
        <div className="footer-wrapper">
            <div className="left-panel">
                <InfoSectionFooter />
            </div>
            <div className="center-panel">
                <ScaleSlider />
            </div>

            <div className="right-panel">
                <a href="https://github.com/OnurErtugral" target="_blank">
                    {" "}
                    FORK ME!{" "}
                </a>
            </div>
        </div>
    );
}
