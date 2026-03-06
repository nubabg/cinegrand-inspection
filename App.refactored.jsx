import { useCallback, useEffect, useState } from "react";

const HALLS = ["???? 1", "???? 2", "???? 3", "???? 4", "???? 5", "???? 6"];
const HALL_ITEMS = [
  { id: "cup_holders", label: "Cup Holders", icon: "?", desc: "???????? ?? ????" },
  { id: "seats", label: "???????", icon: "??", desc: "????????? ? ?????????" },
  { id: "carpet", label: "?????", icon: "??", desc: "??? ? ??????" },
  { id: "armrests", label: "????????????", icon: "?", desc: "???????????" },
  { id: "floor", label: "??? (???????)", icon: "??", desc: "?????? ????????" },
  { id: "screen_area", label: "???? ?? ??????", icon: "??", desc: "?????? ????" },
];
const BATHROOM_ITEMS = [
  { id: "trash_bins", label: "???????", icon: "???", desc: "?????????? ? ???????????" },
  { id: "general_clean", label: "???? ??????????", icon: "??", desc: "?????? ???????????" },
  { id: "toilet_paper", label: "???????? ??????", icon: "??", desc: "?????????" },
  { id: "soap", label: "?????", icon: "??", desc: "????????" },
  { id: "mirrors", label: "????????", icon: "??", desc: "??? ?????" },
  { id: "floor_bathroom", label: "???", icon: "??", desc: "????? ??????????" },
  { id: "sinks", label: "?????", icon: "??", desc: "???? ? ?????" },
];
const BATHROOMS = ["?????? ???????? - ??????", "????? ???????? - ??????", "?????? ???????? - ???? 1", "????? ???????? - ???? 1", "?????????? ????????"];
const STATUS = { CLEAN: "clean", DIRTY: "dirty" };
const SCREENS = { HOME: "home", HALL: "hall", BATHROOM: "bathroom", HISTORY: "history", STATS: "stats" };
const STORAGE_KEYS = { records: "cg_v4_records", sheetsUrl: "cg_sheets_url", syncHistory: "cg_sync_hist" };
const DELETE_PASSWORD = "CineGrand2025";
const T = { black: "#080808", deep: "#0e0e0e", card: "#131313", surface: "#1a1a1a", border: "#2a2a2a", gold: "#c9a227", white: "#fff", offWhite: "#f5f0e8", gray1: "#999", gray2: "#555", green: "#22c55e", greenDk: "#166534", red: "#ef4444", redDk: "#7f1d1d", blue: "#60a5fa" };
const goldGrad = "linear-gradient(135deg, #c9a227 0%, #e8c35a 40%, #c9a227 70%, #8a6c10 100%)";
const cardShadow = "0 8px 32px #00000060, 0 2px 8px #00000040";
const HALL_CONFIG = { type: "hall", screen: SCREENS.HALL, title: "???????? ?? ????????", sectionTitle: "???????? ?? ??????", locations: HALLS, items: HALL_ITEMS, accent: T.gold, icon: "??" };
const BATHROOM_CONFIG = { type: "bathroom", screen: SCREENS.BATHROOM, title: "???????? ?? ????????? ?????", sectionTitle: "???????? ?? ??????????", locations: BATHROOMS, items: BATHROOM_ITEMS, accent: T.blue, icon: "??" };
const CONFIGS = { hall: HALL_CONFIG, bathroom: BATHROOM_CONFIG };
const HOME_CARDS = [
  { ...HALL_CONFIG, label: "????????", sub: "???? 1–6", tags: ["Cup Holders", "???????", "?????", "???", "?????", "????????????"] },
  { ...BATHROOM_CONFIG, label: "????????? ?????", sub: "????????", tags: ["???????", "??????????", "??????", "?????", "?????", "????????"] },
];
const RANGE_TABS = [["all", "??????"], ["today", "????"], ["week", "???????"], ["month", "?????"]];
const inputStyle = { background: "#0c0c0c", border: `1px solid ${T.border}`, borderRadius: 8, color: T.white, padding: "12px 14px", fontSize: 14, fontFamily: "'DM Sans',sans-serif", width: "100%", outline: "none" };

const fmt = (iso) => new Date(iso).toLocaleString("bg-BG", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
const pct = (issues, total) => (total > 0 ? Math.round((issues / total) * 100) : 0);
const isFilled = (value) => value === STATUS.CLEAN || value === STATUS.DIRTY;
const getConfig = (type) => CONFIGS[type] ?? HALL_CONFIG;
const getDirtyItems = (record) => record.items.filter((item) => item.status === STATUS.DIRTY);
const buildRecord = ({ type, location, inspector, items, itemState, notes }) => ({ id: Date.now(), type, location, inspector: inspector.trim(), timestamp: new Date().toISOString(), items: items.map((item) => ({ id: item.id, label: item.label, icon: item.icon, status: itemState[item.id] })), notes });
const filterRecords = (records, range) => { const now = new Date(); return records.filter((record) => { const date = new Date(record.timestamp); if (range === "today") return date.toDateString() === now.toDateString(); if (range === "week") return now - date < 7 * 86400000; if (range === "month") return now - date < 30 * 86400000; return true; }); };
const computeStats = (records) => { const byLocation = {}; const byItem = {}; records.forEach((record) => { if (!byLocation[record.location]) byLocation[record.location] = { total: 0, issues: 0 }; record.items.forEach((item) => { byLocation[record.location].total += 1; if (!byItem[item.label]) byItem[item.label] = { total: 0, issues: 0 }; byItem[item.label].total += 1; if (item.status === STATUS.DIRTY) { byLocation[record.location].issues += 1; byItem[item.label].issues += 1; } }); }); return { byLocation, byItem }; };
const sendToSheets = async (url, record) => { if (!url?.startsWith("https://")) return { success: false, error: "????????? URL" }; await fetch(url, { method: "POST", mode: "no-cors", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ record }) }); return { success: true }; };

const injectCSS = () => {
  if (document.getElementById("cg-styles")) return;
  const styleTag = document.createElement("style");
  styleTag.id = "cg-styles";
  styleTag.textContent = `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&family=DM+Sans:wght@300;400;500;600;700&family=Oswald:wght@300;400;500;600;700&display=swap');
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { background: #080808; }
    .cg-nav { position: sticky; top: 0; z-index: 100; }
    .cg-card, .cg-panel { background: #131313; border: 1px solid #2a2a2a; border-radius: 12px; box-shadow: 0 8px 32px #00000060, 0 2px 8px #00000040; }
    .cg-card { overflow: hidden; cursor: pointer; transition: transform .2s ease, box-shadow .2s ease; }
    .cg-card:hover { transform: translateY(-4px); box-shadow: 0 16px 48px #00000080; }
    .cg-table-row:hover, .cg-item-row:hover { background: #1c1c1c !important; }
    .cg-outline-btn, .cg-gold-btn, .cg-status-btn { transition: all .18s ease; }
    .cg-outline-btn:hover, .cg-gold-btn:hover, .cg-status-btn:hover { filter: brightness(1.08); }
    .cg-sidebar { width: 88px; flex-shrink: 0; }
    .cg-sidebar-inner { position: sticky; top: 80px; min-height: 320px; border: 1px solid #c9a22722; border-radius: 12px; background: linear-gradient(180deg, #1a1408 0%, #0e0e0e 50%, #1a1408 100%); display: flex; align-items: center; justify-content: center; }
    .cg-fade-in { animation: fadeInUp .35s ease both; }
    @keyframes fadeInUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
    @media (max-width: 1100px) { .cg-sidebar { display: none; } .cg-main-grid { grid-template-columns: 1fr !important; } }
    @media (max-width: 700px) { .cg-action-grid, .cg-stats-grid, .cg-chart-grid { grid-template-columns: 1fr !important; } .cg-table-scroll { overflow-x: auto; } }
  `;
  document.head.appendChild(styleTag);
};

function Logo() {
  return <div style={{ display: "flex", alignItems: "center", gap: 12 }}><div style={{ width: 44, height: 44, background: goldGrad, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: 18, color: T.black }}>CG</div><div><div style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, color: T.gold, fontWeight: 700, letterSpacing: ".18em", textTransform: "uppercase" }}>Cine Grand</div><div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 9, color: T.gray2, letterSpacing: ".18em", textTransform: "uppercase" }}>Hygiene Control System</div></div></div>;
}
function SideBar() { return <div className="cg-sidebar"><div className="cg-sidebar-inner"><div style={{ writingMode: "vertical-rl", color: T.gold, letterSpacing: ".2em", fontFamily: "'Oswald',sans-serif" }}>CINE GRAND</div></div></div>; }
function SectionTitle({ children, color = T.gold }) { return <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}><div style={{ width: 3, height: 20, background: color, borderRadius: 2 }} /><span style={{ fontFamily: "'Oswald',sans-serif", color, fontSize: 13, letterSpacing: ".18em", textTransform: "uppercase" }}>{children}</span></div>; }
function Panel({ children, style }) { return <div className="cg-panel" style={{ padding: 20, ...style }}>{children}</div>; }
function NavBtn({ children, onClick, color = T.gold, solid = false }) { return <button className={solid ? "cg-gold-btn" : "cg-outline-btn"} onClick={onClick} style={solid ? { background: goldGrad, border: "none", color: T.black, borderRadius: 8, padding: "9px 18px", fontSize: 12, fontWeight: 700, cursor: "pointer", textTransform: "uppercase" } : { background: "transparent", border: `1px solid ${color}44`, color, borderRadius: 8, padding: "8px 16px", fontSize: 12, fontWeight: 600, cursor: "pointer", textTransform: "uppercase" }}>{children}</button>; }
function Nav({ tabs, activeTab, onTab, right }) { return <div className="cg-nav"><div style={{ background: goldGrad, padding: "0 32px", height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}><Logo /><div style={{ display: "flex", gap: 6, alignItems: "center" }}>{right}</div></div>{tabs ? <div style={{ background: T.deep, borderBottom: `1px solid ${T.border}`, padding: "0 32px", display: "flex", gap: 4, height: 44 }}>{tabs.map(([value, label]) => <button key={value} onClick={() => onTab(value)} style={{ background: "transparent", border: "none", color: activeTab === value ? T.gold : T.gray1, fontWeight: activeTab === value ? 700 : 400, cursor: "pointer", padding: "0 16px", borderBottom: activeTab === value ? `2px solid ${T.gold}` : "2px solid transparent" }}>{label}</button>)}</div> : null}</div>; }
function StatusBtn({ status, current, onPress }) { const isClean = status === STATUS.CLEAN; const isActive = current === status; const accent = isClean ? T.green : T.red; const accentDark = isClean ? T.greenDk : T.redDk; return <button className="cg-status-btn" onClick={() => onPress(status)} style={{ flex: 1, padding: "12px 6px", background: isActive ? `linear-gradient(135deg,${accent},${accentDark})` : `${accentDark}22`, border: `1px solid ${isActive ? accent : `${accentDark}88`}`, borderRadius: 8, color: isActive ? T.white : accent, fontSize: 13, fontWeight: 700, cursor: "pointer" }}>{isClean ? "? ?????" : "? ???????"}</button>; }
function CheckRow({ item, value, onChange, highlight }) { const dirty = value === STATUS.DIRTY; const clean = value === STATUS.CLEAN; return <div className="cg-item-row" style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", marginBottom: 4, background: dirty ? "#1a0808" : clean ? "#081408" : highlight ? "#141008" : T.card, borderLeft: `3px solid ${dirty ? T.red : clean ? T.green : highlight ? "#f59e0b" : T.border}`, borderRadius: 8 }}><div style={{ width: 38, height: 38, background: T.surface, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>{item.icon}</div><div style={{ flex: 1 }}><div style={{ color: T.white, fontSize: 14, fontWeight: 600 }}>{item.label}</div><div style={{ color: T.gray2, fontSize: 11 }}>{item.desc}</div>{highlight ? <div style={{ color: "#f59e0b", fontSize: 10, marginTop: 2 }}>? ???????????? ????</div> : null}</div><div style={{ display: "flex", gap: 6, width: 220 }}><StatusBtn status={STATUS.CLEAN} current={value} onPress={onChange} /><StatusBtn status={STATUS.DIRTY} current={value} onPress={onChange} /></div></div>; }
function SyncDot({ status }) { const cfg = { syncing: { color: T.gold, label: "?" }, synced: { color: T.green, label: "?" }, error: { color: T.red, label: "?" } }[status]; return cfg ? <span style={{ color: cfg.color, fontWeight: 700 }}>{cfg.label}</span> : <span style={{ color: T.gray2 }}>—</span>; }
function Toast({ toast }) { if (!toast) return null; return <div style={{ position: "fixed", bottom: 24, right: 24, padding: "14px 22px", background: toast.type === "error" ? `${T.redDk}ee` : `${T.greenDk}ee`, border: `1px solid ${toast.type === "error" ? T.red : T.green}`, borderRadius: 10, color: T.white, fontWeight: 600, zIndex: 9999 }}>{toast.msg}</div>; }

export default function App() {
  const [screen, setScreen] = useState(SCREENS.HOME);
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState(null);
  const [showValidation, setShowValidation] = useState(false);
  const [statsRange, setStatsRange] = useState("all");
  const [deleteModal, setDeleteModal] = useState(false);
  const [deletePass, setDeletePass] = useState("");
  const [deleteErr, setDeleteErr] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [inspectionType, setInspectionType] = useState("hall");
  const [location, setLocation] = useState(HALLS[0]);
  const [inspector, setInspector] = useState("");
  const [itemState, setItemState] = useState({});
  const [notes, setNotes] = useState("");
  const [sheetsUrl, setSheetsUrl] = useState("");
  const [sheetsModal, setSheetsModal] = useState(false);
  const [urlInput, setUrlInput] = useState("");
  const [syncHistory, setSyncHistory] = useState({});
  const [syncStatus, setSyncStatus] = useState(null);

  useEffect(() => { injectCSS(); }, []);
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const [storedRecords, storedUrl, storedSync] = await Promise.all([
          window.storage.get(STORAGE_KEYS.records),
          window.storage.get(STORAGE_KEYS.sheetsUrl),
          window.storage.get(STORAGE_KEYS.syncHistory),
        ]);
        if (!mounted) return;
        if (storedRecords) setRecords(JSON.parse(storedRecords.value));
        if (storedUrl) { setSheetsUrl(storedUrl.value); setUrlInput(storedUrl.value); }
        if (storedSync) setSyncHistory(JSON.parse(storedSync.value));
      } catch {
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  const showToast = useCallback((msg, type = "success") => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 4000);
  }, []);

  const config = getConfig(inspectionType);
  const allFilled = config.items.every((item) => isFilled(itemState[item.id]));
  const filledCount = config.items.filter((item) => isFilled(itemState[item.id])).length;
  const dirtyCount = Object.values(itemState).filter((value) => value === STATUS.DIRTY).length;
  const unsyncedCount = records.filter((record) => !syncHistory[record.id] || syncHistory[record.id] === "error").length;
  const filteredRecords = filterRecords(records, statsRange);
  const stats = computeStats(filteredRecords);

  const updateSyncHistory = useCallback(async (updater) => {
    let next;
    setSyncHistory((current) => { next = typeof updater === "function" ? updater(current) : updater; return next; });
    try { await window.storage.set(STORAGE_KEYS.syncHistory, JSON.stringify(next)); } catch {}
    return next;
  }, []);

  const persistRecords = useCallback(async (nextRecords) => {
    setRecords(nextRecords);
    try { await window.storage.set(STORAGE_KEYS.records, JSON.stringify(nextRecords)); } catch {}
  }, []);

  const startInspection = useCallback((type) => {
    const nextConfig = getConfig(type);
    setInspectionType(type);
    setLocation(nextConfig.locations[0]);
    setItemState({});
    setNotes("");
    setShowValidation(false);
    setScreen(nextConfig.screen);
  }, []);

  const syncRecord = useCallback(async (record) => {
    if (!sheetsUrl) { setSheetsModal(true); return false; }
    await updateSyncHistory((current) => ({ ...current, [record.id]: "syncing" }));
    try {
      const result = await sendToSheets(sheetsUrl, record);
      await updateSyncHistory((current) => ({ ...current, [record.id]: result.success ? "synced" : "error" }));
      return result.success;
    } catch {
      await updateSyncHistory((current) => ({ ...current, [record.id]: "error" }));
      return false;
    }
  }, [sheetsUrl, updateSyncHistory]);

  const submitInspection = useCallback(async () => {
    setShowValidation(true);
    if (!inspector.trim()) { showToast("?? ???? ?????? ?????? ????? ime!", "error"); return; }
    if (!allFilled) { showToast("?? ?????? ????? ?????? ?? ????? ?????????!", "error"); return; }

    const record = buildRecord({ type: inspectionType, location, inspector, items: config.items, itemState, notes });
    const nextRecords = [record, ...records];
    await persistRecords(nextRecords);
    showToast(`Inspection for ${location} saved.`);
    setScreen(SCREENS.HOME);
    if (sheetsUrl && await syncRecord(record)) showToast("? ?????????????? ? Google Sheets!");
  }, [allFilled, config.items, inspectionType, inspector, itemState, location, notes, persistRecords, records, sheetsUrl, showToast, syncRecord]);

  const retryAll = useCallback(async () => {
    for (const record of records) {
      if (!syncHistory[record.id] || syncHistory[record.id] === "error") await syncRecord(record);
    }
  }, [records, syncHistory, syncRecord]);

  const saveSheetsUrl = useCallback(async () => {
    const value = urlInput.trim();
    setSheetsUrl(value);
    try { await window.storage.set(STORAGE_KEYS.sheetsUrl, value); } catch {}
    setSheetsModal(false);
    showToast(value ? "Google Sheets URL ? ???????!" : "URL ? ??????.");
  }, [showToast, urlInput]);

  const closeDeleteModal = useCallback(() => {
    setDeleteModal(false); setDeletePass(""); setDeleteErr(""); setShowPw(false);
  }, []);

  const handleDelete = useCallback(async () => {
    if (deletePass !== DELETE_PASSWORD) { setDeleteErr("?????? ??????. ???????? ??????."); setDeletePass(""); return; }
    setRecords([]); setSyncHistory({});
    try { await window.storage.delete(STORAGE_KEYS.records); await window.storage.delete(STORAGE_KEYS.syncHistory); } catch {}
    closeDeleteModal();
    showToast("?????? ??????? ?????? ?? ???????.");
  }, [closeDeleteModal, deletePass, showToast]);

  if (loading) return <div style={{ minHeight: "100vh", background: T.black, display: "flex", alignItems: "center", justifyContent: "center", color: T.white, fontFamily: "'Playfair Display',serif", fontSize: 28 }}>CINE GRAND</div>;

  const renderHome = () => (
    <div style={{ minHeight: "100vh", background: T.black, color: T.white, fontFamily: "'DM Sans',sans-serif" }}>
      <Nav right={<><NavBtn onClick={() => setSheetsModal(true)} color={sheetsUrl ? T.green : T.gold}>{sheetsUrl ? "?? Sheets: ON" : "?? ?????? Sheets"}{unsyncedCount > 0 && sheetsUrl ? <span style={{ marginLeft: 4 }}>({unsyncedCount})</span> : null}</NavBtn><NavBtn onClick={() => setScreen(SCREENS.HISTORY)}>?? ???????</NavBtn><NavBtn onClick={() => setScreen(SCREENS.STATS)}>?? ??????????</NavBtn></>} />
      <div style={{ display: "flex", gap: 20, maxWidth: 1300, margin: "0 auto", padding: "32px 20px" }} className="cg-main-grid">
        <SideBar />
        <div style={{ flex: 1, minWidth: 0 }}>
          {!sheetsUrl ? <Panel style={{ marginBottom: 24, display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}><div><div style={{ color: T.gold, fontFamily: "'Oswald',sans-serif", letterSpacing: ".14em", textTransform: "uppercase", marginBottom: 4 }}>?????? Google Sheets</div><div style={{ color: T.gray2, fontSize: 13 }}>??????? ?? ?? ???????? ??????????? ??? ????? ????????</div></div><NavBtn onClick={() => setSheetsModal(true)} solid>???????</NavBtn></Panel> : null}
          {records.length > 0 ? <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12, marginBottom: 28 }} className="cg-stats-grid">{[
            { label: "???? ????????", value: records.length, color: T.gold, delay: 1 },
            { label: "???????? ????", value: records.filter((record) => new Date(record.timestamp).toDateString() === new Date().toDateString()).length, color: T.white, delay: 2 },
            { label: "???????? ????", value: records.filter((record) => new Date(record.timestamp).toDateString() === new Date().toDateString()).reduce((sum, record) => sum + getDirtyItems(record).length, 0), color: T.red, delay: 3 },
            { label: "????????????????", value: unsyncedCount, color: unsyncedCount > 0 ? "#f59e0b" : T.gray2, delay: 4 },
          ].map((item) => <StatCard key={item.label} {...item} />)}</div> : null}
          <div style={{ marginBottom: 24 }}><div style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, color: T.offWhite, marginBottom: 6 }}>???? ????????</div><div style={{ color: T.gray2, fontSize: 13 }}>?????? ??? ????????. ?????? ????? ?? ????????????.</div></div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }} className="cg-action-grid">{HOME_CARDS.map((card) => <div key={card.type} className="cg-card" onClick={() => startInspection(card.type)}><div style={{ background: `linear-gradient(160deg,${card.accent}18 0%,${T.deep} 60%)`, padding: "28px 24px 18px" }}><div style={{ fontSize: 52, marginBottom: 12 }}>{card.icon}</div><div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, color: card.accent, fontWeight: 700 }}>{card.label}</div><div style={{ color: T.gray2, fontSize: 11, letterSpacing: ".1em", textTransform: "uppercase", marginTop: 4 }}>{card.sub}</div></div><div style={{ padding: 18 }}><div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 16 }}>{card.tags.map((tag) => <span key={tag} style={{ border: `1px solid ${card.accent}44`, color: T.gray1, borderRadius: 6, padding: "3px 8px", fontSize: 10 }}>{tag}</span>)}</div><div style={{ background: goldGrad, borderRadius: 8, padding: "10px 16px", textAlign: "center", fontWeight: 700, color: T.black, textTransform: "uppercase" }}>??????? ????????</div></div></div>)}</div>
          {records.length > 0 ? <Panel><SectionTitle>???????? ????????</SectionTitle><div className="cg-table-scroll"><table style={{ width: "100%", borderCollapse: "collapse" }}><thead><tr style={{ background: T.surface }}>{["???????", "??????????", "????/???", "??????", "Sheets"].map((label) => <th key={label} style={{ padding: "10px 14px", textAlign: "left", color: T.gray2, fontSize: 10, textTransform: "uppercase", borderBottom: `1px solid ${T.border}` }}>{label}</th>)}</tr></thead><tbody>{records.slice(0, 7).map((record, index) => { const dirty = getDirtyItems(record); const sync = syncHistory[record.id]; return <tr key={record.id} className="cg-table-row" style={{ background: index % 2 === 0 ? T.card : T.deep }}><td style={{ padding: "12px 14px" }}>{record.type === "hall" ? "??" : "??"} {record.location}</td><td style={{ padding: "12px 14px", color: T.gray1 }}>{record.inspector}</td><td style={{ padding: "12px 14px", color: T.gray2, fontSize: 12 }}>{fmt(record.timestamp)}</td><td style={{ padding: "12px 14px", color: dirty.length > 0 ? T.red : T.green }}>{dirty.length > 0 ? `? ${dirty.length} ????????` : "? ?????"}</td><td style={{ padding: "12px 14px" }}><div style={{ display: "flex", gap: 8, alignItems: "center" }}><SyncDot status={sync} />{(sync === "error" || (!sync && sheetsUrl)) ? <button onClick={() => syncRecord(record)} style={{ background: `${T.gold}22`, border: `1px solid ${T.gold}44`, color: T.gold, borderRadius: 4, fontSize: 10, padding: "2px 7px", cursor: "pointer" }}>retry</button> : null}</div></td></tr>; })}</tbody></table></div><div style={{ display: "flex", justifyContent: "space-between", marginTop: 14 }}><NavBtn onClick={() => setScreen(SCREENS.HISTORY)}>??? ???????</NavBtn><button onClick={() => setDeleteModal(true)} style={{ background: "none", border: "none", color: T.gray2, textDecoration: "underline", cursor: "pointer" }}>?????? ??????? ??????</button></div></Panel> : null}
        </div>
        <SideBar />
      </div>
    </div>
  );

  const renderInspection = () => (
    <div style={{ minHeight: "100vh", background: T.black, color: T.white, fontFamily: "'DM Sans',sans-serif" }}>
      <Nav right={<><span style={{ color: T.gray1, fontSize: 13 }}><span style={{ color: T.green, fontWeight: 700 }}>{filledCount}</span>/{config.items.length} ?????????</span>{dirtyCount > 0 ? <span style={{ color: T.red, fontSize: 12, fontWeight: 600 }}>? {dirtyCount} ????????</span> : null}<NavBtn onClick={() => setScreen(SCREENS.HOME)}>? ?????</NavBtn></>} />
      <div style={{ height: 3, background: T.deep }}><div style={{ height: "100%", width: `${Math.round((filledCount / config.items.length) * 100)}%`, background: Math.round((filledCount / config.items.length) * 100) === 100 ? T.green : goldGrad }} /></div>
      <div style={{ maxWidth: 860, margin: "0 auto", padding: "32px 24px" }}>
        <div style={{ marginBottom: 24 }}><div style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, color: T.offWhite, marginBottom: 4 }}>{config.title}</div><div style={{ color: T.gray1, fontSize: 13 }}>{sheetsUrl ? "??????? ?? ?? ???????? ??????????? ??? Google Sheets ???? ?????" : ""}</div></div>
        <Panel style={{ marginBottom: 16 }}><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 14 }}><div><label style={{ display: "block", color: T.gray2, fontSize: 10, textTransform: "uppercase", marginBottom: 8 }}>??????? *</label><select value={location} onChange={(event) => setLocation(event.target.value)} style={{ ...inputStyle, padding: "11px 14px" }}>{config.locations.map((entry) => <option key={entry} value={entry}>{entry}</option>)}</select></div><div><label style={{ display: "block", color: T.gray2, fontSize: 10, textTransform: "uppercase", marginBottom: 8 }}>?????????? *</label><input value={inspector} onChange={(event) => setInspector(event.target.value)} placeholder="????? ime…" style={{ ...inputStyle, borderColor: showValidation && !inspector.trim() ? T.red : T.border, padding: "11px 14px" }} />{showValidation && !inspector.trim() ? <div style={{ color: T.red, fontSize: 11, marginTop: 5 }}>???????????? ????</div> : null}</div></div><div style={{ fontSize: 12, color: T.gray2 }}>???? ? ???: <strong style={{ color: T.gray1 }}>{fmt(new Date().toISOString())}</strong></div></Panel>
        <Panel style={{ padding: 0, overflow: "hidden", marginBottom: 14 }}><div style={{ padding: "16px 20px", borderBottom: `1px solid ${T.border}`, display: "flex", alignItems: "center", justifyContent: "space-between", background: T.surface }}><SectionTitle color={config.accent}>{config.sectionTitle}</SectionTitle><div style={{ display: "flex", gap: 8 }}><button onClick={() => setItemState(Object.fromEntries(config.items.map((item) => [item.id, STATUS.CLEAN])))} style={{ background: `${T.green}22`, border: `1px solid ${T.green}44`, color: T.green, borderRadius: 6, padding: "7px 14px", fontSize: 11, cursor: "pointer" }}>? ?????? ?????</button><button onClick={() => setItemState(Object.fromEntries(config.items.map((item) => [item.id, STATUS.DIRTY])))} style={{ background: `${T.red}22`, border: `1px solid ${T.red}44`, color: T.red, borderRadius: 6, padding: "7px 14px", fontSize: 11, cursor: "pointer" }}>? ?????? ???????</button></div></div><div style={{ padding: 12 }}>{config.items.map((item) => <CheckRow key={item.id} item={item} value={itemState[item.id] ?? null} onChange={(status) => setItemState((current) => ({ ...current, [item.id]: status }))} highlight={showValidation && !itemState[item.id]} />)}</div>{showValidation && !allFilled ? <div style={{ margin: 12, background: `${T.red}18`, border: `1px solid ${T.red}44`, borderRadius: 8, padding: "12px 16px", color: "#fca5a5" }}>? ???????? ????? ????? ???? ????? ??? ??????? ????? ?? ???????.</div> : null}</Panel>
        <Panel style={{ marginBottom: 20 }}><label style={{ display: "block", color: T.gray2, fontSize: 10, textTransform: "uppercase", marginBottom: 8 }}>???????</label><textarea value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="???????????? ?????????…" rows={3} style={{ ...inputStyle, resize: "vertical" }} /></Panel>
        <button className="cg-gold-btn" onClick={submitInspection} style={{ width: "100%", padding: 18, fontSize: 16, background: allFilled && inspector.trim() ? goldGrad : T.surface, border: `1px solid ${allFilled && inspector.trim() ? T.gold : T.border}`, borderRadius: 12, color: allFilled && inspector.trim() ? T.black : T.gray2, fontWeight: 700, textTransform: "uppercase", cursor: "pointer" }}>{allFilled && inspector.trim() ? `? ??????${sheetsUrl ? " ? ???????" : ""}` : `??????? ?????? ?????? (${filledCount}/${config.items.length})`}</button>
      </div>
    </div>
  );

  const renderHistory = () => (
    <div style={{ minHeight: "100vh", background: T.black, color: T.white, fontFamily: "'DM Sans',sans-serif" }}>
      <Nav right={<>{unsyncedCount > 0 && sheetsUrl ? <NavBtn onClick={retryAll} color="#f59e0b">? ????????????? ({unsyncedCount})</NavBtn> : null}<NavBtn onClick={() => setSheetsModal(true)} color={sheetsUrl ? T.green : T.gold}>{sheetsUrl ? "?? Sheets: ON" : "?? ??????"}</NavBtn><NavBtn onClick={() => setScreen(SCREENS.HOME)}>? ?????</NavBtn></>} />
      <div style={{ display: "flex", gap: 20, maxWidth: 1300, margin: "0 auto", padding: "32px 20px" }} className="cg-main-grid"><SideBar /><div style={{ flex: 1, minWidth: 0 }}><div style={{ display: "flex", justifyContent: "space-between", marginBottom: 24 }}><div style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, color: T.offWhite }}>??????? ?? ??????????</div><div style={{ color: T.gray2 }}>{records.length} ??????</div></div>{records.length === 0 ? <div style={{ textAlign: "center", color: T.gray2, padding: 80 }}>??? ??? ???? ???????? ????????</div> : null}{records.length > 0 ? <Panel style={{ padding: 0, overflow: "hidden" }}><div className="cg-table-scroll"><table style={{ width: "100%", borderCollapse: "collapse", minWidth: 700 }}><thead><tr style={{ background: T.surface }}>{["????/???", "???????", "??????? ????????", "??????????", "??????", "Sheets"].map((label) => <th key={label} style={{ padding: "12px 16px", textAlign: "left", color: T.gray2, fontSize: 10, textTransform: "uppercase", borderBottom: `1px solid ${T.border}` }}>{label}</th>)}</tr></thead><tbody>{records.map((record, index) => { const dirty = getDirtyItems(record); const sync = syncHistory[record.id]; return <tr key={record.id} className="cg-table-row" style={{ background: index % 2 === 0 ? T.card : T.deep }}><td style={{ padding: "12px 16px", color: T.gray2, fontSize: 12 }}>{fmt(record.timestamp)}</td><td style={{ padding: "12px 16px" }}>{record.type === "hall" ? "??" : "??"} {record.location}</td><td style={{ padding: "12px 16px", color: dirty.length > 0 ? T.red : T.gray2, fontSize: 12 }}>{dirty.length > 0 ? dirty.map((item) => item.label).join(", ") : "—"}</td><td style={{ padding: "12px 16px", color: T.gray1 }}>{record.inspector}</td><td style={{ padding: "12px 16px", color: dirty.length > 0 ? T.red : T.green }}>{dirty.length > 0 ? `? ${dirty.length}` : "? OK"}</td><td style={{ padding: "12px 16px" }}><div style={{ display: "flex", alignItems: "center", gap: 8 }}><SyncDot status={sync} />{(sync === "error" || (!sync && sheetsUrl)) ? <button onClick={() => syncRecord(record)} style={{ background: `${T.gold}22`, border: `1px solid ${T.gold}44`, color: T.gold, borderRadius: 4, fontSize: 10, padding: "2px 7px", cursor: "pointer" }}>retry</button> : null}</div></td></tr>; })}</tbody></table></div></Panel> : null}</div><SideBar /></div>
    </div>
  );

  const renderStats = () => {
    const totalDirty = filteredRecords.reduce((sum, record) => sum + getDirtyItems(record).length, 0);
    const totalClean = filteredRecords.reduce((sum, record) => sum + record.items.filter((item) => item.status === STATUS.CLEAN).length, 0);
    const overall = pct(totalDirty, totalClean + totalDirty);
    const trafficColor = overall === 0 ? T.green : overall <= 20 ? T.green : overall <= 50 ? "#f59e0b" : T.red;
    const trafficLabel = overall === 0 ? "?? ?????? — ???????" : overall <= 20 ? "?? ????? — ?????" : overall <= 50 ? "?? ???????? — ????? ????????" : "?? ??????? — ????????";
    const topIssue = Object.entries(stats.byItem).filter(([, value]) => value.total > 0).sort(([, left], [, right]) => pct(right.issues, right.total) - pct(left.issues, left.total))[0];
    const topLocation = Object.entries(stats.byLocation).filter(([, value]) => value.total > 0).sort(([, left], [, right]) => pct(right.issues, right.total) - pct(left.issues, left.total))[0];
    return <div style={{ minHeight: "100vh", background: T.black, color: T.white, fontFamily: "'DM Sans',sans-serif" }}><Nav tabs={RANGE_TABS} activeTab={statsRange} onTab={setStatsRange} right={<NavBtn onClick={() => setScreen(SCREENS.HOME)}>? ?????</NavBtn>} /><div style={{ display: "flex", gap: 20, maxWidth: 1300, margin: "0 auto", padding: "32px 20px" }} className="cg-main-grid"><SideBar /><div style={{ flex: 1, minWidth: 0 }}><div style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, color: T.offWhite, marginBottom: 24 }}>?????????? ?? ???????</div>{filteredRecords.length === 0 ? <div style={{ textAlign: "center", color: T.gray2, padding: 80 }}>???? ????? ?? ???????? ??????</div> : null}{filteredRecords.length > 0 ? <><div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12, marginBottom: 16 }} className="cg-stats-grid">{[{ label: "????????", value: filteredRecords.length, color: T.gold, delay: 1 }, { label: "????????", value: totalDirty, color: T.red, delay: 2 }, { label: "?????", value: totalClean, color: T.green, delay: 3 }, { label: "% ???????", value: `${overall}%`, color: T.white, delay: 4 }].map((item) => <StatCard key={item.label} {...item} />)}</div><Panel style={{ marginBottom: 16, borderLeft: `4px solid ${trafficColor}` }}><div style={{ fontFamily: "'Oswald',sans-serif", fontSize: 18 }}>{trafficLabel}</div><div style={{ color: T.gray2, fontSize: 12, marginTop: 4 }}>???? ?????? ?? ???????</div></Panel><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 16 }} className="cg-chart-grid">{topIssue ? <Panel><div style={{ color: T.gray2, fontSize: 10, textTransform: "uppercase", marginBottom: 8 }}>???-???? ???????</div><div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, color: T.red }}>{topIssue[0]}</div><div style={{ fontSize: 12, color: T.gray2 }}>{topIssue[1].issues}/{topIssue[1].total} ???????? — {pct(topIssue[1].issues, topIssue[1].total)}%</div></Panel> : null}{topLocation ? <Panel><div style={{ color: T.gray2, fontSize: 10, textTransform: "uppercase", marginBottom: 8 }}>???-????????? ???????</div><div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, color: "#fbbf24" }}>{topLocation[0]}</div><div style={{ fontSize: 12, color: T.gray2 }}>{topLocation[1].issues} ????????</div></Panel> : null}</div><div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="cg-chart-grid"><Panel><SectionTitle>?? ???????</SectionTitle>{Object.entries(stats.byLocation).sort(([, left], [, right]) => pct(right.issues, right.total) - pct(left.issues, left.total)).map(([label, data]) => <StatBar key={label} label={label} issues={data.issues} total={data.total} />)}</Panel><Panel><SectionTitle color={T.blue}>?? ???????</SectionTitle>{Object.entries(stats.byItem).sort(([, left], [, right]) => pct(right.issues, right.total) - pct(left.issues, left.total)).map(([label, data]) => <StatBar key={label} label={label} issues={data.issues} total={data.total} />)}</Panel></div></> : null}</div><SideBar /></div></div>;
  };

  return <><Toast toast={toast} />{sheetsModal ? <Modal onClose={() => setSheetsModal(false)}><div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, color: T.gold, marginBottom: 6 }}>????????? ? Google Sheets</div><div style={{ color: T.gray1, fontSize: 13, lineHeight: 1.7, marginBottom: 18 }}>?????? Web App URL-?? ?? Google Apps Script.</div><input value={urlInput} onChange={(event) => setUrlInput(event.target.value)} placeholder="https://script.google.com/macros/s/…/exec" style={{ ...inputStyle, marginBottom: 12 }} /><button className="cg-outline-btn" onClick={async () => { if (!urlInput.startsWith("https://")) { showToast("?????? ??????? URL", "error"); return; } setSyncStatus("syncing"); try { await fetch(urlInput, { method: "GET", mode: "no-cors" }); setSyncStatus("synced"); showToast("? ???????? ??????!"); } catch { setSyncStatus("error"); showToast("?? ?????? ??? ?????????", "error"); } setTimeout(() => setSyncStatus(null), 3000); }} style={{ width: "100%", background: "transparent", border: `1px solid ${T.gold}44`, color: T.gold, borderRadius: 8, padding: 10, cursor: "pointer" }}>{syncStatus === "syncing" ? "? ?????? ??…" : "??????? ????????"}</button>{syncStatus === "synced" ? <div style={{ color: T.green, fontSize: 12, marginTop: 12 }}>? ??????!</div> : null}{syncStatus === "error" ? <div style={{ color: T.red, fontSize: 12, marginTop: 12 }}>? ??????. ??????? URL.</div> : null}<div style={{ display: "flex", gap: 8, marginTop: 16 }}><NavBtn onClick={() => setSheetsModal(false)} color={T.gray1}>?????</NavBtn><NavBtn onClick={saveSheetsUrl} solid>??????</NavBtn></div></Modal> : null}{deleteModal ? <Modal onClose={closeDeleteModal} borderColor={T.red}><div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, color: T.red, marginBottom: 6 }}>????????? ?? ?????</div><div style={{ color: T.gray1, fontSize: 13, lineHeight: 1.7, marginBottom: 18 }}>?? ????? ??????? <strong style={{ color: T.white }}>{records.length} ??????</strong> ?? ????????? ?????????.</div><div style={{ position: "relative" }}><input type={showPw ? "text" : "password"} value={deletePass} onChange={(event) => { setDeletePass(event.target.value); setDeleteErr(""); }} onKeyDown={(event) => event.key === "Enter" && handleDelete()} style={{ ...inputStyle, paddingRight: 44, borderColor: deleteErr ? T.red : T.border }} placeholder="???????????????? ??????…" /><button onClick={() => setShowPw((current) => !current)} style={{ position: "absolute", right: 12, top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: T.gray2, cursor: "pointer" }}>{showPw ? "??" : "??"}</button></div>{deleteErr ? <div style={{ color: T.red, fontSize: 12, marginTop: 10 }}>? {deleteErr}</div> : null}<div style={{ display: "flex", gap: 8, marginTop: 18 }}><NavBtn onClick={closeDeleteModal} color={T.gray1}>?????</NavBtn><button onClick={handleDelete} style={{ flex: 1, background: `linear-gradient(135deg,${T.red},${T.redDk})`, border: "none", color: T.white, borderRadius: 8, padding: "11px", cursor: "pointer" }}>??????</button></div></Modal> : null}{screen === SCREENS.HOME ? renderHome() : null}{screen === SCREENS.HALL || screen === SCREENS.BATHROOM ? renderInspection() : null}{screen === SCREENS.HISTORY ? renderHistory() : null}{screen === SCREENS.STATS ? renderStats() : null}</>;
}
