let Courses =  {
 	"EECS 161": {
 		"id": "EECS 161",
 		"title": "",
 		"description": "",
 		"prereqs": []
 	},
  "ECE 271": {
    "id": "ECE 271",
    "title": "DIGITAL LOGIC DESIGN",
    "description": "A first course in digital logic design. Data types and representations, Boolean algebra, state machines, simplification of switching expressions, and introductory computer arithmetic. Lec/rec.",
    "prereqs": []
  },
 	"MTH 111": {
 		"id": "MTH 111",
 		"title": "COLLEGE ALGEBRA",
 		"description": "Polynomial equations and inequalities, polynomial functions and graphs, inverse functions, exponential and logarithmic functions, elementary mathematical modeling and applications. Lec/rec. All courses used to satisfy MTH prerequisites must be completed with a C- or better. (Bacc Core Course)",
 		"prereqs": []
 	},
 	"MTH 112": {
 		"id": "MTH 112",
 		"title": "ELEMENTARY FUNCTIONS",
 		"description": "Triangle trigonometry, circular functions and graphs, trigonometric equations and identities, inverse trigonometric functions, polar coordinates, vectors and applications. Lec/rec. All courses used to satisfy MTH prerequisites must be completed with C- or better. (Bacc Core Course)",
 		"prereqs": [
 			["MTH 111"]
 		]
 	},
  "MTH 231": {
    "id": "MTH 231",
    "title": "ELEMENTS OF DISCRETE MATHEMATICS",
    "description": "Elementary logic and set theory, functions, direct proof techniques, contradiction and contraposition, mathematical induction and recursion, elementary combinatorics, basic graph theory, minimal spanning trees. All courses used to satisfy MTH prerequisites must be completed with C- or better.",
    "prereqs": [
      ["MTH 111"]
    ]
  },
 	"CS 161": {
 		"id": "CS 161",
 		"title": " INTRODUCTION TO COMPUTER SCIENCE I",
 		"description": "Overview of fundamental concepts of computer science. Introduction to problem solving, software engineering, and object-oriented programming. Includes algorithm design and program development. Lec/lab/rec.",
 		"prereqs": [
 			["MTH 112"]
 		]
 	},
 	"CS 162": {
 		"id": "CS 162",
 		"title": "INTRODUCTION TO COMPUTER SCIENCE II",
 		"description": "Basic data structures. Computer programming techniques and application of software engineering principles. Introduction to analysis of programs. Lec/lab/rec.",
 		"prereqs": [
 			["CS 161","EECS 161"]
 		]
 	},
 	"CS 165": {
 		"id": "CS 165",
 		"title": "ACCELERATED INTRODUCTION TO COMPUTER SCIENCE",
 		"description": "Overview of the fundamental concepts of computer science. Introduction to problem solving, algorithm development, data types, and basic data structures. Introduction to analysis of algorithms and principles of software engineering. System development and computer programming using procedural/object-oriented paradigms. Offered via Ecampus only.",
 		"prereqs": [
 			["MTH 112"]
 		]
 	},
 	"CS 225": {
 		"id": "CS 225",
 		"title": "DISCRETE STRUCTURES IN COMPUTER SCIENCE",
 		"description": "An introduction to the discrete mathematics of computer science, including logic, set and set operations, methods of proof, recursive definitions, combinatorics, and graph theory. (Note: Students may take either MTH 231 or CS 225, but cannot receive credit for both.)",
 		"prereqs": [
 			["MTH 111"]
 		]
 	},
 	"CS 261": {
 		"id": "CS 261",
 		"title": "DATA STRUCTURES",
 		"description": "Abstract data types, dynamic arrays, linked lists, trees and graphs, binary search trees, hash tables, storage management, complexity analysis of data structures. Lec/rec.",
 		"prereqs": [
 			["CS 162","CS 165"],
      ["CS 225"]
 		]
 	},
 	"CS 262": {
 		"id": "CS 262",
 		"title": "PROGRAMMING PROJECTS IN C++",
 		"description": "Learning a second computer programming language. Elements of C++. Object-oriented programming. Experience team work on a large programming project.",
 		"prereqs": [
 			["CS 261"]
 		]
 	},
 	"CS 271": {
 		"id": "CS 271",
 		"title": "COMPUTER ARCHITECTURE AND ASSEMBLY LANGUAGE",
 		"description": "Introduction to functional organization and operation of digital computers. Coverage of assembly language; addressing, stacks, argument passing, arithmetic operations, decisions, macros, modularization, linkers and debuggers.",
 		"prereqs": [
 			["CS 161","CS 165"]
 		]
 	},
 	"CS 290": {
 		"id": "CS 290",
 		"title": "WEB DEVELOPMENT",
 		"description": "How to design and implement a multi-tier application using web technologies: Creation of extensive custom client- and server-side code, consistent with achieving a high-quality software architecture.",
 		"prereqs": [
 			["CS 162","CS 165"]
 		]
 	},
 	"CS 321": {
 		"id": "CS 321",
 		"title": "INTRODUCTION TO THEORY OF COMPUTATION",
 		"description": "Survey of models of computation including finite automata, formal grammars, and Turing machines.",
 		"prereqs": [
 			["CS 261"],
      ["CS 225", "MTH 231"]
 		]
 	},
 	"CS 325": {
 		"id": "CS 325",
 		"title": "ANALYSIS OF ALGORITHMS",
 		"description": "Recurrence relations, combinatorics, recursive algorithms, proofs of correctness.",
 		"prereqs": [
 			["CS 261"],
      ["CS 225","MTH 231"]
 		]
 	},
 	"CS 340": {
 		"id": "CS 340",
 		"title": "INTRODUCTION TO DATABASES",
 		"description": "Design and implementation of relational databases, including data modeling with ER or UML, diagrams, relational schema, SQL queries, relational algebra, user interfaces, and administration.",
 		"prereqs": [
 			["CS 290"]
 		]
 	},
 	"CS 344": {
 		"id": "CS 344",
 		"title": "OPERATING SYSTEMS I",
 		"description": "Introduction to operating systems using UNIX as the case study. System calls and utilities, fundamentals of processes and interprocess communication.",
 		"prereqs": [
 			["CS 261"],
 			["CS 271","ECE 271"]
 		]
 	},
 	"CS 361": {
 		"id": "CS 361",
 		"title": "SOFTWARE ENGINEERING I",
 		"description": "Introduction to the \"front end\" of the software engineering lifecycle; requirements analysis and specification; design techniques; project management.",
 		"prereqs": [
 			["CS 261"]
 		]
 	},
 	"CS 362": {
 		"id": "CS 362",
 		"title": "SOFTWARE ENGINEERING II",
 		"description": "Introduction to the \"back end\" of the software engineering lifecycle implementation; verification and validation; debugging; maintenance.",
 		"prereqs": [
 			["CS 261"],
      ["ECE 271", "CS 271"]
 		]
 	},
 	"CS 370": {
 		"id": "CS 370",
 		"title": "INTRODUCTION TO SECURITY",
 		"description": "Introductory course on computer security with the objective to introduce concepts and principles of computer systems security. Notions of security, basic crytographic primitives and their application, basics of authentication and access control, basics of key-management, basics of malware and software security.",
 		"prereqs": [
 			["CS 344"]
 		]
 	},
 	"CS 372": {
 		"id": "CS 372",
 		"title": "INTRODUCTION TO COMPUTER NETWORKS",
 		"description": "Computer network principles, fundamental networking concepts, packet-switching and circuit switching, TCP/IP protocol layers, reliable data transfer, congestion control, flow control, packet forwarding and routing, MAC addressing, multiple access techniques. CROSSLISTED as CS 372/ECE 372.",
 		"prereqs": [
 			["CS 261"],
 			["CS 271","ECE 271"]
 		]
 	}
 }
