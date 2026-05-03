"use client"
import { useState, useCallback } from "react"
const ACCENT = "#6366f1"
export default function AdminPage() {
  const [password, setPassword] = useState("")
  const [authed, setAuthed] = useState(false)
  const [authError, setAuthError] = useState("")
  const [data, setData] = useState(null)
  const [tab, setTab] = useState("programming")
  const [saving, setSaving] = useState(false)
  const [saveMsg, setSaveMsg] = useState("")
  const [editingIdx, setEditingIdx] = useState(null)
  const [editDraft, setEditDraft] = useState(null)
  const [adding, setAdding] = useState(false)
  const fetchData = useCallback(async (pw) => {
    const res = await fetch("/api/cms", { headers: { "x-cms-password": pw } })
    if (res.status === 401) { setAuthError("Wrong password"); return }
    setData(await res.json()); setAuthed(true)
  }, [])
  const save = async (nd) => {
    setSaving(true); setSaveMsg("")
    const res = await fetch("/api/cms", { method: "POST", headers: { "x-cms-password": password, "Content-Type": "application/json" }, body: JSON.stringify(nd) })
    setSaving(false); setSaveMsg(res.ok ? "✓ Saved!" : "✗ Error"); setTimeout(() => setSaveMsg(""), 3000)
  }
  const deleteItem = (idx) => {
    if (!data) return
    const nd = { ...data }
    if (tab === "programming") nd.programmingProjects = nd.programmingProjects.filter((_, i) => i !== idx)
    else if (tab === "consulting") nd.consultingProjects = nd.consultingProjects.filter((_, i) => i !== idx)
    else nd.sideMissions = nd.sideMissions.filter((_, i) => i !== idx)
    setData(nd); save(nd)
  }
  const startEdit = (idx) => {
    const items = tab === "programming" ? data.programmingProjects : tab === "consulting" ? data.consultingProjects : data.sideMissions
    setEditDraft(JSON.parse(JSON.stringify(items[idx]))); setEditingIdx(idx); setAdding(false)
  }
  const startAdd = () => {
    const blank = tab === "programming"
      ? { slug: "", title: "", description: "", techStack: [], github: "", demo: "", fullDescription: "", features: [], architecture: "" }
      : tab === "consulting"
      ? { slug: "", title: "", description: "", role: "", outcome: "", fullDescription: "", challenges: [], solutions: [], technologies: [], duration: "", teamSize: "" }
      : { title: "", tagline: "", description: "", highlights: [{ label: "", value: "" }], services: [], link: "#", color: "from-pink-500/20 to-orange-500/20", accentColor: "text-pink-500" }
    setEditDraft(blank); setEditingIdx(null); setAdding(true)
  }
  const commitEdit = () => {
    if (!data || !editDraft) return
    const nd = { ...data }
    if (adding) {
      if (tab === "programming") nd.programmingProjects = [...nd.programmingProjects, editDraft]
      else if (tab === "consulting") nd.consultingProjects = [...nd.consultingProjects, editDraft]
      else nd.sideMissions = [...nd.sideMissions, editDraft]
    } else {
      if (tab === "programming") nd.programmingProjects = nd.programmingProjects.map((p, i) => i === editingIdx ? editDraft : p)
      else if (tab === "consulting") nd.consultingProjects = nd.consultingProjects.map((p, i) => i === editingIdx ? editDraft : p)
      else nd.sideMissions = nd.sideMissions.map((p, i) => i === editingIdx ? editDraft : p)
    }
    setData(nd); save(nd); setEditingIdx(null); setAdding(false); setEditDraft(null)
  }
  const upd = (key, val) => setEditDraft(d => ({ ...d, [key]: val }))
  const s = { input: { width: "100%", padding: "8px 12px", background: "#09090b", border: "1px solid #27272a", borderRadius: 8, color: "#fff", fontSize: 14, boxSizing: "border-box", fontFamily: "inherit" } }
  if (!authed) return (
    <div style={{ minHeight: "100vh", background: "#0f0f11", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "system-ui" }}>
      <div style={{ background: "#18181b", border: "1px solid #27272a", borderRadius: 16, padding: 40, width: 360 }}>
        <div style={{ fontSize: 28, fontWeight: 700, color: "#fff", marginBottom: 8 }}>Admin CMS</div>
        <div style={{ color: "#71717a", marginBottom: 28, fontSize: 14 }}>Enter your password to continue</div>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} onKeyDown={e => e.key === "Enter" && fetchData(password)} placeholder="Password" style={{ ...s.input, marginBottom: 12 }} />
        {authError && <div style={{ color: "#f87171", fontSize: 13, marginBottom: 8 }}>{authError}</div>}
        <button onClick={() => fetchData(password)} style={{ width: "100%", padding: "10px 0", background: ACCENT, color: "#fff", border: "none", borderRadius: 8, fontWeight: 600, fontSize: 15, cursor: "pointer" }}>Login</button>
      </div>
    </div>
  )
  if (!data) return <div style={{ color: "#fff", padding: 40 }}>Loading...</div>
  const tabs = [{ id: "programming", label: "Programming" }, { id: "consulting", label: "Consulting" }, { id: "sidemissions", label: "Side Missions" }]
  const items = tab === "programming" ? data.programmingProjects : tab === "consulting" ? data.consultingProjects : data.sideMissions
  return (
    <div style={{ minHeight: "100vh", background: "#0f0f11", fontFamily: "system-ui", color: "#fff" }}>
      <div style={{ borderBottom: "1px solid #27272a", padding: "16px 32px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontWeight: 700, fontSize: 20 }}>Portfolio CMS</div>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          {saveMsg && <span style={{ color: saveMsg.startsWith("✓") ? "#4ade80" : "#f87171", fontSize: 13 }}>{saveMsg}</span>}
          <a href="/" style={{ color: "#71717a", fontSize: 13, textDecoration: "none" }}>← Back to Portfolio</a>
        </div>
      </div>
      <div style={{ padding: 32 }}>
        <div style={{ display: "flex", gap: 8, marginBottom: 32, borderBottom: "1px solid #27272a" }}>
          {tabs.map(t => (
            <button key={t.id} onClick={() => { setTab(t.id); setEditingIdx(null); setAdding(false); setEditDraft(null) }}
              style={{ padding: "8px 20px", background: "none", border: "none", borderBottom: tab === t.id ? `2px solid ${ACCENT}` : "2px solid transparent", color: tab === t.id ? "#fff" : "#71717a", fontWeight: tab === t.id ? 600 : 400, fontSize: 14, cursor: "pointer", marginBottom: -1 }}>
              {t.label}
            </button>
          ))}
        </div>
        {(editingIdx !== null || adding) && editDraft ? (
          <div style={{ background: "#18181b", border: "1px solid #27272a", borderRadius: 16, padding: 28, maxWidth: 720 }}>
            <div style={{ fontSize: 16, fontWeight: 700, marginBottom: 24 }}>{adding ? "Add New" : "Edit"}</div>
            {["title", tab !== "sidemissions" ? "slug" : null, "description", tab === "consulting" ? "role" : null, tab === "consulting" ? "outcome" : null, tab === "sidemissions" ? "tagline" : null, tab === "sidemissions" ? "link" : null].filter(Boolean).map(key => (
              <div key={key} style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontSize: 12, color: "#a1a1aa", marginBottom: 6, fontWeight: 500, textTransform: "capitalize" }}>{key}</label>
                {["description", "fullDescription", "architecture", "outcome"].includes(key)
                  ? <textarea value={editDraft[key] || ""} onChange={e => upd(key, e.target.value)} rows={3} style={{ ...s.input, resize: "vertical" }} />
                  : <input value={editDraft[key] || ""} onChange={e => upd(key, e.target.value)} style={s.input} />}
              </div>
            ))}
            {(tab === "programming" || tab === "consulting") && (
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontSize: 12, color: "#a1a1aa", marginBottom: 6, fontWeight: 500 }}>{tab === "programming" ? "Tech Stack" : "Technologies"} (one per line)</label>
                <textarea value={(editDraft[tab === "programming" ? "techStack" : "technologies"] || []).join("\n")} onChange={e => upd(tab === "programming" ? "techStack" : "technologies", e.target.value.split("\n"))} rows={4} style={{ ...s.input, resize: "vertical" }} />
              </div>
            )}
            {tab === "sidemissions" && (
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontSize: 12, color: "#a1a1aa", marginBottom: 6, fontWeight: 500 }}>Services (one per line)</label>
                <textarea value={(editDraft.services || []).join("\n")} onChange={e => upd("services", e.target.value.split("\n"))} rows={4} style={{ ...s.input, resize: "vertical" }} />
              </div>
            )}
            {tab === "sidemissions" && (
              <div style={{ marginBottom: 16 }}>
                <label style={{ display: "block", fontSize: 12, color: "#a1a1aa", marginBottom: 10, fontWeight: 500 }}>Highlights</label>
                {(editDraft.highlights || []).map((h, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, marginBottom: 8 }}>
                    <input value={h.label} onChange={e => { const hl = [...editDraft.highlights]; hl[i] = { ...hl[i], label: e.target.value }; upd("highlights", hl) }} placeholder="Label" style={{ ...s.input, flex: 1 }} />
                    <input value={h.value} onChange={e => { const hl = [...editDraft.highlights]; hl[i] = { ...hl[i], value: e.target.value }; upd("highlights", hl) }} placeholder="Value" style={{ ...s.input, flex: 1 }} />
                    <button onClick={() => upd("highlights", editDraft.highlights.filter((_, j) => j !== i))} style={{ padding: "6px 12px", background: "#3f0f0f", border: "1px solid #7f1d1d", borderRadius: 6, color: "#f87171", cursor: "pointer" }}>×</button>
                  </div>
                ))}
                <button onClick={() => upd("highlights", [...(editDraft.highlights || []), { label: "", value: "" }])} style={{ padding: "6px 14px", background: "#27272a", border: "none", borderRadius: 6, color: "#a1a1aa", fontSize: 13, cursor: "pointer" }}>+ Add</button>
              </div>
            )}
            <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
              <button onClick={commitEdit} disabled={saving} style={{ padding: "10px 28px", background: ACCENT, border: "none", borderRadius: 8, color: "#fff", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>{saving ? "Saving..." : "Save"}</button>
              <button onClick={() => { setEditingIdx(null); setAdding(false); setEditDraft(null) }} style={{ padding: "10px 20px", background: "#27272a", border: "none", borderRadius: 8, color: "#a1a1aa", fontSize: 14, cursor: "pointer" }}>Cancel</button>
            </div>
          </div>
        ) : (
          <>
            <div style={{ display: "grid", gap: 12, marginBottom: 24 }}>
              {items.map((item, idx) => (
                <div key={idx} style={{ background: "#18181b", border: "1px solid #27272a", borderRadius: 12, padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 4 }}>{item.title}</div>
                    <div style={{ color: "#71717a", fontSize: 13, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.description || item.tagline}</div>
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    <button onClick={() => startEdit(idx)} style={{ padding: "6px 16px", background: "#27272a", border: "none", borderRadius: 6, color: "#fff", fontSize: 13, cursor: "pointer" }}>Edit</button>
                    <button onClick={() => { if (confirm(`Delete "${item.title}"?`)) deleteItem(idx) }} style={{ padding: "6px 16px", background: "#3f0f0f", border: "1px solid #7f1d1d", borderRadius: 6, color: "#f87171", fontSize: 13, cursor: "pointer" }}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={startAdd} style={{ padding: "10px 24px", background: ACCENT, border: "none", borderRadius: 8, color: "#fff", fontWeight: 600, fontSize: 14, cursor: "pointer" }}>+ Add New</button>
          </>
        )}
      </div>
    </div>
  )
}
