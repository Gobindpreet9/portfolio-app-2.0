## Introduction
Surprisingly, software is one of the first industries to experience transformation by AI technology. Everyone's what-would-be future was machines taking over manual labor, not knowledge work. But as we stand here in the wake of ChatGPT's disruptive release in November 2022, software building has changed forever. Constant layoffs plus hiring freezes have left the industry bleeding, which has left a bitter taste in the mouth for many.

These disruptions certainly add to the negative perception of AI. I think this hate for AI arises from multiple factors. One of them is losing our current routine, and the work we love. Work is a big part of our identity, and it is natural to feel scared when it is threatened. This is the duality of AI. For one, it is magical as it helps them create pictures, videos, music, etc. instantaneously, anything they could dream of, but for another, it is soulless mimicry of the real art. The art in which they put their blood, sweat and tears into. When the machine does that work effortlessly and endlessly, it raises some difficult existential questions.

But this transformation isn't just changing how we code; it's redefining what it means to be a software engineer. I argue that memorizing syntax is no longer one of the goals of engineering, but knowing what you can plan and achieve with the tools at your disposal is. You are no longer the junior dev, AI is, you are in charge of one.

"It is not the strongest of the species that survives, nor the most intelligent, but the one most adaptable to change", attributed to Charles Darwin, is a good reminder to keep up with the ever-evolving tools and technologies. All we can do is adapt. For now, AI is not a replacement but a catalyst, here to push our limits. The challenge is to rise to the occasion.

## The New Skillset: Thriving in the AI Era

As AI takes over the lower level tasks, our human skills become more important than ever. While the boilerplate and lower level of coding is abstracted away by AI, it gives our critical thinking and creativity a greater freedom than ever before. Software development is getting democratized and as more and more people will be able to build software, what will distinguish you is the ability to apply those uniquely human skills.

### Core Competencies

- **Critical Thinking:** As AI handles routine tasks, your ability to analyze problems, design robust solutions, and think strategically becomes your primary value.
- **Product Sense:** Deeply understanding your users, their needs and how the application will be used is key to building a successful product. You cannot deliver on a product without understanding what needs to be delivered.
- **System Design:** Once you understand the requirements, you will be able to make the critical trade-offs between reliability, performance, and cost. A solid foundation requires mastering the problem from a high-level perspective to avoid mid project overhauls.
- **Soft Skills:** The need to communicate will hold a greater value than ever before. As AI helps bridge gaps between skills of different people, soft skills become an important differentiator. Besides talking to your coworkers, good communication skills are also required to get the best done out of AI.
- **Continuous Learning:** AI is moving at a breakneck pace. According to [Stanford's AI Index Report](https://hai.stanford.edu/ai-index/2025-ai-index-report/research-and-development), the number of papers published between 2013 and 2023 has almost tripled. Strategic orchestration of these new tools and technologies will amplify the unique human traits of creativity, critical thinking, and empathy.
- **Builder's Mindset:** How to build's importance is being overtaken by what to build. Meta recently announced they will allow candidates to use AI in the interview process. This is an industry first but shows the trend as AI becomes more and more ubiquitous. They will likely develop new questions to test your ability to use AI effectively, instead of the traditional leetcode style questions.

## Working with AI: Principles and Best Practices

Gen AI has been transforming the way we build software. It is great to test out MVP's, prototype initial ideas and handle all the boilerplate or lower level stuff so you can devote your energy to maximize impact to drive business innovation. The days of lorem ipsum are in the past.

In AI, it is often said context is king. A lot of work has recently gone into providing AI better context of your code such as agentic mode, semantic search, file access and MCP tools. All of this can be seen in AI code tools like Cursor, Windsurf, Claude Code, and Github Copilot. However it is still prone to hallucinations (making stuff up) and mistakes.

That's why great models are not enough these days; the ecosystem around them matters more. Copying code from chatbot online is not a bad idea, but it is not effective or efficient anymore. The agentic workflows in latest AI code tools are a game-changer. They are tightly integrated with your working environment, provide better context to the LLM and can iterate for minutes to hours now on a given request. They allow you to make the changes in real-time, which you may accept, reject or modify right there. They can search the filesystem, create new files, and even run commands. This is a huge power-up over chatting. Other best AI tools are also more than chatbots or raw models. Look at this video of a new AI IDE by Amazon called [Kiro](https://www.youtube.com/watch?v=JOqLp1adGO4&t=13s&ab_channel=Kiro). This short 3 minute video is a great introduction to this new era of AI tools and I love their idea of spec based vs vibe coding.

Despite all these improvements, Microsoft has named it perfectly by calling it copilot; that means you're still in charge. If you never find yourself questioning or redirecting AI's suggestions, it's time to reassess your approach. Here are some principles and practices to help you effectively partner with your new AI assistant.

### Foundational Principles

Make sure the architecture is sound from the start so that maintaining it in the future is achievable for both you and your LLM partner. Treat your AI as a new-grad, enthusiastic, full of knowledge but lacking the bigger context. I like the analogy of broken windows from the book 'The Pragmatic Programmer' when talking about quality. When a building has a broken window, it sends a signal that anything goes, and soon the building will be in a state of disrepair. Small details matter.

Make sure that your product is built with quality in mind from the start. Ensure modularity, readability, security and simplicity. Keep principles like SOLID, DRY (Don't Repeat Yourself), KISS (Keep It Short And Simple) and SoC (Separation of Concerns) to create a quality product that can be iterated on and stand longer than 5 prompts. 

Prompting the LLM is a challenge in itself. Prompt engineering is the art of designing instructions to get desired outputs. And believe me, instructing in a clear, concise way is a lot harder than you think. As humans we assume a lot about the knowledge of others around us so the instructions are not detailed. I love this playful video that gets the point across [Exact Instructions Challenge for Peanut Butter Sandwich](https://www.youtube.com/watch?v=cDA3_5982h8&ab_channel=JoshDarnit). For example while you're building with your copilot you may decide to change your approach in the middle of development. If you do not ask explicitly it may leave some dead code from the previous attempt which will bloat your codebase, making it difficult to navigate and understand. In general be explicit about your objectives, sometimes it is even a good idea to fine-tune your prompt using AI before execution example - "Help me plan how to add a testimonial section without making any changes."

### Development Workflow & Best Practices

#### 1. Maintain Momentum and Safety
- **Iterate and Commit:** Mastery of source control is essential to not lose valuable progress. It is better to build iteratively step by step achieving one goal at a time. Test out your changes to make sure they work as expected, review for clean code, then stage our commit your changes before proceeding to improve or build another feature. We don't play games without checkpoints and neither should we code without them.
- **Stay Focused:** Keep your chats small and focused on particular or related topics. Chatbots remember the current session's chat history which can overload the context window making the response more prone to hallucinations. If you know the file that needs to be created or edited, mention it and reference it directly to save your precious resources (usually done by @file-name or @method-name). Breaking complex talks into actionable steps will provide better results.

#### 2. Uphold Quality and Standards
- **Test Rigorously:** Generate tests and test cases for your application, having both unit and integration tests. Unit tests cover functionality of a single component or function. Integration tests cover the interaction between different components or modules. Best practice is to run them often, ideally after completion of small features or tasks to make sure they do not break existing functionality. Test driven development (TDD) can also help to produce a stable and reliable codebase. In TDD, you write tests before writing the code.
- **Document Diligently:** Document your project properly describing the structure, how to run, .env.example file, debugging tips etc. in the README.md. This is historically one of the most neglected and underrated process of software development. It will save you a lot of sweat and pain when you're coming back to your project 3 months later.
- **Refactor Ruthlessly:** If a file starts to get too big, it is time to chop it down and refactor properly. SoC will help you and the bot to read your code faster from a high-level perspective and scoping to the appropriate class which has the issue will lead to easier bug fixes. Tech debt grows exponentially when not addressed.

#### 3. Master the Human-AI Interface
- **Trust but Verify:** Starting with zero trust system is a better idea for working with AI. AI works great in some areas but that is not always the case. Start slowly, review the changes suggested before proceeding. Review the code of AI, just as in any other person. Make small edits or leave TODO comments to guide the AI further. Do not let the Review debt accumulate to unsustainable levels. The quote by Benjamin Franklin should be wisely heeded: "An ounce of prevention is worth a pound of cure."
- **Use System Prompts:** Use proper system prompts to teach AI your standards and values. You can keep a .md file with code guidelines, best practices, and other important information which can be referenced by AI. It will help keep consistency for maintainability and readability requiring less changes in refactoring.
- **Leverage Popular Tools:** Use popular frameworks and libraries to build your application. AI systems will work better with popular tools because there likely exists good documentation and plethora of examples for them to learn from. Less popular languages and frameworks may not have as much support and may be more prone to hallucinations.
- **Advanced Techniques:** Use MCP tools which can be described as extensions for LLM models to push their limits. Some of the simple ones I like for my Windsurf IDE are sequential-thinking and memory by Anthropic. These tools help LLM plan by breaking down the requirement into various branches and also store important information over multiple chats. You may check my previous article for more comprehensive details about MCP tools [here](https://gmakkar.ca/blog/mcp-tools).

#### Best Practices Checklist
| Category | Best Practice |
|---|---|
| **AI Collaboration** | Provide clear, specific instructions. |
| | Keep conversations focused on a single task. |
| | Explicitly guide the AI to avoid unwanted changes. |
| **Development Hygiene** | Commit your work frequently (e.g., after each small feature). |
| | Use popular, well-documented frameworks and libraries. |
| | Maintain a "rules" file for AI to reference for consistency. |
| **Quality Assurance** | Trust, but always verify AI-generated code. |
| | Debug methodically and know when to discard a bad approach. |
| | Automate testing and documentation wherever possible. |

## The Double-Edged Sword: Navigating the Risks of AI
### Beware of the AI Slop
![Vibe Coding](https://i.kym-cdn.com/photos/images/newsfeed/003/029/677/58b.png)

*Photo from [Know Your meme](https://knowyourmeme.com/photos/3029677-vibe-coding)*

While AI is providing us immense productivity gains, it also has downsides. Besides taking over social media feeds, with fake news and endless brain-rot, it can also decay our codebase. This is often called "AI Slop". I do want to highlight that mediocrity is not always bad, whatever my or yours inner perfectionist may say. Not everything needs to be 100% optimized, but it is important to keep the codebase clean and maintainable. Sometimes, good enough is actually good enough. We want to spend our valuable time on things that have the most impact, AI gives us that opportunity. Mediocrity aside, we can't have a terrible mess on our hands if we have any long term plans.

### The Cognitive Cost
Over-reliance on AI can diminish our critical and creative thinking according to a [recent MIT study](https://arxiv.org/pdf/2506.08872v1). This makes sense as usually described by the phrase "Use it or lose it". We need to keep our wits sharp and delegating all the tasks to AI without proper review and analysis decreases brain engagement required to stay sharp. While learning is easier than ever before with AI, so is cheating. The best way to use AI is by being engaged and curious, at least for the core parts of your job.

### Security Risks
Overreliance on AI can increase the risk of vulnerabilities if users uncritically accept weak code that may introduce insecure patterns, inadequate authentication, or unsafe handling of user inputs. Recently security researchers found that hackers are taking advantage of AI hallucinations to sneak malicious packages into our code, as covered by [ITPro](https://www.itpro.com/security/hackers-are-taking-advantage-of-ai-hallucinations-to-sneak-malicious-software-packages-onto-enterprise-repositories). Some of the common hallucinated package names have been downloaded thousands of times, highlighting the magnitude of the issue. AI also is an invaluable tool for hackers, especially jailbroken versions like [WormGPT](https://slashnext.com/blog/wormgpt-the-generative-ai-tool-cybercriminals-are-using-to-launch-business-email-compromise-attacks/). It can speed up the creation of new malware, find vulnerabilities, and spread malware using social engineering techniques. Trying to end on a good note, I would like to mention [Project Ire](https://www.microsoft.com/en-us/research/blog/project-ire-autonomously-identifies-malware-at-scale/) by Microsoft has been designed to use AI in the fight against malware. It automates malware classification in a gold standard: fully reverse engineering a software file without any clues about its origin or purpose. This could be a massive game-changer for cybersecurity.

### IP, Copyright, and Compliance Risks
The training data used for AI model training is already a controversial issue. On top of that we must remember that any data we provide to it can, and probably is, used to train AI further. Never share sensitive information, trade secrets, or personally identifiable information in your prompts.

Furthermore, the legal landscape around gen AI is still a grey area. While people don't care as much about it in the coding paradigm, it is still a matter of concern. You may unknowingly use copyrighted material of others without their permission. AI can also generate code that may be protected by patents or trademarks. At least it is not as bad as the Hollywood industry for us coders.

### Bias and Manipulation
AI is biased and reflects the people who trained it. Data can be cherry picked and behavior can be tuned post-training to mirror the identity and beliefs of the people who trained it. Do not take AI as the source of truth. This may not always directly affect the code, but talking with it may affect your thoughts and decisions. AI bots can be used to spread propaganda and fake news. Recently X AI's Grok caused some headlines by steering seemingly unrelated conversations to the topic of 'white genocide'. [This](https://umbc.edu/stories/groks-white-genocide-responses-show-how-generative-ai-can-be-weaponized/) is just a small example. There are other very subtle ways AI can manipulate our thoughts and decisions without us even realizing it. I would like to discuss this more in depth in a future article.

#### Common Pitfalls Checklist
| Category | Pitfall & How to Avoid It |
|---|---|
| **Code & Cognitive Health** | **Pitfall:** Allowing "AI Slop" to degrade the codebase.<br>**Avoidance:** Balance speed with quality. Refactor AI code and don't let tech debt accumulate. |
| | **Pitfall:** Cognitive decline from over-reliance on AI.<br>**Avoidance:** Stay engaged. Use AI to augment, not replace, your critical thinking. |
| **Security & Compliance** | **Pitfall:** Introducing security vulnerabilities or malicious packages.<br>**Avoidance:** Rigorously review all AI-generated code and dependencies. Never trust blindly. |
| | **Pitfall:** Violating IP, copyright, or licensing terms.<br>**Avoidance:** Never share sensitive data. Review code for potential license laundering. |
| **Bias & Manipulation** | **Pitfall:** Being influenced by model bias or manipulation.<br>**Avoidance:** Treat AI as a tool, not a source of truth. Be critical of its outputs and perspectives. |

## Looking Ahead: When the Copilot Becomes the Pilot

So far, AI has been playing on the turf of humans. The IDEs for example are created for human use, not AI. All the current infrastructure, design and tools have been built for humans and not AI. This is being solved by adapters like MCP tools and we will definitely see more native AI integration with technologies in the future. There will, nonetheless, be a point where AI will be the Pilot. It is a question of when, not if. When the day comes, we will have to adapt to survive this new reality. Adapting well to it will help us thrive.

The barrier to entry into software is getting lower with AI, this democratizes the field and opens up opportunities for more people to enter the field. This may cause the job of a software engineer to not be in easy day-to-day automations or small apps but in more complex tasks of a grander scope. While this uncertainty is a valid reason to be scared, I believe the best that life has to offer comes in its detour. Let us try to enjoy the ride while we figure out what the destination is.

## Resources to Level Up

I am familiar with and use most of the resources mentioned in this article. I have found them to be helpful and I recommend them to anyone looking to improve their skills.

### General Software Engineering
#### Websites / Blogs
[Dev.to](https://dev.to/)
[Refactoring Guru](https://refactoring.guru/)
[High Scalability](https://highscalability.com/)
[Hacksplaining](https://www.hacksplaining.com/lessons)
[Over The Wire](https://overthewire.org/wargames/)
[Knightlab - SQL Murder Mystery](https://mystery.knightlab.com/)

#### Podcasts
[Tech Brew Ride Home](https://open.spotify.com/show/1jBNbPVlGUen3sWdd25ho6?si=b2068c472d2a4ddc)
[Changelog](https://open.spotify.com/show/07OgGuIyDrz8JiNIaJwwVZ?si=85fe017052774309)

#### YouTube Channels
[Network Chuck](https://www.youtube.com/@NetworkChuck)
[The Coding Sloth](https://www.youtube.com/@TheCodingSloth)

#### Books
[System Design Interview – An insider's guide](https://www.amazon.ca/System-Design-Interview-insiders-Second/dp/B08CMF2CQF)
[Pragmatic Programmer - Journeyman to Master](https://www.amazon.ca/Pragmatic-Programmer-Journeyman-Master-ebook/dp/B003GCTQAE/ref=sr_1_3?sr=8-3)
[Art of Clean Code - Practices for Complexity](https://www.amazon.ca/Art-Clean-Code-Practices-Complexity/dp/1718502184/ref=sr_1_1?sr=8-1)
[Designing Data Intensive Applications](https://www.amazon.ca/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1098119061/ref=sr_1_2?sr=8-2)
[Design Patterns: Elements of Reusable Object-Oriented Software](https://www.amazon.ca/Design-Patterns-Elements-Reusable-Object-Oriented/dp/0201633612/ref=sr_1_1?s=books&sr=1-1)

### AI and Machine Learning
#### Websites / Blogs
[Hugging Face Blog](https://huggingface.co/blog)
[The Neuron Daily](https://www.theneurondaily.com/)
[Kaggle](https://www.kaggle.com/)
[TensorFlow Playground](https://playground.tensorflow.org/)

#### Podcasts
[The AI Daily Brief](https://open.spotify.com/show/7gKwwMLFLc6RmjmRpbMtEO)
[Practical AI](https://open.spotify.com/show/1LaCr5TFAgYPK5qHjP3XDp?si=3c341bce046b4501)
[Super Data Science](https://open.spotify.com/show/1n8P7ZSgfVLVJ3GegxPat1?si=4a2a475f8d7f4159)

#### YouTube Channels
[Matthew Berman](https://www.youtube.com/@matthew_berman)
[AI Jason Z](https://www.youtube.com/@AIJasonZ)
[Serrano Academy](https://www.youtube.com/@SerranoAcademy)
[Fireship](https://www.youtube.com/@Fireship)
[AI LABS](https://www.youtube.com/@AILABS-393)
[Developers Digest](https://www.youtube.com/@DevelopersDigest)

#### References:
https://hapy.co/journal/principles-of-coding/
https://www.geeksforgeeks.org/7-common-programming-principles-that-every-developer-must-follow/
https://www.itpro.com/security/hackers-are-taking-advantage-of-ai-hallucinations-to-sneak-malicious-software-packages-onto-enterprise-repositories
https://arxiv.org/pdf/2506.08872v1
https://www.augmentcode.com/blog/best-practices-for-using-ai-coding-agents
https://umbc.edu/stories/groks-white-genocide-responses-show-how-generative-ai-can-be-weaponized/
https://www.businessinsider.com/meta-job-candidates-use-ai-coding-interviews-2025-7