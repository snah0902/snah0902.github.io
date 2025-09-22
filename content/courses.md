Courses I've Taken
==================

## A compilation of the courses I've taken at CMU

I've seen a number of CMU students write about their courses, so I'd thought I'd
do the same. For some context, I came to CMU with the intention of majoring in
Physics, which explains the many science classes that I initially took as well
as my lack of programming and formal math experience.

! : Courses that I particularly enjoyed

? : Courses that I found very difficult

### Spring 2025

* 05-391 Designing Human Centered Software

  This course was pretty fun. It's an intersection of psychology, art, and
  computer science, which are fields that I find interesting. However, I thought
  that the pop quizzes were strangely difficult, and groupmates not doing the
  work they promised to do made the course way more stressful than it should
  have been. Despite this, I think I would've liked to take more HCI courses, if
  I had the chance to.

* 15-311 Logic and Mechanized Reasoning

  I didn't like this course very much. I think the biggest issue is the lack of
  organization. The course slides and textbook occasionally had missing or
  misleading information, and homework assignments were underspecified in what
  they asked for. Normally, I wouldn't care very much, but since this was a
  proof-heavy course, I found that this consistently led to me getting stuck
  over things that felt out of my control. Exams were also a bad time crunch.
  After the first midterm where I ran out of time, I convinced myself to stop
  thinking about the actual material and just put down what "felt about right",
  which unfortunately worked out for me. I was a fan of the theorem prover in
  Lean that we used—it reminded me of the beauty of proofs derived from concise
  rules. I wished that they had talked more about the inference rules that made
  up the backbone of the Lean theorem prover. If looking for a Logic and
  Language elective, I'd recommend 15-317 instead.

* 15-417 HOT Compilation (?)

  This is probably the hardest course I've taken, purely in terms of course
  content. The coolest part about this course for me was how it solidified the
  connection between logic and programming language theory. For example, I found
  it interesting how the introduction of contraction and weakening in modal
  logic corresponds with how a programming language can have "modes" which allow
  the programmer to specify restrictions on how many times a variable is used.
  However, I found the notes and projects to be too overwhelmingly difficult to
  be able to benefit from. This course may have been useful if I invested
  significantly more time into it, but I instead decided that I wanted to enjoy
  my final semester.

* 85-107 The Psychology of Video Games

  Pretty chill overall. The only thing that I disliked was the GPT grader that
  the course occasionally used. How it worked is that the student's submission
  would be automatically graded by GPT, based on a manually created rubric.
  However, I found that the rubric was usually very strict and the grader made a
  lot of mistakes. Also, I learned that I don't like playing video games if it's
  for an assignment.

  **Reflections:**

  I was pretty happy with how my last semester went. I was still busy, but not
  nearly as busy as other semesters, which gave me the time to hang out with
  people. I don't regret switching to TA compilers my final semester—it gave me
  a new perspective on how to teach effectively, and looking back, I wish I had
  branched out TA for other courses earlier on. I also somewhat regret getting
  my concentration—my time would've been better spent taking more "useful"
  courses. Unfortunately, I doubt that I'll be able to pursue compilers/program
  analysis work without further education, which I'm currently uninterested in
  doing.

### Fall 2024

* 10-315 Introduction to Machine Learning (SCS Majors)

  This course had pretty terrible course infrastructure. Take 10-301
  instead if you want to learn machine learning.

* 15-312 Foundations of Programming Languages

  I think it's unfair for me to write a review for this course, given my
  previous experience with other PL courses and having TAd 15150 for five
  semesters (the two courses share a lot of similar ideas). I more or less
  breezed through the content I was familiar with while really struggling with
  the material that was more foreign. I think the main benefit of this course is
  to provide rigorous definitions which motivate how and why programming
  languages are built in specific ways (lazy vs eager evaluation, dynamically vs
  statically typed, etc.). It's something I've thought about before, but
  actually being able to factually motivate language design was pretty
  interesting. I wasn't a fan of the proofs in this course—it was never clear
  how much I was allowed to assume, which I thought was important given how much
  of the course relies on precise inductive rules. I'd still recommend this
  course, as I think it's a really solid introduction to programming language
  theory.

* 15-441 Networking and the Internet

  This course also had terrible course infrastructure. This seemed more like a
  rare occurrence, though—it'll hopefully be better in future semesters. 

* 80-100 Introduction to Philosophy

  I liked this course more than I thought I would. To be honest, I came into
  this course expecting that much of the material would be "philosophical
  nitpicks" that I wouldn't really care for. But some of the readings I actually
  found interesting and definitely impacted how I think about the world. I found
  that the most valuable thing from this course (and other philosophy courses,
  probably) was learning to analyze arguments that aren't necessarily "correct".
  Being able to break down an argument into its fundamental premises, then
  analyzing each one and their logical connections is a technique that seems
  pretty useful to have. There being two readings a week, though, the workload
  isn't trivial. It would've probably been better to take this course as a
  freshman.

  **Reflections:**

  This was my busiest semester so far, partially due to grappling with pretty
  awful course infrastructure in multiple courses (I don't think it's
  appropriate to discuss what sorts of infrastructure I mean here). This was
  also the semester where I decided that I might want to consider pursuing
  compilers study in the future, and that my plans have shifted from taking
  systems courses to programming language theory courses.

### Spring 2024

* 15-411 Compiler Design (!)

  There's a lot to say about compilers, given the amount of work that goes into
  it. The average workload was about 18 hours a week, with the workload peaking
  at about 40 hours a week. But to justify why this isn't a "very difficult
  course," I don't think that there's anything unintuitive about compilers.
  Every phase of the compiler has a clear purpose, and most phases follow
  specific rules defined inherently by the programming language. The time
  commitment mainly comes from the implementation and debugging.

  I think the main theme to take away from compilers is "incremental software
  development". The first four labs have you implementing different features of
  C0 (a safe subset of C), like conditional expressions or memory. Each addition
  changes every phase of the compiler, which occasionally involves lots of
  refactoring and rewriting. This indirectly emphasizes questions about
  future-proofing code (which as it turns out, usually isn't worth the effort)
  and good coding practices (like avoiding wildcards on data types likely to
  change over time). Something I particularly liked was the design aspect—there
  (intentionally) isn't a lot of guidance on how to build your compiler, so
  there's a lot of thought put into how data types should look and how data
  should flow from one phase of the compiler to another. This is an experience
  that feels unique to any other CS courses I've taken, though maybe software
  engineering courses emphasize design topics like these. But it was a valuable
  experience to have so much control over the codebase.

  Unlike most of my peers, I disliked L5, the lab where you apply optimizations
  to compete against gcc's execution speed. Implementing each optimization
  involved digging through some research paper to find the correct algorithm,
  then debugging for an indefinite time because optimizations change your
  program in opaque ways. It was also really stressful how the autograder was
  broken for some time, meaning that it wasn't ever clear as to when we had
  achieved a good enough score. Nevertheless, I was proud of the work I was able
  to accomplish for L5.

  What I liked most about the course, though, was how I could finally take a lot
  of ideas from functional programming and apply them in a context where it
  finally felt like it mattered. I think this was due to the need to write
  correct code and having complex transformations on recursive data
  structures—both of which a functional way of programming provides in a really
  clean way.

  Overall, I'd highly recommend this course, given that you have a reliable
  partner to work with, and have the time to invest. Also, I'd only recommend
  Rust if you have prior working knowledge of the language (I tried this and
  greatly struggled as a result).

* 33-456 Advanced Computational Physics (!)

  This course has less to do with physics and is moreso a course on how to cope
  with and effectively use large amounts of data. It's a broad survey on
  techniques in parallelism, big data, and machine learning. Some homework
  assignments have a very "open-ended" nature, which allow for a lot of
  discovery when examining different data sets. The course is also pretty
  easy—most assignments only took about 30 lines of code and took no more than a
  couple hours. I'd highly recommend "advanced" computational "physics" to
  anyone who wants some exposure to big data and its applications in the real
  world, or alternatively, anyone looking for an easy science elective.

* 36-226 Introduction to Statistical Inference

  All I got out of statistics is that my algebra autopilot needs work, and that
  I'm terrible at memorizing definitions.
    
* 98-008 Student Taught Courses (StuCo): Intro to Rust Lang
    

  **Reflections:**

  I took on a more relaxed course load, mainly due to needing to put more time
  into work for CS Academy. This probably ended up being the right call, as
  compilers took more time than I expected. I was also able to spend the extra
  time preparing for interviews for internships. I've also realized that I've
  taken all the courses that I've wanted to, so in future semesters, I'll likely
  take courses in different fields of computer science (breadth over depth) in
  order to discover what else I might be interested in.

### Fall 2023

* 15-317 Constructive Logic
  
  I strongly considered putting this as a course I enjoyed, but ultimately
  decided against it. I think it's really cool to see how these carefully
  designed inference rules allow the construction of derivation trees that end
  up working out beautifully. But also, actually writing these derivation trees
  out was a major pain. Topics like Curry-Howard isomorphism made the
  connections to logic systems to concepts I've previously taken for granted
  feel really rewarding. On the other hand, it felt like I was missing out on a
  lot more due to some gaps in knowledge (I still don't know what a monad is).
  The course is really easy, relative to many of the other CS courses at CMU.
  But maybe it's too easy—I feel it's designed for people to take solely to
  satisfy their Logic and Language elective. So I'm not entirely sure how to
  feel about this course, but I think I'll appreciate it more once I've taken
  other PL courses. Also, I never want to touch Prolog again.
  
* 15-451 Algorithm Design and Analysis (?)
  
  This course combines skills from previous CS core courses in a way that makes
  it so that you're able to both come up with algorithms and also rigorously
  prove said algorithms work. I think my main gripe is just how much content is
  covered throughout the course. I always felt as though I was behind, and with
  homeworks being so difficult, it was hard to justify thoroughly learning the
  course content each week when I should instead be trying to solve the
  problems. Exams were pretty brutal, which is probably true for every CS core
  course anyway. I enjoyed the programming assignments, as it's fun to actually
  implement the algorithms to see that they actually work. The course content is
  probably not very relevant for me (hopefully I never see splay trees during an
  interview) but the algorithmic thinking that's taught is always nice.
  
* 15-445 Database Systems (?)
  
  I really didn't like this course. I think it's a useful course in that I was
  exposed to a wide variety of algorithms and data structures (since database
  systems are all about optimizations). However, each lecture has way too much
  content to be able to absorb. The worst part of the course are the projects.
  The project write-ups were fundamentally unclear and were occasionally
  incorrect. The codebase was an absolute nightmare to read (which I suppose is
  a useful skill, given the amount of “bad code” out there). It was also awful
  that projects depended on previous ones and that their test cases were very
  non-exhaustive, meaning that a bug in a later project could stem from an
  earlier one. I also despised the exams—they made it feel like I needed to
  memorize everything, and the fact that every question was multiple choice
  meant that you couldn't ever demonstrate any sort of understanding. Overall,
  this course was a miserable experience, but I'd still take it again mostly
  because of the usefulness of C++ and SQL.
  
* 36-225 Introduction to Probability Theory
  
  A pretty easy course for learning the basics of probability. I'd already been
  exposed to half the material due to CS courses like 15251 and 15210, and the
  other half was a lot of plug and chug, so it's hard to say how valuable this
  course actually was.
  
* 84-405 The Future of Warfare
  
  With the only assignments being an essay, four take-home quizzes, and a group
  presentation, I didn't really get anything out of this course.

  **Reflections:**

  This was too much work. I decided that I would try a semester where I knew I'd
  be spread thin timewise in order to see if I could handle it. Turns out, I
  couldn't—but I also think a major reason for that was because I didn't care
  for many of my courses. I've determined that in future semesters, I'd only
  take courses that I'm genuinely interested in taking.

### Summer 2023

* 15-213 Introduction to Computer Systems

  I have mixed feelings about this course. On one hand, it's absolutely made me
  a better programmer. There's a lot of focus on writing code that's readable
  and modular, which helped a lot when it came to debugging. TA code reviews
  were also nice in helping point out places where I could improve. On the other
  hand, I came out of this course feeling as though I still had a shallow
  understanding of many of the topics in the course. Given that it's an
  introductory course, this makes sense, but I do wish there were more focus on
  the content and less on the programming assignments.

* 70-311 Organizational Behavior

  A pretty good course for learning how individuals and organizations "behave"
  in different settings. I was a fan of the social psychology that was covered
  in the later portions of this course, so I'll probably take a psychology
  course later on.

  **Reflections:**

  Pretty relaxed overall. My courses didn't take up too much time, which gave me
  a lot more time to focus on TAing and CS Academy. During this time, I also
  learned some basic web development using The Odin Project (which was also when
  I made this website). This is also the semester when I transferred into SCS
  🥳.

### Spring 2023

* 15-210 Parallel and Sequential Data Structures and Algorithms (?)
  
  This was the course meant to be the standard "algorithms course", with a lot
  of focus on parallelism. Homeworks and exams were brutal, but the course
  material was pretty interesting, as it built a lot on the material from
  previous CS courses. Other than its lack of structure, it was a pretty good
  course in teaching algorithmic thinking (which was surprisingly useful for
  leetcode).
  
* 15-251 Great Ideas in Theoretical Computer Science (?)
  
  This course ended up eating up a large portion of my weeks (did weekly
  homeworks Sunday night to Wednesday night). Homework was brutal, but the
  course felt structured in a way that worked for the students to succeed. I
  felt like this course was the most I had learned from thus far, which was nice
  to see given how much time it took me.
  
* 33-232 Mathematical Methods of Physics
  
  A course meant to prepare physics students for the math in junior-level
  physics courses. Luckily, I had essentially covered most of the math that I
  needed from 21-241 and 21-259. As it turns out though, taking a surface
  integral will never be not challenging.
  
* 76-270 Writing for the Professions
  
  A pretty typical writing course. It's known as the "resume class", but there's
  also a lot of focus on writing in a manner that allows readers to "satisfice",
  which was pretty useful to learn about.
  
* 38-230 ENGAGE in Wellness: Looking Inward
  
  To demonstrate my improvement in overall wellness, I wrote a 5-page essay
  talking about my crippling addiction to Wordle.
  
* 33-202 Physics Sophomore Colloquium II

  **Reflections:**

  Overall, a semester with a lot of work, but came out of it feeling somewhat
  accomplished. Courses, as well as TAing and CS Academy took up a lot of time,
  but I think I was able to manage my time better relative to previous
  semesters. Plus, I enjoyed the actual content in my courses, which gave me a
  lot more motivation.

### Fall 2022

* 33-211 Physics III: Modern Essentials (?)
  
  Painful. Homework was due four times a week, which made it feel like I was
  working on this class all the time. Exams were also pretty brutal. As it
  turns out, reasoning about special relativity and basic quantum theory is
  unintuitive. I wasn't quite sure how much I actually got out of this course,
  and it also made me realize that I definitely wasn't looking forward to
  taking Quantum Mechanics, or any junior-level physics class for that matter.
  
* 33-231 Physical Analysis
  
  Differential equations for the Physics students. I really enjoyed the way
  that it was taught. Due to the fact that it was for physics majors, there
  was a much larger focus on how differential equations applied to physics and
  less about the rigorous proofs behind why the math worked. I initially
  wanted to do physics due to the pretty relationship between calculus and
  introductory mechanics, so learning another tool to expand my vocabulary of
  ways to describe physical systems was cool.
  
* 33-241 Introduction to Computational Physics (!)
  
  This course was effectively "applied numerical methods" with physics being
  the main motivation. We were able to model some very interesting systems in
  this course using numpy and matplotlib (Python packages). My only qualm was
  that I wish I had taken this course as a junior rather than a sophomore.
  Some of the math (Fourier transforms and probability distributions) and
  physics (quantum mechanics) I hadn't seen yet, which made the course
  significantly harder than it probably should have been.
  
* 09-105 Introduction to Modern Chemistry I
  
  A pretty easy course. I mainly relied on my knowledge from AP Chemistry to
  get through it.
  
* 82-137 Chinese Calligraphy: Culture and Skills
  
  A super laid-back course. I probably would've enjoyed this course way more
  in a less strenuous semester (as it turns out, thinking about physics while
  trying to write Chinese characters wasn't very relaxing).
  
* 99-250 Seminar for Peer Mentors
  
* 33-201 Physics Sophomore Colloquium I
  
  **Reflections:**

  This course load was brutal for a number of reasons. Trying to balance my
  courses with work with CMU CS Academy and as an SI Leader was difficult. More
  importantly, I didn't enjoy many of the courses I was taking this semester.
  This semester was sort of the "last chance" for physics, and I was pretty
  certain that I was about ready to try and switch majors.

### Summer 2022

* 15-122 Principles of Imperative Computation (!)
    
  This course does a good job of introducing the data structures that I'd need
  to know, as well as presenting the idea of reasoning about the correctness and
  safety of imperative programs. I liked this course a lot since it unveiled a
  lot of the "mysteries" from 15-112 (an example being how aliasing in Python
  lists ended up being pointers in memory). I also got significantly better at
  debugging in this course due to having to reason about memory in C. The course
  was a lot of work during the summer (30-40 hours a week), but I don't regret
  taking it. Overall, I felt like a way better programmer as a result.
  
* 15-150 Principles of Functional Programming (!?)
  
  This was (and will likely continue to be) my favorite course at CMU. Being
  able to write recursive code and prove its correctness via inductive reasoning
  was a tricky concept to initially understand, but getting past that initial
  barrier made the experience feel extremely worth it. 15-150 highlighted the
  beauty of abstraction in code, which presented a unique way of thinking.
  Functional programming showed me a "beauty" in computer science, similar to
  how other disciplines such as physics or math can also be “beautiful” at
  times. λ Functions are values λ !
  
  **Reflections:**

  Honestly, I had a lot of fun this summer. I wasn't so bogged down by other
  commitments, so I was mainly able to just focus on classes and work for CMU CS
  Academy. Taking 15-122 and 15-150 simultaneously was also an interesting
  experience—it highlighted two drastically different ways to reason about
  programs. I ended up feeling a bit sick of programming by the end of the
  summer, and was sort of looking forward to taking some courses that were less
  coding intensive.

### Spring 2022

* 15-112 Fundamentals of Programming and Computer Science (!)
  
  Probably the most well-known course at CMU, 15-112 definitely lives up to its
  name. I went into the course having no knowledge of how to program and came
  out with a full-fledged project in Python (though I'm not particularly proud
  of it…maybe I can go back and add more to it at some point). The computational
  thinking that I learned was incredibly valuable for later courses that I would
  take.
  
* 21-127 Concepts of Mathematics (?)
  
  The typical "introduction to discrete mathematics + other topics" course.
  21-127 ended up being really hard for me. I hadn't written a mathematical
  proof before taking this course, so I struggled figuring out how to formalize
  my ideas. Also, finding the idea for some of the homework problems was brutal.
  Looking back, however, this was probably due to me just staring at most
  problems, rather than writing out different ideas and seeing where they led.
  This course gave me some basic knowledge in formalizing mathematics, which
  ended up being useful for a lot of other courses.
  
* 21-241 Matrices and Linear Transformations (?)
  
  This course was brutal. For some reason, the proofs that you were expected to
  write in this course ended up being more difficult than the ones with 21-127
  (the class that's meant to teach you how to write proofs). Most of the
  material went way over the head, but by the end, I had a high-level
  understanding of the basic concepts of linear algebra.
  
* 33-152 Matter and Interactions II (?)
  
  Physics 2 for Physics majors. This course ended up being challenging, due to
  its assumption in being fluent in vector calculus and also mixing in a bit of
  linear algebra and probability. I came out of this course realizing that I
  disliked E&M and was probably in the wrong major.
  
* 33-104 Experimental Physics
  
  A laid-back and a bit of a tedious course. I learned some basic Excel to
  optimize doing calculations, which was probably useful.
  
* 57-299 Bagpipe and Drum Band
  
  Fun! It was nice having a "required" commitment that wasn't purely academic.
  Practices being at Monday 7pm - 9pm was tiring though.
  
  **Reflections:**
  
  This semester was intense for me. I greatly underestimated how much time some
  of these courses would take (especially the math courses). It was around this
  time that I realized that I probably wasn't going to be too happy as a Physics
  major, so I started looking into other majors, like CS and ECE.

### Fall 2021

* 21-259 Calculus in Three Dimensions
  
  A useful course to learn the basics of vector calculus. Looking back, I do
  wish that this course was a little more rigorous, as most theorems were stated
  without being proved. As it turned out, my retention rate for this course
  ended up being quite poor.
  
* 33-151 Matter and Interactions 1
  
  Physics 1 for Physics majors. A bit boring, given that I took introductory
  physics in high school. This course had a final project with a computational
  portion using Jupyter notebook, which I had a lot of fun working on.
  
* 76-101 Interpretation and Argument
  
  The typical "first-year writing" course that all CMU students need to take.
  This course ended up being surprisingly easy. I somewhat wish that I received
  more feedback, as I didn't come out of course feeling as though my writing
  skills had improved.
  
* 03-121 Modern Biology
  
  Didn't get anything out of this course for a number of reasons.
  
* 21-295 Putnam Seminar
  
  A laid-back course to help students prepare for Putnam. This course ended up
  being pretty useless for me, as I didn't have any mathematical competition
  experience prior to taking it.
  
* 38-101 EUREKA!: Discovery and Its Impact
  
  The "introduction to college class" for the science students at CMU.
  
  **Reflections:**

  Overall, this ended up being a pretty relaxed semester. I had the opportunity
  to make friends and get involved with a few extracurriculars, which was pretty
  nice. Looking back, it might've been nice to drop Putnam Seminar and replace
  it with a more involved course.
