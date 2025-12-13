# A Guide to the Open Source Revolution

The impact is staggering. Linux powers most of the internet's servers. Python is the language of choice for AI and data science. Docker revolutionized how we deploy applications. React, VS Code, MySQL, Apache... these aren't niche projects. They're the backbone of modern technology, used by billions of people every day, often without knowing it.

Yet the concept remains paradoxical. Why would talented engineers donate their labor? I've seen maintainers get frustrated when people use their work without contributing back. Some projects thrive for decades; others burn out. So what do we really mean by "free software"? What drives these contributors? And how did we get here?

In this series, we'll explore the open ecosystem. This inaugural post covers the origins of the movement, the motivations that fuel it, and the pivotal moments in its evolution. Future posts will dive into business models, the state of the industry today, and where it's all heading.

## The Birth of Open Source

### The Idealist: Richard Stallman and the Free Software Movement
Open source didn't start with a business plan—it started with principle. The spark came from an unlikely place: a printer. In the 1980s, Richard Stallman, a prominent computer programmer and hacker, wanted to modify a Xerox 9700 printer to notify users when it jammed. Xerox refused to share the source code. Stallman saw this as a betrayal of the hacker spirit—the collaborative ethos of freely sharing knowledge and tools. Frustrated, he wrote the [GNU Manifesto](https://www.gnu.org/gnu/manifesto.en.html) and launched the [Free Software Foundation](https://www.fsf.org/about/), declaring war on proprietary software.

While the primary purpose of GNU was to develop an entirely free Unix-like operating system, the FSF was founded to provide organizational and legal structure for the free software movement and GNU project. It handles responsibilities like licensing, awareness campaigns, resources, and certifications. The GNU General Public License was a vital contribution that we shall discuss later.

Stallman's vision was radical: software should be free; not just in cost, but in freedom. Users should be able to inspect it, modify it, and share it. This wasn't about money; it was about power and control.

By "free software," Stallman meant "free" as in freedom, not price: software you can study, modify, and share.

### Enforcing Freedom
Researchers at universities like MIT and UC Berkeley aimed to share knowledge as widely as possible. They eventually developed permissive licenses that let others use their research as they saw fit, avoiding the headache of constant legal negotiations while protecting themselves from liability. The MIT License crystallized around 1987, while the BSD license was born with Berkeley Unix in 1980.

Richard Stallman noticed companies taking open code and locking it behind a proprietary wall, and as a result, the GNU General Public License (GPL), a copyleft license, was released four years after the Manifesto in 1989. Copyleft is a licensing approach that uses copyright law to require derivatives to remain open under the same license. It was another step in his fight for software freedom and to prevent "software hoarding". GPL is essentially "share-alike" for code: if you build on it and distribute it, you inherit the obligation to keep it open.

Initially, the GPL saw a lot of adoption, but over time it has become more restrictive with its anti-patent and anti-DRM clauses. As a result, many commercial companies have strict no-GPL usage policies because it can force them to reveal their IP. This can also create investment barriers for startups. These days, the MIT License is the default choice for many projects. We'll discuss more about present-day open source licenses later in this series.

### The Pragmatist: Linus Torvalds and the Linux Revolution
A parallel movement was brewing, but it came from pragmatism, not ideology. On August 26, 1991, Linus Torvalds, a 21-year-old Finnish student, posted a message to a Usenet newsgroup: "What would you like to see most in minix?" He called it a hobby project—"just a hobby, won't be big and professional like gnu." That hobby became the Linux kernel. It was the missing piece of the puzzle for the GNU system, completing the GNU/Linux operating system.

Minix was a teaching operating system; GNU was Stallman's long-running effort to build a free Unix-like system. Linux gave that ecosystem a working kernel, and suddenly it wasn't just a philosophy—it booted.

What made Linux explode was Torvalds' approach: he welcomed feedback and contributions from the community. Early on, that meant patches from strangers, messy debates, and rapid iteration—yet it also created a decentralized development model where people could work in parallel on their own goals. This wasn't driven by ideology; it was driven by results. The approach proved faster, more reliable, and higher quality than traditional closed development.

#### The Cathedral vs. Bazaar
This development model of Linux became so influential that years later, Eric S. Raymond described it in his essay ["Cathedral vs. Bazaar"](https://firstmonday.org/ojs/index.php/fm/article/download/578/499%3Finline=1) in 1997. The Cathedral represents centralized, careful development—one team, one vision, released when ready. The Bazaar represents distributed development—many contributors working in parallel, releasing frequently. Raymond's essay showed that the Bazaar model could produce software as good as (or better than) the Cathedral, and it remains a valuable read today for its insights on open source development.

## Catching Fire: The Browser Wars and the Open Web
After Linux showed that community development could be incredibly efficient, a few parallel events led to open source being more widely adopted and commercialized. From the first browser wars to the quiet domination of infrastructure during the dot-com bubble, we'll analyze some of these important events.

### Embrace, Extend and Extinguish
In the 1990s, it was still the early days of the internet. Public interest exploded, and Netscape's Navigator browser—released in 1994—quickly became the dominant way to navigate the nascent web. Their IPO in 1995, the largest at the time, signaled that this was a real new technological wave worth paying attention to.

Microsoft saw it as a threat to their operating system business model and quickly reacted with their infamous approach: Embrace, Extend & Extinguish, which we got a deep insight into during the 1998 antitrust case against Microsoft by the U.S. Department of Justice. Initially, they **embrace** the existing standards—they licensed the code of Mosaic, the ancestor of Navigator, to get a jumpstart. Next, they **extend** the standard open protocols by adding proprietary features, causing incompatibility and friction for competitors—some websites only worked on Internet Explorer. Finally, they **extinguish** competition using established power—bundling, exclusive deals, pressuring partners, and predatory pricing.

In the end, it was not a fair battle. In a final-ditch effort, Netscape announced in 1998 that it would open-source its browser code because it couldn't compete with Microsoft with its own resources. Up until this point, open source software was seen by businesses as a countercultural, non-commercial oddity. While the move wasn't able to save Netscape, a phoenix would rise from its ashes.

### LAMP Lights Up
While this one did not interest the public as much as the Browser Wars, it was massively important in the commercialization of the movement. LAMP consisted of Linux, Apache, MySQL, and PHP—all components developed independently by different people in different parts of the world, coming together at the right time. It was the silent engine powering the early internet. It was accessible and easy to use, making it a compelling, cost-effective alternative to proprietary stacks like Java or .NET. The term 'LAMP' was coined by German computing magazine editor Michael Kunze in 1998. It lowered the barrier to entry, which allowed countless startups, small businesses, and "bedroom experimenters" to build applications without heavy upfront costs.

### Commercialization
By this stage, the viability of open solutions was clear. The impending challenge was monetization. Since the code itself was free, the industry turned to services. But could this be a viable business? Red Hat proved it was. Corporations needed guarantees and support to build mission-critical applications. Red Hat offered a stable, tested version of Linux with support contracts and training programs. Wall Street took notice: on IPO day, their shares more than tripled. The excitement was real, even if the long-term business questions weren't settled.

IBM viewed this shift as an opportunity to pivot. With Microsoft dominating the server market via Windows NT, Linux offered a robust alternative to counter Sun Microsystems. It fit perfectly into IBM's new strategy: selling expertise rather than licenses. By late 1999, IBM had announced they would be investing $1 billion into making its enterprise servers compatible with Linux.

### The Bridge: OSI and Bringing Open Source to Business
Amidst this momentum, a branding problem persisted. The term "free software" often implied "zero cost" rather than "liberty," confusing potential enterprise adopters. This skepticism about quality, reliability, and support models kept big business away.

The phrase "open source" was a strategic invention. In early 1998—right after Netscape announced it would release its browser source code—leaders in the community rallied around a new label that emphasized process and pragmatism over ideology. The term itself was originally suggested by Christine Peterson.

In 1998, the [Open Source Initiative (OSI)](https://opensource.org/about) was founded by Eric S. Raymond and Bruce Perens to reframe the movement. Instead of fighting about morality, OSI focused on pragmatism: the model works because it produces better software, faster. This rebranding was crucial. It made the concept palatable to the corporate world, transforming it from a fringe movement into a viable strategy for enterprises. Their mission: educate, advocate, and grow the community—and it worked.

### Aftermath
Netscape's source code lived on. It was a long journey, but after years of development, the Mozilla Foundation launched Firefox 1.0 in 2004. In the intervening years, progress on Internet Explorer had stagnated due to a lack of competition and little incentive from Microsoft to innovate on a platform that threatened their OS dominance. When Firefox finally rose from the ashes, it was simply better—faster, more secure, and more compliant with open web standards. It quickly captured users' attention and grew rapidly.

The resurgence of Firefox was irrefutable proof that open source could go head-to-head with tech giants. It forced the market out of stagnation and ignited a new era of innovation.

LAMP demonstrated that this collaborative model could be a feasible alternative to expensive commercial packages. Not only was it free to use, it was reliable, stable, and could outperform many proprietary options. It empowered the Web 2.0 revolution as well, with major applications like WordPress and Facebook relying on it.

Even after the dot-com bubble crash, companies like Red Hat survived, showcasing that a business model around open source software could be sustainable. It opened doors for numerous other companies seeking venture capital funding for open source ideas.

Within two years, IBM announced they had already recouped their investment into Linux. This validation from one of America's tech giants was another major milestone for open source. It came after years of attacks from other tech giants like Microsoft, who claimed that open source was risky, unstable, or legally dangerous.

## So what is Open Source?
Open source refers to software where the source code is provided to the public for free, allowing anyone to inspect, modify, and enhance it. The core principles are straightforward:
- Free to use
- Free to modify
- Free to distribute
- Free to improve

## References
https://www.gnu.org/gnu/manifesto.en.html
https://www.fsf.org/about/
https://memgraph.com/blog/history-of-open-source-licenses-what-license-to-choose
https://opensource.com/article/19/4/history-mit-license
https://en.wikipedia.org/wiki/Linux_kernel
https://www.linux.com/training-tutorials/linus-torvalds-and-richard-stallman/
https://www.investopedia.com/ask/answers/09/browser-wars-netscape-internet-explorer.asp
https://en.wikipedia.org/wiki/Embrace,_extend,_and_extinguish
https://medium.com/@talentelgia/lamp-stack-development-illuminating-the-web-with-open-source-power-09c5dc392664
https://www.zdnet.com/article/open-source-lamp-a-beacon-to-developers/
https://en.wikipedia.org/wiki/LAMP_(software_bundle)
https://www.ibm.com/opensource/story/
https://www.cnet.com/tech/tech-industry/ibm-to-spend-1-billion-on-linux-in-2001/
https://www.cnet.com/tech/tech-industry/ibm-linux-investment-nearly-recouped/
https://www.sciencedirect.com/science/article/abs/pii/S0167624509000201
https://archive.nytimes.com/www.nytimes.com/library/tech/00/03/biztech/articles/20soft.html