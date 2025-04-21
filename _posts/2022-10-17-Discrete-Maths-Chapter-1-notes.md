---
layout: post
title: Discrete Mathematics (The Foundations, Logic and Proof - Propositional Logic )
description: Introduction to Discrete Mathematic
category: Mathematics, Independent Research, MathJax, Kenneth Rosen
date: 2022-10-17
author: "Okeowo Aderemi"
math: true
mermaid: true
tag: [math,studying,journal]
---

### Understanding Mathematics

This section highlights the need of making correct mathematical arguments, if one seeks to gain a better understanding of mathematics.
Once we prove a mathematical statement is true, we call it a theorem.
A collection of theorems on a topic organize what we know about this topic. To learn a math-
ematical topic, a person needs to actively construct mathematical arguments on this topic, and
not just read exposition. Moreover, knowing the proof of a theorem often makes it possible to
modify the result to fit new situations.

#### Information

For the sake of Brevity I have gone the extra mile to setup MathJax for this note, Mathematical notations will be rendered with LaTEX


### Propositional Logic

A proposition is a declarative sentence that declares if a fact is either true or false and not both.
Note: Sentences can be evaluated into propositional variables. The conven-
tional letters used for propositional variables are p, q, r, s, ... . is true, denoted by T, if it is a true proposition, and the truth value of a proposition is false, de-
noted by F, if it is a false proposition. Propositions that cannot be expressed in terms of simpler
propositions are called atomic propositions.

<br/>

$ \textnormal {proposition  is  denoted by P, and the negation is denoted by ¬p } $

<br/>

This can also be expressed as "Not P". A proposition can be formed from 2 or more existing proposition, these logical operator are called **connectives**.

<br/>

A **conjunction** of p and q implies that both are true, when both are termed to be false, it is called a **disjunction.**

<br/>
$ \textnormal {A conjunction is denoted by P ∧ Q while a Disjunction is denoted by P ∨ Q } $

<br/>

**exclusive or**

$ \textnormal {Let p and q be propositions. The exclusive or of p and q,
denoted by p ⊕ q (or p XOR q) } $

This implies that the proposition is true when exactly one of P and Q is true and false otherwise.

### Fun fact

GEORGE BOOLE (1815–1864) introduced the Boolean algebra in his 1848 Book, Mathematical analysis of Logic.

<br/>

**Conditional Statement**

THis proposition implies a combined proposition of expressions, if P then Q , the expression is denoted by the expression.

$ \textnormal { if P ⟶ Q  this implies Q is true when P is true, false when P is true and Q is false } $

#### Note

A conditional statement is also known as implication.

<br/>
**Converse, Contrapositive and Inverse**

Because we can form additional conditional statements, there are 3 related conditional statements that occurs, and they are mentioned above.
<br/>

$ \textnormal { The proposition q ⟶ p is called the converse of p ⟶ q} $
<br/>

$ \textnormal { The contrapositive of q ⟶ p is called the converse of ¬p ⟶ ¬q} $
<br/>

$ \textnormal { The proposition of p ⟶ q is called the converse of ¬p ⟶ ¬q} $
<br/>

[Explaination](https://www.varsitytutors.com/hotmath/hotmath_help/topics/converse-inverse-contrapositive)

#### Implicit use of Bi-conditionals
You should be aware that bi-conditionals are not always explicit in natural language. In particular, the “if and only if” construction used in
biconditionals is rarely used in common language. Instead, biconditionals are often expressed
using an “if, then” or an “only if” construction. The other part of the “if and only if” is implicit.
<br/>

That is, the converse is implied, but not stated.

For example, consider the statement in English **"If you finish your meal, then you can have dessert."** What is really meant is **“You can have dessert if and only if you finish your meal.”**

This last statement is logically equivalent to the two statements **“If you finish your meal, then you can have dessert”** and **“You can have dessert only if you finish your meal.”** Because of this imprecision in natural language, we need to make an assumption whether a conditional statement in natural language implicitly includes its converse.

Because precision is essential in mathematics and in logic, we will always distinguish between the conditional statement p → q and the biconditional statement p ↔ q.

We use parentheses to specify the order of the express e.g

$ \textnormal { (p ∨ ¬q ) ⟶ ( p ∧ q) } $

![Truth Table](maths/truthtable.png)


#### Logic and Bit Operations

Computers represent information using bits.

A bit is a symbol with two possible values, namely,0 (zero) and 1 (one). This meaning of the word bit comes from **binary digit**, because zeros and ones are the digits used in binary representations of numbers. The well-known statistician John Tukey introduced this terminology in 1946.

A bit can be used to represent a truth value, because there are two truth values, namely, true and false.

$ \textnormal { We will use 1 bit to represent T and 0 bit to represent false  } $

A variable is called a Boolean variable if its value is either true or false. Consequently,
a Boolean variable can be represented using a bit.


$ \textnormal { Bit operations in computers correspond to logical connectives. using ∧, ∨ and ⊕, these notations are OR,AND and XOR} $

![Bitwise Operators](maths/bit.png)

Information is often represented using bit strings, which are lists of zeros and ones. When
this is done, operations on the bit strings can be used to manipulate this information.
