---
title: Why are vectors vertical?
layout: single
date: 2025-03-24
tags:
    - math
    - linear-algebra
---
My math professors in college would often intimidate us into writing vectors as vertical, transposing them when convenient, without explaining why. This always confused me, but I realized that rather than being some Big-V conspiracy, they never explained it because there was a very obvious reason why.

### An illuminating example
For example, take some transformation (ie, a matrix) $\mathbf{A}$ and a vector $\vec{x}$ on which it acts on. 

Note that we format this function $\mathbf{A}$ as the `hstack` of its basis vectors in the transformed space. For now, suppose this is a good idea.

Then we can write

$$
\mathbf{A} \vec{x} = \begin{bmatrix}
u_1 & v_1 & w_1 \\
u_2 & v_2 & w_2 \\
u_3 & v_3 & w_3
\end{bmatrix} 
\begin{bmatrix} x \\ y \\ z \end{bmatrix}
$$

to denote our equation.

### Why are basis vectors of a matrix vertical?
Now the reason why we chose to format $\mathbf{A}$'s basis vectors along its columns becomes clear.

Now when we multiply it out, we get 
- the $x$'s always multiplying with the $u_i$ components, 
- $y$'s always multiplying with $v_i$ components, 
- and $z$'s always multiplying with $w_i$ component. 

So the purpose of aligning the matrix along the columns
$$\begin{bmatrix}\vec u & \vec v & \vec w \end{bmatrix} \quad \text{ and not like } \quad \begin{bmatrix} \vec u \\ \vec v \\ \vec w \end{bmatrix}$$
is so that when we do $F (x) = F \vec x$ it looks to be in the same order as normal function notation but is also consistent with the asymmetric ordering of matrix multiplication.

**Remark:** We could order the matrix along the rows if we started using row vectors as well. Then the order would be $\vec x F$. But this looks a little weirder, right?