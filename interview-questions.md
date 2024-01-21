# UNIT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. Compare and contrast JavaScript and Ruby. What are three things they have in common and what are three differences?

Similarities

1. Loops
EX. Javascript
    for (let i = 0, i >= 10; i++){
    console.log(i)
    }
EX. RUBY
    (1..10).each do |i|
    puts i
    end
2. Arrays
EX. JAVASCRIPT
    const string = ["How", "Are", "You", "Doing"]
    console.log(string[3])
EX> RUBY
    string = ["How", "Are", "You", "Doing"]
    puts string[3]
3. Variables and Data types
ex. JAVASCRIPT
 let something = "Hello, World";
    console.log (something)
EX. RUBY
    something = "Hello, World"
    puts something

Differences

1. Syntax are difference from each other
EX. JAVASCRIPT they have {}
ES. RUBY DOES END
2. Ruby langues are much simplier than Javascript
EX. RUBY
They use def and I can already see that def means we are defining something and getting the return of the what we are defining
EX. Javascript
Javascript is harder to type. Like if we are doing a greeting of "Hello World" there is more code we have to type than Ruby.
3. Ruby is object oriented with classes as Javascript is object oriented but classless. 

Researched answer:
Similarities: 
Both are object-oriented languages
Both are interpreted, meaning they’re run on the fly rather than compiled into machine code before being run
Both have a rich array of third-party libraries available for download
Both have highly active and engaged communities
Both are among the most popular programming languages
Both can be used for back-end development, based on the framework

Differences: 
JavaScript may be used as a front- or back-end language, but Ruby is reserved for back-end development
Ruby can track how much memory is being used, but JavaScript does not
The syntax of Ruby is far more straightforward than JavaScript’s — JavaScript is full of curly braces and other punctuation marks
Ruby is better for developing programs that require a lot of processing power from the computer’s CPU
JavaScript’s highly optimized engine makes it faster than Ruby, performance-wise

2. What does it mean to implement a TDD workflow?

Your answer:
TDD is Test Driven Development. In the video, my understanding is how we write what we are trying to test first in rspec then we run the test. After running the test for rspec, we then write the code in a ruby file to make the test from rspec true. After writing the code, we test the rspec. We repeat the test by writing a test, making it fail, code it in the ruby file and make sure it passes the test.
Researched answer:
Test-Driven Development (TDD) is a software development process that follows a simple cycle: write a failing test, write the minimum amount of code to pass the test, and then refactor the code for clarity and maintainability

3. What is a block in Ruby?

Your answer:
A block in ruby are defined with the keyword do and end.
Ex. my_num = 6
my_num.times do
    p 'Howdy'

Researched answer:
Blocks are enclosed in a do-end statement or curly braces {}. do-end is usually used for blocks that span through multiple lines while {} is used for single line blocks.
4. STRETCH: What is a version manager?
Answer:
rbenv and rvm are used for managing different Ruby versions
## Looking Ahead: Terms for Next Unit

Research and define the following terms.

1. Database migrations:

2. Model validations:

3. Params:
