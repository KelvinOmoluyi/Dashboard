import { useStateContext } from "../context/ContextProvider";
// NotificationsPage.jsx
import { useMemo, useState, useEffect } from "react";
import { notifications as seed, typeIcon, priorityPill } from "../data/index";

const tabOrder = ["All", "Mentions", "System", "Billing"];

function byTab(tab) {
  if (tab === "Mentions") return (n) => n.type === "mention" || n.type === "comment";
  if (tab === "System")   return (n) => n.type === "system" || n.type === "security";
  if (tab === "Billing")  return (n) => n.type === "billing";
  return () => true;
}



function groupByDay(items) {
  const today = new Date();
  const isSameDay = (a, b) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  const startOfWeek = new Date(today);
  startOfWeek.setDate(today.getDate() - ((today.getDay() + 6) % 7)); // Mon

  const buckets = { Today: [], "This week": [], Earlier: [] };
  items.forEach((n) => {
    const d = new Date(n.time);
    if (isSameDay(d, today)) buckets["Today"].push(n);
    else if (d >= startOfWeek) buckets["This week"].push(n);
    else buckets["Earlier"].push(n);
  });
  return buckets;
}


// mian component
const Notifications = () => {

    const{ setNavbarIndicator } = useStateContext();
    const [tab, setTab] = useState("All");
    const [q, setQ] = useState("");
    const items = useMemo(() => seed
            .filter(byTab(tab))
            .filter((n) =>
            (n.title + n.message).toLowerCase().includes(q.trim().toLowerCase())
            )
            .sort((a, b) => new Date(b.time) - new Date(a.time)),
        [tab, q]
    );
    
    useEffect(() => {
        setNavbarIndicator("notifications")
    })

    const grouped = groupByDay(items);

    return (
        <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
                <h2 className="text-lg font-semibold text-white">Notifications</h2>
                <span className="text-xs px-2 py-0.5 rounded-lg bg-white/5 text-white/60 border border-white/10">
                    {seed.filter(n => !n.read).length} unread
                </span>
                </div>
                <div className="flex items-center gap-2">
                <button className="px-3 py-1.5 rounded-lg bg-white/5 text-white/80 border border-white/10 hover:bg-white/10">
                    Mark all as read
                </button>
                <button className="px-3 py-1.5 rounded-lg bg-white/5 text-white/60 border border-white/10 hover:bg-white/10">
                    Settings
                </button>
            </div>
        </div>


      <div className="flex items-center gap-2">
        {tabOrder.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={
              "px-3 py-1.5 rounded-lg border " +
              (tab === t
                ? "bg-purple-500/15 border-purple-500/30 text-white"
                : "bg-white/5 border-white/10 text-white/60 hover:bg-white/10")
            }
          >
            {t}
          </button>
        ))}

        <div className="ml-auto flex items-center gap-2">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search notifications"
            className="h-9 w-64 rounded-lg bg-white/5 border border-white/10 text-sm text-white/80 placeholder:text-white/40 px-3 outline-none focus:border-purple-500/40"
          />
        </div>
      </div>


      <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-2">
        {Object.entries(grouped).map(([section, arr]) =>
          arr.length ? (
            <div key={section} className="py-2">
              <div className="px-2 pb-2 text-xs uppercase tracking-wider text-white/40">
                {section}
              </div>

              <ul className="divide-y divide-white/5">
                {arr.map((n) => (
                  <li
                    key={n.id}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/[0.04] transition"
                  >

                    <span
                      className={
                        "mt-2 h-2 w-2 rounded-full " +
                        (n.read ? "bg-transparent" : "bg-purple-400")
                      }
                    />


                    <div className="shrink-0 h-9 w-9 rounded-xl flex items-center justify-center bg-white/5 border border-white/10">
                      <span className="text-lg">{typeIcon[n.type] || "🔔"}</span>
                    </div>


                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <div className="truncate text-white/90">{n.title}</div>
                        <span
                        style={{ fontSize: "0.8rem", fontWeight: 500 }}
                        className={
                            "px-2 py-0.5 rounded-full " +
                            (priorityPill[n.priority] || "bg-white/5 text-white/50 border border-white/10")
                        }
                        >
                          {n.priority}
                        </span>
                        {n.cta?.label && (
                          <a
                            style={{ fontSize: "0.8rem", fontWeight: 500 }}
                            href={n.cta.href}
                            className="ml-1 px-2 py-0.5 rounded-full bg-purple-500/15 text-purple-200 border border-purple-500/20 hover:bg-purple-500/25"
                          >
                            {n.cta.label}
                          </a>
                        )}
                        <span className="ml-auto text-xs text-white/40">
                          {new Date(n.time).toLocaleString(undefined, {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true,
                            month: "short",
                            day: "2-digit"
                          })}
                        </span>
                      </div>
                      <div className="mt-1 line-clamp-2">
                        <p>{n.message}</p>
                      </div>
                    </div>


                    <div className="flex gap-1">
                      <button
                        title="Mark as read"
                        className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:bg-white/10"
                      >
                        ✓
                      </button>
                      <button
                        title="Pin"
                        className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:bg-white/10"
                      >
                        📌
                      </button>
                      <button
                        title="Delete"
                        className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 text-white/60 hover:bg-white/10"
                      >
                        ✕
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : null
        )}

        {!items.length && (
          <div className="p-10 text-center text-white/50">
            No notifications match your filters.
          </div>
        )}
      </div>
    </div>
  );
}

export default Notifications
