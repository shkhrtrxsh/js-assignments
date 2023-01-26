var trigger=document.getElementById("convert-btn");
trigger.addEventListener("click",function(event){
    var content=document.querySelector("input").value;
    console.log(content);
    var camelcase=camelCase(content);
    document.getElementById("camel-case").innerText=""+camelcase+"";
    var snakecase=snakeCase(content);
    console.log(snakecase);
    document.getElementById("snake-case").innerText=""+snakecase+"";
    var kebabcase=kebabCase(content);
    document.getElementById("kebab-case").innerText=""+kebabcase+"";
    var pascalcase=pascalCase(content);
    document.getElementById("pascal-case").innerText=""+pascalcase+"";
    var ssnakecase=screamingSnakeCase(content);
    document.getElementById("screaming-snake-case").innerText=""+ssnakecase+"";
    var skebabcase=screamingKebabCase(content);
    document.getElementById("screaming-kebab-case").innerText=""+skebabcase+"";
})
function camelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
        return index == 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
}
function snakeCase(str) {
    return str.replace(/\s+/g, '_').toLowerCase();
}
function kebabCase(str) {
    return str.replace(/\s+/g, '-').toLowerCase();
}
function pascalCase(str) {
    return str.replace(/\w+/g, function(word) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
    }).replace(/\s+/g, '');
}
function screamingSnakeCase(str) {
    return str.replace(/\s+/g, '_').toUpperCase();
}
function screamingKebabCase(str) {
    return str.replace(/\s+/g, '-').toUpperCase();
}