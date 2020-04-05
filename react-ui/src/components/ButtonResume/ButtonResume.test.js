import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import ButtonResume from "./ButtonResume";

let container = null;
beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});


describe('ButtonResume.js', () => {
    it("renders \"Download PDF\" when passed as argument", () => {
        act(() => { render(<ButtonResume displayMessage="Download PDF" />, container); });
        expect(container.textContent).toBe("Download PDF");
    });

    it("set up the download button in english", () => {
        act(() => { render(<ButtonResume lg="en" />, container); });
        expect(container.querySelector("a").getAttribute("href")).toBe("./documents/Benjamin Jaume - Résumé.pdf");
    });

    it("set up the download button in french", () => {
        act(() => { render(<ButtonResume lg="fr" />, container); });
        expect(container.querySelector("a").getAttribute("href")).toBe("./documents/Benjamin Jaume - CV.pdf");
    });

    it("set up the download button in default english", () => {
        act(() => { render(<ButtonResume lg={""} />, container); });
        expect(container.querySelector("a").getAttribute("href")).toBe("./documents/Benjamin Jaume - Résumé.pdf");
    })
});