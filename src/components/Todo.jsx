import { useState, useEffect } from "react";

const PHASES = [
  {
    id: "foundation",
    label: "Phase 1",
    title: "Foundation",
    weeks: "Week 1–2",
    color: "#3b82f6",
    days: [
      {
        day: "Monday",
        focus: "Backend – Auth",
        tasks: [
          { id: "m1", text: "Review/write User model (mongoo schema)", done: false },
          { id: "m2", text: "Build POST /api/auth/register route", done: false },
          { id: "m3", text: "Build POST /api/auth/login route + JWT generation", done: false },
          { id: "m4", text: "Test both routes in Postman / Thunder Client", done: false },
        ],
      },
      {
        day: "Tuesday",
        focus: "Backend – Middleware & Protected Routes",
        tasks: [
          { id: "t1", text: "Write protectRoute middleware (verify JWT)", done: false },
          { id: "t2", text: "Add GET /api/auth/me route", done: false },
          { id: "t3", text: "Test protected route rejects unauthenticated requests", done: false },
          { id: "t4", text: "Store JWT in HTTP-only cookie (security upgrade)", done: false },
        ],
      },
      {
        day: "Wednesday",
        focus: "Frontend – Auth UI",
        tasks: [
          { id: "w1", text: "Build Login page component", done: false },
          { id: "w2", text: "Build Register page component", done: false },
          { id: "w3", text: "Wire up UserContext / localStorage token", done: false },
          { id: "w4", text: "Test ProtectedRoute redirects correctly", done: false },
        ],
      },
      {
        day: "Thursday",
        focus: "Tweets – Model & API",
        tasks: [
          { id: "th1", text: "Create Tweet model (text, author, likes, createdAt)", done: false },
          { id: "th2", text: "POST /api/tweets – create tweet", done: false },
          { id: "th3", text: "GET /api/tweets – get all tweets (paginated)", done: false },
          { id: "th4", text: "DELETE /api/tweets/:id – delete own tweet", done: false },
        ],
      },
      {
        day: "Friday",
        focus: "Feed UI",
        tasks: [
          { id: "f1", text: "Build TweetCard component", done: false },
          { id: "f2", text: "Fetch feed with TanStack Query (useQuery)", done: false },
          { id: "f3", text: "Build CreateTweet form with useMutation", done: false },
          { id: "f4", text: "Optimistic update on tweet post", done: false },
        ],
      },
      {
        day: "Weekend",
        focus: "Review & Polish",
        tasks: [
          { id: "s1", text: "Fix any bugs from the week", done: false },
          { id: "s2", text: "Write notes on what you learned", done: false },
          { id: "s3", text: "Commit & push to GitHub with a descriptive message", done: false },
          { id: "s4", text: "Plan next week's goals", done: false },
        ],
      },
    ],
  },
  {
    id: "social",
    label: "Phase 2",
    title: "Social Features",
    weeks: "Week 3–4",
    color: "#8b5cf6",
    days: [
      {
        day: "Monday",
        focus: "Likes",
        tasks: [
          { id: "lm1", text: "POST /api/tweets/:id/like – toggle like", done: false },
          { id: "lm2", text: "Update TweetCard to show like count + toggle state", done: false },
          { id: "lm3", text: "Invalidate query cache after like mutation", done: false },
          { id: "lm4", text: "Prevent liking own tweet (optional)", done: false },
        ],
      },
      {
        day: "Tuesday",
        focus: "Follow System",
        tasks: [
          { id: "lt1", text: "Add followers/following arrays to User model", done: false },
          { id: "lt2", text: "POST /api/users/:id/follow – toggle follow", done: false },
          { id: "lt3", text: "Build FollowButton component", done: false },
          { id: "lt4", text: "Filter home feed to show only followed users' tweets", done: false },
        ],
      },
      {
        day: "Wednesday",
        focus: "User Profiles",
        tasks: [
          { id: "lw1", text: "GET /api/users/:username – public profile route", done: false },
          { id: "lw2", text: "Build ProfilePage component", done: false },
          { id: "lw3", text: "Show user's tweets on their profile", done: false },
          { id: "lw4", text: "Show followers / following counts", done: false },
        ],
      },
      {
        day: "Thursday",
        focus: "Notifications",
        tasks: [
          { id: "lth1", text: "Create Notification model (type, from, to, tweet ref)", done: false },
          { id: "lth2", text: "Emit notification on like/follow events", done: false },
          { id: "lth3", text: "GET /api/notifications – fetch user notifications", done: false },
          { id: "lth4", text: "Build NotificationsPage UI", done: false },
        ],
      },
      {
        day: "Friday",
        focus: "Search & Explore",
        tasks: [
          { id: "lf1", text: "GET /api/users/search?q= – search users", done: false },
          { id: "lf2", text: "GET /api/tweets/search?q= – search tweets", done: false },
          { id: "lf3", text: "Build SearchBar component with debounce", done: false },
          { id: "lf4", text: "Wire up ExplorePage with results", done: false },
        ],
      },
      {
        day: "Weekend",
        focus: "Review & Polish",
        tasks: [
          { id: "ls1", text: "Fix bugs, improve error messages", done: false },
          { id: "ls2", text: "Add loading skeletons to feed & profile", done: false },
          { id: "ls3", text: "Commit all work to GitHub", done: false },
          { id: "ls4", text: "Plan Phase 3 goals", done: false },
        ],
      },
    ],
  },
  {
    id: "advanced",
    label: "Phase 3",
    title: "Advanced Features",
    weeks: "Week 5–6",
    color: "#10b981",
    days: [
      {
        day: "Monday",
        focus: "Comments / Replies",
        tasks: [
          { id: "am1", text: "Add replies[] or parentTweet ref to Tweet model", done: false },
          { id: "am2", text: "POST /api/tweets/:id/reply", done: false },
          { id: "am3", text: "GET /api/tweets/:id/replies", done: false },
          { id: "am4", text: "Build TweetDetail page with reply thread", done: false },
        ],
      },
      {
        day: "Tuesday",
        focus: "Image Uploads",
        tasks: [
          { id: "at1", text: "Set up Cloudinary account & SDK", done: false },
          { id: "at2", text: "POST /api/upload – handle multipart/form-data", done: false },
          { id: "at3", text: "Add image field to Tweet model", done: false },
          { id: "at4", text: "Add image preview to CreateTweet form", done: false },
        ],
      },
      {
        day: "Wednesday",
        focus: "Profile Editing",
        tasks: [
          { id: "aw1", text: "PUT /api/users/me – update bio, avatar, banner", done: false },
          { id: "aw2", text: "Build EditProfileModal component", done: false },
          { id: "aw3", text: "Upload avatar/banner to Cloudinary", done: false },
          { id: "aw4", text: "Reflect changes live in UI (invalidate queries)", done: false },
        ],
      },
      {
        day: "Thursday",
        focus: "Bookmarks",
        tasks: [
          { id: "ath1", text: "Add bookmarks[] to User model", done: false },
          { id: "ath2", text: "POST /api/tweets/:id/bookmark – toggle bookmark", done: false },
          { id: "ath3", text: "GET /api/users/me/bookmarks", done: false },
          { id: "ath4", text: "Build BookmarksPage UI", done: false },
        ],
      },
      {
        day: "Friday",
        focus: "Real-time (Stretch Goal)",
        tasks: [
          { id: "af1", text: "Set up Socket.io on Express server", done: false },
          { id: "af2", text: "Emit 'new_tweet' event to connected clients", done: false },
          { id: "af3", text: "Connect Socket.io in React, update feed live", done: false },
          { id: "af4", text: "Show 'X new tweets' banner like Twitter does", done: false },
        ],
      },
      {
        day: "Weekend",
        focus: "Deployment Prep",
        tasks: [
          { id: "as1", text: "Set up .env files (dev vs prod)", done: false },
          { id: "as2", text: "Deploy backend to Render / Railway", done: false },
          { id: "as3", text: "Deploy frontend to Vercel / Netlify", done: false },
          { id: "as4", text: "Final end-to-end test, update README", done: false },
        ],
      },
    ],
  },
];

const today = new Date().toLocaleDateString("en-US", { weekday: "long" });

export default function Todo() {
  const [activePhase, setActivePhase] = useState("foundation");
  const [activeDay, setActiveDay] = useState(today === "Sunday" ? "Weekend" : today === "Saturday" ? "Weekend" : today);
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem("twitter-clone-tasks");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem("twitter-clone-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const toggleTask = (taskId) => {
    setTasks((prev) => ({ ...prev, [taskId]: !prev[taskId] }));
  };

  const phase = PHASES.find((p) => p.id === activePhase);
  const dayData = phase?.days.find((d) => d.day === activeDay) || phase?.days[0];

  const totalTasks = phase?.days.reduce((sum, d) => sum + d.tasks.length, 0) || 0;
  const doneTasks = phase?.days.reduce(
    (sum, d) => sum + d.tasks.filter((t) => tasks[t.id]).length,
    0
  ) || 0;
  const progress = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;

  const dayDone = dayData?.tasks.filter((t) => tasks[t.id]).length || 0;
  const dayTotal = dayData?.tasks.length || 0;

  return (
    <div style={{ fontFamily: "'Inter', system-ui, sans-serif", background: "#0f0f13", minHeight: "100vh", color: "#e2e8f0" }}>
      {/* Header */}
      <div style={{ borderBottom: "1px solid #1e1e2e", padding: "20px 24px", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg, #3b82f6, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>
          𝕏
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: 16, letterSpacing: "-0.01em" }}>Twitter Clone · Daily Tasks</div>
          <div style={{ fontSize: 12, color: "#64748b" }}>MERN Stack Build Tracker</div>
        </div>
        <div style={{ marginLeft: "auto", textAlign: "right" }}>
          <div style={{ fontSize: 12, color: "#64748b" }}>Today</div>
          <div style={{ fontSize: 13, fontWeight: 600, color: "#94a3b8" }}>{new Date().toLocaleDateString("en-US", { weekday: "long", month: "short", day: "numeric" })}</div>
        </div>
      </div>

      <div style={{ maxWidth: 720, margin: "0 auto", padding: "24px 16px" }}>
        {/* Phase Tabs */}
        <div style={{ display: "flex", gap: 8, marginBottom: 24 }}>
          {PHASES.map((p) => (
            <button
              key={p.id}
              onClick={() => { setActivePhase(p.id); setActiveDay(dayData?.day || "Monday"); }}
              style={{
                flex: 1, padding: "10px 8px", borderRadius: 10, border: "1px solid",
                borderColor: activePhase === p.id ? p.color : "#1e1e2e",
                background: activePhase === p.id ? `${p.color}18` : "#141420",
                color: activePhase === p.id ? p.color : "#475569",
                fontWeight: 600, fontSize: 13, cursor: "pointer", transition: "all 0.15s",
              }}
            >
              <div style={{ fontSize: 10, opacity: 0.7, marginBottom: 2 }}>{p.label}</div>
              <div>{p.title}</div>
              <div style={{ fontSize: 10, opacity: 0.6, marginTop: 2 }}>{p.weeks}</div>
            </button>
          ))}
        </div>

        {/* Phase Progress */}
        <div style={{ background: "#141420", borderRadius: 12, padding: "16px 20px", marginBottom: 20, border: "1px solid #1e1e2e" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
            <span style={{ fontSize: 13, color: "#94a3b8" }}>Phase progress</span>
            <span style={{ fontSize: 13, fontWeight: 700, color: phase?.color }}>{doneTasks}/{totalTasks} tasks</span>
          </div>
          <div style={{ height: 6, background: "#1e1e2e", borderRadius: 99 }}>
            <div style={{ height: "100%", width: `${progress}%`, background: `linear-gradient(90deg, ${phase?.color}, ${phase?.color}aa)`, borderRadius: 99, transition: "width 0.3s" }} />
          </div>
          <div style={{ fontSize: 11, color: "#475569", marginTop: 6 }}>{progress}% complete</div>
        </div>

        {/* Day Selector */}
        <div style={{ display: "flex", gap: 6, marginBottom: 20, overflowX: "auto", paddingBottom: 4 }}>
          {phase?.days.map((d) => {
            const dDone = d.tasks.filter((t) => tasks[t.id]).length;
            const isToday = d.day === (today === "Saturday" || today === "Sunday" ? "Weekend" : today);
            return (
              <button
                key={d.day}
                onClick={() => setActiveDay(d.day)}
                style={{
                  padding: "8px 14px", borderRadius: 8, border: "1px solid",
                  borderColor: activeDay === d.day ? phase.color : isToday ? "#2a2a40" : "#1e1e2e",
                  background: activeDay === d.day ? `${phase.color}20` : isToday ? "#1a1a2e" : "#141420",
                  color: activeDay === d.day ? phase.color : isToday ? "#94a3b8" : "#475569",
                  fontSize: 12, fontWeight: 600, cursor: "pointer", whiteSpace: "nowrap",
                  transition: "all 0.15s",
                }}
              >
                {d.day.slice(0, 3)}
                {dDone === d.tasks.length && dDone > 0 && (
                  <span style={{ marginLeft: 4, color: "#10b981" }}>✓</span>
                )}
              </button>
            );
          })}
        </div>

        {/* Day Card */}
        {dayData && (
          <div style={{ background: "#141420", borderRadius: 16, border: `1px solid ${phase.color}30`, overflow: "hidden" }}>
            {/* Day Header */}
            <div style={{ padding: "18px 20px", borderBottom: "1px solid #1e1e2e", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div>
                <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em" }}>{dayData.day}</div>
                <div style={{ fontSize: 13, color: phase.color, marginTop: 2, fontWeight: 500 }}>{dayData.focus}</div>
              </div>
              <div style={{
                width: 48, height: 48, borderRadius: 12,
                background: dayDone === dayTotal ? "#10b98120" : `${phase.color}15`,
                border: `1px solid ${dayDone === dayTotal ? "#10b981" : phase.color}30`,
                display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: dayDone === dayTotal ? "#10b981" : phase.color, lineHeight: 1 }}>{dayDone}</div>
                <div style={{ fontSize: 9, color: "#475569", marginTop: 1 }}>of {dayTotal}</div>
              </div>
            </div>

            {/* Tasks */}
            <div style={{ padding: "12px 8px" }}>
              {dayData.tasks.map((task, i) => {
                const done = !!tasks[task.id];
                return (
                  <div
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    style={{
                      display: "flex", alignItems: "flex-start", gap: 12, padding: "12px 14px",
                      borderRadius: 10, cursor: "pointer", transition: "background 0.1s",
                      background: done ? "#10b98108" : "transparent",
                      marginBottom: 2,
                    }}
                  >
                    <div style={{
                      width: 20, height: 20, borderRadius: 6, border: `2px solid`,
                      borderColor: done ? "#10b981" : "#2a2a40",
                      background: done ? "#10b981" : "transparent",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, marginTop: 1, transition: "all 0.15s",
                    }}>
                      {done && <span style={{ color: "#000", fontSize: 11, fontWeight: 800 }}>✓</span>}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 13, color: done ? "#475569" : "#cbd5e1", textDecoration: done ? "line-through" : "none", lineHeight: 1.5 }}>
                        {task.text}
                      </div>
                    </div>
                    <div style={{ fontSize: 10, color: "#2a2a40", flexShrink: 0, marginTop: 4 }}>{String(i + 1).padStart(2, "0")}</div>
                  </div>
                );
              })}
            </div>

            {/* Footer */}
            <div style={{ padding: "12px 20px", borderTop: "1px solid #1e1e2e", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: 11, color: "#475569" }}>
                {dayDone === dayTotal ? "🎉 Day complete!" : `${dayTotal - dayDone} tasks remaining`}
              </div>
              {dayDone > 0 && dayDone < dayTotal && (
                <button
                  onClick={(e) => { e.stopPropagation(); dayData.tasks.forEach(t => { if (!tasks[t.id]) toggleTask(t.id); }); }}
                  style={{ fontSize: 11, color: phase.color, background: "none", border: "none", cursor: "pointer", padding: 0 }}
                >
                  Complete all →
                </button>
              )}
            </div>
          </div>
        )}

        {/* Reset */}
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <button
            onClick={() => { if (confirm("Reset all task progress?")) setTasks({}); }}
            style={{ fontSize: 11, color: "#334155", background: "none", border: "none", cursor: "pointer" }}
          >
            Reset progress
          </button>
        </div>
      </div>
    </div>
  );
}
