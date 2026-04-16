export function transformNumberToAR(string: string, transformTo: "right" | "left" = "right") {
    return (string).split("").map(el => /\d/.test(el) ? Number(el).toLocaleString(transformTo === "right" ? "ar-EG" : "en-US") : el).join("")
}