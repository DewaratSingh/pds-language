# PDS Language Documentation

**PDS (Paragraph-like Dynamic Syntax)** is a beginner-friendly, custom programming language that uses a natural, sentence-like syntax. It is built using JavaScript and runs in the browser through a `<pds>` tag.

---

## Getting Started

### 1. Installation

You can use PDS in two ways:

#### a) Download the Compiler

Download `compiler.js` from the GitHub repository and include it in your HTML:

```html
<script type="text/javascript" src="./compiler.js"></script>
```
#### b) Add pds tage to html 
To start writing PDS code, place it inside a <pds> tag within the HTML file:
```html
<pds>
  your code here
</pds>
```
Use CSS to hide the tag if needed:
```css
pds { display: none; }
```
## Syntax & Features
### 3. Variables
Define variables using let. You can declare one or multiple variables in the same line.
```txt
let a = 45 and b = 67
```
or
```txt
let a = 45 let b = 67
```

Always leave a space between words and symbols.
## 4. Conditionals
PDS supports if, else if, and else structures:
```txt
if a==b then alert 'a is equal to b' else if a<b then alert 'a is smaller' else alert 'a is greater'.

```
Conditions like a==b, a<b, etc., must not contain spaces.

End the condition block using a period . or end.


## 5. Loops
Use a for loop with range:
```txt
for i in range 1,5 then
  print i
end
```
End loops using end or .


## 6. Functions
Create a function using:
```txt
let function add a,b = return a+b.
```
Parameters are separated by commas.
The function must end with end or .

## 7. Classes & OOP
Define classes and use object-oriented features:
```txt
let class Man = 
  function constructor name,age = this.name = name this.age = age end
  function alertAge = alert this.age end
end
```
Create and use objects:
```txt
let a = new Man 'pawan',15
alert a.age
```
## 8. Comments
### Single-line:
```txt
// this is a comment
```
There must be a space after //

// should be in starting of line in term to use in midle of line use multi-line comment
### Multi-line:
```txt
/* 
  This is a 
  multi-line comment 
*/
```

## 9. DOM Manipulation
Control HTML elements directly using PDS.

### a) Print text to element:
```txt
print 1234567890,'id'
```
Adds text to innerHTML of element with ID id.

### b) Add a single CSS property:
```txt
style "id","color","red"
```
Changes the color of the element with ID id.

### c) Add multiple CSS properties:
```txt
change 'id color:red backgroundColor:pink height:100px textAlign:center font:bold '
```
Sets multiple CSS styles in one call. Use space to separate each property pair.















