let Courses =  {
 	"EECS 161": {
 		"id": "EECS 161",
 		"title": "No Title Available",
 		"description": "No Description Available",
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
  "MTH 251": {
    "id": "MTH 251",
    "title": "DIFFERENTIAL CALCULUS",
    "description": "Differential calculus for engineers and scientists. Rates of change: the derivative, velocity, and acceleration. The algebraic rules of differential calculus and derivatives of polynomial, rational, and trigonometric functions. Maximum-minimum problems, curve sketching, and other applications. Antiderivatives and simple motion problems. Lec/rec.",
    "prereqs": [
      ["MTH 112"]
    ]
  },
  "MTH 252": {
    "id": "MTH 252",
    "title": "INTEGRAL CALCULUS",
    "description": "Definite integrals, elementary applications to area, force, and work. Integral tables and basic techniques of integration, calculus of logarithmic and exponential functions, polar coordinates, applications to areas, volumes, force, work, and growth and decay problems. Lec/rec.",
    "prereqs": [
      ["MTH 251"]
    ]
  },
  "MTH 253": {
    "id": "MTH 253",
    "title": "INFINITE SERIES AND SEQUENCES",
    "description": "Indeterminate forms. Improper integrals. Sequences and series, especially Taylor's formula and power series. Applications to numerical estimation with error analysis. Series with complex terms and the Euler identities. Lec/rec.",
    "prereqs": [
      ["MTH 252"]
    ]
  },
  "MTH 254": {
    "id": "MTH 254",
    "title": "VECTOR CALCULUS I",
    "description": "Vectors, vector functions, and curves in two and three dimensions. Surfaces, partial derivatives, gradients, and directional derivatives. Multiple integrals in rectangular, polar, cylindrical, and spherical coordinates. Physical and geometric applications. Lec/rec.",
    "prereqs": [
      ["MTH 252"]
    ]
  },
  "MTH 255": {
    "id": "MTH 255",
    "title": "VECTOR CALCULUS II",
    "description": "Brief review of vector functions, space curves, gradients, and directional derivatives. Introduction to vector analysis: vector fields, divergence, curl, line integrals, surface integrals, conservative fields, and the theorems of Gauss and Stokes with applications to force, work, mass, and charge. Lec/rec.",
    "prereqs": [
      ["MTH 254"]
    ]
  },
  "MTH 256": {
    "id": "MTH 256",
    "title": "APPLIED DIFFERENTIAL EQUATIONS",
    "description": "irst order linear and nonlinear equations, and second order linear equations. Applications to electric circuits and mechanical oscillators. Introduction to the Laplace transform and higher order equations. Solution methods and applications appropriate for science and engineering. (Familiarity with complex numbers and Euler's identities is highly desirable.) Lec/rec",
    "prereqs": [
      ["MTH 254"]
    ]
  },
  "MTH 264": {
    "id": "MTH 264",
    "title": "INTRODUCTION TO MATRIX ALGEBRA",
    "description": "Introduction to matrix algebra: systematic solution to systems of linear equations; linear transformations; eigenvalue problems.",
    "prereqs": [
      ["MTH 252"]
    ]
  },
  "MTH 265": {
    "id": "MTH 265",
    "title": "INTRODUCTION TO SERIES",
    "description": "Convergence and divergence of numerical series, including geometric series. Series of functions. Power series and their analytic properties. Taylor series expansions and Taylor polynomials.",
    "prereqs": [
      ["MTH 252"]
    ]
  },
  "MTH 306": {
    "id": "MTH 306",
    "title": "MATRIX AND POWER SERIES METHODS",
    "description": "Introduction to matrix algebra, determinants, systematic solution to linear systems, and eigenvalue problems. Convergence and divergence of series with emphasis on power series, Taylor series expansions, convergence tests for power series, and error estimates for truncated series used in practical approximations. Lec/rec.",
    "prereqs": [
      ["MTH 252"]
    ]
  },
  "MTH 311": {
    "id": "MTH 311",
    "title": "ADVANCED CALCULUS I",
    "description": "Rigorous development of calculus, axiomatic properties of the real numbers, topology of the real line, convergence of sequences and series of real numbers, functions, limits of functions, basic properties of continuity and derivatives. Brief treatment of Riemann integration, improper integrals, sequences of functions, pointwise and uniform convergence, introductory aspects of multivariable calculus.",
    "prereqs": [
      ["MTH 254"],
      ["MTH 355"]
    ]
  },
  "MTH 312": {
    "id": "MTH 312",
    "title": "ADVANCED CALCULUS II",
    "description": "Rigorous development of calculus, axiomatic properties of R, topology of the real line, convergence of sequences and series of real numbers, functions, limits of functions, basic properties of continuity and derivatives. Brief treatment of Riemann integration, improper integrals, sequences of functions, pointwise and uniform convergence, introductory aspects of multivariable calculus.",
    "prereqs": [
      ["MTH 311"]
    ]
  },
  "MTH 323": {
    "id": "MTH 323",
    "title": "MATHEMATICAL MODELING",
    "description": "A variety of mathematical modeling techniques will be introduced. Students will formulate models in response to practical problems drawn from the literature of ecology, environmental sciences, engineering or other fields. Informal writing assignments in class and formal written presentation of the models will be required.",
    "prereqs": [
      ["MTH 256"],
      ["MTH 341"]
    ]
  },
  "MTH 333": {
    "id": "MTH 333",
    "title": "FUNDAMENTAL CONCEPTS OF TOPOLOGY",
    "description": "Open and closed sets, continuity, compactness, connectedness, winding number, fixed point theorems in the plane. All courses used to satisfy MTH prerequisites must be completed with C- or better.",
    "prereqs": [
      ["MTH 341","MTH 355"]
    ]
  },
  "MTH 338": {
    "id": "MTH 338",
    "title": "NON-EUCLIDEAN GEOMETRY",
    "description": "Introduction to non-Euclidean geometries. Selected topics such as hyperbolic and elliptic geometry, spherical geometry, projective geometry, geometries arising from alternative metrics.",
    "prereqs": [
      ["MTH 341"]
    ]
  },
  "MTH 341": {
    "id": "MTH 341",
    "title": "LINEAR ALGEBRA I",
    "description": "Matrix algebra, determinants, systems of linear equations, subspaces, an introductory study of eigenvalues and eigenvectors.",
    "prereqs": [
      ["MTH 254"]
    ]
  },
  "MTH 342": {
    "id": "MTH 342",
    "title": "LINEAR ALGEBRA II",
    "description": "Abstract (real or complex) vector spaces, linear transformations, inner product spaces, orthogonality, eigenspaces and diagonalization, spectral theorems, singular value decomposition.",
    "prereqs": [
      ["MTH 341"]
    ]
  },
  "MTH 343": {
    "id": "MTH 343",
    "title": "INTRODUCTION TO MODERN ALGEBRA",
    "description": "Introduction to algebraic abstraction, with an emphasis on structures and logical communication by way of proofs. Material includes an introduction to groups, rings and fields. Emphasis is on symmetry groups, the integers as a ring, and polynomial rings; selected applications. Generalizing from examples to mathematical statements, reading proofs, and both creating and editing proofs.",
    "prereqs": [
      ["MTH 341"],
      ["MTH 355"]
    ]
  },
  "MTH 355": {
    "id": "MTH 355",
    "title": "DISCRETE MATHEMATICS",
    "description": "Proof analysis and development in the context of discrete mathematics for math majors transitioning to upper-division course work. Topics include elementary logic and set theory, quantifiers, basic counting principles, elementary combinatorics, equivalence relations, the binomial theorem, and mathematical induction. Additional topics may include recurrence relations, generating functions, and introductory graph theory.",
    "prereqs": [
      ["MTH 253"]
    ]
  },
  "MTH 361": {
    "id": "MTH 361",
    "title": "INTRODUCTION TO PROBABILITY",
    "description": "Probability problem solving using concepts developed in calculus. Topics include probability models, discrete and continuous random variables, expectation and variance, the law of large numbers, and the central limit theorem.",
    "prereqs": [
      ["MTH 253","MTH 306","MTH 265"]
    ]
  },
  "MTH 411": {
    "id": "MTH 411",
    "title": "REAL ANALYSIS",
    "description": "Properties of metric spaces and normed spaces, including lp spaces. Completeness and applications, including fixed point theorems. Compactness. Equicontinuity and the Arzela-Ascoli theorem. Uniform continuity and uniform convergence, including applications.",
    "prereqs": [
      ["MTH 312"],
      ["MTH 341"]
    ]
  },
  "MTH 412": {
    "id": "MTH 412",
    "title": "REAL ANALYSIS",
    "description": "Measure and integration theory, basic convergence theorems, Lebesgue spaces, Fubini's theorem, Radon-Nikodym theorem, and applications. Banach spaces including Baire category theorems, and Hilbert spaces.",
    "prereqs": [
      ["MTH 411"]
    ]
  },
  "MTH 413": {
    "id": "MTH 413",
    "title": "REAL ANALYSIS",
    "description": "Measure and integration theory, basic convergence theorems, Lebesgue spaces, Fubini's theorem, Radon-Nikodym theorem, and applications. Banach spaces including Baire category theorems, and Hilbert spaces.",
    "prereqs": [
      ["MTH 412"]
    ]
  },
  "MTH 419": {
    "id": "MTH 419",
    "title": "MULTIVARIABLE ADVANCED CALCULUS",
    "description": "A rigorous development of multivariable advanced calculus, including continuity and compactness in multivariable Euclidean spaces, differentiation and approximation of multivariable functions, the inverse function theorem and the implicit function theorem, integration in several variables.",
    "prereqs": [
      ["MTH 312"]
    ]
  },
  "MTH 430": {
    "id": "MTH 430",
    "title": "METRIC SPACES AND TOPOLOGY",
    "description": "Fundamental notions of metric space topology. Examples of Euclidean, non-Euclidean and other fundamental metric spaces including the Hilbert Cube and two-dimensional surfaces. Characterization and classification results for metric spaces. Selected applications of topology, possibly including the structure of molecules and/or networks.",
    "prereqs": [
      ["MTH 311"]
    ]
  },
  "MTH 440": {
    "id": "MTH 440",
    "title": "COMPUTATIONAL NUMBER THEORY",
    "description": "evelopment of the number theory used in some basic tests of primality and methods of factoring integers. Applications to cryptology.",
    "prereqs": [
      ["MTH 231","MTH 343","MTH 355"]
    ]
  },
  "MTH 441": {
    "id": "MTH 441",
    "title": "APPLIED AND COMPUTATIONAL ALGEBRA",
    "description": "Applications of fundamental algebraic systems to topics such as factorization of polynomials, finding roots of polynomials, error correcting codes.",
    "prereqs": [
      ["MTH 343"],
      ["MTH 342","MTH 440"]
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
