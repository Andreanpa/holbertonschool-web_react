# 0x07. React Immutable
## Details
 By: Johann Kerbrat, Engineering Manager at Uber Works Weight: 1Project over - took place fromFeb 20, 2023 12:00 AMto Feb 22, 2023 12:00 AM An auto review will be launched at the deadline#### In a nutshell…
* Auto QA review:          0.0/19 mandatory      
* Altogether:         0.0%* Mandatory: 0.0%
* Optional: no optional tasks

 ![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/f3ca19e8b16c650e59d8.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20230317%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230317T190923Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=d09c78e619840a07266155e09beb2237e400881fab5caddab8a3827c39ce28c6) 

## Resources
Read or watch :
* [Immutable Object concept](https://intranet.hbtn.io/rltoken/iCzkEHd9UHXDe1SQU7N5sw) 

* [Immutable.js Documentation](https://intranet.hbtn.io/rltoken/VLQYE0CUVkFQz79FTKTxmA) 

* [Immutable.js GitHub](https://intranet.hbtn.io/rltoken/sFez1GEIXOr7lCrk1MBTwg) 

## Learning Objectives
At the end of this project, you are expected to be able to  [explain to anyone](https://intranet.hbtn.io/rltoken/rYap5Z3Q5j-YyHp5SyjGqw) 
 ,  without the help of Google :
* Immutable objects. Who, what, when, where, and why?
* How to use the Immutable.js library to bring immutability to Javascript
* The differences between List and Map
* How to use Merge, Concat, and Deep Merging
* What a lazy  ` Seq `  is
## Requirements
* Allowed editors:  ` vi ` ,  ` vim ` ,  ` emacs ` ,  ` Visual Studio Code ` 
* A  ` README.md `  file, at the root of the folder of the project, is mandatory
* All of your files will be interpreted/compiled on Ubuntu 18.04 LTS using  ` node 12.x.x `  and  ` npm 6.x.x ` 
* All of your files should end with a new line
* All of your functions must be exported
## Setup
* Install NodeJS  ` 12.11.x ` 
* Install npm  ` 6.11.x ` 
The script below installs the above 2 at the specified versions
```bash
$ curl -sl https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
$ sudo bash nodesource_setup.sh
$ sudo apt install nodejs

```
## Provided files
### babel.config.js
Click to show/hide file contents `  ` ### jsconfig.json
Click to show/hide file contents `  ` ### package.json
Click to show/hide file contents `  ` ## Tasks
### 0. Converting into an Immutable object using fromJS
          mandatory         Progress vs Score           Score: 0.00% (Checks completed: 0.00%)         Task Body Copy the necessary config files specified in the description to the root directory of the project and execute   ` npm install `  .
In a file named   ` 0-fromjs.js `  , create a function   ` getImmutableObject `   that accepts   ` object `   as a parameter and converts it into an immutable Map using   ` fromJS `   of the   ` Immutable.js `   library
Example:
 ` {
     fear: true,
     smell: -1033575916.9145899,
     wall: false,
     thing: -914767132
}
 ` Should return:
```bash
Map {
     size: 4,
     _root: ArrayMapNode {
     ownerID: OwnerID {},
     entries: [ [Array], [Array], [Array], [Array] ]
     },
     __ownerID: undefined,
     __hash: undefined,
     __altered: false
}

```
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_react ` 
* Directory:  ` 0x07-React_Immutable ` 
* File:  ` 0-fromjs.js ` 
 Self-paced manual review  Panel footer - Controls 
### 1. Converting into Immutable using Map
          mandatory         Progress vs Score           Score: 0.00% (Checks completed: 0.00%)         Task Body In   ` 1-map.js `  , modify the function   ` getImmutableObject `   using   ` Map `   from Immutable.js
Example:
 ` {
     fear: true,
     smell: -1033575916.9145899,
     wall: false,
     thing: -914767132
}
 ` Should return:
```bash
Map {
     size: 4,
     _root: ArrayMapNode {
     ownerID: OwnerID {},
     entries: [ [Array], [Array], [Array], [Array] ]
     },
     __ownerID: undefined,
     __hash: undefined,
     __altered: false
}

```
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_react ` 
* Directory:  ` 0x07-React_Immutable ` 
* File:  ` 1-map.js ` 
 Self-paced manual review  Panel footer - Controls 
### 2. Accessing nested elements
          mandatory         Progress vs Score           Score: 0.00% (Checks completed: 0.00%)         Task Body Given the function below, edit it to return the value of the object at the defined path 
 ` export default function accessImmutableObject(object, array) {
}
 ` * The first argument is a plain object
* The second one is an array containing a list of a path to some key in the object
The function should return the value of the object at the defined path
Example:
```bash
accessImmutableObject({
     name: {
          first: "Guillaume"
          last: "Salva"
     }
}, ['name', 'first'])

```
Should return   ` Guillaume ` 
Requirements:
* The function should either return undefined, a string, or a Map
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_react ` 
* Directory:  ` 0x07-React_Immutable ` 
* File:  ` 2-nested.js ` 
 Self-paced manual review  Panel footer - Controls 
### 3. List and push
          mandatory         Progress vs Score           Score: 0.00% (Checks completed: 0.00%)         Task Body In file   ` 3-list.js `  , create these 2 functions:
 ` export function getListObject(array) {
}
 `  ` export function addElementToList(list, element) {
}
 ` *  ` getListObject `  accepts an array as parameter and converts it into an immutable List using the Immutable.js library
*  ` addElementToList `  accepts two arguments: first one is a List and second one is a string* append the string to the list and return the list

 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_react ` 
* Directory:  ` 0x07-React_Immutable ` 
* File:  ` 3-list.js ` 
 Self-paced manual review  Panel footer - Controls 
### 4. Chained mutations
          mandatory         Progress vs Score           Score: 0.00% (Checks completed: 0.00%)         Task Body Create & export a constant named   ` map `  . It should create an Immutable Map with the following object:
```bash
 {
     1: 'Liam',
     2: 'Noah',
     3: 'Elijah',
     4: 'Oliver',
     5: 'Jacob',
     6: 'Lucas',
}

```
Export a second constant named   ` map2 `  . It should use the first   ` map `   and modify the following values:
* Modify the value for the index 2, to  ` Benjamin ` 
* Modify the value for the index 4, to  ` Oliver ` 
Requirements:
* You can’t use any other variable than  ` map `  and  ` map2 ` 
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_react ` 
* Directory:  ` 0x07-React_Immutable ` 
* File:  ` 4-mutations.js ` 
 Self-paced manual review  Panel footer - Controls 
### 5. Merge & concat
          mandatory         Progress vs Score           Score: 0.00% (Checks completed: 0.00%)         Task Body Create a function named   ` concatElements ` 
* It accepts two arguments  ` page1 `  and  ` page2 ` . Both are arrays
* It should return a List containing the values of the two pages
Create a function named   ` mergeElements ` 
* It accepts two arguments  ` page1 `  and  ` page2 ` . Both are objects
* It should return a List containing the values of the two pages
* If two values are the same,  ` page2 `  values should be used.
Requirements:
* Use  ` list `  and  ` map `  from the Immutable.js library
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_react ` 
* Directory:  ` 0x07-React_Immutable ` 
* File:  ` 5-merge.js ` 
 Self-paced manual review  Panel footer - Controls 
### 6. Nested merge
          mandatory         Progress vs Score           Score: 0.00% (Checks completed: 0.00%)         Task Body Create a function named   ` mergeDeeplyElements ` 
* It should accept two arguments,  ` page1 `  and  ` page2 ` . Both are objects
* It should return a List containing the values of the two pages
* If two values are the same, they should combine each other
Example:
```bash
const page1 = {
  'user-1': {
    id: 1,
    name: 'test',
    likes: {
      1: {
        uid: 1234,
      }
    }
  },
};

const page2 = {
  'user-1': {
    likes: {
      2: {
        uid: 134,
      }
    }
  },
};

mergeDeeplyElements(page1, page2).toJS();

```
Should return:
```bash
const page1 = {
  'user-1': {
    id: 1,
    name: 'test',
    likes: {
      1: {
        uid: 1234,
      },
      2: {
        uid: 134,
      }
    }
  },
};

```
Requirements
* use  ` Map `  from  ` immutable.js ` 
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_react ` 
* Directory:  ` 0x07-React_Immutable ` 
* File:  ` 6-deeply.js ` 
 Self-paced manual review  Panel footer - Controls 
### 7. Equality
          mandatory         Progress vs Score           Score: 0.00% (Checks completed: 0.00%)         Task Body Create a function named   ` areMapsEqual ` 
* It accepts two arguments  ` map1 `  and  ` map2 ` . Both are Immutable.js Maps
* It should return true if the Maps are equal
Example:
```bash
const map1 = new Map(
  {
    firstName: 'Guillaume',
    lastName: 'Salva',
  }
);
const map2 = new Map(
  {
    firstName: 'Guillaume',
    lastName: 'Salva',
  }
);

areMapsEqual(map1, map2);

```
Should return   ` true ` 
Requirements:
* Use  ` is `  from the  ` immutable.js `  library
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_react ` 
* Directory:  ` 0x07-React_Immutable ` 
* File:  ` 7-equality.js ` 
 Self-paced manual review  Panel footer - Controls 
### 8. Lazy Seq
          mandatory         Progress vs Score           Score: 0.00% (Checks completed: 0.00%)         Task Body Create a function named   ` printBestStudents `  :
* It accepts one object as argument. The object is formed with the following structure:
 ` const grades = {
  1: {
    score: 99,
    firstName: 'guillaume',
    lastName: 'salva',
  }
};
 ` * Calling the function should filter any student with a score < 70 and  print to the  ` console `  the first name and the last name with the first letter capitalized:
 ` {
    "1": { score: 99, firstName: "Guillaume", lastName: "Salva" },
}
 ` Requirements:
* Uses  ` seq `  from  ` immutable.js ` 
 Task URLs  Github information Repo:
* GitHub repository:  ` holbertonschool-web_react ` 
* Directory:  ` 0x07-React_Immutable ` 
* File:  ` 8-seq.js ` 
 Self-paced manual review  Panel footer - Controls 
×#### Recommended Sandbox
[Running only]() 
### 1 image(0/5 Sandboxes spawned)
### Ubuntu 18.04 - Node 12
Ubuntu 18.04 with Node 12
[Run]() 
