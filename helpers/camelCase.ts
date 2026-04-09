export function toCamelCase(str: string) {
    return str.replace(str[0], str[0].toLowerCase()).replace(" ", "")
}