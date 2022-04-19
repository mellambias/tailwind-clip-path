/**
 * clip-path
 * The clip-path CSS property creates a clipping region
 * that sets what part of an element should be shown.
 * Parts that are inside the region are shown, while those outside are hidden.
 * https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path
 * */

const plugin = require("tailwindcss/plugin");

// globales del plugin
const className = "clip-path";
const cssRule = "clip-path";
//entradas de la configuracion
const myTheme = "clipPath";
const myThemeFunction = "clipPathFunc";

// clases de utilidad
const clipPath = {
  none: "none",
  margin: "margin-box",
  padding: "padding-box",
  content: "content-box",
  fill: "fill-box",
  stroke: "stroke-box",
  view: "view-box",
  inset: "inset(100px 50px)",
  circle: "circle(50px at 0 100px)",
  ellipse: "ellipse(50px 60px at 0 10% 20%)",
  polygon: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
  path: "path('M0.5,1 C0.5,1,0,0.7,0,0.3 A0.25,0.25,1,1,1,0.5,0.3 A0.25,0.25,1,1,1,1,0.3 C1,0.7,0.5,1,0.5,1 Z')",
  inherit: "inherit",
  initial: "initial",
  revert: "revert",
  "revert-layer": "revert-layer",
  unset: "unset",
};

// clases con valores arbitrarios
const clipPathFunc = {
  DEFAULT: "path",
  inset: "inset",
  circle: "circle",
  ellipse: "ellipse",
  polygon: "polygon",
  url: "url",
};

module.exports = plugin(function ({ matchUtilities, addUtilities, theme, e }) {
  function setRuleWithParams(withParams, className, cssRule) {
    const ruleWithParams = Object.keys(withParams).reduce((result, key) => {
      if (key == "DEFAULT") {
        return {
          ...result,
          [`${className}`]: (valor) => ({
            [`${cssRule}`]: `${withParams[key]}(${valor})`,
          }),
        };
      }
      return {
        ...result,
        [`${className}-${e(key)}`]: (valor) => ({
          [`${cssRule}`]: `${withParams[key]}(${valor})`,
        }),
      };
    }, {});
    matchUtilities(ruleWithParams);
  }

  function setRule(values, className, cssRule) {
    const utilidad = Object.keys(values).reduce((result, key) => {
      if (key == "DEFAULT") {
        return {
          ...result,
          [`.${className}`]: {
            [`${cssRule}`]: values[key],
          },
        };
      }

      if (typeof values[key] === "object") {
        for (const subkey in values[key]) {
          result = {
            ...result,
            [`.${className}-${e(key)}-${e(subkey)}`]: {
              [`${cssRule}`]: values[key][subkey],
            },
          };
        }
        return result;
      }

      return {
        ...result,
        [`.${className}-${e(key)}`]: {
          [`${cssRule}`]: values[key],
        },
      };
    }, {});
    addUtilities(utilidad);
  }

  // Utilidades
  setRule({ ...theme(myTheme), ...clipPath }, className, cssRule);
  // Valores arbitrarios
  setRuleWithParams(
    { ...theme(myThemeFunction), ...clipPathFunc },
    className,
    cssRule
  );
}, {});
