import { Book } from './types';

export const BOOKS: Book[] = [
  {
    id: '1',
    title: 'Python Coding For Absolute Beginners',
    author: 'Ankur Sharma',
    price: 2599,
    originalPrice: 3500,
    rating: 4.8,
    reviewsCount: 342,
    image: "data:image/svg+xml,%3Csvg width='600' height='900' viewBox='0 0 600 900' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%231e293b'/%3E%3Cstop offset='100%25' stop-color='%230f172a'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='900' fill='url(%23grad)'/%3E%3Crect x='40' y='0' width='20' height='900' fill='%23306998' opacity='0.5'/%3E%3Ctext x='320' y='200' text-anchor='middle' font-family='Inter, sans-serif' font-weight='800' font-size='68' fill='%23FFD43B' letter-spacing='2'%3EPYTHON%3C/text%3E%3Ctext x='320' y='280' text-anchor='middle' font-family='Inter, sans-serif' font-weight='700' font-size='48' fill='white' letter-spacing='1'%3EPROGRAMMING%3C/text%3E%3Cline x1='170' y1='330' x2='470' y2='330' stroke='%23475569' stroke-width='2'/%3E%3Ctext x='320' y='380' text-anchor='middle' font-family='Inter, sans-serif' font-size='24' fill='%2394a3b8' font-style='italic' letter-spacing='1'%3EBeginner to Advanced Guide%3C/text%3E%3Cpath d='M220 550 C 220 450, 420 450, 420 550 S 220 650, 220 550' fill='none' stroke='%23306998' stroke-width='24' opacity='0.9'/%3E%3Cpath d='M220 550 C 220 650, 420 650, 420 550' fill='none' stroke='%23FFD43B' stroke-width='24' opacity='0.9'/%3E%3Ccircle cx='270' cy='500' r='8' fill='white' opacity='0.8'/%3E%3Ccircle cx='370' cy='600' r='8' fill='white' opacity='0.8'/%3E%3Crect x='0' y='840' width='600' height='60' fill='%23306998'/%3E%3Crect x='0' y='820' width='600' height='20' fill='%23FFD43B'/%3E%3C/svg%3E",
    language: 'Python',
    level: 'Beginner',
    category: 'Data Science',
    description: `Book Overview

"Python Coding For Absolute Beginners" is the ultimate starting point for anyone looking to enter the world of programming. Designed specifically for those with zero prior coding experience, this book builds your confidence step-by-step. It eliminates the intimidation factor of coding by using simple, plain English and practical examples.

Details

The book adopts a hands-on approach, ensuring that you don't just read about code, but actually write it. You will start with the absolute basics—installing Python and understanding variables—before moving on to control flow, loops, and functions.

Each chapter ends with practical exercises that reinforce what you've learned. The book also covers essential topics like data structures and file handling, preparing you for more advanced fields like Data Science and Web Development.

Key Features

• No Coding Experience Needed: Written specifically for complete novices.
• Build Coding Confidence: Small, manageable lessons that ensure success.
• Step-by-Step Guide: Visual guides and clear instructions for every concept.
• Practical Programming: Focuses on real-world usage rather than dry theory.

About Author

Ankur Sharma is a dedicated educator who specializes in simplifying complex technical concepts for beginners. His teaching philosophy revolves around building a strong foundation to empower students for lifelong learning.`,
    features: ['No Coding Experience Needed', 'Build Coding Confidence', 'Step-by-Step Guide', 'Practical Programming'],
    isTrending: true,
    reviews: [
      { id: 'r1', user: 'Rohan K.', rating: 5, comment: 'Finally a book that makes Python easy to understand!', date: '2023-11-12' },
      { id: 'r2', user: 'Sarah M.', rating: 4, comment: 'Great for absolute beginners.', date: '2023-12-01' }
    ]
  },
  {
    id: '2',
    title: 'Core JAVA: An Integrated Approach',
    author: 'Dr. R. Nageswara Rao',
    price: 999,
    originalPrice: 1499,
    rating: 4.9,
    reviewsCount: 1542,
    image: "data:image/svg+xml,%3Csvg width='600' height='900' viewBox='0 0 600 900' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='javaGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23f8f9fa'/%3E%3Cstop offset='100%25' stop-color='%23e2e8f0'/%3E%3C/linearGradient%3E%3ClinearGradient id='spine' x1='0%25' y1='0%25' x2='100%25' y2='0%25'%3E%3Cstop offset='0%25' stop-color='rgba(0,0,0,0.2)'/%3E%3Cstop offset='10%25' stop-color='rgba(0,0,0,0)'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='900' fill='url(%23javaGrad)'/%3E%3Crect width='40' height='900' fill='url(%23spine)'/%3E%3Crect x='0' y='0' width='600' height='320' fill='%23EA2D2E'/%3E%3Cpath d='M250 150 Q250 180 220 180 Q190 180 190 150' stroke='white' stroke-width='6' fill='none' opacity='0.6'/%3E%3Cpath d='M270 140 Q270 180 240 180' stroke='white' stroke-width='6' fill='none' opacity='0.6'/%3E%3Cpath d='M240 400 L360 400 L350 520 C350 550 300 550 250 520 Z' fill='%235382A1'/%3E%3Cpath d='M360 420 C390 420 400 440 400 460 C400 480 380 500 355 500' stroke='%235382A1' stroke-width='12' fill='none'/%3E%3Ctext x='300' y='660' text-anchor='middle' font-family='Inter, sans-serif' font-weight='900' font-size='72' fill='%23EA2D2E' letter-spacing='2'%3EJAVA%3C/text%3E%3Ctext x='300' y='730' text-anchor='middle' font-family='Inter, sans-serif' font-weight='700' font-size='42' fill='%230f172a' letter-spacing='1'%3EPROGRAMMING%3C/text%3E%3Cline x1='150' y1='770' x2='450' y2='770' stroke='%2394a3b8' stroke-width='2'/%3E%3Ctext x='300' y='810' text-anchor='middle' font-family='Inter, sans-serif' font-size='24' fill='%2364748b' font-style='italic'%3EBeginner to Advanced Guide%3C/text%3E%3C/svg%3E",
    language: 'Java',
    level: 'Intermediate',
    category: 'Backend',
    description: `Book Overview

"Core JAVA: An Integrated Approach" is widely regarded as the bible for Java aspirants. This comprehensive guide covers concepts, programs, and interview questions, making it an all-in-one resource for students and professionals alike. It specifically covers all versions up to Java 8, ensuring a solid grounding in modern Java development.

Details

The book takes a unique "Integrated Approach," blending theory with practical implementation and interview preparation. It dives deep into the Java Virtual Machine (JVM), architecture, and the intricacies of the language.

Topics include Multithreading, Collection Framework, Swings, JDBC, and Networking. The book is famous for its "Interview Questions" sections, which are invaluable for job seekers preparing for technical rounds in top MNCs.

Key Features

• Integrated Approach: Combines learning with interview prep.
• Extensive Coverage: Covers all versions up to Java 8.
• Interview Ready: dedicated sections for frequently asked interview questions.
• Dreamtech Press Quality: High-quality editorial standards and clear code examples.

About Author

Dr. R. Nageswara Rao is a legendary author in the Java community. With decades of teaching experience, his books have helped thousands of students crack high-paying developer jobs.`,
    features: ['Includes Interview Questions', 'Integrated Approach', 'Covers Java 8', 'Dreamtech Press'],
    isTrending: true,
    reviews: [
      { id: 'r3', user: 'Vikram S.', rating: 5, comment: 'The best book for Java interviews.', date: '2023-10-15' }
    ]
  },
  {
    id: '3',
    title: 'JavaScript Masterclass',
    author: 'Yanko Belov',
    price: 1299,
    originalPrice: 1899,
    rating: 4.7,
    reviewsCount: 210,
    image: "data:image/svg+xml,%3Csvg width='600' height='900' viewBox='0 0 600 900' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='600' height='900' fill='%23F7DF1E'/%3E%3Crect width='40' height='900' fill='black' opacity='0.05'/%3E%3Crect x='220' y='350' width='160' height='160' fill='%23000000' rx='12'/%3E%3Ctext x='300' y='460' text-anchor='middle' font-family='monospace' font-weight='bold' font-size='100' fill='%23F7DF1E' dy='10'%3E{ }%3C/text%3E%3Ctext x='300' y='620' text-anchor='middle' font-family='Inter, sans-serif' font-weight='800' font-size='56' fill='%23000000' letter-spacing='1'%3EJAVASCRIPT%3C/text%3E%3Ctext x='300' y='680' text-anchor='middle' font-family='Inter, sans-serif' font-weight='700' font-size='40' fill='%23000000' letter-spacing='1'%3EPROGRAMMING%3C/text%3E%3Crect x='150' y='720' width='300' height='2' fill='%23000000' opacity='0.2'/%3E%3Ctext x='300' y='760' text-anchor='middle' font-family='Inter, sans-serif' font-size='24' fill='%23333333'%3EBeginner to Advanced Guide%3C/text%3E%3Crect x='0' y='850' width='600' height='50' fill='%23000000'/%3E%3C/svg%3E",
    language: 'JavaScript',
    level: 'Advanced',
    category: 'Web Development',
    description: `Book Overview

"JavaScript Masterclass" is a comprehensive guide tailored for those who want to achieve mastery in JavaScript programming. Published by BPB, this book takes you beyond the basics, exploring the depths of the language that powers the modern web.

Details

The book begins with a solid refresher on fundamentals before rapidly advancing to complex topics like closures, prototypes, and asynchronous programming patterns. It emphasizes writing clean, maintainable, and efficient code.

You will learn how to structure large-scale applications, manage state effectively, and utilize modern tooling. The book also covers the latest ECMAScript features, ensuring your skills remain cutting-edge in a fast-paced industry.

Key Features

• Comprehensive Guide: From basics to advanced architectural patterns.
• Modern JavaScript: Covers ES6+ features and best practices.
• BPB Publication: Trusted quality from a renowned technical publisher.
• Real-world Projects: Includes case studies to apply your knowledge.

About Author

Yanko Belov is a senior software engineer and mentor. His practical experience in building large-scale web applications shines through in this masterclass.`,
    features: ['Comprehensive Guide', 'Modern ES6+', 'BPB Publication', 'Advanced Concepts'],
    isTrending: true,
    reviews: []
  },
  {
    id: '4',
    title: 'The C++ Programming Language (4th Edition)',
    author: 'Bjarne Stroustrup',
    price: 599,
    originalPrice: 999,
    rating: 5.0,
    reviewsCount: 890,
    image: "data:image/svg+xml,%3Csvg width='600' height='900' viewBox='0 0 600 900' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='cppGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23004482'/%3E%3Cstop offset='100%25' stop-color='%2300599C'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='600' height='900' fill='url(%23cppGrad)'/%3E%3Crect width='40' height='900' fill='black' opacity='0.2'/%3E%3Ctext x='300' y='450' text-anchor='middle' font-family='Inter, sans-serif' font-weight='900' font-size='180' fill='rgba(255,255,255,0.1)'%3EC++%3C/text%3E%3Ctext x='300' y='450' text-anchor='middle' font-family='Inter, sans-serif' font-weight='900' font-size='120' fill='white'%3EC++%3C/text%3E%3Ctext x='300' y='600' text-anchor='middle' font-family='Inter, sans-serif' font-weight='800' font-size='52' fill='white' letter-spacing='2'%3EPROGRAMMING%3C/text%3E%3Crect x='200' y='650' width='200' height='2' fill='white' opacity='0.5'/%3E%3Ctext x='300' y='700' text-anchor='middle' font-family='Inter, sans-serif' font-size='24' fill='%23bae6fd' font-style='italic'%3EBeginner to Advanced Guide%3C/text%3E%3C/svg%3E",
    language: 'C++',
    level: 'Advanced',
    category: 'C++',
    description: `Book Overview

Written by the creator of C++, Bjarne Stroustrup, this Fourth Edition is the definitive guide to the language. "The C++ Programming Language" is more than just a tutorial; it is a complete reference that defines modern C++ (C++11 and beyond).

Details

This book is incredibly detailed, covering the entire C++ language and its standard library. It explains the "why" behind the design of C++ features, giving you a depth of understanding that other books cannot match.

You will learn about move semantics, uniform initialization, lambda expressions, and concurrency. It is an essential addition to the bookshelf of any serious systems programmer or game developer.

Key Features

• Definitive Guide: Written by the creator of the language himself.
• C++11 & Beyond: Covers modern standards and features.
• Deep Dive: Explores memory model, concurrency, and templates.
• Pearson Quality: Professional formatting and reliable content.

About Author

Bjarne Stroustrup is the designer and original implementer of C++. He is a Professor of Computer Science and a Managing Director at Morgan Stanley.`,
    features: ['Written by Creator', 'Definitive Reference', 'Fourth Edition', 'Pearson Published'],
    isTrending: false,
    reviews: []
  },
  {
    id: '5',
    title: 'Rust: The Practical Guide',
    author: 'Nouman Azam',
    price: 3199,
    originalPrice: 4500,
    rating: 4.9,
    reviewsCount: 56,
    image: "data:image/svg+xml,%3Csvg width='600' height='900' viewBox='0 0 600 900' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='600' height='900' fill='%231a1a1a'/%3E%3Crect width='40' height='900' fill='black' opacity='0.3'/%3E%3Ccircle cx='300' cy='400' r='100' stroke='%23b7410e' stroke-width='20' fill='none'/%3E%3Cpath d='M300 280 L300 320 M300 480 L300 520 M180 400 L220 400 M380 400 L420 400' stroke='%23b7410e' stroke-width='20'/%3E%3Ccircle cx='300' cy='400' r='40' fill='%23b7410e'/%3E%3Ctext x='300' y='600' text-anchor='middle' font-family='Inter, sans-serif' font-weight='800' font-size='64' fill='white' letter-spacing='2'%3ERUST%3C/text%3E%3Ctext x='300' y='670' text-anchor='middle' font-family='Inter, sans-serif' font-weight='700' font-size='42' fill='white' letter-spacing='1'%3EPROGRAMMING%3C/text%3E%3Cline x1='200' y1='720' x2='400' y2='720' stroke='%23b7410e' stroke-width='4'/%3E%3Ctext x='300' y='780' text-anchor='middle' font-family='Inter, sans-serif' font-size='24' fill='%23a3a3a3' font-style='italic'%3EBeginner to Advanced Guide%3C/text%3E%3C/svg%3E",
    language: 'Rust',
    level: 'Intermediate',
    category: 'Systems',
    description: `Book Overview

"Rust: The Practical Guide" by Rheinwerk Computing is your gateway to safe, concurrent, and practical systems programming. Rust has been the most loved programming language for years, and this book explains why by teaching you how to harness its power.

Details

This book provides a structured approach to learning Rust. It starts with installation and "Hello World" but quickly moves to the core concepts of Ownership and Borrowing, which are unique to Rust.

You will learn to write memory-safe code without a garbage collector. The book also covers the Cargo package manager, error handling, and building multi-threaded applications. It is filled with code snippets that you can run and modify.

Key Features

• Rheinwerk Computing: Premium quality print and content.
• Practical Focus: Emphasis on writing real, runnable code.
• Memory Safety: deeply explains Rust's ownership model.
• Systems Programming: Ideal for building fast, reliable software.

About Author

Nouman Azam is a Rust enthusiast and educator. He excels at breaking down low-level systems concepts into understandable lessons for modern developers.`,
    features: ['Rheinwerk Computing', 'Memory Safety', 'Practical Examples', 'Systems Programming'],
    isTrending: true,
    reviews: []
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Michael Chen",
    role: "Senior Software Engineer",
    text: "Decode__sriraj's selection is unmatched. I found the exact advanced resources I needed to optimize our engine."
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Computer Science Student",
    text: "The student discounts and curated beginner lists helped me ace my semester projects. Highly recommended!"
  },
  {
    id: 3,
    name: "David Miller",
    role: "Tech Lead",
    text: "I buy books for my entire team here. The detailed technical breakdowns help us choose the right resources."
  }
];