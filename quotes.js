// 365 daily quotes generated from your supplied quote list.
// Jan 1 = index 0, Dec 31 = index 364.
const QUOTES = [
  {
    "quote": "The confused mind always says “No”.",
    "author": "Anonymous/Unknown"
  },
  {
    "quote": "Not all who wander are lost.",
    "author": "JRR Tolkein"
  },
  {
    "quote": "Worry gives a small thing  big shadow.",
    "author": "Swedish Proverb"
  },
  {
    "quote": "Nothing is wiser than nature.",
    "author": "Socrates"
  },
  {
    "quote": "If you believe you can or you believe you can’t you’re right.",
    "author": "Henry Ford"
  },
  {
    "quote": "Make it as simple as it can be and as complex as in needs to be.",
    "author": "Albert Einstein"
  },
  {
    "quote": "Don’t raise your voice, improve your argument.",
    "author": "Anonymous"
  },
  {
    "quote": "Life is not a problem to be solved, but a reality to be experienced.",
    "author": "Soren Kierkegaard"
  },
  {
    "quote": "Choose a job that you love and you will never have to work a day in your life",
    "author": "Confucius"
  },
  {
    "quote": "That man is richest whose pleasures are cheapest.",
    "author": "Henry David Thoreau"
  },
  {
    "quote": "Learning never exhausts the mind.",
    "author": "Leonardo da Vinci"
  },
  {
    "quote": "If you are not willing to risk the usual you will have to settle for the ordinary.",
    "author": "Jim Rohn"
  },
  {
    "quote": "Trust because you are willing to accept the risk, not because it’s safe or certain.",
    "author": "Anonymous"
  },
  {
    "quote": "Success is walking from failure to failure with no loss of enthusiasm.",
    "author": "Winston Churchill"
  },
  {
    "quote": "If you do what you always did, you will get what you always got.",
    "author": "Anonymous"
  },
  {
    "quote": "Whenever you see a successful person you only see the public glories, never the private sacrifices to reach them.",
    "author": "Vaibhav Shah"
  },
  {
    "quote": "Try not to become a person of success, but rather try to become a person of value.",
    "author": "Albert Einstein"
  },
  {
    "quote": "No one can make you feel inferior without your consent.",
    "author": "Eleanor Roosevelt"
  },
  {
    "quote": "The meaning of life is to find your gift. The purpose of life is to give it away.",
    "author": "Anonymous"
  },
  {
    "quote": "If you can’t explain it simply, you don’t understand it well enough.",
    "author": "Albert Einstein"
  },
  {
    "quote": "If you don’t value your time, neither will others. Stop giving away your time and talents- start charging for it.",
    "author": "Kim Garst"
  },
  {
    "quote": "A successful man is one who can lay a firm foundation with the bricks others have thrown at him.",
    "author": "David Brinkley"
  },
  {
    "quote": "The supreme art of war is to subdue the enemy without fighting.",
    "author": "Sun Tzu"
  },
  {
    "quote": "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.",
    "author": "Marcus Aurelius"
  },
  {
    "quote": "The secret of getting ahead is getting started.",
    "author": "Mark Twain"
  },
  {
    "quote": "Knowledge is being aware of what you can do. Wisdom is knowing when not to do it.",
    "author": "Anonymous"
  },
  {
    "quote": "Your problem isn’t the problem. Your reaction is the problem.",
    "author": "Anonymous"
  },
  {
    "quote": "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    "author": "Benjamin Franklin"
  },
  {
    "quote": "You can do anything, but not everything.",
    "author": "Anonymous"
  },
  {
    "quote": "All progress takes place outside the comfort zone.",
    "author": "Michael John Bobak"
  },
  {
    "quote": "The journey of a thousand miles begins with one step.",
    "author": "Lao Tzu"
  },
  {
    "quote": "You’ve got to get up every morning with determination if you’re going to go to bed with satisfaction.",
    "author": "George Lorimer"
  },
  {
    "quote": "To live a creative life, we must lose our fear of being wrong.",
    "author": "Anonymous"
  },
  {
    "quote": "We become what we think about most of the time, and that’s the strangest secret.",
    "author": "Earl Nightingale"
  },
  {
    "quote": "It’s not what you look at that matters, it’s what you see.",
    "author": "Anonymous"
  },
  {
    "quote": "There is no chance, no destiny, no fate, that can hinder or control the firm resolve of a determined soul.",
    "author": "Ella Wheeler Wilcox"
  },
  {
    "quote": "You may only succeed if you desire succeeding; you may only fail if you do not mind failing.",
    "author": "Philippos"
  },
  {
    "quote": "To be successful you must accept all challenges that come your way. You can’t just accept the ones you like.",
    "author": "Mike Gafka"
  },
  {
    "quote": "Thinking should become your capital asset, no matter whatever ups and downs you come across in your life.",
    "author": "Dr. APJ Kalam"
  },
  {
    "quote": "What seems to us as bitter trials are often blessings in disguise.",
    "author": "Oscar Wilde"
  },
  {
    "quote": "No masterpiece was ever created by a lazy artist.",
    "author": "Anonymous"
  },
  {
    "quote": "I have not failed. I’ve just found 10,000 ways that won’t work.",
    "author": "Thomas A. Edison"
  },
  {
    "quote": "The starting point of all achievement is desire.",
    "author": "Napolean Hill"
  },
  {
    "quote": "Courage is resistance to fear, mastery of fear – not absense of fear.",
    "author": "Mark Twain"
  },
  {
    "quote": "The ones who are crazy enough to think they can change the world, are the ones that do.",
    "author": "Anonymous"
  },
  {
    "quote": "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
    "author": "Eleanor Roosevelt"
  },
  {
    "quote": "Do one thing every day that scares you.",
    "author": "Anonymous"
  },
  {
    "quote": "The only place where success comes before work is in the dictionary.",
    "author": "Vidal Sassoon"
  },
  {
    "quote": "Opportunities don’t happen, you create them.",
    "author": "Chris Grosser"
  },
  {
    "quote": "Life is not about finding yourself. Life is about creating yourself.",
    "author": "Lolly Daskal"
  },
  {
    "quote": "What’s the point of being alive if you don’t at least try to do something remarkable.",
    "author": "Anonymous"
  },
  {
    "quote": "If you’re going through hell keep going.",
    "author": "Winston Churchill"
  },
  {
    "quote": "Just when the caterpillar thought the world was ending, he turned into a butterfly.",
    "author": "Proverb"
  },
  {
    "quote": "Don’t be afraid to give up the good to go for the great.",
    "author": "John D. Rockefeller"
  },
  {
    "quote": "Things work out best for those who make the best of how things work out.",
    "author": "John Wooden"
  },
  {
    "quote": "People rarely succeed unless they have fun in what they are doing.",
    "author": "Dale Carnegie"
  },
  {
    "quote": "When you stop chasing the wrong things you give the right things a chance to catch you.",
    "author": "Lolly Daskal"
  },
  {
    "quote": "If you want to achieve greatness stop asking for permission.",
    "author": "Anonymous"
  },
  {
    "quote": "Success is the sum of small efforts, repeated day-in and day-out.",
    "author": "Robert Collier"
  },
  {
    "quote": "All our dreams can come true if we have the courage to pursue them.",
    "author": "Walt Disney"
  },
  {
    "quote": "The road to success and the road to failure are almost exactly the same.",
    "author": "Colin R. Davis"
  },
  {
    "quote": "People often say that motivation doesn’t last. Well, neither does bathing – that’s why we recommend it daily.",
    "author": "Zig Ziglar"
  },
  {
    "quote": "Always remember that you are absolutely unique. Just like everyone else.",
    "author": "Margaret Mead"
  },
  {
    "quote": "Wise men speak because they have something to say; Fools because they have to say something.",
    "author": "Plato"
  },
  {
    "quote": "To accomplish great things, we must not only act, but also dream, not only plan, but also believe.",
    "author": "Anatole France"
  },
  {
    "quote": "Correction does much, but encouragement does more.",
    "author": "Johann Wolfgang von Goethe"
  },
  {
    "quote": "One of the most beautiful qualities of true friendship is to understand and to be understood.",
    "author": "Lucius Annaeus Seneca"
  },
  {
    "quote": "The only true wisdom is in knowing you know nothing.",
    "author": "Socrates"
  },
  {
    "quote": "When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid.",
    "author": "Audre Lorde"
  },
  {
    "quote": "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
    "author": "Mark Twain"
  },
  {
    "quote": "Good things come to people who wait, but better things come to those who go out and get them.",
    "author": "Anonymous"
  },
  {
    "quote": "The reason most people never reach their goals is that they don’t define them, or ever seriously consider them as believable or achievable. Winners can tell you where they are going, what they plan to do along the way, and who will be sharing the adventure with them.",
    "author": "Denis Watiley"
  },
  {
    "quote": "You must expect great things of yourself before you can do them.",
    "author": "Michael Jordan"
  },
  {
    "quote": "Don’t let what you cannot do interfere with what you can do.",
    "author": "John R. Wooden"
  },
  {
    "quote": "Success is…knowing your purpose in life, growing to reach your maximum potential, and sowing seeds that benefit others.",
    "author": "John C. Maxwell"
  },
  {
    "quote": "There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed.",
    "author": "Ray Goforth"
  },
  {
    "quote": "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "author": "Winston Churchill"
  },
  {
    "quote": "Real difficulties can be overcome; it is only the imaginary ones that are unconquerable.",
    "author": "Theodore N. Vail"
  },
  {
    "quote": "If you don’t design your own life plan, chances are you’ll fall into someone else’s plan. And guess what they have planned for you? Not much.",
    "author": "Jim Rohn"
  },
  {
    "quote": "Change your thoughts and you change your world.",
    "author": "Norman Vincent Peale"
  },
  {
    "quote": "Failure is the condiment that gives success its flavor.",
    "author": "Truman Capote"
  },
  {
    "quote": "Blessed are those who can give without remembering and take without forgetting.",
    "author": "Anonymous"
  },
  {
    "quote": "Education is the most powerful weapon which you can use to change the world.",
    "author": "Nelson Mandela"
  },
  {
    "quote": "Don’t judge each day by the harvest you reap but by the seeds that you plant.",
    "author": "Robert Louis Stevenson"
  },
  {
    "quote": "Don’t let the fear of losing be greater than the excitement of winning.",
    "author": "Robert Kiyosaki"
  },
  {
    "quote": "The distance between insanity and genius is measured only by success.",
    "author": "Bruce Feirstein"
  },
  {
    "quote": "Successful people do what unsuccessful people are not willing to do. Don’t wish it were easier, wish you were better.",
    "author": "Jim Rohn"
  },
  {
    "quote": "Motivation is what gets you started. Habit is what keeps you going.",
    "author": "Jim Ryun"
  },
  {
    "quote": "Do not go where the path may lead, go instead where there is no path and leave a trail.",
    "author": "Ralph Waldo Emerson"
  },
  {
    "quote": "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
    "author": "Dale Carnegie"
  },
  {
    "quote": "Little minds are tamed and subdued by misfortune; but great minds rise above it.",
    "author": "Washington Irving"
  },
  {
    "quote": "I find that when you have a real interest in life and a curious life, that sleep is not the most important thing.",
    "author": "Martha Stewart"
  },
  {
    "quote": "People who succeed have momentum. The more they succeed, the more they want to succeed, and the more they find a way to succeed. Similarly, when someone is failing, the tendency is to get on a downward spiral that can even become a self-fulfilling prophecy.",
    "author": "Tony Robbins"
  },
  {
    "quote": "Happiness is a butterfly, which when pursued, is always beyond your grasp, but which, if you will sit down quietly, may alight upon you.",
    "author": "Nathaniel Hawthorne"
  },
  {
    "quote": "Take up one idea. Make that one idea your life – think of it, dream of it, live on that idea. Let the brain, muscles, nerves, every part of your body, be full of that idea, and just leave every other idea alone. This is the way to success.",
    "author": "Swami Vivekananda"
  },
  {
    "quote": "Fortune sides with him who dares.",
    "author": "Virgil"
  },
  {
    "quote": "Only put off until tomorrow what you are willing to die having left undone.",
    "author": "Pablo Picasso"
  },
  {
    "quote": "The whole secret of a successful life is to find out what is one’s destiny to do, and then do it.",
    "author": "Henry Ford"
  },
  {
    "quote": "The successful warrior is the average man, with laser-like focus.",
    "author": "Bruce Lee"
  },
  {
    "quote": "Success is liking yourself, liking what you do, and liking how you do it.",
    "author": "Maya Angelou"
  },
  {
    "quote": "It’s how you deal with failure that determines how you achieve success.",
    "author": "David Feherty"
  },
  {
    "quote": "The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.",
    "author": "Mark Caine"
  },
  {
    "quote": "Opportunity is missed by most people because it is dressed in overalls and looks like work.",
    "author": "Thomas Edison"
  },
  {
    "quote": "If you genuinely want something, don’t wait for it — teach yourself to be impatient.",
    "author": "Gurbaksh Chahal"
  },
  {
    "quote": "I don’t want to get to the end of my life and find that I lived just the length of it. I want to have lived the width of it as well.",
    "author": "Diane Ackerman"
  },
  {
    "quote": "Our greatest fear should not be of failure but of succeeding at things in life that don’t really matter.",
    "author": "Francis Chan"
  },
  {
    "quote": "Don’t walk behind me; I may not lead. Don’t walk in front of me; I may not follow. Just walk beside me and be my friend.",
    "author": "Albert Camus"
  },
  {
    "quote": "Everything has beauty, but not everyone sees it.",
    "author": "Confucius"
  },
  {
    "quote": "You measure the size of the accomplishment by the obstacles you had to overcome to reach your goals.",
    "author": "Booker T. Washington"
  },
  {
    "quote": "Success does not consist in never making mistakes but in never making the same one a second time.",
    "author": "George Bernard Shaw"
  },
  {
    "quote": "Successful entrepreneurs are givers and not takers of positive energy.",
    "author": "Anonymous"
  },
  {
    "quote": "Innovation distinguishes between a leader and a follower.",
    "author": "Steve Jobs"
  },
  {
    "quote": "If you want to achieve excellence, you can get there today. As of this second, quit doing less-than-excellent work.",
    "author": "Thomas J. Watson"
  },
  {
    "quote": "I find that the harder I work, the more luck I seem to have.",
    "author": "Thomas Jefferson"
  },
  {
    "quote": "The best reason to start an organization is to make meaning; to create a product or service to make the world a better place.",
    "author": "Guy Kawasaki"
  },
  {
    "quote": "The function of leadership is to produce more leaders, not more followers.",
    "author": "Ralph Nader"
  },
  {
    "quote": "As we look ahead into the next century, leaders will be those who empower others.",
    "author": "Bill Gates"
  },
  {
    "quote": "A real entrepreneur is somebody who has no safety net underneath them.",
    "author": "Henry Kravis"
  },
  {
    "quote": "You can’t connect the dots looking forward; you can only connect them looking backwards. So you have to trust that the dots will somehow connect in your future. You have to trust in something – your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life.",
    "author": "Steve Jobs"
  },
  {
    "quote": "Investing in people is how we grow.",
    "author": "Howard Schultz (executive chairman, Starbucks)"
  },
  {
    "quote": "Maintain a culture of respect.",
    "author": "Eric Schmidt (former CEO, Novell, Google)"
  },
  {
    "quote": "A leader works for those they lead.",
    "author": "Martine Rothblatt (founder, Sirius, United Therapeutics)"
  },
  {
    "quote": "Every business is a living document, an algorithm that needs to be improved.",
    "author": "Billy Beane (Oakland A’s executive vice president)"
  },
  {
    "quote": "Health is your own; money belongs to others; power is temporary; and reputation is eternal.",
    "author": "Charoen Sirivadhanabhakdi (founder, Thai Beverage)"
  },
  {
    "quote": "I think that the most important issue that will reshape our lives in the years ahead will be how man-made and artificial intelligence compete and work together.",
    "author": "Ray Dalio (founder Bridgewater Associates)"
  },
  {
    "quote": "We’re the first species capable of self-annihilation, and it’s extremely likely, given enough time. The question: Can we get ahead of it?",
    "author": "Elon Musk (cofounder, Paypal, Tesla, SpaceX)"
  },
  {
    "quote": "The four most important words in business are ‘What do you think?’",
    "author": "Bill Marriott, Jr., chairman, Marriott International"
  },
  {
    "quote": "If someone is out in the desert walking around, they’re going to be thirsty. You just have to ask them what they want to drink.",
    "author": "Arthur Blank (cofounder, Home Depot)"
  },
  {
    "quote": "A business that makes nothing but money is a poor business.",
    "author": "Henry Ford (Founder of Ford Motor Company)"
  },
  {
    "quote": "Don’t take ‘no’ when your gut tells you ‘yes.’",
    "author": "James Patterson (record-setting author)"
  },
  {
    "quote": "Prudence and agility, creativity and innovation will give you the edge to thrive in uncertain times.",
    "author": "Li Ka-shing (chairman, CK Hutchison)"
  },
  {
    "quote": "I respect ambition, but not ruthless ambition.",
    "author": "Meg Whitman (CEO, Hewlett Packard Enterprise)"
  },
  {
    "quote": "There is only one boss; the customer. And he can fire everybody in the company from the chairman on down, simply by spending his money somewhere else.",
    "author": "Sam Walton (Founder of Walmart)"
  },
  {
    "quote": "The best way to predict the future is to create it.",
    "author": "Peter Drucker (Management Consultant and Author)"
  },
  {
    "quote": "Your most unhappy customers are your greatest source of learning",
    "author": "Bill Gates (founder of Microsoft)"
  },
  {
    "quote": "When the decision is finally made, I’ve found my reaction is always the same: I should have done this a long time ago.",
    "author": "Louis Gerstner, Jr. (former chairman and CEO, IBM)"
  },
  {
    "quote": "If you [and your partners] have the same values and are focused on the same goals…you can go a long way.",
    "author": "Henry Kravis (cofounder, Kohlberg Kravis Roberts)"
  },
  {
    "quote": "Rule No. 1: never lose money; rule No. 2: don’t forget rule No. 1",
    "author": "Warren Buffet (CEO of Berkshire Hathaway)"
  },
  {
    "quote": "Don’t just satisfy your customers—delight them…Anybody who has happy customers is likely to have a pretty good future.",
    "author": "Warren Buffett (CEO, Berkshire Hathaway)"
  },
  {
    "quote": "I’d said to my partner Stedman, ‘What am I going to talk about for ten days and ten nights at Nelson Mandela’s house?’ And Stedman said, ‘Why don’t you try listening?’",
    "author": "Oprah Winfrey (founder, Oprah Winfrey Network)"
  },
  {
    "quote": "Change before you have to.",
    "author": "Jack Welsh (former CEO of General Electric)"
  },
  {
    "quote": "Be passionate in areas relevant to you, and be a voice that is respected and abreast of developments.",
    "author": "Ratan Tata (India’s industrialist)"
  },
  {
    "quote": "Don’t worry about reputation but about character. You build character by practicing empathy, practicing moral courage, practicing determination.",
    "author": "Jacqueline Novogratz (founder, Acumen Fund)"
  },
  {
    "quote": "You need to be curious and never stop studying. You have to challenge yourself to think every day to understand and react to what is happening.",
    "author": "Miuccia Prada (co-CEO, Prada)"
  },
  {
    "quote": "I explicitly don’t build or guard my reputation. I believe in telling it like it is and not worrying about it.",
    "author": "Vinod Khosla (venture capitalist; cofounder, Sun Microsystems)"
  },
  {
    "quote": "Nobody’s job was to say, ‘I think it’s wonderful.’ Instead, I insisted on everyone coming together to analyze potential problems that could lose investor money.",
    "author": "Stephen Schwarzman (cofounder Blackstone)"
  },
  {
    "quote": "You should find an area that interests you and just get on the highway, and it will lead you wherever you lead it.",
    "author": "Barry Diller (founder, IAC)"
  },
  {
    "quote": "You need to have a culture instead of a payroll, so that people watch themselves. What does this? Not money, but enhanced self-esteem.",
    "author": "Steve Wynn (king of The Strip; founder, Mirage Resorts)"
  },
  {
    "quote": "Storytelling remains basic: It’s just a campfire, the human connection that says you’re not alone.",
    "author": "Shonda Rhimes (televisionary)"
  },
  {
    "quote": "People assume they are most creative at a certain age. But if you look at truly great artists, they always get better.",
    "author": "Jeff Koons (record-breaking artist)"
  },
  {
    "quote": "It’s so easy for someone with a great idea to share it with the world in an instant, the pace of innovation is accelerating—and that opens up more areas than ever for exploration.",
    "author": "Bill Gates (global philanthropist; cofounder, Microsoft)"
  },
  {
    "quote": "If we are complacent and not open to change, we will soon lose our place. The best way to stay ahead is to learn from the younger generation.",
    "author": "Dhanin Chearavanont (senior chairman, CP Group)"
  },
  {
    "quote": "My interests and my priorities are using my life experience and what I have been able to achieve to nurture the next generation.",
    "author": "Terry Gou (founder, Foxconn)"
  },
  {
    "quote": "Treat and pay your staff exactly the way you’d want to be treated if you were in their place.",
    "author": "John Paul DeJoria (cofounder, John Paul Mitchell Systems, Patrón Tequila)"
  },
  {
    "quote": "Everything today is speed, and there is always somebody else working on something better.",
    "author": "Ron Perelman (buyout specialist)"
  },
  {
    "quote": "When hiring, if forced to choose between virtue and talent, choose virtue.",
    "author": "Charles Koch (CEO, Koch Industries)"
  },
  {
    "quote": "Age is just a number for me—I haven’t thought about it in years. I go by the motto that I learn something new every single day.",
    "author": "Bernard Marcus (cofounder, Home Depot)"
  },
  {
    "quote": "When you start something today, you usually have to start it all over the world at the same time to be successful.",
    "author": "Bernard Arnault (founder, LVMH)"
  },
  {
    "quote": "Research how and why things are, and imagine how they might change,",
    "author": "Philip Anschutz (entertainment mogul)"
  },
  {
    "quote": "At the end we leave with nothing. Entrepreneurs are only temporary managers of wealth. So do right by your customers, your employees, your backers.",
    "author": "Carlos Slim Helú (Mexico’s one-man economy; one-time richest person in the world)"
  },
  {
    "quote": "Curiosity has kept me young as I have gotten older.",
    "author": "Les Wexner (visionary of The Limited (Victoria’s Secret, Pink, Etc.))"
  },
  {
    "quote": "The question is, how to be useful.",
    "author": "Jim Collins (author, Good to Great and Built to Last)"
  },
  {
    "quote": "I like to imagine the world five years from now. Or imagine what I want the world to look like five years from now.",
    "author": "Brian Chesky (cofounder Airbnb)"
  },
  {
    "quote": "If you do the right thing, the right thing will come to you.",
    "author": "Berry Gordy (founder, Motown Records)"
  },
  {
    "quote": "We sometimes fall flat on our face. But people don’t mind people who try things and fail.",
    "author": "Richard Branson (thrillionaire; founder, Virgin Group)"
  },
  {
    "quote": "Being in business by yourself, you’re responsible, one way or the other, and I had a lot of success that way.",
    "author": "David Geffen (founder, Asylum Records, Geffen Records; cofounder, Dreamworks)"
  },
  {
    "quote": "I learned to never kick someone when they’re down. Everyone makes mistakes, and some are real whoppers. But that makes them whopping opportunities, too.",
    "author": "Jack Welch (former CEO, GE)"
  },
  {
    "quote": "You cannot do everything alone, especially when you get to a certain level. It is impossible.",
    "author": "Hamdi Ulukaya, founder, Chobani yogurt"
  },
  {
    "quote": "I’m a great believer in luck, and I find the harder I work the more I have of it.",
    "author": "Thomas Jefferson"
  },
  {
    "quote": "Making money is a happiness; making other people happy is a super-happiness.",
    "author": "Muhammad Yunus (father of microfinance)"
  },
  {
    "quote": "What allowed me to survive is that I was always honest and I truly believed in what I did.",
    "author": "Diane von Furstenberg (fashion icon)"
  },
  {
    "quote": "Take an old concept…and just put a new spin on it, success will follow you like a shadow.",
    "author": "Sheldon Adelson (casino mogul)"
  },
  {
    "quote": "Having clean, inexpensive, sufficient energy that’s not controlled in some government’s hands or some big business’ hands helps solve a couple of the giant threats.",
    "author": "Jeff Skoll (eBay billionaire)"
  },
  {
    "quote": "For the economic, social and political benefit of all, the Web must be recognized as a public good.",
    "author": "Tim Berners-Lee (inventor, World Wide Web)"
  },
  {
    "quote": "Keep your labour or your expense down and maximize the responsibility you extend to fewer people.",
    "author": "Jerry Jones (owner, Dallas Cowboys)"
  },
  {
    "quote": "There were many times in my life when I would have liked to follow the herd. Instead, I have always followed my gut—and sometimes it’s been really lonely.",
    "author": "Sam Zell (vulture legend; REIT collector)"
  },
  {
    "quote": "If your mother calls you and tells you that she is proud of what you are doing, that’s probably a good indication that you are on the road to happiness.",
    "author": "David Rubenstein (co-CEO, The Carlyle Group)"
  },
  {
    "quote": "When a door closes, if you look long enough and hard enough, if you’re strong enough, you’ll find a window that opens.",
    "author": "Jack Bogle (founder, Vanguard)"
  },
  {
    "quote": "Here’s how I stay relevant: I read. I listen. I try to surround myself with smart people of all ages and backgrounds.",
    "author": "John Doerr (venture capital Midas)"
  },
  {
    "quote": "I found beauty in the absolute truth of machines in the classroom, I found purpose in the messiness of human interactions.",
    "author": "Robert Smith (founder, Vista Equity Partners)"
  },
  {
    "quote": "No business school graduate would recommend gambling as a financial strategy, but sometimes it pays to be a little crazy early in your career.",
    "author": "Fred Smith, founder, FedEx"
  },
  {
    "quote": "Integrity means honesty and willingness to fulfill a promise, even at high cost.",
    "author": "Morris Chang (founder, Taiwan Semiconductor)"
  },
  {
    "quote": "Organizations resist innovation – and those that do inevitably fail – because people are more comfortable with what they know than with what they don’t.",
    "author": "Michael Bloomberg (former mayor of New York; cofounder Bloomberg LP)"
  },
  {
    "quote": "We are absolutely a more profitable (and better) business because we have a mission beyond the sole pursuit of profits.",
    "author": "Dan Gilbert (founder Quicken Loans)"
  },
  {
    "quote": "I realized…that this was the land of opportunity and I could control my own fate.",
    "author": "Shahid Khan (owner Flex-N-Gate)"
  },
  {
    "quote": "We need to level the playing field so that everyone, everywhere, has a shot at the American dream.",
    "author": "Steve Case (cofounder, AOL)"
  },
  {
    "quote": "When I was growing up in the Soviet Union, my father told me if I wanted to learn about business, I had to start looking beyond my horizon.",
    "author": "Yuri Milner (founder, DST Global)"
  },
  {
    "quote": "Business opportunities are like buses, there’s always another one coming.",
    "author": "Richard Branson (Founder of Virgin Group)"
  },
  {
    "quote": "Believe in big ideas.",
    "author": "H. Ross Perot, Sr. (data pioneer, original populist-businessman presidential candidate)"
  },
  {
    "quote": "We ran our business differently and it worked–we paid our workers based on profitability, with bonuses based on aspirational targets.",
    "author": "Patrice Motsepe (Africa’s first black billionaire)"
  },
  {
    "quote": "No matter how small a project you work on, and no matter what it is, put your heart and soul and sense of responsibility into it.",
    "author": "Frank Gehry (world-shaping architect)"
  },
  {
    "quote": "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do.",
    "author": "Steve Jobs (Founder of Apple, Inc.)"
  },
  {
    "quote": "Finance can change the world and create millions of jobs by empowering people with ability.",
    "author": "Michael Milken (financial alchemist, junk-bond prodigy (Drexel Burnham Lambert))"
  },
  {
    "quote": "I have always chosen to ignore the conventional wisdom in favor of the ideas that interested me.",
    "author": "Sean Parker (cofounder, Napster; former president, Facebook)"
  },
  {
    "quote": "Part of learning is done through reading, and the other part, which is likely more important, is talking with bright minds from different fields.",
    "author": "Neil Shen (China’s preeminent venture capitalist)"
  },
  {
    "quote": "I’m the one who decides, but I like having lots of other people with whom I can discuss ideas.",
    "author": "Giorgio Armani (founder, Armani)"
  },
  {
    "quote": "If I were starting out now, I would look at what the competition is like in various fields – and then consider some that aren’t so popular.",
    "author": "Julian Robertson (founder, Tiger Management)"
  },
  {
    "quote": "Companies will succeed and fail based on their ability to translate data…into insights and actions and products and services.",
    "author": "Michael Dell, founder, Dell Technologies"
  },
  {
    "quote": "Early-stage entrepreneurs shouldn’t forget about [due diligence]. It almost stopped everything for me.",
    "author": "Sara Blakely (founder, Spanx)"
  },
  {
    "quote": "It’s just foolishness to not recognize the creativity that you can unlock in the corporate world.",
    "author": "Bono (lead singer, U2; cofounder, One, (Red), Elevation Partners, Rise Fund)"
  },
  {
    "quote": "We are better employees when we stop trying to be two people and bring our whole selves to work.",
    "author": "Sheryl Sandberg (COO, Facebook)"
  },
  {
    "quote": "You drill your fair share of dry holes, but you never lose your optimism.",
    "author": "T. Boone Pickens (oil wildcatter, hedge fund manager)"
  },
  {
    "quote": "I’m very clear that everything I do is authentic, practiced and viable–and the end result is generally beautiful.",
    "author": "Martha Stewart (American tastemaker)"
  },
  {
    "quote": "We need to have a beginner’s mind to think about what is happening.",
    "author": "Marc Benioff (founder, Salesforce)"
  },
  {
    "quote": "It’s not the employer who pays the wages. Employers only handle the money. It’s the customer who pays the wages.",
    "author": "Henry Ford"
  },
  {
    "quote": "I prefer to match words with deeds or let the facts speak for me.",
    "author": "Leonardo Del Vecchio (founder, Luxottica)"
  },
  {
    "quote": "In my daily life I try my best to practice what is known as Shin Zen Bi, which translates to Truth, Goodness, Beauty.",
    "author": "Tadashi Yanai (founder Fast Retailing (Uniqlo))"
  },
  {
    "quote": "Most people fail in science because they talk themselves out of doing the experiment. Ideas are a dime a dozen. What makes the difference is the execution of the idea.",
    "author": "Craig Venter (founder, Celera Genomics)"
  },
  {
    "quote": "Every industry today has to fight complacency, prepare to see the disruption coming and then be flexible enough to adapt swiftly.",
    "author": "Lakshmi Mittal (chairman, CEO, Arcelormittal)"
  },
  {
    "quote": "Today customers can tell whether product and service is good because there’s so much transparency.",
    "author": "Jeff Bezos (founder, Amazon)"
  },
  {
    "quote": "Sometimes the best way to make money is when most people say you are wrong and nuts.",
    "author": "Carl Icahn (founder, Icahn Enterprises)"
  },
  {
    "quote": "It’s not how much money you make, but how much money you keep, how hard it works for you, and how many generations you keep it for.",
    "author": "Robert Kiyosaki"
  },
  {
    "quote": "The habit of saving is itself an education; it fosters every virtue, teaches self-denial, cultivates the sense of order, trains to forethought, and so broadens the mind.",
    "author": "T.T. Munger"
  },
  {
    "quote": "Too many people spend money they earned..to buy things they don’t want..to impress people that they don’t like.",
    "author": "Will Rogers"
  },
  {
    "quote": "It’s good to have money and the things that money can buy, but it’s good, too, to check up once in a while and make sure that you haven’t lost the things that money can’t buy.",
    "author": "George Lorimer"
  },
  {
    "quote": "You can give without loving, but you cannot love without giving.",
    "author": "Amy Carmichael"
  },
  {
    "quote": "Waste your money and you’re only out of money, but waste your time and you’ve lost a part of your life.",
    "author": "Michael Leboeuf"
  },
  {
    "quote": "Wealth consists not in having great possessions, but in having few wants.",
    "author": "Epictetus"
  },
  {
    "quote": "I will tell you the secret to getting rich on Wall Street. You try to be greedy when others are fearful. And you try to be fearful when others are greedy.",
    "author": "Warren Buffett"
  },
  {
    "quote": "Love is like money… hard to find easy to lose.",
    "author": "Ally Mbululo"
  },
  {
    "quote": "Formal education will make you a living; self-education will make you a fortune.",
    "author": "Jim Rohn"
  },
  {
    "quote": "Everyday is a bank account, and time is our currency. No one is rich, no one is poor, we’ve got 24 hours each.",
    "author": "Christopher Rice"
  },
  {
    "quote": "Empty pockets never held anyone back. Only empty heads and empty hearts can do that.",
    "author": "Norman Vincent Peale"
  },
  {
    "quote": "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
    "author": "Mark Twain"
  },
  {
    "quote": "It is not the man who has too little, but the man who craves more, that is poor.",
    "author": "Seneca"
  },
  {
    "quote": "It’s good to have money and the things that money can buy, but it’s good, too, to check up once in a while and make sure that you haven’t lost the things that money can’t buy.",
    "author": "George Lorimer"
  },
  {
    "quote": "The real measure of your wealth is how much you’d be worth if you lost all your money.",
    "author": "Anonymous"
  },
  {
    "quote": "Money is a terrible master but an excellent servant.",
    "author": "P.T. Barnum"
  },
  {
    "quote": "Wealth is the ability to fully experience life.",
    "author": "Henry David Thoreau"
  },
  {
    "quote": "I never attempt to make money on the stock market. I buy on the assumption that they could close the market the next day and not reopen it for ten years.",
    "author": "Warren Buffett"
  },
  {
    "quote": "The stock market is filled with individuals who know the price of everything, but the value of nothing.",
    "author": "Phillip Fisher"
  },
  {
    "quote": "Wealth is not his that has it, but his that enjoys it.",
    "author": "Benjamin Franklin"
  },
  {
    "quote": "Know what you own, and know why you own it.",
    "author": "Peter Lynch"
  },
  {
    "quote": "Rich people have small TVs and big libraries, and poor people have small libraries and big TVs.",
    "author": "Zig Ziglar"
  },
  {
    "quote": "We make a living by what we get, but we make a life by what we give.",
    "author": "Winston Churchill"
  },
  {
    "quote": "Wealth after all is a relative thing since he that has little and wants less is richer than he that has much and wants more.",
    "author": "Charles Caleb Colton"
  },
  {
    "quote": "Every time you borrow money, you’re robbing your future self.",
    "author": "Nathan W. Morris"
  },
  {
    "quote": "Not everything that can be counted counts, and not everything that counts can be counted.",
    "author": "Albert Einstein"
  },
  {
    "quote": "What we really want to do is what we are really meant to do. When we do what we are meant to do, money comes to us, doors open for us, we feel useful, and the work we do feels like play to us.",
    "author": "Julia Cameron"
  },
  {
    "quote": "Time is more valuable than money. You can get more money, but you cannot get more time.",
    "author": "Jim Rohn"
  },
  {
    "quote": "Money is like muck—not good unless it be spread.",
    "author": "Francis Bacon"
  },
  {
    "quote": "Capital as such is not evil; it is its wrong use that is evil. Capital in some form or other will always be needed.",
    "author": "Gandhi"
  },
  {
    "quote": "When a fellow says it ain’t the money but the principle of the thing, it’s the money.",
    "author": "Artemus Ward"
  },
  {
    "quote": "I pity that man who wants a coat so cheap that the man or woman who produces the cloth shall starve in the process.",
    "author": "Benjamin Harrison"
  },
  {
    "quote": "All riches have their origin in mind. Wealth is in ideas—not money.",
    "author": "Robert Collier"
  },
  {
    "quote": "What’s keeping you from being rich? In most cases it’s simply a lack of belief. In order to become rich, you must believe you can do it, and you must take the actions necessary to achieve your goal.",
    "author": "Suze Orman"
  },
  {
    "quote": "The gratification of wealth is not found in mere possession or in lavish expenditure, but in its wise application.",
    "author": "Miguel de Cervantes"
  },
  {
    "quote": "Only when the last tree has died and the last river been poisoned and the last fish been caught will we realize we cannot eat money.",
    "author": "Indian Proverb"
  },
  {
    "quote": "One man to live in pleasure and wealth whilst all other weep and smart for it, that is the part not of a king, but of a jailor.",
    "author": "Thomas More"
  },
  {
    "quote": "The wealth of a soul is measured by how much it can feel… its poverty by how little.",
    "author": "Sherrilyn Kenyon"
  },
  {
    "quote": "When I had money everyone called me brother.",
    "author": "Polish proverb"
  },
  {
    "quote": "Many folks think they aren’t good at earning money, when what they don’t know is how to use it.",
    "author": "Frank A. Clark"
  },
  {
    "quote": "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.",
    "author": "Franklin D. Roosevelt"
  },
  {
    "quote": "Financial peace isn’t the acquisition of stuff. It’s learning to live on less than you make, so you can give money back and have money to invest. You can’t win until you do this.",
    "author": "Dave Ramsey"
  },
  {
    "quote": "Money is like love; it kills slowly and painfully the one who withholds it, and enlivens the other who turns it on his fellow man.",
    "author": "Kahlil Gibran"
  },
  {
    "quote": "I don’t pay good wages because I have a lot of money; I have a lot of money because I pay good wages.",
    "author": "Robert Bosch"
  },
  {
    "quote": "Money is good for nothing unless you know the value of it by experience.",
    "author": "P.T Barnum"
  },
  {
    "quote": "The more you learn, the more you earn.",
    "author": "Frank Clark"
  },
  {
    "quote": "All achievements, all earned riches, have their beginning in an idea.",
    "author": "Napoleon Hill"
  },
  {
    "quote": "Today the greatest single source of wealth is between your ears.",
    "author": "Brian Tracy"
  },
  {
    "quote": "Wealth is largely the result of habit.",
    "author": "John Jacob Astor"
  },
  {
    "quote": "I have about concluded that wealth is a state of mind, and that anyone can acquire a wealthy state of mind by thinking rich thoughts.",
    "author": "Edward Young"
  },
  {
    "quote": "An investment in knowledge pays the best dividends.",
    "author": "Benjamin Franklin"
  },
  {
    "quote": "And Si [Newhouse], who is a billionaire, said, “No, I’m not going to write a check for $1 million. Let’s pay them $100,000 a month.” And when I asked him why, he said, “I don’t want them to think that money comes that easily.”‘I don’t want them to think that money comes that easily.’",
    "author": "Larry Gagosian (the Picasso of art dealers)"
  },
  {
    "quote": "Happiness is not in the mere possession of money; it lies in the joy of achievement, in the thrill of creative effort.",
    "author": "Franklin D. Roosevelt"
  },
  {
    "quote": "Financial peace isn’t the acquisition of stuff. It’s learning to live on less than you make, so you can give money back and have money to invest. You can’t win until you do this.",
    "author": "Dave Ramsey"
  },
  {
    "quote": "A simple fact that is hard to learn is that the time to save money is when you have some.",
    "author": "Joe Moore"
  },
  {
    "quote": "It’s simple arithmetic: Your income can grow only to the extent that you do.",
    "author": "T. Harv Eker"
  },
  {
    "quote": "The only difference between a rich person and a poor person is how they use their time.",
    "author": "Robert Kiyosaki"
  },
  {
    "quote": "Before you can become a millionaire, you must learn to think like one. You must learn how to motivate yourself to counter fear with courage.",
    "author": "Thomas J. Stanley"
  },
  {
    "quote": "You can’t work three hours a week and make $100,000. Get rich quick doesn’t work. Crock pot mentality always defeats microwave mentality.",
    "author": "Dave Ramsey"
  },
  {
    "quote": "If you want to know what a man is really like, take notice of how he acts when he loses money.",
    "author": "Simone Weil"
  },
  {
    "quote": "You can only become truly accomplished at something you love. Don’t make money your goal. Instead, pursue the things you love doing, and then do them so well that people can’t take their eyes off you.",
    "author": "Maya Angelou"
  },
  {
    "quote": "If we command our wealth, we shall be rich and free. If our wealth commands us, we are poor indeed.",
    "author": "Edmund Burke"
  },
  {
    "quote": "No wealth can ever make a bad man at peace with himself.",
    "author": "Plato"
  },
  {
    "quote": "Not he who has much is rich, but he who gives much.",
    "author": "Erich Fromm"
  },
  {
    "quote": "My old father used to have a saying: If you make a bad bargain, hug it all the tighter.",
    "author": "Abraham Lincoln"
  },
  {
    "quote": "If you have trouble imagining a 20% loss in the stock market, you shouldn’t be in stocks.",
    "author": "John Bogle"
  },
  {
    "quote": "Investing should be more like watching paint dry or watching grass grow. If you want excitement, take $800 and go to Las Vegas.",
    "author": "Paul Samuelson"
  },
  {
    "quote": "Try to save something while your salary is small; it’s impossible to save after you begin to earn more.",
    "author": "Jack Benny"
  },
  {
    "quote": "The best thing money can buy is financial freedom.",
    "author": "Anonymous/Unknown"
  },
  {
    "quote": "Fortune sides with him who dares.",
    "author": "Virgil"
  },
  {
    "quote": "My formula for success is rise early, work late and strike oil.",
    "author": "JP Getty"
  },
  {
    "quote": "Buy when everyone else is selling and hold until everyone else is buying. That’s not just a catchy slogan. It’s the very essence of successful investing.",
    "author": "J. Paul Getty"
  },
  {
    "quote": "Wealth is like sea-water; the more we drink, the thirstier we become; and the same is true of fame.",
    "author": "Arthur Schopenhauer"
  },
  {
    "quote": "I’d like to live as a poor man with lots of money.",
    "author": "Pablo Picasso"
  },
  {
    "quote": "Frugality includes all the other virtues.",
    "author": "Cicero"
  },
  {
    "quote": "Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.",
    "author": "Ayn Rand"
  },
  {
    "quote": "An investment in knowledge pays the best interest.",
    "author": "Benjamin Franklin"
  },
  {
    "quote": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    "author": "Mahatma Gandhi"
  },
  {
    "quote": "Many people take no care of their money till they come nearly to the end of it, and others do just the same with their time.",
    "author": "Johann Wolfgang von Goethe"
  },
  {
    "quote": "He who loses money, loses much; He who loses a friend, loses much more; He who loses faith, loses all.",
    "author": "Eleanor Roosevelt"
  },
  {
    "quote": "If money is your hope for independence you will never have it. The only real security that a man will have in this world is a reserve of knowledge, experience, and ability.",
    "author": "Henry Ford"
  },
  {
    "quote": "How many millionaires do you know who have become wealthy by investing in savings accounts? I rest my case.",
    "author": "Robert G. Allen"
  },
  {
    "quote": "A wise person should have money in their head, but not in their heart.",
    "author": "Jonathan Swift"
  },
  {
    "quote": "If all the economists were laid end to end, they’d never reach a conclusion.",
    "author": "George Bernard Shaw"
  },
  {
    "quote": "Money often costs too much.",
    "author": "Ralph Waldo Emerson"
  },
  {
    "quote": "Annual income twenty pounds, annual expenditure nineteen six, result happiness. Annual income twenty pounds, annual expenditure twenty pound ought and six, result misery.",
    "author": "Charles Dickens"
  },
  {
    "quote": "When buying shares, ask yourself, would you buy the whole company?",
    "author": "Rene Rivkin"
  },
  {
    "quote": "Money never made a man happy yet, nor will it. The more a man has, the more he wants. Instead of filling a vacuum, it makes one.",
    "author": "Benjamin Franklin"
  },
  {
    "quote": "You must gain control over your money or the lack of it will forever control you.",
    "author": "Dave Ramsey"
  },
  {
    "quote": "I’m only rich because I know when I’m wrong…I basically have survived by recognizing my mistakes.",
    "author": "George Soros"
  },
  {
    "quote": "The Stock Market is designed to transfer money from the Active to the Patient.",
    "author": "Warren Buffett"
  },
  {
    "quote": "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
    "author": "Mark Twain"
  },
  {
    "quote": "Before you speak, listen. Before you write, think. Before you spend, earn. Before you invest, investigate. Before you criticize, wait. Before you pray, forgive. Before you quit, try. Before you retire, save. Before you die, give.",
    "author": "William A. Ward"
  },
  {
    "quote": "If you live for having it all, what you have is never enough.",
    "author": "Vicki Robin"
  },
  {
    "quote": "Don’t tell me what you value, show me your budget, and I’ll tell you what you value.",
    "author": "Joe Biden"
  },
  {
    "quote": "If you don’t value your time, neither will others. Stop giving away your time and talents. Value what you know & start charging for it.",
    "author": "Kim Garst"
  },
  {
    "quote": "The individual investor should act consistently as an investor and not as a speculator.",
    "author": "Ben Graham"
  },
  {
    "quote": "Never spend your money before you have it.",
    "author": "Thomas Jefferson"
  },
  {
    "quote": "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
    "author": "Buddha"
  },
  {
    "quote": "If you’re present and awake, you become this great thinker, this great worker. You become a fine-tuned machine.",
    "author": "Russell Simmons (hip-hop pioneer; serial entrepreneur; yoga guru)"
  },
  {
    "quote": "Wherever you go, there you are.",
    "author": "Jon Kabat-Zinn"
  },
  {
    "quote": "Live the actual moment. Only this actual moment is life.",
    "author": "Thích Nh?t H?nh"
  },
  {
    "quote": "Nothing ever goes away until it has taught us what we need to know.",
    "author": "Pema Chödrön"
  },
  {
    "quote": "Mindfulness isn’t difficult, we just need to remember to do it.",
    "author": "Sharon Salzberg"
  },
  {
    "quote": "The feeling that any task is a nuisance will soon disappear if it is done in mindfulness.",
    "author": "Thích Nh?t H?nh"
  },
  {
    "quote": "Meditation practice isn’t about trying to throw ourselves away and become something better. It’s about befriending who we are already.",
    "author": "Pema Chödrön"
  },
  {
    "quote": "Mindfulness is a way of befriending ourselves and our experience.",
    "author": "Jon Kabat-Zinn"
  },
  {
    "quote": "Let him who would enjoy a good future waste none of his present.",
    "author": "Roger Babson"
  },
  {
    "quote": "The present moment is the only time over which we have dominion.",
    "author": "Thích Nh?t H?nh"
  },
  {
    "quote": "Everything that has a beginning has an ending. Make your peace with that and all will be well.",
    "author": "Jack Kornfield"
  },
  {
    "quote": "Many people are alive but don’t touch the miracle of being alive.",
    "author": "Thích Nh?t H?nh"
  },
  {
    "quote": "Rejoicing in ordinary things is not sentimental or trite. It actually takes guts.",
    "author": "Pema Chödrön"
  },
  {
    "quote": "That’s life: starting over, one breath at a time.",
    "author": "Sharon Salzberg"
  },
  {
    "quote": "Meditation is not evasion; it is a serene encounter with reality.",
    "author": "Thích Nh?t H?nh"
  },
  {
    "quote": "You cannot control the results, only your actions.",
    "author": "Allan Lokos"
  },
  {
    "quote": "The best way to capture moments is to pay attention. This is how we cultivate mindfulness.",
    "author": "Jon Kabat-Zinn"
  },
  {
    "quote": "Altogether, the idea of meditation is not to create states of ecstasy or absorption, but to experience being.",
    "author": "Chögyam Trungpa"
  },
  {
    "quote": "What would it be like if I could accept life – accept this moment – exactly as it is?",
    "author": "Tara Brach"
  },
  {
    "quote": "Wisdom says we are nothing. Love says we are everything. Between these two our life flows.",
    "author": "Jack Kornfield"
  },
  {
    "quote": "How you look at it is pretty much how you’ll see it.",
    "author": "Rasheed Ogunlaru"
  },
  {
    "quote": "Your actions are your only true belongings.",
    "author": "Allan Lokos"
  },
  {
    "quote": "The Way is not in the sky, the Way is in the heart.",
    "author": "Buddha"
  },
  {
    "quote": "Much of spiritual life is self-acceptance, maybe all of it.",
    "author": "Jack Kornfield"
  },
  {
    "quote": "If you are facing in the right direction, all you need to do is keep on walking.",
    "author": "Buddha"
  },
  {
    "quote": "You can’t stop the waves, but you can learn to surf.",
    "author": "Jon Kabat-Zinn"
  },
  {
    "quote": "Treat everyone you meet as if they were you.",
    "author": "Doug Dillon"
  },
  {
    "quote": "A mind set in its ways is wasted.",
    "author": "Eric Schmidt"
  },
  {
    "quote": "The things that matter most in our lives are not fantastic or grand. They are moments when we touch one another.",
    "author": "Jack Kornfield"
  },
  {
    "quote": "You only lose what you cling to.",
    "author": "Buddha"
  },
  {
    "quote": "The stiller you are the calmer life is.",
    "author": "Rasheed Ogunlaru"
  },
  {
    "quote": "The only way to live is by accepting each minute as an unrepeatable miracle.",
    "author": "Tara Brach"
  },
  {
    "quote": "Training your mind to be in the present moment is the #1 key to making healthier choices.",
    "author": "Susan Albers"
  },
  {
    "quote": "Nothing is forever except change.",
    "author": "Buddha"
  },
  {
    "quote": "When you bow, you should just bow; when you sit, you should just sit; when you eat, you should just eat.",
    "author": "Shunryu Suzuki"
  },
  {
    "quote": "Surrender to what is. Let go of what was. Have faith in what will be.",
    "author": "Sonia Ricotti"
  },
  {
    "quote": "Attachment leads to suffering.",
    "author": "Buddha"
  },
  {
    "quote": "Be happy in the moment, that’s enough. Each moment is all we need, not more.",
    "author": "Mother Theresa"
  },
  {
    "quote": "Mindfulness is the aware, balanced acceptance of the present experience. It isn’t more complicated than that. It is opening to or receiving the present moment, pleasant or unpleasant, just as it is, without either clinging to it or rejecting it.",
    "author": "Sylvia Boorstein"
  },
  {
    "quote": "The only thing that is ultimately real about your journey is the step that you are taking at this moment. That’s all there ever is.",
    "author": "Eckhart Tolle"
  },
  {
    "quote": "Looking at beauty in the world, is the first step of purifying the mind.",
    "author": "Amit Ray"
  },
  {
    "quote": "Peace comes from within. Do not seek it without.",
    "author": "Buddha"
  },
  {
    "quote": "Mindfulness is simply being aware of what is happening right now without wishing it were different; enjoying the pleasant without holding on when it changes (which it will); being with the unpleasant without fearing it will always be this way (which it won’t).",
    "author": "James Baraz"
  },
  {
    "quote": "Being mindful means that we suspend judgment for a time, set aside our immediate goals for the future, and take in the present moment as it is rather than as we would like it to be.",
    "author": "Mark Williams"
  },
  {
    "quote": "The little things? The little moments? They aren’t little.",
    "author": "Jon Kabat-Zinn"
  },
  {
    "quote": "Every experience, no matter how bad it seems, holds within it a blessing of some kind. The goal is to find it.",
    "author": "Buddha"
  },
  {
    "quote": "The greatest communication is usually how we are rather than what we say.",
    "author": "Joseph Goldstein"
  },
  {
    "quote": "Mindful and creative, a child who has neither a past, nor examples to follow, nor value judgments, simply lives, speaks and plays in freedom.",
    "author": "Arnaud Desjardins"
  },
  {
    "quote": "Happiness is your nature. It is not wrong to desire it. What is wrong is seeking it outside when it is inside.",
    "author": "Ramana Maharshi"
  },
  {
    "quote": "There is something wonderfully bold and liberating about saying yes to our entire imperfect and messy life.",
    "author": "Tara Brach"
  },
  {
    "quote": "If you want to conquer the anxiety of life, live in the moment, live in the breath.",
    "author": "Amit Ray"
  },
  {
    "quote": "Just as a snake sheds its skin, we must shed our past over and over again.",
    "author": "Buddha"
  },
  {
    "quote": "This is the real secret of life — to be completely engaged with what you are doing in the here and now. And instead of calling it work, realize it is play.",
    "author": "Alan Watts"
  },
  {
    "quote": "Our life is shaped by our mind, for we become what we think.",
    "author": "Buddha"
  }
];
