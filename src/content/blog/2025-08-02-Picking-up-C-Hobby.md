---
title: "Learning C for DSA Part 1: Build Tools and Compiling"
excerpt: "Learning C for DSA Part 1: Build Tools and Compiling"
categories:
  - C
  - DSA
publishDate: "Aug 01, 2025"
author: "Okeowo Aderemi"
tags:
  - C
  - DSA
  - Algo
  
toc: true
toc_sticky: true
permalink: /learning-c-part-1/
---


### Introduction

In this article, I decided to take my imposter syndrome head-on and learn C programming language. I have always been a Java and Node developer, but I realized that understanding C is crucial for mastering data structures and algorithms (DSA). C is a low-level language that provides a better understanding of how computers work, making it an excellent choice for learning DSA. So this note is going to focus on picking C for learning DSA and not going into deep, and I will be sharing my experience with build tools and compiling C code. Ideally Java is a great fit, because it helps when creating complex Data structures from scratch, however C has enough feature to create complex structures through the use of structs and pointers.

### Why Learning C is Important for a Self-Programming Career and Building Solutions

Learning C is valuable for a self-programming career and building solutions because:


1. Foundation for Systems Programming: C provides low-level control over hardware, making it ideal for developing operating systems, drivers, and embedded systems. Understanding memory management and pointers builds a strong grasp of how computers work.

2. Performance Optimization: C’s efficiency and speed are unmatched for resource-intensive applications like game engines, real-time systems, or high-performance computing. Writing performance-critical code in C gives you an edge in building scalable solutions.

3. Cross-Language Influence: Many modern languages (C++, Java, Python) derive syntax or concepts from C. Mastering C makes learning other languages easier and deepens your understanding of their underlying mechanics.

4. Portability: C code runs on virtually any platform with minimal changes, enabling you to build solutions for diverse environments, from microcontrollers to supercomputers.

5. Open-Source Contributions: Many open-source projects (e.g., Linux kernel, SQLite) are written in C. Contributing to these hones your skills and boosts your portfolio.

6. Problem-Solving Discipline: C’s minimal abstraction forces you to manage memory, avoid errors, and write clean code, fostering disciplined programming habits that translate to any language or project.

7. Career Versatility: Proficiency in C opens doors to roles in embedded systems, cybersecurity, game development, and more, as it’s widely used in industries requiring robust, efficient solutions.

For a self-taught programmer, C builds a rock-solid foundation, sharpens problem-solving, and equips you to tackle complex, real-world challenges across domains.


### Build Tools and Compiling C Code

My OS is a Linux distribution, so I had to install the build-essential package, which includes the GCC compiler and other necessary tools for compiling C code. The command to install it is:

```bash
sudo apt-get install build-essential
```

also running C codes are as easy as:

```bash
gcc -o output_file source_file.c
```
