const size = {
    xsm: "0",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
}

export const device = {
    mobile: `@media (min-width: ${size.xsm})`,
    mobileL: `@media(min-width: ${size.sm})`,
    tablet: `@media(min-width: ${size.md})`,
    laptop: `@media(min-width: ${size.lg})`,
    desktop: `@media(min-width: ${size.xl})`,
}