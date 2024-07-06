// 1.Type Mismatch Errors
let num: number = "Hello"; // Error: Type 'string' is not assignable to type 'number'.

// 2.Property Does Not Exist
let person = { name: "Sidra" };
console.log(person.age); // Error: Property 'age' does not exist on type '{ name: string; }'.

// 3.Argument of Type is Not Assignable
function greet(name: string) {
    console.log("Hello, " + name);
}
greet(42); // Error: Argument of type 'number' is not assignable to parameter of type 'string'.

// 4.Type Inference Errors
let arr = ["apple", "banana", 3]; // Error: Type 'number' is not assignable to type 'string'.

// 5.Function Implementation Errors
function add(a: number, b: number): string { // Error: Type 'string' is not assignable to type 'number'.
    return a + b;
}

// 6.No Implicit Any
function log(value) {
    console.log(value);
} // Error: Parameter 'value' implicitly has an 'any' type.

// 7.Return Type Errors
function getGreeting(): string {
    return 123; // Error: Type 'number' is not assignable to type 'string'.
}

// 8.Cannot Find Name
console.log(user); // Error: Cannot find name 'user'.

// 9.Enum Value Errors
enum Color { Red, Green, Blue }
let color: Color = "Red"; // Error: Type '"Red"' is not assignable to type 'Color'.

// 10.Object Type Errors
let obj: { name: string } = { name: "Sidra", age: 17 }; // Error: Object literal may only specify known properties, and 'age' does not exist in type '{ name: string; }'.

// 11.Interface Implementation Errors
interface Person {
    name: string;
    age: number;
}
let implementationErrors: Person = { name: "Sidra" }; // Error: Property 'age' is missing in type '{ name: string; }' but required in type 'Person'.

// 12.Dynamic Import Errors
const module = await import('./module.js'); // Error: Dynamic imports can only be used when the 'module' option is set to 'esnext', 'system', 'nodenext', or 'node12'.

// 13.Invalid Use of Union Types
function combine(a: string | number, b: string | number): string | number {
    return a + b; // Error: Operator '+' cannot be applied to types 'string | number' and 'string | number'.
}



