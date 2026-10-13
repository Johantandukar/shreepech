import plugin from "tailwindcss/plugin";

type ThemeValue = string | [string, { lineHeight?: string }];
type CssProps = string | string[];

// clamp function for fluid values
const clampValue = (min: string, max: string, unit = "") =>
  `clamp(${min}${unit}, calc(${min}${unit} + (${max}${unit} - ${min}${unit}) * ((100vw - var(--fluid-width-start, 360px)) / (var(--fluid-width-end, 1600px) - var(--fluid-width-start, 360px)))), ${max}${unit})`;

// extract number/unit or return raw vw/vh/%
const normalize = (val: ThemeValue) => {
  const raw = Array.isArray(val) ? val[0] : val;
  if (typeof raw === "string" && /px|rem|vw|vh|%/.test(raw)) return raw;
  return raw + "px"; // default to px
};

// resolve theme key or fallback to raw
const resolveThemeValue = (
  themeSection: Record<string, ThemeValue> | undefined,
  key: string
): ThemeValue => themeSection?.[key] ?? key;

// map Tailwind properties
const propertiesMap: Record<string, CssProps> = {
  text: "font-size",
  p: "padding",
  pt: "padding-top",
  pr: "padding-right",
  pb: "padding-bottom",
  pl: "padding-left",
  px: ["padding-left", "padding-right"],
  py: ["padding-top", "padding-bottom"],
  m: "margin",
  mt: "margin-top",
  mr: "margin-right",
  mb: "margin-bottom",
  ml: "margin-left",
  mx: ["margin-left", "margin-right"],
  my: ["margin-top", "margin-bottom"],
  w: "width",
  h: "height",
  "max-w": "max-width",
  "max-h": "max-height",
  "min-w": "min-width",
  "min-h": "min-height",
  gap: "gap",
  "row-gap": "row-gap",
  "column-gap": "column-gap",
};

export default plugin(function ({ matchUtilities, theme }) {
  Object.keys(propertiesMap).forEach((prefix) => {
    const cssProps = propertiesMap[prefix];
    const themeSection =
      prefix.startsWith("p") || prefix.startsWith("m")
        ? theme("spacing")
        : prefix === "text"
        ? theme("fontSize")
        : theme(prefix);

    matchUtilities(
      {
        [prefix]: (value: string) => {
          if (!value.includes("~")) return {};
          const [minRaw, maxRaw] = value.split("~");
          const minVal = resolveThemeValue(themeSection, minRaw);
          const maxVal = resolveThemeValue(themeSection, maxRaw);

          const minParsed = normalize(minVal);
          const maxParsed = normalize(maxVal);

          const clamp = clampValue(minParsed, maxParsed);

          const styles: Record<string, string> = {};
          if (Array.isArray(cssProps)) {
            cssProps.forEach((prop) => (styles[prop] = clamp));
          } else {
            styles[cssProps] = clamp;
          }

          return styles;
        },
      }
    );
  });
});
