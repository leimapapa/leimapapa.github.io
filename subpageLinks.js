const links = [
    {
        title: "Robo Wars",
        description: "Create a brain for a fighting robot! Compete against other robots! Have a tournament! Learn basic code!",
        url: "/robo-wars",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="tool-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="22" y1="12" x2="18" y2="12"></line><line x1="6" y1="12" x2="2" y2="12"></line><line x1="12" y1="6" x2="12" y2="2"></line><line x1="12" y1="22" x2="12" y2="18"></line></svg>`,
        category: "Games & Simulations"
    },
    {
        title: "Flock Paper Scissors",
        description: "Flocking simulation resolving the a game of rock paper scissors",
        url: "/FlockPaperScissors",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="tool-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"></circle><circle cx="6" cy="18" r="3"></circle><line x1="20" y1="4" x2="8.12" y2="15.88"></line><line x1="14.47" y1="14.48" x2="20" y2="20"></line><line x1="8.12" y1="8.12" x2="12" y2="12"></line></svg>`,
        category: "Games & Simulations"
    },
    {
        title: "Baby Growth Tracker",
        description: "Track your baby's growth! Use and share with the due date in the URL to keep track of how big it's getting.",
        url: "/BabyGrowthTracker",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="tool-icon" viewBox="0 0 100 100" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
<path d="M 36 62.8 C 14 94 45 98 59 98 C 79 98 83 77 83 64 C 80 26 63 4 43 4 C 18 4 14 29 28 47 C 34 55 36.6 59.2 36 60.9 Z"></path>
<g fill="#fff" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.5">
<path class="umbilical" d="M 60 43 Q 55 47 53 58 C 42.5 64.4 41.2 60.7 36.5 60.9 V 62.8 C 47.2 63.5 50.9 64.2 54 65 Q 59 80 69 70 C 77 61 68 37 60 43;  M 56 48 Q 47 57 46.5 63.3 C 44 63.8 43.6 62.7 36.5 60.9 V 62.8 C 42.2 63.5 43.8 66 46.5 66.3 Q 65 89 71 74 C 78 57 71 33 56 48">
</path>
<path class="bodyHead" d="M 64.3 71.3 Q 53.2 51.8 44 61.4 Q 40.7 65.3 46.8 79.8 Q 46 77.8 45.2 76 A 1 1 0 0 0 43 76.6 L 43.5 77.1 L 42.9 76.6 A 1 1 0 0 0 41.9 77.6 L 42.5 78.1 L 41.9 77.6 A 1 1 0 0 0 41.1 79 L 41.9 79.6 L 41.1 79 A 1 1 0 0 0 40.5 80.3 Q 43.3 84.1 47.9 85.3 Q 52.8 88.5 53.1 84.5 Q 49.9 79.1 49 70.8 Q 49.9 79.1 53.1 84.5 Q 60 89.6 66.2 87.9 Q 79.6 81 77.8 53.9 Q 76 42.9 67.6 37.4 Q 64.5 35.8 63.1 33.3 C 55.4 -1.1 26.5 15.1 28.2 30.9 Q 29.1 42.5 39.3 43.7 Q 41.7 43.3 42.2 45.4 Q 42.5 49 45.4 47.6 A 1 1 0 0 0 48 47.3 A 1 1 0 0 0 50.1 47.8 Q 51.4 49 52.1 48.4 Q 58 43.2 56.1 36.5">
</path>
<path class="body" d="M 64.3 71.3 Q 53.2 51.8 44 61.4 Q 40.7 65.3 46.8 79.8 Q 46 77.8 45.2 76 A 1 1 0 0 0 43 76.6 L 43.5 77.1 L 42.9 76.6 A 1 1 0 0 0 41.9 77.6 L 42.5 78.1 L 41.9 77.6 A 1 1 0 0 0 41.1 79 L 41.9 79.6 L 41.1 79 A 1 1 0 0 0 40.5 80.3 Q 43.3 84.1 47.9 85.3 Q 52.8 88.5 53.1 84.5 Q 49.9 79.1 49 70.8 Q 49.9 79.1 53.1 84.5 Q 60 89.6 66.2 87.9 Q 79.6 81 77.8 53.9 Q 76 42.9 67.6 37.4 Q 64.5 35.8 63.1 33.3">
</path>
<path class="arm" d="M 59.2 41.6 Q 53.3 44 52.2 48.6 Q 52.5 51 49.9 54 Q 47.5 52.5 45.8 49.3 Q 44.9 48.4 44.3 47.3 A 1 1 0 0 0 42.4 46 Q 41.9 43.8 41.1 44 Q 37.9 43.7 37.1 48.5 Q 37.6 50.4 41.6 52.4 Q 41.8 55.7 44.2 60.6 Q 48.7 68.3 53.9 62.1 Q 59.4 56.3 61.4 52.4">
</path>
<path class="head" d="M 63.2 33.3 C 55.4 -1.1 26.5 15.1 28.2 30.9 Q 29.1 42.5 39.3 43.7 Q 41.7 43.3 42.2 45.4 Q 42.5 49 45.4 47.6 A 1 1 0 0 0 48 47.3 A 1 1 0 0 0 50.1 47.8 Q 51.4 49 52.1 48.4 Q 58 43.2 56.1 36.5">
</path>
<path class="eyeEar" d="M 41.9 42.6 Q 43.5 41.3 44.1 39.7M 45.8 29.4 C 45.8 25.7 55.1 25.2 51.5 34.3M 47.5 29.6 C 48.6 27.2 51 28.8 50.5 31.1">
</path>
</g>
</svg>`,
        category: "Fun & Random"
    },
    {
        title: "Emoji Spinner",
        description: "Roulette Wheel of Emojis",
        url: "/EmojiSpinner",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="tool-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line></svg>`,
        category: "Fun & Random"
    },
    {
        title: "Street Name Generator",
        description: "Create a street name with this handy randomizer",
        url: "/StreetNameGenerator",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="tool-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22v-15h-10v-5h20v5h-10m-7 -2.5h4m3 0 h3m3 0h1" /></svg>`,
        category: "Fun & Random"
    },
    {
        title: "Blitz Play Randomizer",
        description: "Create a unique custom NFL Blitz play with this handy randomizer",
        url: "/BlitzPlayRandomizer",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="tool-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M 3 2 h 18 v 20 h -18 z m 3 10 h 12 m -1 2 a 1 1 0 0 0 0 3 a 1 1 0 0 0 0 -3 m 0 -4 v -2 l -7 -3 m -3 9 a 1 1 0 0 0 0 3 a 1 1 0 0 0 0 -3 m 0 -4 v -5 l 2 3 m 3 6 a 1 1 0 0 0 0 3 a 1 1 0 0 0 0 -3 m 0 -4 v -5" /></svg>`,
        category: "Fun & Random"
    },
    {
        title: "Inflation Calculator",
        description: "Dead simple. Not exactly dead accurate",
        url: "/InflationCalculator",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="tool-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>`,
        category: "Widgets & Clocks"
    },
    {
        title: "Blood Donation Wheel",
        description: "Handy visual tool for determining which blood types can donate blood to others",
        url: "/blooddonationwheel",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="tool-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle></svg>`,
        category: "Widgets & Clocks"
    },
    {
        title: "SWOT Analysis Tool",
        description: "Who wants to struggle with a stupid powerpoint template when you can make a SWOT analysis with this simple tool and screenshot it",
        url: "/SWOT",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="tool-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>`,
        category: "Widgets & Clocks"
    },
    {
        title: "Circle Clock",
        description: "Unique widget displaying the time in a circle",
        url: "/CircleClock",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="tool-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
        category: "Widgets & Clocks"
    },
    {
        title: "Train Clock",
        description: "Unique widget displaying the time as trains",
        url: "/TrainClock",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="tool-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M 19 18 l 1 0 a 1 2 0 0 0 0 -5 l -1 0 v -3 a 0.5 0.5 0 0 0 0 -1 h -3 a 0.5 0.5 0 0 0 0 1 v 3 l -2 0 a 1 1 0 0 0 -2 0 h -3 v -2 a 0.5 0.5 0 0 0 0 -1 h -6 a 0.5 0.5 0 0 0 0 1 v 6 a 1 1 0 0 0 1 1 a 1 1 0 0 0 5 0 a 1 1 0 0 0 5 0 a 1 1 0 0 0 5 0 z m -2 -11 a 1 1 0 0 0 -1 -2.5 a 4 4 0 0 0 -5 -1 a 1 1 0 0 0 -5 3.5 a 2 2 0 0 0 3 0 a 3 3 0 0 0 4 0 c 2 -1 2 1 4 0 z" /></svg>`,
        category: "Widgets & Clocks"
    },
    {
        title: "Christmas Countdown",
        description: "How long til Christmas?",
        url: "/ChristmasCountdown",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="tool-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M 2 13 l 10 -5 l 10 5 m -18 -1 l -1 10 m 17 -10 l 1 10 m -9 0 l -2 -3 l 4 0 z m -1 -4 a 1 1 0 0 1 2 0 m -7 4 l 0 -7 a 1 1 0 1 1 1 1 l 1 6z m 9 0 l 2 -3 a 1 1 0 1 1 1 -1 l 0 4z m -3 -16.5 l 0 -4 m -2 1 l 4 2 m 0 -2 l -4 2"/></svg>`,
        category: "Widgets & Clocks"
    },
    {
        title: "SVG Path Point Converter",
        description: "Edit an SVG's path points to a set number",
        url: "/SVGPathPointConverter",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="tool-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" y1="21" x2="4" y2="14"></line><line x1="4" y1="10" x2="4" y2="3"></line><line x1="12" y1="21" x2="12" y2="12"></line><line x1="12" y1="8" x2="12" y2="3"></line><line x1="20" y1="21" x2="20" y2="16"></line><line x1="20" y1="12" x2="20" y2="3"></line><line x1="1" y1="14" x2="7" y2="14"></line><line x1="9" y1="8" x2="15" y2="8"></line><line x1="17" y1="16" x2="23" y2="16"></line></svg>`,
        category: "SVG Tools"
    },
    {
        title: "SVG to PNG/JPEG",
        description: "Convert an SVG string to JPEG or PNG",
        url: "/SVGtoPNG",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="tool-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>`,
        category: "SVG Tools"
    },
    {
        title: "SVG to GIF",
        description: "Convert an animated SVG into a GIF",
        url: "/SVGtoGIF",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" class="tool-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>`,
        category: "SVG Tools"
    }
];
