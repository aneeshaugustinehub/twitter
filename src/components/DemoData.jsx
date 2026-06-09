

export default function DemoData(){

const initialBookmarks = [
  {
    id: 1, init: "AK", name: "Alex Kumar", handle: "@alexkumar", verified: false, time: "2h",
    text: "React Router v6 layout routes are seriously underrated. No more manually tracking paths to show/hide navbar. Just nest your routes inside a layout component with <Outlet /> and you're done. 🔥",
    likes: 847, reposts: 213, replies: 64, liked: false, color: 0,
    tags: ["React", "WebDev"],
  },
  {
    id: 2, init: "SC", name: "Science Corner", handle: "@sciencecorner", verified: true, time: "5h",
    text: "NASA just confirmed signs of ancient water activity on Mars. This changes everything we thought about the possibility of life on the red planet. Thread incoming 🧵",
    likes: 12400, reposts: 3200, replies: 890, liked: true, color: 1,
    tags: ["Science", "Space"],
  },
  {
    id: 3, init: "JD", name: "Jamie Dev", handle: "@jamiedev", verified: false, time: "1d",
    text: "Hot take: Tailwind CSS + Vite is the best frontend stack in 2026. \n\n- Zero config\n- Instant HMR\n- Tiny bundle\n- Utility-first CSS\n\nI'm not going back. Sorry not sorry.",
    likes: 3210, reposts: 891, replies: 247, liked: false, color: 2,
    tags: ["Tailwind", "Vite"],
  },
  {
    id: 4, init: "ML", name: "Maria L", handle: "@marialopes", verified: false, time: "2d",
    text: "useContext vs Zustand — a real comparison after using both in production:\n\nuseContext: great for small apps, causes re-renders everywhere\nZustand: minimal boilerplate, selective subscriptions, way faster\n\nFor your Twitter clone: start with Context, migrate when you feel the pain.",
    likes: 5680, reposts: 1420, replies: 318, liked: true, color: 3,
    tags: ["React", "State"],
  },
  {
    id: 5, init: "TM", name: "Tech Mavericks", handle: "@techmavericks", verified: true, time: "3d",
    text: "10 things every React developer should know in 2026:\n\n1. Layout routes (React Router v6)\n2. useFormState hook\n3. Server Components\n4. Suspense boundaries\n5. Concurrent rendering\n\nSave this. You'll need it. 🧵",
    likes: 18900, reposts: 6700, replies: 1240, liked: false, color: 4,
    tags: ["React", "Tips"],
  },
  {
    id: 6, init: "OW", name: "Open Web", handle: "@openweb", verified: false, time: "5d",
    text: "CSS variables are criminally underused. You can do light/dark mode, theming, and dynamic values all in one place without JavaScript. The web platform is more powerful than most people think.",
    likes: 2140, reposts: 743, replies: 129, liked: false, color: 5,
    tags: ["CSS", "WebDev"],
  },
];


//messages
const avatarColors = [
  "bg-blue-500", "bg-purple-500", "bg-green-500",
  "bg-orange-500", "bg-pink-500", "bg-teal-500",
];

const conversations = [
  { id: 1, init: "AK", name: "Alex Kumar", handle: "@alexkumar", lastMsg: "yo did you push the changes?", time: "2m", unread: 3, online: true, verified: false },
  { id: 2, init: "TM", name: "Tech Mavericks", handle: "@techmavericks", lastMsg: "Check out our latest thread!", time: "15m", unread: 1, online: false, verified: true },
  { id: 3, init: "SR", name: "Sara R", handle: "@sarardev", lastMsg: "the useEffect fix worked, thanks!", time: "1h", unread: 0, online: true, verified: false },
  { id: 4, init: "JD", name: "Jamie Dev", handle: "@jamiedev", lastMsg: "nested routes are so clean now", time: "3h", unread: 0, online: false, verified: false },
  { id: 5, init: "NB", name: "News Brief", handle: "@newsbrief", lastMsg: "You've been mentioned in a post", time: "5h", unread: 0, online: false, verified: true },
  { id: 6, init: "SC", name: "Science Corner", handle: "@sciencecorner", lastMsg: "did you see the mars news?", time: "8h", unread: 0, online: true, verified: false },
  { id: 7, init: "ML", name: "Maria L", handle: "@marialopes", lastMsg: "useContext or zustand?", time: "1d", unread: 0, online: false, verified: false },
];

const initialMessages = {
  1: [
    { id: 1, from: "them", text: "hey! have you seen the new react docs?", time: "10:21 AM" },
    { id: 2, from: "me", text: "yeah just went through them, the new useFormState hook looks solid", time: "10:22 AM" },
    { id: 3, from: "them", text: "right? way cleaner than managing form state manually", time: "10:23 AM" },
    { id: 4, from: "me", text: "been using it in the twitter clone actually", time: "10:24 AM" },
    { id: 5, from: "them", text: "yo did you push the changes?", time: "10:25 AM" },
  ],
  2: [
    { id: 1, from: "them", text: "Hey! Thanks for following Tech Mavericks", time: "9:00 AM" },
    { id: 2, from: "them", text: "Check out our latest thread!", time: "9:01 AM" },
  ],
  3: [
    { id: 1, from: "me", text: "try adding an empty dependency array to useEffect", time: "Yesterday" },
    { id: 2, from: "them", text: "ohh that makes sense", time: "Yesterday" },
    { id: 3, from: "them", text: "the useEffect fix worked, thanks!", time: "Yesterday" },
  ],
  4: [
    { id: 1, from: "them", text: "dude layout routes in v6 are insane", time: "3h ago" },
    { id: 2, from: "me", text: "right? i was doing it manually before lol", time: "3h ago" },
    { id: 3, from: "them", text: "nested routes are so clean now", time: "3h ago" },
  ],
  5: [{ id: 1, from: "them", text: "You've been mentioned in a post", time: "5h ago" }],
  6: [
    { id: 1, from: "them", text: "did you see the mars news?", time: "8h ago" },
  ],
  7: [
    { id: 1, from: "them", text: "quick q — useContext or zustand for your twitter clone?", time: "1d ago" },
    { id: 2, from: "me", text: "useContext for now, might move to zustand later", time: "1d ago" },
    { id: 3, from: "them", text: "useContext or zustand?", time: "1d ago" },
  ],
};

//notifications
const notifications = [
  { type: "like", unread: true, users: ["AK", "SR", "MJ"], names: "Alex Kumar, Sara R, and 12 others", text: "liked your post", time: "2m", content: '"Just shipped the new feature — routing is finally clean"' },
  { type: "follow", unread: true, users: ["TM"], names: "Tech Mavericks", text: "followed you", time: "5m", content: null },
  { type: "repost", unread: true, users: ["NB", "SC"], names: "NewsBreak and Science Corner", text: "reposted your post", time: "18m", content: '"React Router v6 layout routes are underrated"' },
  { type: "reply", unread: true, users: ["JD"], names: "Jamie Dev", text: "replied to your post", time: "34m", content: '"totally agree, nested routes changed everything for me"' },
  { type: "like", unread: false, users: ["PK", "RV"], names: "PK, RV, and 5 others", text: "liked your reply", time: "1h", content: '"use <Outlet /> — it just works"' },
  { type: "mention", unread: false, users: ["CW"], names: "Code Weekly", text: "mentioned you", time: "2h", content: '"shoutout to @you for the great thread on protected routes!"' },
  { type: "follow", unread: false, users: ["DX", "FY"], names: "DevX and FullStackY", text: "followed you", time: "3h", content: null },
  { type: "like", unread: false, users: ["AA"], names: "Aneesh A", text: "liked your post", time: "5h", content: '"Tailwind + Vite is my stack now, not going back"' },
  { type: "repost", unread: false, users: ["OW"], names: "Open Web", text: "reposted your post", time: "8h", content: '"CSS variables are criminally underused"' },
  { type: "reply", unread: false, users: ["ML"], names: "Maria L", text: "replied to your post", time: "12h", content: '"have you tried using useContext for this?"' },
];

    //Explore
const trends = [
  { cat: "Technology · Trending", tag: "#OpenAI", posts: "245K" },
  { cat: "Politics · Trending", tag: "#Election2026", posts: "189K" },
  { cat: "Sports · Trending", tag: "#ChampionsLeague", posts: "312K" },
  { cat: "Entertainment · Trending", tag: "#Oscars2026", posts: "98K" },
  { cat: "Technology · Trending", tag: "#AppleEvent", posts: "77K" },
  { cat: "Science · Trending", tag: "#MarsLanding", posts: "142K" },
  { cat: "Business · Trending", tag: "#Bitcoin", posts: "204K" },
  { cat: "Music · Trending", tag: "#NewAlbum", posts: "63K" },
];

const users = [
  { init: "TM", color: "bg-blue-500", name: "Tech Mavericks", handle: "@techmavericks", bio: "Cutting-edge tech news" },
  { init: "SC", color: "bg-purple-500", name: "Science Corner", handle: "@sciencecorner", bio: "Daily science discoveries" },
  { init: "NB", color: "bg-green-500", name: "News Brief", handle: "@newsbrief", bio: "Breaking news, fast" },
];

const news = [
  { cat: "Technology", title: "OpenAI releases new reasoning model with record benchmark scores", time: "2h ago" },
  { cat: "World", title: "G7 leaders meet in Rome to discuss global climate targets for 2030", time: "4h ago" },
  { cat: "Business", title: "Global markets rally as inflation data comes in lower than expected", time: "5h ago" },
  { cat: "Science", title: "NASA confirms signs of ancient water activity on Mars surface", time: "7h ago" },
  { cat: "Tech", title: "Apple announces spatial computing update at WWDC 2026", time: "9h ago" },
];

const sports = [
  { cat: "Football", title: "Real Madrid beats Manchester City 3–1 in Champions League final", time: "1h ago" },
  { cat: "Cricket", title: "India wins test series against Australia 3–1 in Melbourne", time: "3h ago" },
  { cat: "Basketball", title: "LeBron James announces retirement after 22 seasons in the NBA", time: "6h ago" },
  { cat: "Formula 1", title: "Max Verstappen wins Monaco GP for the fifth consecutive year", time: "8h ago" },
];

const entertainment = [
  { cat: "Movies", title: "Avatar 3 trailer breaks 24-hour record with 180 million views", time: "2h ago" },
  { cat: "Music", title: "Taylor Swift drops surprise album with 16 tracks overnight", time: "4h ago" },
  { cat: "Television", title: "Stranger Things season 5 finale draws record 45 million viewers", time: "6h ago" },
  { cat: "Awards", title: "Oscars 2026 nominations announced — biggest surprises revealed", time: "10h ago" },
];

    return()
}