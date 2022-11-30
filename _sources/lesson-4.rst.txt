Lesson 4: How are real world problems solved?
=============================================

You are probably still confused as to what’s going on and that’s okay. Problem solving and programming are all about organizing unclear information into something that is clear and understandable. This is why it’s so difficult for most people to understand, but with enough practice, we can start to become better and smarter in the way we solve problems. There are some key points to understanding how to solve a problem other than the four components of computational thinking and they involve breaking some assumptions that you might have when you start solving the problem. Much like anything in life, when you start, you probably won’t have great results - that’s okay. When you start, you probably won’t know where to start - that’s okay. When you do start and you get a program running, it’s probably not going to be the most efficient it can be - that’s okay. Even when you get your code running, there will probably be a lot of lines that can be improved - that’s okay. You may be wondering, why I listed all the bad things that can happen when coding, but it’s important to understand that it happens to everyone, at every level of coding. These problems are not rare, but are extremely common. Something rare when writing code or solving problems is if everything works perfectly from the start - this would be a cause for concern.

With all the problems that could happen, you may wonder how you can improve them. The way to do this is quite simple, but not necessarily easy: small improvements, consistent practice and learning from others’ mistakes. For example, if you wrote a program last week that runs, but is quite slow then you can review the code you wrote and search ways to make it faster. This will improve your understanding and you will be able to implement that faster method next time you write a line of code. The easiest way to improve your problem solving abilities is to solve problems - start with small problems then move on to bigger ones. Finally, you can learn from other peoples’ mistakes. Often on websites such as `Stackoverflow <https://stackoverflow.com/>`__, you will find answers to questions people have asked. This is a great way to save time by learning how other people have solved a problem, but without having to spend as much time as they did. This helps you to improve much faster by using the lessons of other people. The rest of this section will look at breaking down real world problems into steps which can provide some structure on how to solve them. The purpose is to show you how problems can be broken down, what challenges some solutions could cause and inspire your own thinking on how to solve the problems. Keep one thing in mind: there is usually never a perfect solution, so if you have a solution that is better than the one provided here, let us know. Providing better solutions helps us all be better.

In the following sections, I will present a scenario in a sentence or two that is written in plain English - no programming jargon. I will then break down the problems into steps to show the thought process of solving real problems and what challenges you might face doing it yourself. The purpose of this is as examples, but also real solutions that you can use if you need to do something similar to what is described in the examples.

Reading the contents of a file
------------------------------

I want to open a file that I have on my computer so that I can use the contents for a program I am writing.

We will start with the IPO tables to break the problem down into smaller steps that we can solve easier.

.. list-table:: **Step 1**
   :header-rows: 1

   * - Input
     - Processing
     - Output
   * - File
     - Find the path to where the file is stored on your computer
     - Filepath (string)

.. list-table:: **Step 2**
   :header-rows: 1

   * - Input
     - Processing
     - Output
   * - Filepath (string)
     - Load the file by using the filepath
     - Contents of the file

.. list-table:: **Step 3**
   :header-rows: 1

   * - Input
     - Processing
     - Output
   * - Contents of the file
     - Assign the contents of the file to a Python variable
     - Variable that contains the contents of the file (string)

In only 3 steps we can describe how to load the contents of a file into a variable in Python. By assigning the contents to a variable we now have them in the correct format to use for the rest of whatever program we are writing. You will notice that there is no code involved in the above steps and this is known as **pseudocode**. Pseudocode is like a blueprint for how the program will function, so in effect it is not programming language specific - you can apply this blueprint to any programming language. The language written down won’t be the same, but the steps will be the same.

Why is this a good way to start when solving a problem? It provides structure to your solution without being too strict. As you can see in the processing section of step 2 “load the file by using the filepath” gives a good guide to what needs to be done, but keeps it vague enough that you can implement it anyway you feel works best. Just like people speak and write differently, programmers write code in different ways. This doesn’t always mean that one solution is better than the other, but rather that there are many solutions to each problem. It’s easier to learn coding when you get a guideline and you have to figure out how to implement the solution.

When you are given a problem to solve then you can break it down and find the answers that best match your way of understanding. This will help you to personalize the information which is the best way to understand and remember it. For example, perhaps you are unclear about how to find the filepath, so I explain it to you. However, you don’t quite understand my explanation, so you search for some articles online and someone else explains it in a better way than me, but they use a different method. Understanding the purpose of the task gives you the freedom to implement the solution in any way you can. It might even be better than anything I can come up with, so it’s all about finding what best works for you and understanding that.  
