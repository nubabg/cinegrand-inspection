

      /* â”€â”€ Constants â”€â”€ */
      const HALLS = ["Ð—Ð°Ð»Ð° 1", "Ð—Ð°Ð»Ð° 2", "Ð—Ð°Ð»Ð° 3", "Ð—Ð°Ð»Ð° 4", "Ð—Ð°Ð»Ð° 5", "Ð—Ð°Ð»Ð° 6"];
      const BATHROOMS = [
        "Ð”Ð°Ð¼ÑÐºÐ° Ñ‚Ð¾Ð°Ð»ÐµÑ‚Ð½Ð° - ÐŸÐ°Ñ€Ñ‚ÐµÑ€",
        "ÐœÑŠÐ¶ÐºÐ° Ñ‚Ð¾Ð°Ð»ÐµÑ‚Ð½Ð° - ÐŸÐ°Ñ€Ñ‚ÐµÑ€",
        "Ð”Ð°Ð¼ÑÐºÐ° Ñ‚Ð¾Ð°Ð»ÐµÑ‚Ð½Ð° - Ð•Ñ‚Ð°Ð¶ 1",
        "ÐœÑŠÐ¶ÐºÐ° Ñ‚Ð¾Ð°Ð»ÐµÑ‚Ð½Ð° - Ð•Ñ‚Ð°Ð¶ 1",
        "ÐŸÐµÑ€ÑÐ¾Ð½Ð°Ð»Ð½Ð° Ñ‚Ð¾Ð°Ð»ÐµÑ‚Ð½Ð°",
      ];

      const HALL_ITEMS = [
        { id: "cup_holders", label: "Cup Holders", icon: "â˜•", desc: "ÐŸÐ¾ÑÑ‚Ð°Ð²ÐºÐ¸ Ð·Ð° Ñ‡Ð°ÑˆÐ¸" },
        { id: "seats", label: "Ð¡ÐµÐ´Ð°Ð»ÐºÐ¸", icon: "ðŸ’º", desc: "Ð¢Ð°Ð¿Ð¸Ñ†ÐµÑ€Ð¸Ñ Ð¸ Ð¼ÐµÑ…Ð°Ð½Ð¸Ð·ÑŠÐ¼" },
        { id: "carpet", label: "ÐœÐ¾ÐºÐµÑ‚", icon: "ðŸŸ«", desc: "ÐŸÐ¾Ð´ Ð¸ Ð¿ÑŠÑ‚ÐµÐºÐ¸" },
        { id: "armrests", label: "ÐŸÐ¾Ð´Ð»Ð°ÐºÑŠÑ‚Ð½Ð¸Ñ†Ð¸", icon: "âœ‹", desc: "ÐŸÐ¾Ð²ÑŠÑ€Ñ…Ð½Ð¾ÑÑ‚Ð¸" },
        { id: "floor", label: "ÐŸÐ¾Ð´ (Ð±ÐµÐ· Ð¼Ð¾ÐºÐµÑ‚)", icon: "ðŸ§¹", desc: "Ð¢Ð²ÑŠÑ€Ð´Ð¸ Ð½Ð°ÑÑ‚Ð¸Ð»ÐºÐ¸" },
        { id: "screen_area", label: "Ð—Ð¾Ð½Ð° Ð´Ð¾ ÐµÐºÑ€Ð°Ð½Ð°", icon: "ðŸŽ¬", desc: "ÐŸÑ€ÐµÐ´Ð½Ð° Ð·Ð¾Ð½Ð°" },
      ];

      const BATHROOM_ITEMS = [
        { id: "trash_bins", label: "ÐšÐ¾ÑˆÑ‡ÐµÑ‚Ð°", icon: "ðŸ—‘ï¸", desc: "Ð˜Ð·Ð¿Ñ€Ð°Ð·Ð²Ð°Ð½Ðµ Ð¸ Ð´ÐµÐ·Ð¸Ð½Ñ„ÐµÐºÑ†Ð¸Ñ" },
        { id: "general_clean", label: "ÐžÐ±Ñ‰Ð¾ Ð¿Ð¾Ñ‡Ð¸ÑÑ‚Ð²Ð°Ð½Ðµ", icon: "ðŸ§½", desc: "Ð’ÑÐ¸Ñ‡ÐºÐ¸ Ð¿Ð¾Ð²ÑŠÑ€Ñ…Ð½Ð¾ÑÑ‚Ð¸" },
        { id: "toilet_paper", label: "Ð¢Ð¾Ð°Ð»ÐµÑ‚Ð½Ð° Ñ…Ð°Ñ€Ñ‚Ð¸Ñ", icon: "ðŸ§»", desc: "Ð—Ð°Ñ€ÐµÐ¶Ð´Ð°Ð½Ðµ" },
        { id: "soap", label: "Ð¡Ð°Ð¿ÑƒÐ½", icon: "ðŸ§´", desc: "Ð”Ð¾Ð·Ð°Ñ‚Ð¾Ñ€Ð¸" },
        { id: "mirrors", label: "ÐžÐ³Ð»ÐµÐ´Ð°Ð»Ð°", icon: "ðŸªž", desc: "Ð‘ÐµÐ· Ð¿ÐµÑ‚Ð½Ð°" },
        { id: "floor_bathroom", label: "ÐŸÐ¾Ð´", icon: "ðŸ§¹", desc: "ÐœÐ¾ÐºÑ€Ð¾ Ð¿Ð¾Ñ‡Ð¸ÑÑ‚Ð²Ð°Ð½Ðµ" },
        { id: "sinks", label: "ÐœÐ¸Ð²ÐºÐ¸", icon: "ðŸš¿", desc: "ÐšÑ€Ð°Ð½ Ð¸ Ð¼Ð¸Ð²ÐºÐ°" },
      ];

      const STATUS = { CLEAN: "clean", DIRTY: "dirty" };
      const DELETE_PASSWORD = "CineGrand2025";
      const STORAGE_KEYS = { records: "cg_v4_records", sync: "cg_sync_hist" };
      const LOCAL_RETENTION_DAYS = 7; /* Ð›Ð¾ÐºÐ°Ð»Ð½Ð¸ Ð·Ð°Ð¿Ð¸ÑÐ¸ ÑÐµ Ð¿Ð°Ð·ÑÑ‚ 7 Ð´Ð½Ð¸ */

      /* â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•
         Ð’ÐÐ–ÐÐž: Ð—Ð°Ð¼ÐµÐ½Ð¸ URL-Ñ‚Ð¾ Ð¿Ð¾-Ð´Ð¾Ð»Ñƒ Ñ Ñ‚Ð²Ð¾ÐµÑ‚Ð¾ Web App URL
         ÑÐ»ÐµÐ´ ÐºÐ°Ñ‚Ð¾ deploy-Ð½ÐµÑˆ Google Apps Script-Ð°.
         Ð’Ð¸Ð¶ Ð¸Ð½ÑÑ‚Ñ€ÑƒÐºÑ†Ð¸Ð¸Ñ‚Ðµ Ð² Ð´Ð¾ÐºÑƒÐ¼ÐµÐ½Ñ‚Ð° Ð·Ð° Ð½Ð°ÑÑ‚Ñ€Ð¾Ð¹ÐºÐ°.
         â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â•â• */
      const SHEETS_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwqOpU1wZ_k8I7aXgDHcsV2_UroQrTg13R0zQnOQUrwso3H6jDd1GUykW75-OViIAUPSQ/exec";

      const CONFIGS = {
        hall: {
          title: "ÐŸÑ€Ð¾Ð²ÐµÑ€ÐºÐ° Ð½Ð° ÐšÐ¸Ð½Ð¾Ð·Ð°Ð»Ð°",
          shortTitle: "ÐšÐ¸Ð½Ð¾Ð·Ð°Ð»Ð°",
          sectionTitle: "Ð•Ð»ÐµÐ¼ÐµÐ½Ñ‚Ð¸ Ð½Ð° ÐšÐ¸Ð½Ð¾Ð·Ð°Ð»Ð°Ñ‚Ð°",
          accent: "var(--gold)",
          locations: HALLS,
          items: HALL_ITEMS,
          tags: ["Cup Holders", "Ð¡ÐµÐ´Ð°Ð»ÐºÐ¸", "ÐœÐ¾ÐºÐµÑ‚", "ÐŸÐ¾Ð´", "Ð•ÐºÑ€Ð°Ð½", "ÐŸÐ¾Ð´Ð»Ð°ÐºÑŠÑ‚Ð½Ð¸Ñ†Ð¸"],
        },
        bathroom: {
          title: "ÐŸÑ€Ð¾Ð²ÐµÑ€ÐºÐ° Ð½Ð° Ð¡Ð°Ð½Ð¸Ñ‚Ð°Ñ€ÐµÐ½ Ð’ÑŠÐ·ÐµÐ»",
          shortTitle: "Ð¡Ð°Ð½Ð¸Ñ‚Ð°Ñ€ÐµÐ½ Ð’ÑŠÐ·ÐµÐ»",
          sectionTitle: "Ð•Ð»ÐµÐ¼ÐµÐ½Ñ‚Ð¸ Ð½Ð° Ð¡Ð°Ð½Ð¸Ñ‚Ð°Ñ€Ð½Ð¸Ñ Ð’ÑŠÐ·ÐµÐ»",
          accent: "var(--blue)",
          locations: BATHROOMS,
          items: BATHROOM_ITEMS,
          tags: ["ÐšÐ¾ÑˆÑ‡ÐµÑ‚Ð°", "ÐŸÐ¾Ñ‡Ð¸ÑÑ‚Ð²Ð°Ð½Ðµ", "Ð¥Ð°Ñ€Ñ‚Ð¸Ñ", "Ð¡Ð°Ð¿ÑƒÐ½", "ÐœÐ¸Ð²ÐºÐ¸", "ÐžÐ³Ð»ÐµÐ´Ð°Ð»Ð°"],
        },
      };

      /* â”€â”€ State â”€â”€ */
      const state = {
        screen: "home",
        inspectionType: "hall",
        location: HALLS[0],
        inspector: "",
        itemState: {},
        notes: "",
        records: [],
        syncHistory: JSON.parse(localStorage.getItem(STORAGE_KEYS.sync) || "{}"),
        statsRange: "week",
        exportRange: "week",
        historyTypeFilter: "all",
        historyLocationFilter: "all",
        showValidation: false,
        showDeleteModal: false,
        deletePass: "",
        deleteErr: "",
        showPassword: false,
        toast: null,
      };

      try { state.records = JSON.parse(localStorage.getItem(STORAGE_KEYS.records) || "[]"); }
      catch { state.records = []; }

      /* â”€â”€ Toast timer (clean, no property on function) â”€â”€ */
      let toastTimer = null;

      /* â”€â”€ Helpers â”€â”€ */
      const app = document.getElementById("app");

      function getConfig(type) { return CONFIGS[type] || CONFIGS.hall; }

      function fmt(iso) {
        return new Date(iso).toLocaleString("bg-BG", {
          day: "2-digit", month: "2-digit", year: "numeric",
          hour: "2-digit", minute: "2-digit",
        });
      }

      function pct(issues, total) { return total > 0 ? Math.round((issues / total) * 100) : 0; }
      function isFilled(v) { return v === STATUS.CLEAN || v === STATUS.DIRTY; }
      function dirtyItems(record) { return record.items.filter((i) => i.status === STATUS.DIRTY); }

      function escapeHtml(v) {
        return String(v || "").replace(/&/g, "&amp;").replace(/</g, "&lt;")
          .replace(/>/g, "&gt;").replace(/"/g, "&quot;");
      }

      function csvEscape(v) { return '"' + String(v ?? "").replace(/"/g, '""') + '"'; }

      const RANGE_OPTIONS = [["today", "\u0414\u043d\u0435\u0441"], ["week", "\u0421\u0435\u0434\u043c\u0438\u0446\u0430"]];

      function rangeLabel(range) {
        const found = RANGE_OPTIONS.find(([v]) => v === range);
        return found ? found[1] : "\u0421\u0435\u0434\u043c\u0438\u0446\u0430";
      }

      function recordsForRange(range) {
        const now = new Date();
        return state.records.filter((r) => {
          const d = new Date(r.timestamp);
          if (range === "today") return d.toDateString() === now.toDateString();
          if (range === "week") return now - d < 7 * 86400000;
          return now - d < 7 * 86400000;
        });
      }

      function filteredRecords() { return recordsForRange(state.statsRange); }

      function historyRecords() {
        return recordsForRange(state.exportRange).filter((r) => {
          if (state.historyTypeFilter !== "all" && r.type !== state.historyTypeFilter) return false;
          if (state.historyLocationFilter !== "all" && r.location !== state.historyLocationFilter) return false;
          return true;
        });
      }

      function computeStats(records) {
        const byLocation = {}, byItem = {};
        records.forEach((r) => {
          if (!byLocation[r.location]) byLocation[r.location] = { total: 0, issues: 0 };
          r.items.forEach((item) => {
            byLocation[r.location].total += 1;
            if (!byItem[item.label]) byItem[item.label] = { total: 0, issues: 0 };
            byItem[item.label].total += 1;
            if (item.status === STATUS.DIRTY) {
              byLocation[r.location].issues += 1;
              byItem[item.label].issues += 1;
            }
          });
        });
        return { byLocation, byItem };
      }

      function latestIssues(limit = 6) {
        return state.records
          .flatMap((r) => dirtyItems(r).map((i) => ({
            ...i, location: r.location, inspector: r.inspector, timestamp: r.timestamp,
          })))
          .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
          .slice(0, limit);
      }

      /* â”€â”€ Persistence â”€â”€ */
      function persist() {
        localStorage.setItem(STORAGE_KEYS.records, JSON.stringify(state.records));
        localStorage.setItem(STORAGE_KEYS.sync, JSON.stringify(state.syncHistory));
      }

      /* â”€â”€ Auto-cleanup: Ð¸Ð·Ñ‚Ñ€Ð¸Ð²Ð° Ð»Ð¾ÐºÐ°Ð»Ð½Ð¸ Ð·Ð°Ð¿Ð¸ÑÐ¸ Ð¿Ð¾-ÑÑ‚Ð°Ñ€Ð¸ Ð¾Ñ‚ 7 Ð´Ð½Ð¸ â”€â”€ */
      function cleanupOldRecords() {
        const cutoff = Date.now() - LOCAL_RETENTION_DAYS * 86400000;
        const before = state.records.length;
        state.records = state.records.filter((r) => new Date(r.timestamp).getTime() > cutoff);
        if (state.records.length < before) {
          persist();
          console.log(`[Cleanup] Ð˜Ð·Ñ‚Ñ€Ð¸Ñ‚Ð¸ ${before - state.records.length} ÑÑ‚Ð°Ñ€Ð¸ Ð·Ð°Ð¿Ð¸ÑÐ° (>7 Ð´Ð½Ð¸)`);
        }
      }

      function showToast(msg, type = "success") {
        state.toast = { msg, type };
        render();
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => { state.toast = null; render(); }, 4000);
      }

      /* â”€â”€ Google Sheets Sync â”€â”€ */
      function isSheetsConfigured() {
        return SHEETS_WEB_APP_URL && SHEETS_WEB_APP_URL !== "???????_????_WEB_APP_URL_???" && SHEETS_WEB_APP_URL.startsWith("https://");
      }

      function buildSheetsPayload(record) {
        const issues = dirtyItems(record);
        const config = getConfig(record.type);
        const status = issues.length ? "\u041c\u0420\u042a\u0421\u041d\u0410" : "\u0427\u0418\u0421\u0422\u0410";
        const typeLabel = config.shortTitle + " - " + record.location;
        const issueLabel = issues.length ? issues.map((item) => item.label).join(", ") : "";
        const notes = record.notes || "";

        return {
          entry_id: String(record.id),
          inspected_at: fmt(record.timestamp),
          inspection_type: typeLabel,
          inspector: record.inspector,
          status,
          issues: issueLabel,
          notes,
          row_values: JSON.stringify([
            record.id,
            fmt(record.timestamp),
            typeLabel,
            record.inspector,
            status,
            issueLabel,
            notes,
          ]),
          record_json: JSON.stringify(record),
        };
      }

      async function sendToSheets(record) {
        if (!isSheetsConfigured()) return { success: false, error: "Sheets URL \u043d\u0435 \u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0438\u0440\u0430\u043d" };
        const payload = JSON.stringify({ record });

        try {
          const response = await fetch(SHEETS_WEB_APP_URL, {
            method: "POST",
            headers: { "Content-Type": "text/plain;charset=UTF-8" },
            body: payload,
          });
          if (!response.ok) return { success: false, error: "HTTP " + response.status };
          return { success: true, verified: true };
        } catch (err) {
          try {
            await fetch(SHEETS_WEB_APP_URL, {
              method: "POST",
              mode: "no-cors",
              body: payload,
            });
            return { success: true, verified: false };
          } catch (fallbackErr) {
            return { success: false, error: fallbackErr.message || err.message };
          }
        }
      }

      async function syncRecord(record) {
        if (!isSheetsConfigured()) return { success: false, error: "Sheets URL \u043d\u0435 \u0435 \u043a\u043e\u043d\u0444\u0438\u0433\u0443\u0440\u0438\u0440\u0430\u043d" };
        state.syncHistory[record.id] = "syncing";
        persist(); render();
        const result = await sendToSheets(record);
        state.syncHistory[record.id] = result.success ? (result.verified ? "synced" : "sent") : "error";
        persist(); render();
        return result;
      }

      function startInspection(type) {
        const config = getConfig(type);
        Object.assign(state, {
          inspectionType: type,
          location: config.locations[0],
          inspector: "",
          itemState: {},
          notes: "",
          showValidation: false,
          screen: "inspection",
        });
        render();
      }

      async function submitInspection() {
        const config = getConfig(state.inspectionType);
        state.showValidation = true;
        const allFilled = config.items.every((i) => isFilled(state.itemState[i.id]));
        if (!state.inspector.trim()) { showToast("ÐœÐ¾Ð»Ñ Ð²ÑŠÐ²ÐµÐ´Ð¸ ÑÐ²Ð¾ÐµÑ‚Ð¾ Ð¿ÑŠÐ»Ð½Ð¾ Ð¸Ð¼Ðµ.", "error"); return; }
        if (!allFilled) { showToast("Ð’ÑÐ¸Ñ‡ÐºÐ¸ Ñ‚Ð¾Ñ‡ÐºÐ¸ Ñ‚Ñ€ÑÐ±Ð²Ð° Ð´Ð° Ð±ÑŠÐ´Ð°Ñ‚ Ð¿Ð¾Ð¿ÑŠÐ»Ð½ÐµÐ½Ð¸.", "error"); render(); return; }

        const record = {
          id: Date.now(),
          type: state.inspectionType,
          location: state.location,
          inspector: state.inspector.trim(),
          timestamp: new Date().toISOString(),
          items: config.items.map((i) => ({ id: i.id, label: i.label, icon: i.icon, status: state.itemState[i.id] })),
          notes: state.notes,
        };
        state.records = [record, ...state.records];
        cleanupOldRecords(); /* Ð˜Ð·Ñ‡Ð¸ÑÑ‚Ð²Ð°Ð½Ðµ Ð½Ð° ÑÑ‚Ð°Ñ€Ð¸ Ð·Ð°Ð¿Ð¸ÑÐ¸ >7 Ð´Ð½Ð¸ */
        persist();
        state.screen = "home";
        render();
        showToast(`ÐŸÑ€Ð¾Ð²ÐµÑ€ÐºÐ°Ñ‚Ð° Ð½Ð° â€ž${state.location}" Ðµ Ð·Ð°Ð¿Ð¸ÑÐ°Ð½Ð°.`);
        if (isSheetsConfigured()) {
          const syncResult = await syncRecord(record);
          if (syncResult.success && syncResult.verified) {
            showToast("\u2713 \u0421\u0438\u043d\u0445\u0440\u043e\u043d\u0438\u0437\u0438\u0440\u0430\u043d\u043e \u0441 Google Sheets.");
          } else if (syncResult.success) {
            showToast("\u2713 \u0417\u0430\u044f\u0432\u043a\u0430\u0442\u0430 \u0435 \u0438\u0437\u043f\u0440\u0430\u0442\u0435\u043d\u0430 \u043a\u044a\u043c Google Sheets. \u0410\u043a\u043e \u0440\u0435\u0434\u044a\u0442 \u043d\u0435 \u0441\u0435 \u043f\u043e\u044f\u0432\u0438, \u043f\u0440\u043e\u0432\u0435\u0440\u0438 Apps Script \u043b\u043e\u0433\u043e\u0432\u0435\u0442\u0435.");
          } else {
            showToast("\u26a0 \u0417\u0430\u043f\u0438\u0441\u044a\u0442 \u0435 \u0437\u0430\u043f\u0430\u0437\u0435\u043d \u043b\u043e\u043a\u0430\u043b\u043d\u043e. Sheets sync \u043d\u0435\u0443\u0441\u043f\u0435\u0448\u0435\u043d: " + (syncResult.error || "\u043d\u0435\u0438\u0437\u0432\u0435\u0441\u0442\u043d\u0430 \u0433\u0440\u0435\u0448\u043a\u0430"), "error");
          }
        }
      }

      /* ?? Export ?? */

      function exportRows(records) {
        return records.map((r) => {
          const issues = dirtyItems(r);
          return {
            date: fmt(r.timestamp), type: getConfig(r.type).shortTitle,
            location: r.location, inspector: r.inspector,
            status: issues.length ? "ÐŸÑ€Ð¾Ð±Ð»ÐµÐ¼" : "Ð§Ð¸ÑÑ‚Ð¾",
            issues: issues.length ? issues.map((i) => i.label).join(", ") : "â€”",
            notes: r.notes || "", sheets: state.syncHistory[r.id] || "â€”",
          };
        });
      }

      function downloadFile(filename, content, mimeType) {
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const a = Object.assign(document.createElement("a"), { href: url, download: filename });
        document.body.appendChild(a); a.click(); a.remove();
        URL.revokeObjectURL(url);
      }

      function exportCsv() {
        const records = historyRecords();
        if (!records.length) { showToast("ÐÑÐ¼Ð° Ð·Ð°Ð¿Ð¸ÑÐ¸ Ð·Ð° ÐµÐºÑÐ¿Ð¾Ñ€Ñ‚.", "error"); return; }
        const header = ["Ð”Ð°Ñ‚Ð°/Ð§Ð°Ñ", "Ð¢Ð¸Ð¿", "Ð›Ð¾ÐºÐ°Ñ†Ð¸Ñ", "ÐŸÑ€Ð¾Ð²ÐµÑ€ÑÐ²Ð°Ñ‰", "Ð¡Ñ‚Ð°Ñ‚ÑƒÑ", "ÐŸÑ€Ð¾Ð±Ð»ÐµÐ¼Ð¸", "Ð‘ÐµÐ»ÐµÐ¶ÐºÐ¸", "Sheets"];
        const rows = exportRows(records).map((r) =>
          [r.date, r.type, r.location, r.inspector, r.status, r.issues, r.notes, r.sheets].map(csvEscape).join(";")
        );
        downloadFile(
          "cinegrand-report-" + state.exportRange + ".csv",
          "\uFEFF" + [header.join(";"), ...rows].join("\n"),
          "text/csv;charset=utf-8;"
        );
        showToast("Excel Ñ„Ð°Ð¹Ð»ÑŠÑ‚ Ð·Ð° " + rangeLabel(state.exportRange).toLowerCase() + " Ðµ Ð³Ð¾Ñ‚Ð¾Ð².");
      }

      function exportPdf() {
        const records = historyRecords();
        if (!records.length) { showToast("\u041d\u044f\u043c\u0430 \u0437\u0430\u043f\u0438\u0441\u0438 \u0437\u0430 PDF \u043e\u0442\u0447\u0435\u0442.", "error"); return; }
        const rows = exportRows(records);
        const issueCount = records.reduce((s, r) => s + dirtyItems(r).length, 0);
        const filterType = state.historyTypeFilter === "all" ? "\u0412\u0441\u0438\u0447\u043a\u0438 \u0442\u0438\u043f\u043e\u0432\u0435" : getConfig(state.historyTypeFilter).shortTitle;
        const filterLocation = state.historyLocationFilter === "all" ? "\u0412\u0441\u0438\u0447\u043a\u0438 \u043b\u043e\u043a\u0430\u0446\u0438\u0438" : state.historyLocationFilter;
        const w = window.open("", "_blank", "width=1280,height=920");
        if (!w) { showToast("\u0411\u0440\u0430\u0443\u0437\u044a\u0440\u044a\u0442 \u0431\u043b\u043e\u043a\u0438\u0440\u0430 PDF \u043f\u0440\u043e\u0437\u043e\u0440\u0435\u0446\u0430.", "error"); return; }
        const html = [
          '<!DOCTYPE html>',
          '<html lang="bg">',
          '<head>',
          '<meta charset="UTF-8"/>',
          '<meta name="viewport" content="width=device-width, initial-scale=1.0"/>',
          '<title>Cine Grand PDF Report</title>',
          '<style>',
          'body{font-family:Arial,sans-serif;padding:24px;color:#111827;background:#eef2f7}',
          '.page{max-width:1180px;margin:0 auto;background:#fff;padding:28px;border-radius:18px;box-shadow:0 12px 40px rgba(0,0,0,.08)}',
          'h1{margin:0 0 8px}',
          '.meta{margin-bottom:20px;color:#4b5563}',
          '.summary{display:flex;gap:12px;margin-bottom:20px;flex-wrap:wrap}',
          '.box{border:1px solid #d1d5db;border-radius:10px;padding:12px 14px;min-width:160px}',
          '.actions{position:sticky;top:0;display:flex;gap:10px;justify-content:flex-end;flex-wrap:wrap;margin:-4px 0 20px;padding:12px 0;background:rgba(255,255,255,.92);backdrop-filter:blur(6px)}',
          '.btn{border:1px solid #d1d5db;border-radius:999px;padding:10px 16px;background:#111827;color:#fff;cursor:pointer;font-size:14px}',
          '.btn.secondary{background:#fff;color:#111827}',
          'table{width:100%;border-collapse:collapse;font-size:12px}',
          'th,td{border:1px solid #d1d5db;padding:8px;text-align:left;vertical-align:top}',
          'th{background:#f3f4f6}',
          '@media print {.actions{display:none} body{background:#fff;padding:0} .page{box-shadow:none;border-radius:0;max-width:none;padding:0}}',
          '</style>',
          '</head>',
          '<body>',
          '<div class="page">',
          '<div class="actions"><button class="btn" onclick="window.print()">\u0417\u0430\u043f\u0430\u0437\u0438 / \u0418\u0437\u0442\u0435\u0433\u043b\u0438 PDF</button><button class="btn secondary" onclick="window.close()">\u0417\u0430\u0442\u0432\u043e\u0440\u0438</button></div>',
          '<h1>Cine Grand PDF Report</h1>',
          '<div class="meta">\u041f\u0435\u0440\u0438\u043e\u0434: ' + escapeHtml(rangeLabel(state.exportRange)) + ' | \u0413\u0435\u043d\u0435\u0440\u0438\u0440\u0430\u043d: ' + escapeHtml(fmt(new Date().toISOString())) + '</div>',
          '<div class="summary">',
          '<div class="box"><strong>\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0438</strong><div>' + rows.length + '</div></div>',
          '<div class="box"><strong>\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0438</strong><div>' + issueCount + '</div></div>',
          '<div class="box"><strong>\u0422\u0438\u043f</strong><div>' + escapeHtml(filterType) + '</div></div>',
          '<div class="box"><strong>\u041b\u043e\u043a\u0430\u0446\u0438\u044f</strong><div>' + escapeHtml(filterLocation) + '</div></div>',
          '</div>',
          '<table><thead><tr><th>\u0414\u0430\u0442\u0430/\u0427\u0430\u0441</th><th>\u0422\u0438\u043f</th><th>\u041b\u043e\u043a\u0430\u0446\u0438\u044f</th><th>\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0432\u0430\u0449</th><th>\u0421\u0442\u0430\u0442\u0443\u0441</th><th>\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0438</th><th>\u0411\u0435\u043b\u0435\u0436\u043a\u0438</th></tr></thead><tbody>',
          rows.map((r) => '<tr><td>' + escapeHtml(r.date) + '</td><td>' + escapeHtml(r.type) + '</td><td>' + escapeHtml(r.location) + '</td><td>' + escapeHtml(r.inspector) + '</td><td>' + escapeHtml(r.status) + '</td><td>' + escapeHtml(r.issues) + '</td><td>' + escapeHtml(r.notes) + '</td></tr>').join(''),
          '</tbody></table>',
          '</div>',
          '</body>',
          '</html>'
        ].join('');
        w.document.open();
        w.document.write(html);
        w.document.close();
        w.focus();
        showToast("PDF \u043f\u0440\u0435\u0433\u043b\u0435\u0434\u044a\u0442 \u0437\u0430 " + rangeLabel(state.exportRange).toLowerCase() + " \u0435 \u043e\u0442\u0432\u043e\u0440\u0435\u043d.");
      }
      function renderTopbar() {
        const navItems = [
          state.screen !== "home" ? `<button class="nav-btn" data-action="go-home">ÐÐ°Ñ‡Ð°Ð»Ð¾</button>` : "",
          `<button class="nav-btn${state.screen === 'history' ? ' state' : ''}" data-action="go-history">Ð˜ÑÑ‚Ð¾Ñ€Ð¸Ñ</button>`,
          `<button class="nav-btn${state.screen === 'stats' ? ' state' : ''}" data-action="go-stats">Ð¡Ñ‚Ð°Ñ‚Ð¸ÑÑ‚Ð¸ÐºÐ°</button>`,
          `<button class="nav-btn${isSheetsConfigured() ? ' state' : ''}" style="cursor:default;pointer-events:none;">${isSheetsConfigured() ? "Sheets âœ“" : "Sheets âœ—"}</button>`,
        ].filter(Boolean).join("");

        return `
          <div class="product-strip">
            <div class="product-strip-left">
              <span class="brand-badge">CG</span>
              <div class="brand-meta"><strong>Cine Grand</strong><span>Hygiene Control Platform</span></div>
            </div>
            <div class="product-strip-status"><div class="meta-chip">ÐžÐ¿ÐµÑ€Ð°Ñ‚Ð¸Ð²ÐµÐ½ Ñ€ÐµÐ¶Ð¸Ð¼</div></div>
          </div>
          <div class="topbar-shell">
            <div class="topbar">
              <div class="topbar-nav">${navItems}</div>
              <div class="topbar-meta">
                <span class="meta-chip">ÐŸÐ°Ñ€Ðº Ð¦ÐµÐ½Ñ‚ÑŠÑ€ Ð¡Ð¾Ñ„Ð¸Ñ</span>
                <span class="meta-chip">ÐšÐ¾Ð½Ñ‚Ñ€Ð¾Ð» Ð½Ð° Ñ…Ð¸Ð³Ð¸ÐµÐ½Ð°</span>
              </div>
            </div>
          </div>`;
      }

      function renderShell(content) {
        return `
          <div class="app-shell"><div class="workspace">
            ${renderTopbar()}
            ${content}
            <div class="footer-bar">
              <div class="footer-links"><span>ÐšÐ¾Ð½Ñ‚Ð°ÐºÑ‚Ð¸</span><span>ÐžÐ¿ÐµÑ€Ð°Ñ†Ð¸Ð¸</span><span>ÐŸÐ¾Ð»Ð¸Ñ‚Ð¸ÐºÐ¸</span><span>ÐŸÐ¾Ð´Ð´Ñ€ÑŠÐ¶ÐºÐ°</span></div>
              <div class="footer-icons"><span>LOGS</span><span>REPORTS</span><span>SYNC</span><span>ARCHIVE</span></div>
            </div>
          </div></div>`;
      }

      function renderRangeOptions(selected, id) {
        return RANGE_OPTIONS.map(([v, l]) => `<option value="${v}" ${selected === v ? "selected" : ""}>${l}</option>`).join("");
      }

      function renderExportControls() {
        return `
          <div class="toolbar toolbar-controls">
            <div style="display:flex;gap:10px;align-items:center;flex-wrap:wrap;">
              <span class="muted">\u0050\u0044\u0046 \u043e\u0442\u0447\u0435\u0442:</span>
              <select id="export-range-select" style="min-width:180px;">${renderRangeOptions(state.exportRange)}</select>
              <span class="meta-chip">${rangeLabel(state.exportRange)}</span>
            </div>
            <div style="display:flex;gap:8px;flex-wrap:wrap;">
              <button class="btn btn-outline" data-action="export-pdf">PDF</button>
            </div>
          </div>`;
      }
      function renderHome() {
        const today = state.records.filter((r) => new Date(r.timestamp).toDateString() === new Date().toDateString());
        const issuesLastWeek = recordsForRange("week").reduce((s, r) => s + dirtyItems(r).length, 0);
        const pendingSync = state.records.filter((r) => !state.syncHistory[r.id] || state.syncHistory[r.id] === "error").length;
        const recentIssues = latestIssues(6);
        const latestRecord = state.records[0];

        return `<div class="page">
          <div class="panel panel-soft" style="margin-bottom:18px;">
            <div class="hero-grid">
              <div class="hero-copy">
                <div>
                  <div class="hero-kicker">Operations Dashboard</div>
                  <h1 class="hero-title">ÐšÐ¾Ð½Ñ‚Ñ€Ð¾Ð» Ð½Ð° Ð¥Ð¸Ð³Ð¸ÐµÐ½Ð°Ñ‚Ð°</h1>
                  <div class="muted" style="max-width:60ch;">Ð’ÑŠÑ‚Ñ€ÐµÑˆÐµÐ½ ÑÐ¾Ñ„Ñ‚ÑƒÐµÑ€ Ð·Ð° Ð¿Ñ€Ð¾Ð²ÐµÑ€ÐºÐ° Ð½Ð° ÐºÐ¸Ð½Ð¾Ð·Ð°Ð»Ð¸ Ð¸ ÑÐ°Ð½Ð¸Ñ‚Ð°Ñ€Ð½Ð¸ Ð²ÑŠÐ·Ð»Ð¸. Ð—Ð°Ð¿Ð¸Ñ, Ð¸ÑÑ‚Ð¾Ñ€Ð¸Ñ, ÑÑ‚Ð°Ñ‚Ð¸ÑÑ‚Ð¸ÐºÐ° Ð¸ ÑÐ¸Ð½Ñ…Ñ€Ð¾Ð½Ð¸Ð·Ð°Ñ†Ð¸Ñ Ð±ÐµÐ· Ð¿Ñ€Ð¾Ð¼ÑÐ½Ð° Ð½Ð° Ð¾ÑÐ½Ð¾Ð²Ð½Ð¸Ñ Ñ€Ð°Ð±Ð¾Ñ‚ÐµÐ½ Ð¿Ð¾Ñ‚Ð¾Ðº.</div>
                </div>
                <div class="hero-metrics">
                  <div class="metric"><div class="metric-label">Ð›Ð¾ÐºÐ°Ñ†Ð¸Ð¸</div><div class="metric-value">${HALLS.length + BATHROOMS.length}</div></div>
                  <div class="metric"><div class="metric-label">ÐŸÑ€Ð¾Ð±Ð»ÐµÐ¼Ð¸ 7Ð´</div><div class="metric-value">${issuesLastWeek}</div></div>
                  <div class="metric"><div class="metric-label">Sync Queue</div><div class="metric-value">${pendingSync}</div></div>
                </div>
              </div>
              <div class="hero-orbit"><div class="hero-core">CG</div></div>
            </div>
          </div>


          ${state.records.length ? `<div class="grid cards-4" style="margin-bottom:24px;">${[
            ["ÐžÐ±Ñ‰Ð¾ Ð¿Ñ€Ð¾Ð²ÐµÑ€ÐºÐ¸", state.records.length, "var(--gold)"],
            ["ÐŸÑ€Ð¾Ð²ÐµÑ€ÐºÐ¸ Ð´Ð½ÐµÑ", today.length, "var(--text)"],
            ["ÐŸÑ€Ð¾Ð±Ð»ÐµÐ¼Ð° Ð´Ð½ÐµÑ", today.reduce((s, r) => s + dirtyItems(r).length, 0), "var(--red)"],
            ["ÐÐµÑÐ¸Ð½Ñ…Ñ€Ð¾Ð½Ð¸Ð·Ð¸Ñ€Ð°Ð½Ð¸", pendingSync, pendingSync ? "#f59e0b" : "var(--blue)"],
          ].map(([l, v, c]) => `<div class="panel stat"><div class="muted">${l}</div><strong style="color:${c};">${v}</strong></div>`).join("")}</div>` : ""}

          <div class="grid cards-2" style="margin-bottom:24px;">
            <div class="panel">
              <div class="toolbar"><h3 class="section-title" style="margin:0;">ÐÐ¾Ð²Ð° ÐŸÑ€Ð¾Ð²ÐµÑ€ÐºÐ°</h3><span class="meta-chip">Quick Start</span></div>
              <div class="muted" style="margin-bottom:16px;">Ð˜Ð·Ð±ÐµÑ€Ð¸ Ñ‚Ð¸Ð¿Ð° Ð½Ð° Ð¿Ñ€Ð¾Ð²ÐµÑ€ÐºÐ°Ñ‚Ð° Ð¸ Ð·Ð°Ð¿Ð¾Ñ‡Ð½Ð¸ Ð²ÑŠÐ²ÐµÐ¶Ð´Ð°Ð½ÐµÑ‚Ð¾.</div>
              <div class="grid cards-2 cg-action-grid">${Object.entries(CONFIGS).map(([key, cfg]) => `
                <div class="panel card-pick" data-action="start-inspection" data-type="${key}">
                  <div class="card-head" style="background:linear-gradient(160deg, rgba(255,255,255,.03), rgba(0,0,0,.1)), radial-gradient(circle at top right, ${key === "hall" ? "rgba(201,162,39,.22)" : "rgba(96,165,250,.20)"}, transparent 40%);">
                    <span class="card-text-icon">${key === "hall" ? "ÐšÐ˜ÐÐž Ð—ÐÐ›Ð" : "WC"}</span>
                    <div style="font-size:28px;font-weight:700;position:relative;z-index:1;">${cfg.shortTitle}</div>
                    <div class="muted" style="position:relative;z-index:1;">${key === "hall" ? "Ð—Ð°Ð»Ð¸ 1â€“6" : "Ð¢Ð¾Ð°Ð»ÐµÑ‚Ð½Ð¸"}</div>
                  </div>
                  <div class="card-body">
                    <div class="tag-list">${cfg.tags.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
                    <div class="btn btn-gold" style="text-align:center;">Ð—Ð°Ð¿Ð¾Ñ‡Ð½Ð¸ Ð¿Ñ€Ð¾Ð²ÐµÑ€ÐºÐ°</div>
                  </div>
                </div>`).join("")}</div>
            </div>

            <div class="panel">
              <div class="toolbar"><h3 class="section-title" style="margin:0;">ÐžÐ¿ÐµÑ€Ð°Ñ‚Ð¸Ð²ÐµÐ½ Ð¤Ð¾ÐºÑƒÑ</h3><span class="meta-chip">Live</span></div>
              ${latestRecord ? `
                <div style="margin-bottom:14px;padding:14px;border-radius:16px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);">
                  <div class="muted" style="font-size:12px;text-transform:uppercase;letter-spacing:.12em;">ÐŸÐ¾ÑÐ»ÐµÐ´Ð½Ð° Ð¿Ñ€Ð¾Ð²ÐµÑ€ÐºÐ°</div>
                  <div style="margin-top:8px;font-weight:700;display:flex;align-items:center;gap:8px;">
                    <span style="font-size:20px;">${latestRecord.type === "hall" ? "ðŸŽ¬" : "ðŸš¿"}</span>
                    ${latestRecord.location}
                  </div>
                  <div class="muted" style="margin-top:4px;">${fmt(latestRecord.timestamp)} Â· ${latestRecord.inspector}</div>
                </div>` : `<div class="muted">Ð’ÑÐµ Ð¾Ñ‰Ðµ Ð½ÑÐ¼Ð° Ð·Ð°Ð¿Ð¸ÑÐ°Ð½Ð¸ Ð¿Ñ€Ð¾Ð²ÐµÑ€ÐºÐ¸.</div>`}
              <div class="muted" style="font-size:12px;text-transform:uppercase;letter-spacing:.12em;margin-bottom:10px;">ÐŸÐ¾ÑÐ»ÐµÐ´Ð½Ð¸ Ð¿Ñ€Ð¾Ð±Ð»ÐµÐ¼Ð¸</div>
              <div class="bars">${recentIssues.length ? recentIssues.map((iss) => `
                <div style="padding:12px 14px;border-radius:16px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);">
                  <div style="display:flex;justify-content:space-between;gap:12px;align-items:center;">
                    <strong>${iss.icon} ${iss.label}</strong><span class="pill bad">Issue</span>
                  </div>
                  <div class="muted" style="margin-top:6px;">${iss.location} Â· ${iss.inspector}</div>
                </div>`).join("") : `<div class="muted">ÐÑÐ¼Ð° Ð°ÐºÑ‚Ð¸Ð²Ð½Ð¸ Ð¿Ñ€Ð¾Ð±Ð»ÐµÐ¼Ð¸ Ð² Ð¿Ð¾ÑÐ»ÐµÐ´Ð½Ð¸Ñ‚Ðµ Ð·Ð°Ð¿Ð¸ÑÐ¸.</div>`}</div>
            </div>
          </div>

          ${state.records.length ? renderRecentTable(state.records.slice(0, 7), true) : ""}
        </div>`;
      }

      function renderRecentTable(records, compact) {
        return `<div class="panel">
          <div class="toolbar">
            <h3 class="section-title" style="margin:0;">${compact ? "\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438" : "\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u043d\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438"}</h3>
            ${compact ? `<div style="display:flex;gap:8px;flex-wrap:wrap;"><button class="btn btn-outline" data-action="go-history">\u0412\u0438\u0436 \u0438\u0441\u0442\u043e\u0440\u0438\u044f</button></div>` : ""}
          </div>
          <div class="table-wrap"><table>
            <thead><tr><th>\u0414\u0430\u0442\u0430/\u0427\u0430\u0441</th><th>\u041b\u043e\u043a\u0430\u0446\u0438\u044f</th><th>\u041f\u0440\u043e\u0432\u0435\u0440\u044f\u0432\u0430\u0449</th><th>\u0421\u0442\u0430\u0442\u0443\u0441</th><th>\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0438</th><th>Sheets</th></tr></thead>
            <tbody>${records.map((r) => {
              const issues = dirtyItems(r);
              const sync = state.syncHistory[r.id];
              return `<tr>
                <td>${fmt(r.timestamp)}</td>
                <td style="display:flex;align-items:center;gap:6px;">
                  <span style="font-size:14px;">${r.type === "hall" ? "ðŸŽ¬" : "ðŸš¿"}</span>
                  ${r.location}
                </td>
                <td class="muted">${r.inspector}</td>
                <td><span class="pill ${issues.length ? "bad" : "ok"}">${issues.length ? `âœ— ${issues.length} \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430` : "âœ“ \u0427\u0438\u0441\u0442\u043e"}</span></td>
                <td class="muted">${issues.length ? issues.map((i) => i.label).join(", ") : "â€”"}</td>
                <td><div style="display:flex;gap:8px;align-items:center;">
                  <span>${sync === "synced" ? "âœ“" : sync === "sent" ? "â†‘" : sync === "syncing" ? "âŸ³" : sync === "error" ? "âœ—" : "â€”"}</span>
                  ${(sync === "error" || (!sync && isSheetsConfigured())) ? `<button class="btn btn-outline" data-action="retry-sync" data-id="${r.id}" style="padding:4px 8px;">retry</button>` : ""}
                </div></td>
              </tr>`;
            }).join("")}</tbody>
          </table></div>
        </div>`;
      }
      function renderHistory() {
        const records = historyRecords();
        const locations = [...new Set(state.records.map((r) => r.location))];
        return `<div class="page">
          <div class="panel" style="margin-bottom:16px;">
            <div class="toolbar"><h3 class="section-title" style="margin:0;">\u0418\u0441\u0442\u043e\u0440\u0438\u044f \u0438 PDF \u043e\u0442\u0447\u0435\u0442</h3><span class="meta-chip">${records.length} \u0437\u0430\u043f\u0438\u0441\u0430</span></div>
            <div class="grid cards-2" style="grid-template-columns: 1.2fr 1.2fr; margin-bottom:16px;">
              <div class="field" style="margin:0;"><label>\u0422\u0438\u043f</label><select id="history-type-filter"><option value="all">\u0412\u0441\u0438\u0447\u043a\u0438</option><option value="hall" ${state.historyTypeFilter === "hall" ? "selected" : ""}>\u041a\u0438\u043d\u043e\u0437\u0430\u043b\u0430</option><option value="bathroom" ${state.historyTypeFilter === "bathroom" ? "selected" : ""}>\u0421\u0430\u043d\u0438\u0442\u0430\u0440\u0435\u043d \u0432\u044a\u0437\u0435\u043b</option></select></div>
              <div class="field" style="margin:0;"><label>\u041b\u043e\u043a\u0430\u0446\u0438\u044f</label><select id="history-location-filter"><option value="all">\u0412\u0441\u0438\u0447\u043a\u0438</option>${locations.map((l) => `<option value="${l}" ${state.historyLocationFilter === l ? "selected" : ""}>${l}</option>`).join("")}</select></div>
            </div>
            ${renderExportControls()}
          </div>
          ${records.length ? renderRecentTable(records, false) : `<div class="panel" style="text-align:center;color:var(--muted);padding:60px 20px;">\u041d\u044f\u043c\u0430 \u0437\u0430\u043f\u0438\u0441\u0438 \u043f\u043e \u0442\u0435\u043a\u0443\u0449\u0438\u0442\u0435 \u0444\u0438\u043b\u0442\u0440\u0438.</div>`}
        </div>`;
      }
      function barColor(p) { return p > 60 ? "var(--red)" : p > 30 ? "#f59e0b" : "var(--green)"; }

      function renderBars(entries) {
        return `<div class="bars">${entries.map(([label, data]) => {
          const p = pct(data.issues, data.total);
          return `<div>
            <div class="bar-label"><span>${label}</span><span style="color:${barColor(p)};">${data.issues}/${data.total} - ${p}%</span></div>
            <div class="bar-track"><div class="bar-fill" style="width:${p}%;background:${barColor(p)};"></div></div>
          </div>`;
        }).join("")}</div>`;
      }

      function renderStats() {
        const records = filteredRecords();
        if (!records.length) return `<div class="page"><div class="panel" style="text-align:center;color:var(--muted);padding:60px 20px;">\u041d\u044f\u043c\u0430 \u0434\u0430\u043d\u043d\u0438 \u0437\u0430 \u0438\u0437\u0431\u0440\u0430\u043d\u0438\u044f \u043f\u0435\u0440\u0438\u043e\u0434.</div></div>`;
        const stats = computeStats(records);
        const totalDirty = records.reduce((s, r) => s + dirtyItems(r).length, 0);
        const totalClean = records.reduce((s, r) => s + r.items.filter((i) => i.status === STATUS.CLEAN).length, 0);
        const overall = pct(totalDirty, totalClean + totalDirty);
        const topIssue = Object.entries(stats.byItem).sort((a, b) => pct(b[1].issues, b[1].total) - pct(a[1].issues, a[1].total))[0];
        const topLocation = Object.entries(stats.byLocation).sort((a, b) => pct(b[1].issues, b[1].total) - pct(a[1].issues, a[1].total))[0];
        const trafficText = overall === 0 ? "\u0417\u0415\u041b\u0415\u041d\u041e - \u041e\u0442\u043b\u0438\u0447\u043d\u043e" : overall <= 20 ? "\u0416\u042a\u041b\u0422\u041e - \u0414\u043e\u0431\u0440\u043e" : overall <= 50 ? "\u041e\u0420\u0410\u041d\u0416\u0415\u0412\u041e - \u041d\u0443\u0436\u043d\u043e \u0432\u043d\u0438\u043c\u0430\u043d\u0438\u0435" : "\u0427\u0415\u0420\u0412\u0415\u041d\u041e - \u041a\u0440\u0438\u0442\u0438\u0447\u043d\u043e";

        return `<div class="page">
          <div class="panel" style="margin-bottom:16px;">
            <div class="toolbar"><h3 class="section-title" style="margin:0;">\u041e\u0431\u0449\u0430 \u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 \u043d\u0430 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438\u0442\u0435</h3><span class="meta-chip">${rangeLabel(state.statsRange)}</span></div>
            <div class="muted" style="margin-bottom:14px;">\u0422\u0443\u043a \u0441\u0435 \u043e\u0431\u043e\u0431\u0449\u0430\u0432\u0430\u0442 \u0432\u0441\u0438\u0447\u043a\u0438 \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u0438 \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 \u0437\u0430 \u0438\u0437\u0431\u0440\u0430\u043d\u0438\u044f \u043f\u0435\u0440\u0438\u043e\u0434.</div>
            <div class="toolbar toolbar-controls">
              <div class="tabs">${RANGE_OPTIONS.map(([v, l]) => `<button class="tab ${state.statsRange === v ? "active" : ""}" data-action="set-range" data-value="${v}">${l}</button>`).join("")}</div>
              <div style="display:flex;gap:8px;flex-wrap:wrap;">
                <select id="export-range-select" style="min-width:180px;">${renderRangeOptions(state.exportRange)}</select>
                <button class="btn btn-outline" data-action="export-pdf">PDF</button>
              </div>
            </div>
          </div>

          <div class="grid cards-4" style="margin-bottom:16px;">${[
            ["\u041f\u0440\u043e\u0432\u0435\u0440\u043a\u0438", records.length, "var(--gold)"],
            ["\u041f\u0440\u043e\u0431\u043b\u0435\u043c\u0438", totalDirty, "var(--red)"],
            ["\u0427\u0438\u0441\u0442\u0438", totalClean, "var(--green)"],
            ["% \u041f\u0440\u043e\u0431\u043b\u0435\u043c", overall + "%", "var(--text)"],
          ].map(([l, v, c]) => `<div class="panel stat"><div class="muted">${l}</div><strong style="color:${c};">${v}</strong></div>`).join("")}</div>

          <div class="panel" style="margin-bottom:16px;border-left:4px solid ${barColor(overall)};"><strong>${trafficText}</strong><div class="muted" style="margin-top:6px;">\u041e\u0431\u0449\u0430 \u043e\u0446\u0435\u043d\u043a\u0430 \u0437\u0430 \u043f\u0435\u0440\u0438\u043e\u0434\u0430</div></div>

          <div class="grid cards-2 cg-chart-grid" style="margin-bottom:16px;">
            ${topIssue ? `<div class="panel"><div class="muted" style="font-size:12px;text-transform:uppercase;letter-spacing:.12em;">\u041d\u0430\u0439-\u0447\u0435\u0441\u0442 \u043f\u0440\u043e\u0431\u043b\u0435\u043c</div><h3 class="section-title" style="color:var(--red);">${topIssue[0]}</h3><div class="muted">${topIssue[1].issues}/${topIssue[1].total} \u043f\u0440\u043e\u0432\u0435\u0440\u043a\u0438 - ${pct(topIssue[1].issues, topIssue[1].total)}%</div></div>` : ""}
            ${topLocation ? `<div class="panel"><div class="muted" style="font-size:12px;text-transform:uppercase;letter-spacing:.12em;">\u041d\u0430\u0439-\u043f\u0440\u043e\u0431\u043b\u0435\u043c\u043d\u0430 \u043b\u043e\u043a\u0430\u0446\u0438\u044f</div><h3 class="section-title" style="color:#fbbf24;">${topLocation[0]}</h3><div class="muted">${topLocation[1].issues} \u043f\u0440\u043e\u0431\u043b\u0435\u043c\u0430</div></div>` : ""}
          </div>

          <div class="grid cards-2 cg-chart-grid">
            <div class="panel"><h3 class="section-title">\u041f\u043e \u043b\u043e\u043a\u0430\u0446\u0438\u044f</h3>${renderBars(Object.entries(stats.byLocation))}</div>
            <div class="panel"><h3 class="section-title">\u041f\u043e \u0435\u043b\u0435\u043c\u0435\u043d\u0442</h3>${renderBars(Object.entries(stats.byItem))}</div>
          </div>
        </div>`;
      }
      function renderInspection() {
        const config = getConfig(state.inspectionType);
        const filledCount = config.items.filter((i) => isFilled(state.itemState[i.id])).length;
        const allFilled = filledCount === config.items.length;
        const progress = Math.round((filledCount / config.items.length) * 100);
        const dirtyCount = Object.values(state.itemState).filter((v) => v === STATUS.DIRTY).length;

        return `<div class="page">
          <div class="progress" style="margin:-24px -24px 24px;"><div style="width:${progress}%;"></div></div>
          <div class="toolbar">
            <div>
              <h1 class="hero-title" style="display:flex;align-items:center;gap:12px;">
                <span style="font-size:32px;">${state.inspectionType === "hall" ? "ðŸŽ¬" : "ðŸš¿"}</span>
                ${config.title}
              </h1>
              <div class="muted">${isSheetsConfigured() ? "Ð”Ð°Ð½Ð½Ð¸Ñ‚Ðµ Ñ‰Ðµ ÑÐµ Ð¸Ð·Ð¿Ñ€Ð°Ñ‚ÑÑ‚ Ð°Ð²Ñ‚Ð¾Ð¼Ð°Ñ‚Ð¸Ñ‡Ð½Ð¾ ÐºÑŠÐ¼ Google Sheets ÑÐ»ÐµÐ´ Ð·Ð°Ð¿Ð¸Ñ." : "Ð›Ð¾ÐºÐ°Ð»ÐµÐ½ Ð·Ð°Ð¿Ð¸Ñ Ð² Ð±Ñ€Ð°ÑƒÐ·ÑŠÑ€Ð°."}</div>
            </div>
            <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
              <span class="muted"><strong style="color:var(--green);">${filledCount}</strong>/${config.items.length} Ð¿Ð¾Ð¿ÑŠÐ»Ð½ÐµÐ½Ð¸</span>
              ${dirtyCount ? `<span class="pill bad">âš  ${dirtyCount} Ð¿Ñ€Ð¾Ð±Ð»ÐµÐ¼Ð°</span>` : ""}
            </div>
          </div>

          <div class="panel" style="margin-bottom:16px;">
            <div class="grid cards-2">
              <div class="field"><label>Ð›Ð¾ÐºÐ°Ñ†Ð¸Ñ *</label><select id="location-select">${config.locations.map((l) => `<option value="${l}" ${l === state.location ? "selected" : ""}>${l}</option>`).join("")}</select></div>
              <div class="field"><label>ÐŸÑ€Ð¾Ð²ÐµÑ€ÑÐ²Ð°Ñ‰ *</label><input id="inspector-input" value="${escapeHtml(state.inspector)}" placeholder="ÐŸÑŠÐ»Ð½Ð¾ Ð¸Ð¼Ðµâ€¦" />${state.showValidation && !state.inspector.trim() ? `<div style="color:var(--red);font-size:12px;">Ð—Ð°Ð´ÑŠÐ»Ð¶Ð¸Ñ‚ÐµÐ»Ð½Ð¾ Ð¿Ð¾Ð»Ðµ</div>` : ""}</div>
            </div>
            <div class="muted" style="font-size:13px;">Ð”Ð°Ñ‚Ð° Ð¸ Ñ‡Ð°Ñ: ${fmt(new Date().toISOString())}</div>
          </div>

          <div class="panel" style="margin-bottom:16px;">
            <div class="toolbar">
              <h3 class="section-title" style="margin:0;">${config.sectionTitle}</h3>
              <div style="display:flex;gap:8px;flex-wrap:wrap;">
                <button class="btn btn-green" data-action="fill-all" data-value="clean">Ð’ÑÐ¸Ñ‡ÐºÐ¾ Ñ‡Ð¸ÑÑ‚Ð¾</button>
                <button class="btn btn-red" data-action="fill-all" data-value="dirty">Ð’ÑÐ¸Ñ‡ÐºÐ¾ Ð½ÐµÑ‡Ð¸ÑÑ‚Ð¾</button>
              </div>
            </div>
            <div class="items" id="items-container">
              ${config.items.map((item) => renderItemRow(item)).join("")}
            </div>
            ${state.showValidation && !allFilled ? `<div style="margin-top:12px;padding:12px 14px;border:1px solid rgba(239,68,68,.35);border-radius:12px;background:rgba(239,68,68,.12);color:#fca5a5;">ÐœÐ°Ñ€ÐºÐ¸Ñ€Ð°Ð¹ Ð²ÑÑÐºÐ° Ñ‚Ð¾Ñ‡ÐºÐ° ÐºÐ°Ñ‚Ð¾ Ð§Ð¸ÑÑ‚Ð¾ Ð¸Ð»Ð¸ ÐÐµÑ‡Ð¸ÑÑ‚Ð¾ Ð¿Ñ€ÐµÐ´Ð¸ Ð´Ð° Ð·Ð°Ð¿Ð¸ÑˆÐµÑˆ.</div>` : ""}
          </div>

          <div class="panel" style="margin-bottom:16px;">
            <div class="field" style="margin:0;"><label>Ð‘ÐµÐ»ÐµÐ¶ÐºÐ¸</label><textarea id="notes-input" rows="4" placeholder="Ð”Ð¾Ð¿ÑŠÐ»Ð½Ð¸Ñ‚ÐµÐ»Ð½Ð¸ ÐºÐ¾Ð¼ÐµÐ½Ñ‚Ð°Ñ€Ð¸â€¦">${escapeHtml(state.notes)}</textarea></div>
          </div>

          <button class="btn btn-gold" data-action="submit-inspection" style="width:100%;padding:16px;font-size:16px;">
            ${allFilled && state.inspector.trim() ? `Ð—Ð°Ð¿Ð°Ð·Ð¸${isSheetsConfigured() ? " Ð¸ Ð¸Ð·Ð¿Ñ€Ð°Ñ‚Ð¸" : ""}` : `ÐŸÐ¾Ð¿ÑŠÐ»Ð½Ð¸ Ð²ÑÐ¸Ñ‡ÐºÐ¸ Ð¿Ð¾Ð»ÐµÑ‚Ð° (${filledCount}/${config.items.length})`}
          </button>
        </div>`;
      }

      function renderItemRow(item) {
        const value = state.itemState[item.id];
        const cls = value === STATUS.CLEAN ? "clean" : value === STATUS.DIRTY ? "dirty" : state.showValidation ? "missing" : "";
        return `
          <div class="item-row ${cls}" data-item-id="${item.id}">
            <div>
              <div class="item-title">${item.icon} ${item.label}</div>
              <div class="muted">${item.desc}</div>
              ${state.showValidation && !value ? `<div style="color:#f59e0b;font-size:12px;margin-top:4px;">Ð—Ð°Ð´ÑŠÐ»Ð¶Ð¸Ñ‚ÐµÐ»Ð½Ð¾ Ð¿Ð¾Ð»Ðµ</div>` : ""}
            </div>
            <div class="status-buttons">
              <button class="status-btn ${value === STATUS.CLEAN ? "active clean" : ""}" data-action="set-item" data-id="${item.id}" data-value="clean">âœ“ Ð§Ð¸ÑÑ‚Ð¾</button>
              <button class="status-btn ${value === STATUS.DIRTY ? "active dirty" : ""}" data-action="set-item" data-id="${item.id}" data-value="dirty">âœ— ÐÐµÑ‡Ð¸ÑÑ‚Ð¾</button>
            </div>
          </div>`;
      }

      /* â”€â”€ Targeted DOM update for item status (avoids full re-render) â”€â”€ */
      function updateItemRow(itemId) {
        const config = getConfig(state.inspectionType);
        const item = config.items.find((i) => i.id === itemId);
        if (!item) return;
        const row = document.querySelector(`.item-row[data-item-id="${itemId}"]`);
        if (!row) return;
        row.outerHTML = renderItemRow(item);

        /* Update progress bar & counters */
        const filledCount = config.items.filter((i) => isFilled(state.itemState[i.id])).length;
        const progress = Math.round((filledCount / config.items.length) * 100);
        const progressBar = document.querySelector(".progress > div");
        if (progressBar) progressBar.style.width = progress + "%";
      }

      function renderModals() {
        let html = "";
        if (state.showDeleteModal) {
          html += `<div class="modal-backdrop" data-action="close-delete">
            <div class="modal" onclick="event.stopPropagation()">
              <h2 class="section-title" style="color:var(--red);">Ð˜Ð·Ñ‚Ñ€Ð¸Ð²Ð°Ð½Ðµ Ð½Ð° Ð”Ð°Ð½Ð½Ð¸</h2>
              <p class="muted">Ð©Ðµ Ð±ÑŠÐ´Ð°Ñ‚ Ð¸Ð·Ñ‚Ñ€Ð¸Ñ‚Ð¸ <strong style="color:var(--text);">${state.records.length} Ð·Ð°Ð¿Ð¸ÑÐ°</strong> Ð¾Ñ‚ Ð»Ð¾ÐºÐ°Ð»Ð½Ð¾Ñ‚Ð¾ Ñ…Ñ€Ð°Ð½Ð¸Ð»Ð¸Ñ‰Ðµ.</p>
              <div class="field"><label>ÐÐ´Ð¼Ð¸Ð½Ð¸ÑÑ‚Ñ€Ð°Ñ‚Ð¾Ñ€ÑÐºÐ° Ð¿Ð°Ñ€Ð¾Ð»Ð°</label><input id="delete-pass-input" type="${state.showPassword ? "text" : "password"}" value="${escapeHtml(state.deletePass)}" placeholder="Ð’ÑŠÐ²ÐµÐ´Ð¸ Ð¿Ð°Ñ€Ð¾Ð»Ð°..." /></div>
              ${state.deleteErr ? `<div style="color:var(--red);margin-bottom:12px;">${state.deleteErr}</div>` : ""}
              <div style="display:flex;gap:8px;flex-wrap:wrap;">
                <button class="btn btn-outline" data-action="toggle-pass">${state.showPassword ? "Ð¡ÐºÑ€Ð¸Ð¹" : "ÐŸÐ¾ÐºÐ°Ð¶Ð¸"}</button>
                <button class="btn btn-red" data-action="confirm-delete">Ð˜Ð·Ñ‚Ñ€Ð¸Ð¹</button>
                <button class="btn btn-outline" data-action="close-delete">ÐžÑ‚ÐºÐ°Ð·</button>
              </div>
            </div>
          </div>`;
        }
        if (state.toast) html += `<div class="toast ${state.toast.type}">${state.toast.msg}</div>`;
        return html;
      }

      function render() {
        const content =
          state.screen === "home" ? renderHome() :
          state.screen === "inspection" ? renderInspection() :
          state.screen === "history" ? renderHistory() :
          renderStats();
        app.innerHTML = renderShell(content) + renderModals();
        bindInputs();
      }

      function bindInputs() {
        const el = (id) => document.getElementById(id);
        const bind = (id, event, fn) => { const e = el(id); if (e) e["on" + event] = fn; };
        bind("location-select", "change", (e) => { state.location = e.target.value; });
        bind("inspector-input", "input", (e) => { state.inspector = e.target.value; });
        bind("notes-input", "input", (e) => { state.notes = e.target.value; });
        bind("delete-pass-input", "input", (e) => { state.deletePass = e.target.value; state.deleteErr = ""; });
        bind("export-range-select", "change", (e) => { state.exportRange = e.target.value; render(); });
        bind("history-type-filter", "change", (e) => { state.historyTypeFilter = e.target.value; render(); });
        bind("history-location-filter", "change", (e) => { state.historyLocationFilter = e.target.value; render(); });
}

      /* â”€â”€ Event Delegation â”€â”€ */
      document.addEventListener("click", async (e) => {
        const btn = e.target.closest("[data-action]");
        if (!btn) return;
        const action = btn.dataset.action;

        /* Navigation */
        if (action === "go-home") { state.screen = "home"; render(); return; }
        if (action === "go-history") { state.screen = "history"; render(); return; }
        if (action === "go-stats") { state.screen = "stats"; render(); return; }

        /* Inspection item status â€” targeted update, no full re-render */
        if (action === "set-item") {
          state.itemState[btn.dataset.id] = btn.dataset.value;
          updateItemRow(btn.dataset.id);
          return;
        }

        /* Fill all items */
        if (action === "fill-all") {
          getConfig(state.inspectionType).items.forEach((i) => { state.itemState[i.id] = btn.dataset.value; });
          render(); return;
        }

        if (action === "submit-inspection") { await submitInspection(); return; }
        if (action === "start-inspection") { startInspection(btn.dataset.type); return; }

        /* Sync */
        if (action === "retry-sync") {
          const rec = state.records.find((r) => String(r.id) === btn.dataset.id);
          if (rec) await syncRecord(rec);
          return;
        }

        /* Stats range */
        if (action === "set-range") { state.statsRange = btn.dataset.value; render(); return; }

        /* Delete modal */
        if (action === "close-delete") { state.showDeleteModal = false; state.deleteErr = ""; state.deletePass = ""; render(); return; }
        if (action === "toggle-pass") { state.showPassword = !state.showPassword; render(); return; }
        if (action === "confirm-delete") {
          if (state.deletePass !== DELETE_PASSWORD) { state.deleteErr = "Ð“Ñ€ÐµÑˆÐ½Ð° Ð¿Ð°Ñ€Ð¾Ð»Ð°. ÐžÐ¿Ð¸Ñ‚Ð°Ð¹ Ð¾Ñ‚Ð½Ð¾Ð²Ð¾."; render(); return; }
          state.records = []; state.syncHistory = {};
          localStorage.removeItem(STORAGE_KEYS.records);
          localStorage.removeItem(STORAGE_KEYS.sync);
          Object.assign(state, { showDeleteModal: false, deletePass: "", deleteErr: "", screen: "home" });
          showToast("Ð’ÑÐ¸Ñ‡ÐºÐ¸ Ð»Ð¾ÐºÐ°Ð»Ð½Ð¸ Ð·Ð°Ð¿Ð¸ÑÐ¸ ÑÐ° Ð¸Ð·Ñ‚Ñ€Ð¸Ñ‚Ð¸.");
          return;
        }

        /* Export */
        if (action === "export-pdf") { exportPdf(); return; }
      });

      /* â”€â”€ Initial Render â”€â”€ */
      cleanupOldRecords(); /* Ð˜Ð·Ñ‡Ð¸ÑÑ‚Ð²Ð°Ð½Ðµ Ð½Ð° Ð·Ð°Ð¿Ð¸ÑÐ¸ >7 Ð´Ð½Ð¸ Ð¿Ñ€Ð¸ Ð·Ð°Ñ€ÐµÐ¶Ð´Ð°Ð½Ðµ */
      render();
    
