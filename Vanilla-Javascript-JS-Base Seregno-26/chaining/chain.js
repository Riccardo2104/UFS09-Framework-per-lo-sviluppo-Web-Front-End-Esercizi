const potentiallyNullObj = {
    a: {
        b:1
    },
};
const prop = (potentiallyNullObj?.a).b;


const mario = potentiallyNullObj === null || potentiallyNullObj === undefined ? undefined: potentiallyNullObj.a;

console.log("value", mario);

const nestedProp = potentiallyNullObj.a?.b;

const temp = potentiallyNullObj.a;

const nestedProp = temp == null || temp == undefined ? undefined: temp.b;

