Lesson 3: A systematic way to approach computational tasks
==========================================================

It might still be a bit difficult to find out where to start when solving a problem, so there is a useful tool that you can use called an IPO (input, processing and output) table. It’s a simple table where you have three columns with the previously mentioned names: input, processing and output. Using an IPO table, we can outline the print(“Hello World!”) example from earlier.

.. list-table::
   :header-rows: 1

   * - Input
     - Processing
     - Output
   * - Words that need to be displayed on the screen. "Hello World!" in this case.
     - We will use the ``print()`` function.
     - "Hello World!" is displayed on the screen.
        

This is a very simple example, but it’s a good way to break down what is required for the task at hand. In these kinds of simple examples it’s a little tricky to understand why this would be useful, but in more complex examples it is very useful to understand exactly what is being passed as input into the program and what you expect as output. This is especially true when you have complex programs that rely on the output of one step to become the input of another one. For example, imagine you want to wash your clothes, so you create the following steps

.. list-table:: **Step 1 - Wash clothes**
   :header-rows: 1

   * - Input
     - Processing
     - Output
   * - Clothes, washing liquid and washing machine
     - Place clothes in washing machine and start washing
     - Wet clothes

.. list-table:: **Step 2 - Dry clothes**
   :header-rows: 1

   * - Input
     - Processing
     - Output
   * - Wet clothes and dryer
     - Place wet clothes in dryer, select dryer program and start the process
     - Dry clothes

.. list-table:: **Step 3 - Fold clothes**
   :header-rows: 1

   * - Input
     - Processing
     - Output
   * - Laundry basket and dry clothes
     - For each item of clothing, remove it from the basket, fold it and packet away
     - Folded clothes in the cupboard

From the above explanation you can see the the output of step 1 and 2 form the input of step 2 and 3 respectively. Step 3 also has laundry basket, but that’s perfectly fine if you have planned to do that. You realize, though, when looking through your folded clothes that there is still a stain on one of your shirts. You go through your IPO table and you find out that you didn’t actually use the washing liquid, so the program ran effectively, but it didn’t work as planned. Luckily, because you have written down your IPO tables, you can easily find the mistake. IPO tables are a great way to visualize thought processes in a way that is easy to follow, thus easy to execute. Since you have everything written down, you can go through the plan to easily find where any mistakes could’ve been made that would affect the final results.

Exercise 2
----------

Using IPO tables you can easily breakdown a problem into its different logical steps. In the previous exercise, we’ve learned the simple solution of printing something to the screen. In this exercise we’re going to get a bit more complicated, but if you follow the steps laid out in the beginning (decomposition, pattern recognition, abstraction and algorithmic thinking) together with IPO tables, you should have at least some idea of what to do for the next exercise. We discussed that it’s important to understand why you are doing a task to help you keep focused on the ultimate goal. However, this is difficult when doing exercises because the exercise itself has no purpose other than doing it. So for the sake of of the exercise, I will provide a **why** to your task. Let’s image you want to find the 10 most common words in a certain string (in Python text data is called a string). You need to do this because you are looking for the most common words in a string to make reading it easier for second language learners. Writing down the 10 most common words beside the text with their translation will give second language learners a kick start in understanding the main topic of the text. However, you want to do this for 100 texts, but you don’t have time to do it manually. The following steps will help solve this problem.

.. list-table:: **Step 1**
   :header-rows: 1

   * - Input
     - Processing
     - Output
   * - String
     - Assign string to a variable
     - Variable

.. list-table:: **Step 2**
   :header-rows: 1

   * - Input
     - Processing
     - Output
   * - Variable
     - Make a list of all the words in the variable by using `split()`
     - List of words

.. list-table:: **Step 3**
   :header-rows: 1

   * - Input
     - Processing
     - Output
   * - List of words
     - Count all the words
     - List of words together with how many times they appear in the text (frequency)

.. list-table:: **Step 4**
   :header-rows: 1

   * - Input
     - Processing
     - Output
   * - List of words together with how many times they appear in the text
     - Sort the words from highest to lowest frequency 
     - Sorted list of words

.. list-table:: **Step 5**
   :header-rows: 1

   * - Input
     - Processing
     - Output
   * - Sorted list of words
     - Print first 10 to the screen
     - 10 most common words

As you can see from the above steps, we have broken down the problem into 5 simple steps that need to be followed. The processing part of each IPO table is what you need to actually program. So you would need to figure out how to write code for the following: 

  1. How to assign a string to a variable in Python? 
  2. How to make a list by using split() in Python? 
  3. How to count the frequency of words (in a list) in Python? 
  4. How to sort a list of words in Python? 
  5. How to display the first 10 items in a list in Python?

There is an easy breakdown of what actually needs to be done. As with the previous exercise, you probably don’t know what a list is in Python, but that’s okay because you have the guidelines available to figure it out. As with the previous exercise, try from number 1 to number 5 and if you get stuck then search around for answers. I will give three hints again together with the answer for those who cannot progress, but the purpose of the exercise is to move step by step through the tasks and search for those parts you don’t understand.

.. dropdown:: Exercise 2 hint 1

  If you are stuck on the first part of the exercise then there are a few steps that you can take to get started. First, you need to understand what everything means in the sentence (number 1). The three words that might prove to be a problem are “assign”, “string” and “variable”. In Python assign means placing the known value of something (in this case a body of text which is also called a string) into a variable. The variable is a word that you create which contains the value of whatever you assigned to it (in this case the string). Consider the following examples:

  ``"This is a test sentence"`` (This is a text or in Python a string)

  ``sentence`` (This is a variable name - currently this variable has no value)

  ``sentence = "This is a test sentence"`` (This is assigning a string to the variable)

  If we go back to the print(“Hello world!”) exercise from before, we can use the same structure (pattern recognition), but change it a little bit to print out the variable. So, we can write ``print(sentence)`` and this will display the string ``"This is a test sentence"`` which is the value of the variable. If you remember from previous lessons, we mentioned that it’s always important to understand why you are doing something. So, in this case why is it important to assign the value of the string to the variable? Why can’t we just use the string itself? In these simple examples, it may not be clear, but if we have an entire paragraph of text then it’s easier to work with a single word that refers to that text instead of working with the text every time. This reduces the chances for mistakes and it is also easier to understand what is happening in the code you are writing. One of the ultimate goals of writing code is to be able to look at it a few years from now and still understand what the intention is of the code.

  If you weren’t able to figure out the first sentence on your own and the above explanation helped you to understand then there is a small exercise that you can do. Since the purpose of this course is to develop independent thinking, the real goal isn’t to explain the concepts to you, but rather to point them out so you can find out what they mean. In the above case, there is a step-by-step explanation, but you can still develop independent thinking by looking for verification of this information. If you search these words do you find the same explanations? Are the explanations that I gave accurate to your understanding? Doing this when you get an explanation can still help you be better at independent thinking and finding answers for yourself - which is the basis of computational thinking.

.. dropdown:: Exercise 2 hint 2

  Hopefully you have figured out how to assign text to a variable, but in case you haven’t then it works as follows. Replace the three dots ``...`` with whatever text you are using making sure there are no double apostrophes in your text. Double apostrophes in Python indicate that whatever you have between them is text, so if you have double apostrophes then it will cut your text at that point and probably raise an error.

   ``sentence = "..."``

  With your variable called ``sentence`` you now have a reference to the text that you want to work with. We can take a look at the IPO table we wrote down for step 2 and see what we need to do with this variable. We need to get a list of words from the variable, so we need to think of what that means practically. A word is an element of a sentence which - in English at least - has the characteristic of a space before and after the word (this is also referred to as a white space). So, if we can isolate each individual word and add that to a list then we have a list of all of the words. Luckily in Python there is a function called ``split`` which takes a string, splits it at whichever character you specify and returns a list. You need to assign it to a new variable because if you split the sentence variable without assigning it then it will just display the list, but not keep it in memory. Here is how you can do this:

  ``sentence_words_list = sentence.split()``

  The default setting is to split it at each white space, but you can change that to whichever character you want in case you want to split it on a different character.

  ``sentence_words_list = sentence.split(".")`` (this splits it on each full stop) 
  
  ``sentence_words_list = sentence.split(". ")`` (this splits it on each full stop followed by a white space)

  Splitting on a full stop followed by a white space is a very quick way to split into sentences (although not very accurate, since it will miss question marks, exclamation marks, etc). Be aware that when you specify a character to split, it must be between apostrophes (double or single). For this exercise, we only need the default setting of splitting at the white space, since we need the individual words. After doing this, we now have a list of words, but it won’t be perfect i.e. there is still punctuation and capital letters. For now, we don’t have to worry about that because we want to get everything working before we evaluate the finer details. One part of writing code that is beneficial is to build something as quick as possible then make changes afterwards. The quick version of the code acts as a baseline, so you can see when you make changes how those changes affect the overall results of the program.

.. dropdown:: Exercise 2 hint 3

  Now that you have a list of words (let’s call it List A), you can count how many times they each appear. I’m going to walk through the thought process of doing this, but I’ll provide an easy way at the end, so read the whole hint before trying any code. If you think of how this could be done manually by a person then one way to do it is to make a new list which we call List B. You would take the first word (let’s call it Word 1) from List A and write it in List B. Then you would look through each word in List A and when you find Word 1, you add the number 1 next to Word 1 which is written in List B. Repeat this for all the words and you will have all the words written once in List B together with how many times they appear in List A i.e. their frequency. 
  
  Another way that you could do this is to create the same two lists, but when you go through List A, you can update List B with each word. This would mean writing Word 1 in List B then move on to Word 2. Check if Word 2 is in List B. If it is in List B then you add one to it’s count. If it’s not in List B then you write it in List B with a count of 1. Repeat this until you get to the end of List A. Both of these methods would work for counting the words and there are probably other methods that you could figure out.

  However, we are not trying to get the quickest method for counting the words or comparing different methods for counting words. We simply need a way to count the words, so we can move on to the next step of our main task. Like we discussed earlier, don’t get caught up in the finer details and forget what the main goal is. The ideal situation would be a single line of code that could count the words in a list and return that as a list. After all, if someone has already done the work then it saves us time and it prevents us from reinventing something that already exists. Luckily for us, there is a module called ``collections`` that has a function called ``Counter`` which does just what we are looking for. Using the list we created in the previous exercise, we can count the words in 1 line of code (after importing the module of course).

    ``from collection import Counter``

    ``sentence_words_list_counted = Counter(sentence_words_list)``

  Now there is a slight challenge here that you can try solve before moving on to the next hint. ``sentence_words_list_counted`` is not actually a list, but it’s a Counter object. How can you work with Counter objects?

.. dropdown:: Exercise 2 hint 4 (solution)

  At this point, if you’ve managed to do the exercise using the Counter object then it’s quite simple to finish the rest of the steps and output the top 10 words. All you need to do is is the following:

  ``print(sentence_words_list_counted.most_common())``

  This will display the most common words together with their frequencies, however, if we want to get only the 10 most frequent words then we can simply specify that as an argument as follow. If you don’t know what an argument is then search “what is an argument in Python?” and see if you can figure out which part of the following code is the argument.

  ``print(sentence_words_list_counted.most_common(10))``

  In case you couldn’t figure out what the argument was, it’s the 10 in the above example. The argument in a Python function is whatever is between the parentheses. For example, in the above case there are actually two functions:

  1. ``print()``
  2. ``sentence_words_list_counted.most_common()``

  In the case of print (function 1), the argument is ``sentence_words_list_counted.most_common()`` (function 2) and the argument of function 2 is 10. You can pass any whole number in function 2 as an argument as long as it’s smaller then the number of words in the list. If we had to write what it’s doing into plain English is would be as follows: ``most_common()`` displays all the words in ``sentence_words_list_counted``, but as a list and not a Counter object. If you add an argument (in this case 10) then it displays only the top 10.

  Using the Counter module is a quick and easy way to solve the problem, but if we wanted to sort the list ourselves, how could we do that? We know that ``sentence_words_list_counted.most_common()`` without any arguments gives us the list of words with their frequencies. Let’s create a new variable and assign that list to the new variable.

  ``top_10_words = sentence_words_list_counted.most_common(10)``

  ``top_10_words`` is a normal Python list that contains each element is a tuple (if you don’t know what a tuple is then search “what is a tuple in Python?” to find out). The first part of the tuple is the word and the second part of the tuple is the frequency of the word. If we take a step back and think about sorting again, there are a few ways we could sort a list like this: by the frequencies, alphabetically by the words, and we can do that from biggest to smallest (descending) or some smallest to biggest (ascending) order. The following code will display the list sorted in alphabetical order.

  ``print(sorted(top_10_words, lambda x: x[0]))``

  The next code will sort and display the code in reverse alphabetical order

  ``print(sorted(top_10_words, lambda x: x[0], reverse=True))``

  So, we have the following results:

  1. Sorted from biggest to smallest by frequency: ``print(sorted(top_10_words, lambda x: x[0]))`` 
  2. Sorted from smallest to biggest by frequency: ? 
  3. Sorted alphabetically: ``print(sorted(top_10_words, lambda x: x[0]))`` 
  4. Sorted reverse alphabetically: ``print(sorted(top_10_words, lambda x: x[0], reverse=True))``

  Can you figure out number 2 (sorted from smallest to biggest by frequency)?

Exercise 2 review
~~~~~~~~~~~~~~~~~

This exercise was quite a lot of work to solve a simple tasks of displaying the top 10 words, but there are many benefits and most of the work done for this tasks can be reused literally or conceptually. You can literally reuse the text in case you need to find the top 10 words of another text or maybe expand that to find the top 100 words in multiple texts. In those cases, you just need to replace the current text in this piece of code with the new text you are working with. In terms of conceptually reusing the code, this links back to the four components of computational thinking we discussed in the beginning. Steps 1-5 that we have laid out above is an example of **algorithmic thinking** because it lays out the solution in a step-by-step way that is easy to follow. You can reuse this concept to solve other problems that are similar to it which refers to recognizing the patterns by which the problem was solved - this is **pattern recognition**.

Looking back on how we managed to solve the problem is a good way to understand the process as a whole, remember the key points and also find ways in which we could have done it better. Code can always be more efficient and effective, and problems can always be solved in different ways. So, it’s important to review what solutions you have produced so that later on you can apply them to other problems. This might make more work in the beginning, but it will be worth the work later on. The more you create solutions and adapt them to solve other problems, the easier it becomes. The easier it becomes to do this, the quicker, more efficient and more accurate you will be able to do it.

One last point to consider from this exercise is that not everything was explained. Sometimes, you came across words and concepts that you didn’t understand. This was intentionally done because when you are faced with a real-world problem which you have to solve, you usually won’t have a starting point explained to you, since you are the one who has to solve the problem. So, it’s imperative to learn how to find the answers to things you don’t understand without the need for someone to explain it to you. A lot of the time you will have someone to help you or explain it to you, but in the cases where you don’t have that person, you need to at least come up with an idea to find the answer.
